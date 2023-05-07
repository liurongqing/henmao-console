"use client";
import { useReducer } from "react";
import { Card } from "antd";
import { Store, initialState, reducer } from "./store";
import {
  TableComponent,
  SearchComponent,
  ActionComponent,
  ModalComponent,
} from "./components";

export default function Level() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("haha 002");

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
        extra={<ActionComponent />}
        className="mt-4"
      >
        <TableComponent />
      </Card>

      <ModalComponent />
    </Store.Provider>
  );
}
