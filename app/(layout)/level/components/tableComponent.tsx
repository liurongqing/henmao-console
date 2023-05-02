import { useState } from "react";
import { Table, Pagination, Skeleton, Empty } from "antd";
import useSWR from "swr";
import { tableColumns } from "./tableColumns";
import { ModalComponent } from "./modalComponent";
import { request, urlToString } from "@/utils";
import { LEVEL_API, PAGINATION } from "@/consts";
import { useStore } from "@/hooks";
import { Store } from "../store";

export const TableComponent = () => {
  const { state, dispatch } = useStore(Store);

  function handleDelete(row: any) {
    console.log("111", row, state);
  }

  const query = urlToString(state.searchQuery);

  const columns = tableColumns({ handleDelete });
  const { data, error, isLoading } = useSWR(
    LEVEL_API +
      `?current=${state.current}&pageSize=${PAGINATION.pageSize}&${query}`,
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
