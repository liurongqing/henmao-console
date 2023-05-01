import { Button, Space, Typography, Divider, Popconfirm } from "antd";

interface IParams {
  handleDelete: (row: any) => void;
}

export const tableColumns = ({ handleDelete }: IParams) => {
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
      title: "操作",
      key: "action",
      render: (_: any, row: any) => {
        return (
          <Space split={<Divider type="vertical" />}>
            <Typography.Link>修改</Typography.Link>
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
