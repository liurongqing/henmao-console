"use client";

import { useState } from "react";
import { Table, Pagination, Skeleton, Empty, message } from "antd";
import useSWR from "swr";
import { tableColumns } from "./tableColumns";
import { ModalComponent } from "./modalComponent";
import { request, urlToString } from "@/utils";
import { LEVEL_API, PAGINATION } from "@/consts";
import { useStore, useDispatch } from "../store";

const getLevels = () => {};

export const TableComponent = () => {
  const state = useStore();
  const dispatch = useDispatch();

  // 删除
  async function handleDelete(row: any) {
    // console.log("111", row, state);
    await request(`${LEVEL_API}/${row._id}`, undefined, "delete");
    // 删除成功
    message.success("删除成功");
    dispatch({ type: "refresh" });
  }

  //修改
  async function handleEditModal(row: any) {
    console.log("row", row);
    // 打开 modal
    dispatch({ type: "setFormData", data: row });
    dispatch({ type: "open" });
  }

  const query = urlToString(state.searchQuery);

  const columns = tableColumns({ handleDelete, handleEditModal });
  const { data, error, isLoading } = useSWR(
    `${LEVEL_API}?current=${state.current}&pageSize=${PAGINATION.pageSize}&refCount=${state.refCount}&${query}`,
    request
  );

  console.log("data", { error, data, isLoading });

  // const {isLoading, data} = useTable()
  // const isLoading = false;
  // const data = { list: [], total: 1 };

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
