import React from 'react';
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from './config';

const Line = ({height}) => {
    //라인 옵션
    const [lineOption, setLineOption] = React.useState(lineChartOptions);
    //서버 호출 후 받는 임시 데이터(받을 파라미터)
    const [resData, setResData] = React.useState({
        TrendData: [
            { date: '2019-05-01', Value: 0.2 },
            { date: '2019-05-02', Value: 0.3 },
            { date: '2019-05-03', Value: 0.4 },
            { date: '2019-05-04', Value: 0.5 },
            { date: '2019-05-05', Value: 0.2 },
            { date: '2019-05-06', Value: 0.9 },
            { date: '2019-05-07', Value: 0.3 },
            { date: '2019-05-08', Value: 0.2 },
            { date: '2019-05-09', Value: 0.6 },
            { date: '2019-05-10', Value: 0.3 }
        ]
    });

    React.useEffect(() => {
        var data = [];
        var category = [];

        resData.TrendData.map((res) => {
            data.push(res.Value);
            category.push(res.date);
        });
        
        setLineOption({
            series: [{
                name : "value",
                data : data
            }],
            options: {
                ...lineOption.options,
                xaxis : {
                    categories : category,
                    title: {
                        text: ''
                    }
                }
            }
        });
    }, []);

    return (
        <ReactApexChart options={lineOption.options} series={lineOption.series} type="line" height={height} />
    );
};

export default Line;