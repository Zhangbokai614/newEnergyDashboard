const body = document.body

var color = {
  linearYtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: '#f5b44d'
    }, {
      offset: 1,
      color: '#28f8de'
    }]
  },
  linearGtoB: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#43dfa2'
    }, {
      offset: 1,
      color: '#28f8de'
    }]
  },
  linearBtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#1c98e8'
    }, {
      offset: 1,
      color: '#28f8de'
    }]
  },
  linearBtoGTW: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#1c9855'
    }, {
      offset: 1,
      color: '#28f866'
    }]
  },
  linearBtoGTR: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#1c77F9'
    }, {
      offset: 1,
      color: '#5888EF'
    }]
  },
  areaBtoG: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(35,184,210,.2)'
    }, {
      offset: 1,
      color: 'rgba(35,184,210,0)'
    }]
  },
  areaBtoGTW: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(35,184,210,.2)'
    }, {
      offset: 1,
      color: 'rgba(35,184,210,0)'
    }]
  },
  areaBtoGTR: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(35,30,110,.2)'
    }, {
      offset: 1,
      color: 'rgba(35,40,140,0)'
    }]
  }
};

const titleStyle = {
  color: "#fff",
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "sans-serif",
  fontSize: 18,
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
  lineHeight: "24",
  textBorderColor: "transparent",
  textBorderWidth: 1,
  textShadowColor: "black",
  textShadowBlur: 3,
  textShadowOffsetX: 3,
  textShadowOffsetY: 2,
}

function createRingCharts(chartsName, node, data, title) {
  let div = document.createElement('div')
  div.id = chartsName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)
  const chart = document.querySelector("#" + chartsName)
  const myChart = echarts.init(chart)
  var colorArr = ["#218de0", "#01cbb3", "#85e647", "#5d5cda", "#05c5b0", "#05c5b0"]
  var colorAlpha = ['rgba(60,170,211,0.05)', 'rgba(1,203,179,0.05)', 'rgba(133,230,71,0.05)', 'rgba(93,92,218,0.05)', 'rgba(5,197,176,0.05)', 'rgba(194,153,39,0.05)']
  var colorIndex = -1
  option = {
    grid: {
      left: -100,
      top: 50,
      bottom: 10,
      right: 10,
      containLabel: true
    },
    title: {
      text: title,
      textStyle: titleStyle,
      top: '-2%'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      show: false
    },

    polar: {},
    angleAxis: {
      interval: 1,
      type: 'category',
      data: [],
      z: 10,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#0B4A6B",
          width: 1,
          type: "solid"
        },
      },
      axisLabel: {
        interval: 0,
        show: true,
        color: "#FFF",
        margin: 8,
        fontSize: 16
      },
    },
    radiusAxis: {
      min: 20,
      max: 120,
      interval: 20,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#FFF",
          width: 1,
          type: "solid"
        },
      },
      axisLabel: {
        formatter: '{value} %',
        show: false,
        padding: [0, 0, 20, 0],
        color: "#FFF",
        fontSize: 16
      },
      splitLine: {
        lineStyle: {
          color: "#07385e",
          width: 2,
          type: "dashed"
        }
      }
    },
    calculable: true,
    series: [{
      stack: 'a',
      type: 'pie',
      radius: '68%',
      roseType: 'radius',
      zlevel: 10,
      startAngle: 100,
      label: {
        normal: {
          formatter: ['{b|{b}}', '{d|{d}%}'].join('\n'),
          rich: {
            b: {
              color: '#FFF',
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '600',
              textShadowColor:'#000',
              textShadowBlur: 5,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2
            },
            d: {
              color: '#FFF',
              fontSize: 12,
              height: 20
            },
          },
        }
      },
      labelLine: {
        normal: {
          show: true,
          length: 10,
          length2: 45,
          lineStyle: {
            color: '#0096b1'

          }
        },
        emphasis: {
          show: false
        }
      },
      data: data.map(item => {
        colorIndex > colorArr.length ? colorIndex = 0 : colorIndex += 1
        return {
          value: item.value,
          name: item.name,
          itemStyle: {
            borderColor: colorArr[colorIndex],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[colorIndex],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            color: colorAlpha[colorIndex]
          }
        }
      })

    },]
  }
  myChart.setOption(option);
}

