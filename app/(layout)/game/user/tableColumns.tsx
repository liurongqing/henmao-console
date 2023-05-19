"use client";

import {
  Button,
  Space,
  Tooltip,
  Typography,
  Divider,
  Image,
  Popconfirm,
} from "antd";
import dayjs from "dayjs";

export const tableColumns = () => {
  return [
    {
      title: "头像",
      dataIndex: "avatarUrl",
      key: "avatarUrl",
      hideInSearch: true,
      width: 80,
      render(text) {
        return <Image src={text} width={80} />;
      },
    },
    {
      title: "昵称",
      dataIndex: "nickName",
      key: "nickName",
      width: 120,
    },
    {
      title: "性别",
      key: "gender",
      dataIndex: "gender",
      hideInSearch: true,
      width: 80,
    },
    {
      title: "创建时间",
      key: "createdAt",
      dataIndex: "createdAt",
      hideInSearch: true,
      width: 150,
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
      width: 150,
      render(text: any) {
        if (!text) return "";
        return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
  ];
};
