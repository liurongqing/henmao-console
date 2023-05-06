"use client";
import { Button } from "antd";

// export const metadata = {
//   title: "首页",
//   description: "这是个游戏后台",
// };

export default function App(...props: any[]) {
  console.log('props', props);

  return (
    <div>
      <h1>is /</h1>
      <Button type="primary">primary</Button>
    </div>
  );
}
