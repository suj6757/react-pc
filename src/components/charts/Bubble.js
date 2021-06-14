import React from 'react';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";
import { bubbleChartOptions } from './config';

const Bubble = ({height}) => {
    const [resData, setResData] = React.useState({
        FromDate : "2021-05-01",
        ToDate : "2021-05-10",
        Category1 : "패션의류",
        Category2 : "여성의류",
        Category3 : "티셔츠",
        Keyword : "켈린클라인"
    });

    React.useEffect(() => {
        console.log(resData);
        
        axios({
            method: "get",
            url: '/api/GetIndustry_PFactor_TrendQuad',
            responseType: "type",
            params : resData
        }).then((response) => {
            console.log('==============res : ', response);
            //setResult(JSON.stringify(data));
        }).catch(function(error) {
            console.log(error);
        });
    }, []);

    return (
        <ReactApexChart options={bubbleChartOptions.options} series={bubbleChartOptions.series} type="bubble" height={height} />
    );
};

export default Bubble;