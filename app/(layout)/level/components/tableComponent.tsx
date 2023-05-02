import { useState } from "react";
import { Table, Pagination, Skeleton, Empty, message } from "antd";
import useSWR from "swr";
import { tableColumns } from "./tableColumns";
import { ModalComponent } from "./modalComponent";
import { request, urlToString } from "@/utils";
import { LEVEL_API, PAGINATION } from "@/consts";
import { useStore } from "@/hooks";
import { Store } from "../store";

export const TableComponent = () => {
  const { state, dispatch } = useStore(Store);

  async function handleDelete(row: any) {
    // console.log("111", row, state);
    await request(`${LEVEL_API}/${row._id}`, undefined, "delete");
    // 删除成功
    message.success("删除成功");
    dispatch({ type: "refresh" });
  }

  const query = urlToString(state.searchQuery);

  const columns = tableColumns({ handleDelete });
  const { data, error, isLoading } = useSWR(
    `${LEVEL_API}?current=${state.current}&pageSize=${PAGINATION.pageSize}&refCount=${state.refCount}&${query}`,
    request
  );

  return (
    <>
      <Table
        rowKey="_id"
        pagination={false}
        columns={columns}
        dataSource={data?.list}
        locale={{
          emptyText: isLoading ? <Skeleton active /> : <Empty />,
        }}
      />
      <Pagination
        current={state.current}
        pageSize={PAGINATION.pageSize}
        showTotal={PAGINATION.showTotal}
        total={data?.total}
        onChange={(current) =>
          dispatch({ type: "setCurrent", data: { current } })
        }
        className="mt-4 text-right"
      />
      <ModalComponent />
    </>
  );
};
