import React from 'react';
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from './config';

const Line = ({height}) => {
  return (
    <ReactApexChart options={lineChartOptions.options} series={lineChartOptions.series} type="line" height={height} />
  );
};

export default Line;
