const body = document.body

const titleStyle = {
  color: "#fff",
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "sans-serif",
  fontSize: 22,
  lineHeight: "38",
  textBorderColor: "transparent",
  textBorderWidth: 1,
  textShadowColor: "black",
  textShadowBlur: 3,
  textShadowOffsetX: 3,
  textShadowOffsetY: 2,
}

const fontStyle = {
  color: "#fff",
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "sans-serif",
  fontSize: 12,
  lineHeight: "38",
  textBorderColor: "transparent",
  textBorderWidth: 1,
  textShadowColor: "black",
  textShadowBlur: 3,
  textShadowOffsetX: 3,
  textShadowOffsetY: 2,
}

function carateBarCharts(chartsName, node, data, title, yName) {
  let div = document.createElement('div')
  div.id = chartsName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)
  const chart = document.querySelector("#" + chartsName)
  const myChart = echarts.init(chart)
  const option = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0%',
      containLabel: true
    },
    title: {
      text: title,
      textStyle: titleStyle,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
    },
    legend: {
      data: ['销量'],
      right: '2%',
      top: '4%',
      textStyle: fontStyle,
    },
    xAxis: {
      data: data.map(item => item.name),
      axisLabel: {
        color: '#000',
        interval: 0,
        formatter: function (value) {
          return value.split("").join("\n");
        },
        textStyle: {
          fontSize: 8,
          color: '#fff',
        }
      },
    },
    yAxis: {},
    series: [{
      name: yName,
      type: 'bar',
      data: data.map(item => item.value),
    }]
  };
  myChart.setOption(option);
}

function createRingCharts(chartsName, node, data, title) {
  let div = document.createElement('div')
  div.id = chartsName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)
  const chart = document.querySelector("#" + chartsName)
  const myChart = echarts.init(chart)
  const option = {
    title: {
      text: title,
      textStyle: titleStyle,
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [{
      name: "装机占比",
      type: 'pie',
      radius: [20, 86],
      center: ['50%', '60%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 4
      },
      data: data.map(item => { return { name: item.name, value: item.value } }),
    }]
  };
  myChart.setOption(option);
}

function carateLineCharts(chartsName, node, data, title, yName) {
  let div = document.createElement('div')
  div.id = chartsName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)
  const chart = document.querySelector("#" + chartsName)
  const myChart = echarts.init(chart)
  option = {
    title: {
      text: title,
      textStyle: titleStyle,
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      top: 10
    },
    legend: {
      data: ['USA', 'CN', 'EU'],
      top: '15%',
      textStyle: fontStyle,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(item => item.year)
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'USA',
        type: 'line',
        data: data.map(item => item.USA)
      },
      {
        name: 'CN',
        type: 'line',
        data: data.map(item => item.CN)
      },
      {
        name: 'EU',
        type: 'line',
        data: data.map(item => item.EU)
      }
    ]
  };
  myChart.setOption(option);
}

function createMap(charName, node) {
  let div = document.createElement('div')
  div.id = charName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)

  const myChart = echarts.init(document.getElementById(charName))
  
  echarts.registerMap('china', geoJson);
  
  const option = {
    title: {
      text: "各省新能源汽车保有量",
      left: "center",
      textStyle: titleStyle,
    },
    
    tooltip: {
      trigger: 'item'
    },
    
    geo: {
      map: 'china',
      zoom: 1.2,
      aspectScale: 0.75,
      itemStyle: {
        shadowColor:'rgb(58,115,192)',
        shadowOffsetX: 10,
        shadowOffsetY: 10,
      },
      regions: [{
        name: '南海诸岛',
        itemStyle: {
          opacity: 0
        }
      }]
    },
    
    visualMap: {
      min: 0,
      max: 90,
      left: 'left',
      text: ['High', 'Low'],
      textStyle: {
        color: 'white'
      }, 
      realtime: true,
      calculable: false,
      inRange: {
        color: ['#72C6EF', '#004E8F']
      }
    },
    
    series: [{
      name: '单位（万辆）',
      type: 'map',
      zoom: 1.2,
      map: 'china',
      label: {
        show: false
      },
      data: newCar.map(item => {
        return  {name: item.name, value: item.value};
      }),
      itemStyle: {
        normal: {
          borderColor: 'rgb(147, 235, 248)',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: 'rgb(46,229,206)',
          borderWidth: 0.1
        }
      }
    }]
  };
  myChart.setOption(option);
}

function createRight0(charName, node) {
  let div = document.createElement('div')
  div.id = charName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)

  const myCharts = echarts.init(document.getElementById(charName))

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Direct', 'Mail Ad', 'Klooo'],
      textStyle: fontStyle,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false,
      boundaryGap: ['0%', '-%']
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ['Tue']
    },
    series: [{
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10]
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150]
    },
    {
      name: 'Klooo',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150]
    }
    ]
  };
  myCharts.setOption(option);
}