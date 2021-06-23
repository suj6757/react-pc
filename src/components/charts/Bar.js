import React from 'react';
import ReactApexChart from "react-apexcharts";
import { barChartOptions } from './config';
import { useDispatch, useSelector } from 'react-redux';
import { getIndustryPfactorTrendandfactor } from '../../redux/actions';

const Bar = ({height}) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.startApp);
    

    //라인 옵션
    const [barOption, setBarOption] = React.useState(barChartOptions);
    //서버 호출 후 받는 임시 데이터(받을 파라미터)
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
        
        console.log('ch : ', store);
        resData.SentimentFactorData.map((res) => {
            data.push(res.Value);
            category.push(res.name);
        });

        dispatch(getIndustryPfactorTrendandfactor(store.SearchCondition));

        /*
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
        */
    }, [store]);

    return (
        <ReactApexChart options={barOption.options} series={barOption.series} type="bar" height={height} />
    );
};

export default Bar;