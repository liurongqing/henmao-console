import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";

export const UseChart11 = () => {
  const ref = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(ref.current);
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    // console.log("refff", ref);
  }, []);

  return <div className=" h-96" ref={ref}></div>;
};
