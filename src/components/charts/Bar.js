import React from 'react';
import ReactApexChart from "react-apexcharts";
import { barChartOptions } from './config';

const Bar = ({height}) => {
    //라인 옵션
    const [barOption, setBarOption] = React.useState(barChartOptions);
    //서버에 보낼 임시 파라미터
    const [resParam, setResParam] = React.useState({
        FromDate : "2021-05-01",
        ToDate : "2021-05-10",
        Category1 : "패션의류",
        Category2 : "여성의류",
        Category3 : "티셔츠",
        Keyword : "켈린클라인"
    });
    //서버 호출 후 받는 임시 데이터
    const [resData, setResData] = React.useState({
        SentimentFactorData: [
            { name: '촉감', Value: '219' },
            { name: '착탈감', Value: '103' },
            { name: '관리', Value: '53' },
            { name: '충전재', Value: '48' },
            { name: '무게', Value: '42' },
            { name: '사이즈', Value: '38' },
            { name: '제품구성', Value: '38' },
            { name: '무늬', Value: '37' },
            { name: '가격', Value: '35' },
            { name: '청결도', Value: '31' } 
        ]
    });

    React.useEffect(() => {
        var data = [];
        var category = [];

        resData.SentimentFactorData.map((res) => {
            data.push(res.Value);
            category.push(res.name);
        });

        setBarOption({
            series: [{
                name : "value",
                data : data
            }],
            options: {
                ...barChartOptions.options, 
                title: {
                    text : ""
                },
                xaxis: {
                  categories : category
                }
            }
        });
    }, []);

    return (
        <ReactApexChart options={barOption.options} series={barOption.series} type="bar" height={height} />
    );
};

export default Bar;