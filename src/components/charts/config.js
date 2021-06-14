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