function carateWorldSalesCharts(chartsName, node, data, title, yName) {
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
      top: '-2%'
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '0%',
      right: '4%',
      bottom: '0%',
      containLabel: true
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
    toolbox: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(item => item.year),
      axisLabel: {
        textStyle: {  
          fontSize: 14,
          fontWeight: '600',
          color:'#fff',
          textShadowColor:'#000',
          textShadowBlur: 5,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2
        }
      },
    },
    yAxis: {
      show: false,
      type: 'value',
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'USA',
        type: 'line',
        data: data.map(item => item.USA),
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#fff'
          },
          textStyle: fontStyle,
        },
        lineStyle: {
          normal: {
            color: color.linearBtoG,
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: color.areaBtoG,
          }
        },
      },
      {
        name: 'CN',
        type: 'line',
        data: data.map(item => item.CN),
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#fff'
          }
        },
        lineStyle: {
          normal: {
            color: color.linearBtoGTW,
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: color.areaBtoGTW,
          }
        },
      },
      {
        name: 'EU',
        type: 'line',
        data: data.map(item => item.EU),
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#fff'
          }
        },
        lineStyle: {
          normal: {
            color: color.linearBtoGTR,
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: color.areaBtoGTR,
          }
        },
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
        show: false,
         position: 'insideRight'
      },
      data: newCar.map(item => {
        return { name: item.name, value: item.value };
      }),
      itemStyle: {
        normal: {
          areaColor: 'rgba(0,255,255,.02)',
          borderColor: '#ffffff',
          borderWidth: 2,
          // shadowColor: '#00ffff',
          // shadowOffsetX: 2,
          // shadowOffsetY: 4,
          // shadowBlur: 20,
        },
        emphasis: {
          areaColor: 'transparent', 
          textStyle: {
            color: '#fff'
          }
        }
      }
    },
    ]
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
      right: '8%',
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

function createNewCar(charName, node) {
  let div = document.createElement('div')
  div.id = charName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)

  const myChart = echarts.init(document.getElementById(charName))

  var pathSymbols = {
    car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
  };
  var labelSetting = {
    normal: {
      show: true,
      position: 'right',
      offset: [10, 0],
      textStyle: {
        fontSize: 10
      }
    }
  };
  const option = {
    title: {
      text: '国内传统汽车与新能源汽车保有量占比',
      textStyle: {
        color: "rgba(255, 255, 255, 1)"
      }
    },
    legend: {
      data: ['新能源汽车', '传统柴油车']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true,
      left: "-10%",
      right: "0%",
      top: "8%",
      bottom: "0%"
    },
    legend: {
      show: false
    },
    yAxis: {
      data: ['单位万辆'],
      show: false,
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        margin: 0,
        fontSize: 14
      },
      axisPointer: {
        label: {
          show: true,
          margin: 0
        }
      }
    },
    xAxis: {
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      //       axisLabel: {
      //   show: false
      // }
    },
    series: [{
      name: '新能源汽车',
      type: 'pictorialBar',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      barCategoryGap: '40%',
      data: [{
        value: 123,
        symbol: pathSymbols.car
      }]
    }, {
      name: '传统柴油车',
      type: 'pictorialBar',
      barGap: '10%',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      data: [{
        value: 95,
        symbol: pathSymbols.car
      }]
    }]
  };
  myChart.setOption(option);
}

