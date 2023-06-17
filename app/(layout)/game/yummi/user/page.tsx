"use client";

import { useRef, useState } from "react";
import { ProTable } from "@ant-design/pro-components";
import { request } from "@/utils";
import { USER_CENTER_WXUSER_API } from "@/consts";
import { tableColumns } from "./tableColumns";

export default function Level() {
  const ref = useRef();
  const [columnsState, setColumnsState] = useState<any>({});

  const getList = async (params) => {
    const { list, total } = await request(USER_CENTER_WXUSER_API, {
      game: "yummi",
      ...params,
    });
    return {
      data: list,
      success: true,
      total,
    };
  };

  const handleChangeColumnsState = async (state) => {
    // 保存排序
    // 保存显隐
    console.log("state", state);
    setColumnsState(state);
  };

  const columns = tableColumns();

  return (
    <>
      <ProTable
        actionRef={ref}
        headerTitle="用户列表"
        cardBordered
        rowKey="_id"
        columns={columns}
        request={getList}
        columnsState={{
          value: columnsState,
          onChange: handleChangeColumnsState,
        }}
        scroll={{ x: "max-content" }}
      />
    </>
  );
}
