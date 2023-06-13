"use client";

import {
  ProTable,
  DrawerForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProColumns,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { request } from "@/utils";
import { LEVEL_API } from "@/consts";
import { tableColumns } from "./tableColumns";
import useLevelModal from "./useLevelModal";
import FormDrawer from "./FormDrawer";
import { useRef, useState } from "react";

export default function Level() {
  const useLevel = useLevelModal();
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
        headerTitle="管理员列表"
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
            新建管理员
          </Button>,
        ]}
        scroll={{ x: "max-content" }}
      />
      <FormDrawer actionRef={ref} />
    </>
  );
}
