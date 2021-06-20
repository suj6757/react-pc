import React from 'react';
import ReactApexChart from "react-apexcharts";
import { bubbleChartOptions } from './config';

const Bubble = ({height}) => {
    //라인 옵션
    const [bubbleOptions, setBubbleOption] = React.useState(bubbleChartOptions);
    //서버 호출 후 받는 임시 데이터(받을 파라미터)
    const [resData, setResData] = React.useState({
        BubbleData : [
            {
                'Category': '핏',
                'PGI': 38,
                'SGI': 57,
                'DGI': 48,
                'AssociatedBubbleData' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ]
            },
            {
                'Category': '멋있다',
                'PGI': 94,
                'SGI': 32,
                'DGI': 97,
                'AssociatedBubbleData' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ]
            },
            {
                'Category': '마무리감',
                'PGI': 77,
                'SGI': 67,
                'DGI': 85,
                'AssociatedBubbleDatas' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ]
            },
            {
                'Category': '깔끔함',
                'PGI': 50,
                'SGI': 54,
                'DGI': 60,
                'AssociatedBubbleDatas' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ]
            }
        ]
    });

    React.useEffect(() => {
        var seriesData = [];
        var bubbleXArr = [];
        var bubbleYArr = [];
        var xMin, xMax, yMin, yMax = 0;

        // data: [X축(DGI), Y축(SGI), 크기(PGI)] 순
        resData.BubbleData.map((res) => {
            seriesData.push({
                name: res.Category,
                data: [[res.DGI, res.SGI, res.PGI]], 
            });

            bubbleXArr.push(res.DGI);
            bubbleYArr.push(res.SGI);
        });

        // x, y축 최소/최대값 계산해서 중앙 쯤 위치하게 +-5
        xMin = Math.min.apply(null, bubbleXArr) - 5;
        xMax = Math.max.apply(null, bubbleXArr) + 5;
        yMin = Math.min.apply(null, bubbleYArr) - 5;
        yMax = Math.max.apply(null, bubbleYArr) + 5;
        
        setBubbleOption({
            series: seriesData,
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                        return w.config.series[seriesIndex].name
                    }
                },
                fill: {
                    opacity: 0.7
                },
                title: {
                    //text: ""
                },
                xaxis: {
                    min: xMin,
                    max: xMax,
                    tickAmount: 12,
                    type: "category"
                },
                yaxis: {
                    min: yMin,
                    max: yMax
                }
            }
        });
    }, []);
    
    return (
        <ReactApexChart options={bubbleOptions.options} series={bubbleOptions.series} type="bubble" height={height} />
    );
};

export default Bubble;