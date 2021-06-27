import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from './config';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Line = ({height}) => {
    const dispatch = useDispatch();
    const store_startApp = useSelector(state => state.startApp);

    const [chartData, setChartData] = useState([]);

    const callPFactorTrendAndFactorApi = async () => {
        await axios.post("/api/GetIndustry_PFactor_TrendAndFactor", store_startApp.SearchCondition)
        .then(function (response) {
            let chartData = response.data.TrendData;

            if(chartData.length != 0) {
                let seriesData = [];
                let categoriesData = [];

                chartData.map((res) => {
                    seriesData.push(res.Value);
                    categoriesData.push(res.date.substr(0, 10));
                });
                    
                lineChartOptions.series = [{
                    name : "value",
                    data : seriesData
                }];

                lineChartOptions.options = {
                    ...lineChartOptions.options,
                    xaxis : {
                        categories : categoriesData
                    },
                    dataLabels: {
                        enabled : false
                    },
                    grid : {
                        yaxis : {
                            lines : {
                                show : false
                            }
                        }
                    },
                    chart : {
                        events : {
                            click : function(event, chartContext, config) {
                                var value = config.dataPointIndex;

                                if(value >= 0) {
                                    console.log('click value : ', config.globals.series[0][value]);
                                }
                                else {
                                    alert('차트를 클릭하세요');
                                }
                            }
                        }
                    }
                };

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
        <ReactApexChart options={lineChartOptions.options} series={lineChartOptions.series} type="line" height={height} />
    );
};

export default Line;