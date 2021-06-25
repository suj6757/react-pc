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

    const callPFactorTrendAndFactorApi = async () =>{ // eslint-disable-line no-unused-vars
        console.log('store_startApp_api 호출... param :', store_startApp.SearchCondition);

        await axios.post("/api/GetIndustry_PFactor_TrendAndFactor", store_startApp.SearchCondition)
          .then(function (response) {
            console.log('response.data : ', response.data);
            
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
                    xaxis: {
                    categories : categoriesData
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