function createContrast(chartsName, node, data, type) {
  const value = []
  data.map(item => {
    if (item[type]) {
      value.push({ year: item.year, ...item[type] })
    }
  })

  // removeAllChildNodesByID(chartsName)

  let div = document.createElement('div')
  div.id = chartsName
  div.style = 'width: 100%;height:100%;'
  while (document.querySelector('#' + node).hasChildNodes()) {
    document.querySelector('#' + node).removeChild(document.querySelector('#' + node).firstChild)
  }
  document.querySelector('#' + node).appendChild(div)
  const chart = document.querySelector("#" + chartsName)
  const myChart = echarts.init(chart)
  option = {
    title: {
      text: type + '传统汽车与新能源汽车销量趋势',
      textStyle: titleStyle,
      top: '-6%'
    },
    tooltip: {
      trigger: 'axis'
    },

    // legend: {
    //   legend: {
    //     data: ['传统车销量', '新能源车销量'],
    //     textStyle: fontStyle,
    //     right: 10,
    //   },
    // },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '0%',
      containLabel: true
    },
    toolbox: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: value.map(item => item.year),
      axisLabel: {
        textStyle: {  
          fontSize: 16,
          fontWeight: '600',
          color:'#fff',
          textShadowColor:'#000',
          textShadowBlur: 5,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2
        }
      },
    },
    yAxis: [
      {
        show: false,
        type: 'value',
        splitLine: {
          show: false
        },
      },
      {
        show: false,
        type: 'value',
        splitLine: {
          show: false
        },
      }
    ],
    series: [
      {
        name: '传统车销量',
        type: 'line',
        // stack: 'value',
        areaStyle: {
          normal: {
            color: color.areaBtoGTR,
          }
        },
        emphasis: {
          focus: 'series'
        },
        smooth: true,
        lineStyle: {
          normal: {
            color: color.linearBtoGTR,
            width: 3
          }
        },
        data: value.map(item => item.old)
      },
      {
        yAxisIndex: 1,
        name: '新能源车销量',
        type: 'line',
        // stack: 'value',
        areaStyle: {
          normal: {
            color: color.areaBtoG,
          }
        },
        emphasis: {
          focus: 'series'
        },
        smooth: true,
        lineStyle: {
          normal: {
            color: color.linearBtoGTW,
            width: 3
          }
        },
        data: value.map(item => item.newEnergy)
      }
    ]
  };
  myChart.setOption(option);
}

function createWordCloud(charName, node) {
  let div = document.createElement('div')
  div.id = charName
  div.style = 'width: 100%; height: 100%'
  document.querySelector('#' + node).appendChild(div)

  const myChart = echarts.init(document.getElementById(charName));

  const option = {
    title: {
      text: '今年新能源汽车厂商销售量',
      textStyle: {
        color: "rgba(255, 255, 255, 1)"
      }
    },
    series: [{
      type: 'wordCloud',
      shape: 'circle',
      left: 'center',
      top: 'center',
      width: '100%',
      height: '100%',
      right: null,
      bottom: null,
      gridSize: 0,
      sizeRange: [12, 60],
      rotationRange: [-90, 90],
      data: 
        cloud.map(item => {
        return { 
          name: item.BrandName, 
          value: item.Sales,
          textStyle: {
            color: 'rgb(' + [
              Math.round(Math.random() * 200 + 55),
              Math.round(Math.random() * 200 + 55),
              Math.round(Math.random() * 200 + 55)
            ].join(',') + ')'
          }
           }
      }),
    }],
  };
  myChart.setOption(option);
}

function carateBaCharts0(charName, node) {
  let div = document.createElement('div')
  div.id = charName
  div.style = 'width: 100%; height: 100%'
  document.querySelector('#' + node).appendChild(div)

  const myCharts = echarts.init(document.getElementById(charName));
  const option = {
    title: {
      text: '各省市充电桩建设数量',
      textStyle: {
        color: "rgba(255, 255, 255, 1)"
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '-6.5%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: newCar.map(item => item.name),
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          formatter: function (value) {
            return value.split("").join("\n")
          },
          textStyle: {  
            color:'#fff'
          }
        },
      }
    ],
    yAxis: [
      {
        show: false,
        show:false,
        type: 'value'
      }
    ],
    series: [
      {
        name: '电桩数量',
        type: 'bar',
        barWidth: '60%',
        data: newCar.map(item => item.charging),
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,244,255,1)'
            }, {
              offset: 1,
              color: 'rgba(0,77,167,1)'
            }], false),
            barBorderRadius: [30, 30, 30, 30],
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4,
          }
        },
      }
    ]
  };
  myCharts.setOption(option);
}