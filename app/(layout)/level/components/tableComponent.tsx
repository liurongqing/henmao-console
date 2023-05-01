import { Table, Pagination, Skeleton, Empty } from "antd";
import useSWR from "swr";
import { tableColumns } from "./tableColumns";
import { fetcher } from "@/utils";
import { LEVEL_API } from "@/consts";

export const TableComponent = () => {
  function handleDelete(row: any) {
    console.log("111", row);
  }

  const columns = tableColumns({ handleDelete });
  const { data, error, isLoading } = useSWR(LEVEL_API, fetcher);
  return (
    <>
      <Table
        rowKey="_id"
        pagination={false}
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: isLoading ? <Skeleton active /> : <Empty />,
        }}
      />
      <Pagination className="mt-4 text-right" />
    </>
  );
};
