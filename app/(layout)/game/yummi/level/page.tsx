"use client";

import { ProTable } from "@ant-design/pro-components";
import { Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { request } from "@/utils";
import { LEVEL_API } from "@/consts";
import { tableColumns } from "./tableColumns";
import useModal from "./useModalStore";
import FormDrawer from "./FormDrawer";
import { useRef, useState } from "react";

export default function Level() {
  const useLevel = useModal();
  const ref = useRef();
  const [columnsState, setColumnsState] = useState<any>({
    // level: {
    //   show: false,
    // },
  });

  const getList = async (params) => {
    // console.log("params", { params });
    const { list, total } = await request(LEVEL_API, {
      ...params,
    });
    return {
      data: list,
      success: true,
      total,
    };
  };

  // 删除
  const handleDelete = async (row: any, action) => {
    await request(`${LEVEL_API}/${row._id}`, undefined, "delete");
    // 删除成功
    message.success("删除成功");
    action?.reload();
  };

  //修改
  const handleEditModal = async (row: any) => {
    useLevel.setFormData(row);
    useLevel.onOpen();
  };

  const handleChangeColumnsState = async (state) => {
    // 保存排序
    // 保存显隐
    console.log("state", state);
    setColumnsState(state);
  };

  const columns = tableColumns({ handleEditModal, handleDelete });

  return (
    <>
      <ProTable
        actionRef={ref}
        headerTitle="关卡列表"
        cardBordered
        rowKey="_id"
        columns={columns}
        request={getList}
        columnsState={{
          value: columnsState,
          onChange: handleChangeColumnsState,
        }}
        toolBarRender={() => [
          <Button
            onClick={useLevel.onOpen}
            key="button"
            type="primary"
            icon={<PlusOutlined />}
          >
            新建关卡
          </Button>,
        ]}
        scroll={{ x: "max-content" }}
      />
      <FormDrawer actionRef={ref} />
    </>
  );
}
