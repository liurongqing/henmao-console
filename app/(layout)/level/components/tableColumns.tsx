import { Button, Space, Typography, Divider, Popconfirm } from "antd";
import dayjs from "dayjs";

interface IParams {
  handleDelete: (row: any) => void;
  handleEditModal: (row: any) => void;
}

export const tableColumns = ({ handleDelete, handleEditModal }: IParams) => {
  return [
    {
      title: "关卡",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "帧数",
      dataIndex: "frame",
      key: "frame",
    },
    {
      title: "倒计时间",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "创建时间",
      key: "createdAt",
      dataIndex: "createdAt",
      render(text: any) {
        if (!text) return "";
        return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "更新时间",
      key: "updatedAt",
      dataIndex: "updatedAt",
      render(text: any) {
        if (!text) return "";
        return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, row: any) => {
        return (
          <Space split={<Divider type="vertical" />}>
            <Typography.Link
              onClick={() => {
                handleEditModal(row);
              }}
            >
              修改
            </Typography.Link>
            <Popconfirm
              title="确定删除?"
              onConfirm={() => {
                handleDelete(row);
              }}
            >
              <Typography.Link>删除</Typography.Link>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
};
