import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import { scatterDatetimeChartOptions } from './config';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ScatterDatetime = ({height}) => {
    const dispatch = useDispatch();
    const store_startApp = useSelector(state => state.startApp);
    
    const [chartData, setChartData] = useState([]);
    
    //서버 호출 후 받는 데이터
    // const [resData, setResData] = React.useState({
    //     // 데모를 위해 임의로 고쳤던 데이터
    //     Data : [
    //         {
    //             Category_upper: '타겟',
    //             Category_lower: '',
    //             P_R_INDEX: 2,
    //             RISE_FALL: 1.2
    //         },
    //         {
    //             Category_upper: '소재',
    //             Category_lower: '',
    //             P_R_INDEX: 1,
    //             RISE_FALL: 1.7
    //         },
    //         {
    //             Category_upper: '원산지',
    //             Category_lower: '',
    //             P_R_INDEX: 3,
    //             RISE_FALL: 1.5
    //         },
    //         {
    //             Category_upper: '배송',
    //             Category_lower: '',
    //             P_R_INDEX: 4,
    //             RISE_FALL: 1.8
    //         },
    //         {
    //             Category_upper: '마케팅',
    //             Category_lower: '',
    //             P_R_INDEX: 2,
    //             RISE_FALL: 1.6
    //         },
    //         {
    //             Category_upper: '스타일',
    //             Category_lower: '',
    //             P_R_INDEX: 3,
    //             RISE_FALL: 1.3
    //         },
    //         {
    //             Category_upper: '디테일',
    //             Category_lower: '',
    //             P_R_INDEX: 1,
    //             RISE_FALL: 1.2
    //         },
    //         {
    //             Category_upper: '핏',
    //             Category_lower: '',
    //             P_R_INDEX: 5.,
    //             RISE_FALL: 1.8
    //         },
    //         {
    //             Category_upper: '기능',
    //             Category_lower: '',
    //             P_R_INDEX: 4,
    //             RISE_FALL: 1.5
    //         },
    //         {
    //             Category_upper: '장소',
    //             Category_lower: '',
    //             P_R_INDEX: 3,
    //             RISE_FALL: 1.0
    //         },
    //         {
    //             Category_upper: '계절',
    //             Category_lower: '',
    //             P_R_INDEX: 2,
    //             RISE_FALL: 1.1
    //         },
    //         {
    //             Category_upper: '상황',
    //             Category_lower: '',
    //             P_R_INDEX: 1,
    //             RISE_FALL: 1.7
    //         },
    //         {
    //             Category_upper: '무늬',
    //             Category_lower: '',
    //             P_R_INDEX: 2,
    //             RISE_FALL: 1.4
    //         },
    //         {
    //             Category_upper: '안감',
    //             Category_lower: '',
    //             P_R_INDEX: 5,
    //             RISE_FALL: 1.2
    //         },
    //         {
    //             Category_upper: '목적',
    //             Category_lower: '',
    //             P_R_INDEX: 4,
    //             RISE_FALL: 1.9
    //         }
    //     ]
    // });

    const callPFactorTrendAndFactorApi = async () =>{ // eslint-disable-line no-unused-vars
        await axios.post("/api/GetIndustry_PFactor_TrendQuad", store_startApp.SearchCondition)
        .then(function (response) {            
            let chartData = response.data.Data;
            
            if(chartData.length != 0) {
                let seriesALL = [];

                chartData.map((res) => {
                    seriesALL.push({
                        name: res.Category_lower,
                        data: [[res.P_R_INDEX, res.RISE_FALL]]
                    });
                });

                scatterDatetimeChartOptions.series = seriesALL;

                // api로 받아온 chartData로 Rerendering을 위해 setState
                setChartData(chartData);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
      
    useEffect(() => {
        if(store_startApp.SearchCondition != null) {
            // api call, chart data binding -> Rerendering
            callPFactorTrendAndFactorApi();
        }
    }, [store_startApp]);

    return (
        <ReactApexChart options={scatterDatetimeChartOptions.options} series={scatterDatetimeChartOptions.series} type="scatter" height={height} />
    );
};

export default ScatterDatetime;