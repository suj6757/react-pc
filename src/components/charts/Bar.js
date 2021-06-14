import React from 'react';
import ReactApexChart from "react-apexcharts";
import { barChartOptions } from './config';

const Bar = ({height}) => {
  return (
    <ReactApexChart options={barChartOptions.options} series={barChartOptions.series} type="bar" height={height} />
  );
};

export default Bar;
