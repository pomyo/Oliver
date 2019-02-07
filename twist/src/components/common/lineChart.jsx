import React from "react";
import Chart from "react-apexcharts";

const LineChart = props => (
  <div>
    <Chart
      options={props.options}
      series={props.series}
      type="line"
      width="500"
    />
  </div>
);

export default LineChart;