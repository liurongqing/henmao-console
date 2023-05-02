"use client";
import { useState, useReducer } from "react";
import { Card } from "antd";
import { Store, initialState, reducer } from "./store";
import {
  TableComponent,
  SearchComponent,
  ActionComponent,
  ModalComponent,
} from "./components";

export default function Level() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider
      value={{
        state,
        dispatch,
      }}
    >
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
    </Store.Provider>
  );
}
