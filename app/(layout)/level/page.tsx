"use client";
import { useState, useReducer } from "react";
import { Card } from "antd";
import {
  TableComponent,
  SearchComponent,
  ActionComponent,
  ModalComponent,
} from "./components";

export default function Level() {
  // const [isOpen, open] = useReducer(() => true, false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 搜索区域 */}
      <Card>
        <SearchComponent />
      </Card>

      {/* 表格区域 */}
      <Card
        title="关卡详情"
        headStyle={{ borderBottom: 0 }}
        bodyStyle={{ paddingTop: 0 }}
        extra={<ActionComponent setOpen={setOpen} />}
        className="mt-4"
      >
        <TableComponent />
      </Card>

      <ModalComponent open={open} setOpen={setOpen} />
    </>
  );
}
