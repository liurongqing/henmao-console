"use client";
import { Card, Col, Row } from "antd";
import * as echarts from "echarts/core";
import { useEffect, useRef } from "react";
import { UseChart11 } from "./echarts/UseChart11";

export default function Dashboard() {
  // useChart1()

  useEffect(() => {
    // console.log("echarts", echarts, document.getElementById("main"));
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("main"));
    // // 绘制图表
    // myChart.setOption({
    //   title: {
    //     text: "ECharts 入门示例",
    //   },
    //   tooltip: {},
    //   xAxis: {
    //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "销量",
    //       type: "bar",
    //       data: [5, 20, 36, 10, 10, 20],
    //     },
    //   ],
    // });
  }, []);
  return (
    <>
      {/* <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}> */}
      <Row gutter={[16, 16]}>
        {/* <Col xs={24} sm={12} md={8} lg={6}>
          <Card bordered={false} bodyStyle={{ padding: 10 }}>
            <UseChart11 />
          </Card>
        </Col> */}
        {Array(10)
          .fill(0)
          .map((v, k) => (
            <Col key={k} xs={24} sm={24} md={12} lg={12} xl={8}>
              <Card bordered={false}>
                <UseChart11 />
              </Card>
            </Col>
          ))}
      </Row>
      {/* <div className="w-96 h-96" id="main"></div> */}
    </>
  );
}
