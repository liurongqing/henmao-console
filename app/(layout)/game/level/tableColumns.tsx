"use client";

import { Button, Space, Tooltip, Typography, Divider, Popconfirm } from "antd";
import dayjs from "dayjs";

interface IParams {
  handleDelete: (row: any) => void;
  handleEditModal: (row: any) => void;
}

export const tableColumns = ({ handleEditModal, handleDelete }) => {
  return [
    {
      title: "关卡",
      dataIndex: "level",
      key: "level",
      width: 80,
    },
    {
      title: "甜甜圈",
      dataIndex: "donuts",
      key: "donuts",
      hideInSearch: true,
      width: 400,
      render: (text, row) => JSON.stringify(text, null, 2),
    },
    {
      title: "倒计时间",
      key: "time",
      dataIndex: "time",
      hideInSearch: true,
      width: 80,
    },
    {
      title: "创建时间",
      key: "createdAt",
      dataIndex: "createdAt",
      hideInSearch: true,
      render(text: any) {
        if (!text) return "";
        return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "更新时间",
      key: "updatedAt",
      dataIndex: "updatedAt",
      hideInSearch: true,
      render(text: any) {
        if (!text) return "";
        return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "操作",
      key: "action",
      hideInSearch: true,
      render: (text, record, _, action) => {
        return (
          <Space split={<Divider type="vertical" />}>
            <Typography.Link
              onClick={() => {
                handleEditModal(record, action);
              }}
            >
              修改
            </Typography.Link>
            <Popconfirm
              title="确定删除?"
              onConfirm={() => {
                handleDelete(record, action);
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
