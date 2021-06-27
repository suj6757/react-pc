import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import { barChartOptions } from './config';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getIndustryPfactorTrendandfactor, getIndustryTotalcategoryList } from '../../redux/actions';

const Bar = ({height}) => {
    const dispatch = useDispatch();
    const store_startApp = useSelector(state => state.startApp);
    // const store_industryApp = useSelector(state => state.industryApp);

    const [chartData, setChartData] = useState([]);

    const callPFactorTrendAndFactorApi = async () => {
        await axios.post("/api/GetIndustry_PFactor_TrendAndFactor", store_startApp.SearchCondition)
        .then(function (response) {
            let chartData = response.data.SentimentFactorData;
            
            if(chartData.length != 0) {
                let seriesData = [];
                let categoriesData = [];

                chartData.map((res) => {
                    seriesData.push(res.Value);
                    categoriesData.push(res.name);
                });
                    
                barChartOptions.series = [{
                    name : "value",
                    data : seriesData
                }];

                barChartOptions.options = {
                    ...barChartOptions.options,
                    xaxis : {
                        categories : categoriesData
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
                                    console.log('click value : ', chartContext.bar.series[0][value]);
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
        <ReactApexChart options={barChartOptions.options} series={barChartOptions.series} type="bar" height={height} />
    );
};

export default Bar;