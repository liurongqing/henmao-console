"use client";
const Level = () => {
  console.log("level...");
  return <h1>Level</h1>;
};

export default Level;

// import { useReducer } from "react";
// import { Card } from "antd";
// import { Provider } from "./store";
// import {
//   TableComponent,
//   SearchComponent,
//   ActionComponent,
//   ModalComponent,
// } from "./components";

// export default async function Level() {
//   return (
//     <Provider>
//       {/* 搜索区域 */}
//       <Card>
//         <SearchComponent />
//       </Card>

//       {/* 表格区域 */}
//       <Card
//         title="关卡详情"
//         headStyle={{ borderBottom: 0 }}
//         bodyStyle={{ paddingTop: 0 }}
//         extra={<ActionComponent />}
//         className="mt-4"
//       >
//         <TableComponent />
//       </Card>

//       <ModalComponent />
//     </Provider>
//   );
// }
