"use client";

import {
  ProTable,
  DrawerForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { request } from "@/utils";
import { LEVEL_API } from "@/consts";
import { tableColumns } from "./tableColumns";
import useLevelModal from "./useLevelModal";
import FormDrawer from "./FormDrawer";
import { useRef } from "react";

export default function Level() {
  const useLevel = useLevelModal();

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

  const ref = useRef();

  return (
    <>
      <ProTable
        actionRef={ref}
        headerTitle="关卡列表"
        cardBordered
        rowKey="_id"
        columns={tableColumns()}
        request={getList}
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
      />
      <FormDrawer ref={ref} />
    </>
  );
}

// import { useReducer } from "react";
// import { Card } from "antd";
// import { Provider } from "./store";
// import {
//   TableComponent,
//   SearchComponent,
//   ActionComponent,
//   ModalComponent,
// } from "./components";

// export default async function Level() {
//   return (
//     <Provider>
//       {/* 搜索区域 */}
//       <Card>
//         <SearchComponent />
//       </Card>

//       {/* 表格区域 */}
//       <Card
//         title="关卡详情"
//         headStyle={{ borderBottom: 0 }}
//         bodyStyle={{ paddingTop: 0 }}
//         extra={<ActionComponent />}
//         className="mt-4"
//       >
//         <TableComponent />
//       </Card>

//       <ModalComponent />
//     </Provider>
//   );
// }
