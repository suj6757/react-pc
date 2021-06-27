// bubble config options 설정
export const bubbleChartOptions = {
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
      enabled: true
    },
    fill: {
      opacity: 0.7
    },
    title: {
      // text: ""
    },
    xaxis: {
      tickAmount: 12,
      type: "category"
    },
    yaxis: {
      max: 70
    }
  },
  series: [
    {
      name: "ORG",
      data: [[20, 30, 20]]
    },
    {
      name: "OHEP Index",
      data: [[20, 20, 40]]
    }
  ]
};

// line config options 설정
export const lineChartOptions = {
  options: {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    fill: {
      opacity: 0.7
    },
    title: {
      // text: ""
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  },
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]
};

// bar config options 설정
export const barChartOptions = {
  options: {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    fill: {
      opacity: 0.7
    },
    title: {
       text: ""
    },
    xaxis: {
      categories: [],
    },
  },
  series: [{
    name: "Desktops",
    data: []
  }]
};

export const scatterChartOptions = {
  series: [{
      name: "SAMPLE A",
      data: [
      [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
    },{
      name: "SAMPLE B",
      data: [
      [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
    },{
      name: "SAMPLE C",
      data: [
      [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
  }]
};

export const scatterDatetimeChartOptions = {
  series: [],
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
              console.log(value + "AND" + seriesIndex + "AND" + w);
              return w.config.series[seriesIndex].name
          },
          offsetX: 0,
          offsetY: -8,
          style: {
            fontSize: '15px',
            fontWeight: 400/500,
            colors: ['#868686'] // label만 회색
            //colors: ['#009bf8'] // label만 파란색
          }
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
          // row: { // 또는 column
          //   colors: ['#bad5ed', '#fd7b7b'],
          //   opacity: 1
          // }
      },
      xaxis: {
          min: 1,
          max: 2, //x축은 소수점이 안먹힘
          type: 'numeric',
          // tickPlacement: 'between',
          tickAmount: 2
      },
      yaxis: {
          min: 1,
          max: 2,
          tickAmount: 2
          // forceNiceScale: true
          // show: false
      },
      legend: {
        show: false
      },
      colors: ['#20a8fa'] // marker&label 파란색
      //colors: ['#868686'] // marker&label 회색
  }
};
