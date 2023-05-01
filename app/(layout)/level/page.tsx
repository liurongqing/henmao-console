"use client";
import { Card } from "antd";
import { TableComponent, SearchComponent, ActionComponent } from "./components";

export default function Level() {
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
        extra={<ActionComponent />}
        className="mt-4"
      >
        <TableComponent />
      </Card>
    </>
  );
}
