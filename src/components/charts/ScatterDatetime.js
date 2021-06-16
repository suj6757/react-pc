import React from 'react';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";
import { scatterDatetimeChartOptions } from './config';

const ScatterDatetime = ({height}) => {
    //라인 옵션
    const [ScatterDatetimeOption, setScatterDatetimeOption] = React.useState(scatterDatetimeChartOptions);
    //서버에 보낼 파라미터
    const [resParam, setResParam] = React.useState({
        FromDate : "2021-05-01",
        ToDate : "2021-05-10",
        Category1 : "패션의류",
        Category2 : "여성의류",
        Category3 : "티셔츠",
        Keyword : "켈린클라인"
    });
    //서버 호출 후 받는 데이터
    const [resData, setResData] = React.useState({
        // 엑셀 기준 데이터
        // Data : [
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '5부',
        //     P_R_INDEX: 1.0025055976,
        //     RISE_FALL: 1.0021451104
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '모양',
        //     P_R_INDEX: 1.0308501706,
        //     RISE_FALL: 1.0353312303
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '무봉제라인',
        //     P_R_INDEX: 1.0025055976,
        //     RISE_FALL: 1.0035646688
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '반팔',
        //     P_R_INDEX: 1.945679762,
        //     RISE_FALL: 1.0881230284
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '밴딩',
        //     P_R_INDEX: 1.0858167182,
        //     RISE_FALL: 1.0195741325
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '벨크로',
        //     P_R_INDEX: 1.0530915818,
        //     RISE_FALL: 1.0760410095
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '벨트',
        //     P_R_INDEX: 1.1793480396,
        //     RISE_FALL: 1.0290063091
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '소매',
        //     P_R_INDEX: 1.6901625421,
        //     RISE_FALL: 1.1006782334
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '속옷디테일',
        //     P_R_INDEX: 1.2280093827,
        //     RISE_FALL: 1.0732334385
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '심리스',
        //     P_R_INDEX: 1.08393752,
        //     RISE_FALL: 1.0019400631
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '어깨',
        //     P_R_INDEX: 2,
        //     RISE_FALL: 1.13829653
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '지퍼',
        //     P_R_INDEX: 1.0588815439,
        //     RISE_FALL: 1.0078864353
        //   },
        //   {
        //     Category_upper: '디테일',
        //     Category_lower: '히든밴딩',
        //     P_R_INDEX: 1.0107740697,
        //     RISE_FALL: 1.0055678233
        //   },
        //   {
        //     Category_upper: '목적',
        //     Category_lower: '니플커버',
        //     P_R_INDEX: 1.04196876,
        //     RISE_FALL: 1.0111041009
        //   },
        //   {
        //     Category_upper: '목적',
        //     Category_lower: '보정/관리',
        //     P_R_INDEX: 1.112638824,
        //     RISE_FALL: 1.9183911672
        //   }
        // ]

        // 데모를 위해 임의로 고친 데이터
        Data : [
          {
            Category_upper: '타겟',
            Category_lower: '',
            P_R_INDEX: 2,
            RISE_FALL: 1.2
          },
          {
            Category_upper: '소재',
            Category_lower: '',
            P_R_INDEX: 1,
            RISE_FALL: 1.7
          },
          {
            Category_upper: '원산지',
            Category_lower: '',
            P_R_INDEX: 3,
            RISE_FALL: 1.5
          },
          {
            Category_upper: '배송',
            Category_lower: '',
            P_R_INDEX: 4,
            RISE_FALL: 1.8
          },
          {
            Category_upper: '마케팅',
            Category_lower: '',
            P_R_INDEX: 2,
            RISE_FALL: 1.6
          },
          {
            Category_upper: '스타일',
            Category_lower: '',
            P_R_INDEX: 3,
            RISE_FALL: 1.3
          },
          {
            Category_upper: '디테일',
            Category_lower: '',
            P_R_INDEX: 1,
            RISE_FALL: 1.2
          },
          {
            Category_upper: '핏',
            Category_lower: '',
            P_R_INDEX: 5.,
            RISE_FALL: 1.8
          },
          {
            Category_upper: '기능',
            Category_lower: '',
            P_R_INDEX: 4,
            RISE_FALL: 1.5
          },
          {
            Category_upper: '장소',
            Category_lower: '',
            P_R_INDEX: 3,
            RISE_FALL: 1.0
          },
          {
            Category_upper: '계절',
            Category_lower: '',
            P_R_INDEX: 2,
            RISE_FALL: 1.1
          },
          {
            Category_upper: '상황',
            Category_lower: '',
            P_R_INDEX: 1,
            RISE_FALL: 1.7
          },
          {
            Category_upper: '무늬',
            Category_lower: '',
            P_R_INDEX: 2,
            RISE_FALL: 1.4
          },
          {
            Category_upper: '안감',
            Category_lower: '',
            P_R_INDEX: 5,
            RISE_FALL: 1.2
          },
          {
            Category_upper: '목적',
            Category_lower: '',
            P_R_INDEX: 4,
            RISE_FALL: 1.9
          }
        ]
    });

    React.useEffect(() => {
        var seriesData = [];
        resData.Data.map((res) => {
            seriesData.push({
                name: res.Category_upper,
                data: [[res.P_R_INDEX, res.RISE_FALL]], 
            });
        });

        setScatterDatetimeOption({
            series: seriesData,
            options: {
              chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                  type: 'xy'
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                  return w.config.series[seriesIndex].name
                },
                offsetX: 0,
                offsetY: -8
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                },
                yaxis: {
                  lines: {
                    show: true
                  }
                },
              },
              xaxis: {
                min: 0.9,
                max: 5.1, //x축은 소수점이 안먹힘
                type: 'category',
                tickAmount: 2
              },
              yaxis: {
                 min: 0.9,
                 max: 2.1,
                 tickAmount: 2,
                 show: false
              }
            }
        });
        
      }, []);
      
      // return(
      //   new ApexCharts(document.querySelector("#chart"), {ScatterDatetimeOption})
      // );

      return (
        <ReactApexChart options={ScatterDatetimeOption.options} series={ScatterDatetimeOption.series} type="scatter" height={height} />
    );
};

export default ScatterDatetime;