const body = document.body

const fontStyle = {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: "sans-serif",
    fontSize: 18,
    lineHeight: "30",
    textBorderColor: "transparent",
    textBorderWidth: 1,
    textShadowColor: "black",
    textShadowBlur: 3,
    textShadowOffsetX: 3,
    textShadowOffsetY: 2,
}

function carateBarCharts(charName, node) {
    let div = document.createElement('div')
    div.id = charName
    div.style = 'width: 100%;height:100%;'
    document.querySelector('#' + node).appendChild(div)
    let chart = document.querySelector("#" + charName)
    let myChart = echarts.init(chart)
    let option = {
        color: ["#FF9900"],
        title: {
            text: 'ECharts ',
            textStyle: {
                fontStyle
            },
        },
        tooltip: {},
        legend: {
            data: ['销量'],
            right: '2%',
            top: '4%',
            textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "sans-serif",
                fontSize: 14,
                lineHeight: "30",
                textBorderColor: "transparent",
                textBorderWidth: 1,
                textShadowColor: "black",
                textShadowBlur: 3,
                textShadowOffsetX: 3,
                textShadowOffsetY: 2,
            },
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    myChart.setOption(option);
}

function createRight2(charName, node, data) {
    let div = document.createElement('div')
    div.id = charName
    div.style = 'width: 100%;height:100%;'
    document.querySelector('#' + node).appendChild(div)

    const line = document.getElementById(charName)
    const myCharts = echarts.init(line)
    const option = {
        title: {
            text: "各省新能源汽车保有量",
            subtext: "单位（万辆）",
            textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "sans-serif",
                fontSize: 18,
                lineHeight: "30",
                textBorderColor: "transparent",
                textBorderWidth: 1,
                textShadowColor: "black",
                textShadowBlur: 3,
                textShadowOffsetX: 3,
                textShadowOffsetY: 2,
            },
            subtextStyle: {
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                show: false
            },
            data: data.map(item => item.name),
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            show: false,
        }],
        series: [{
            name: '保有量',
            type: 'bar',
            barWidth: '60%',
            data: data.map(item => item.car)
        }]
    };
    myCharts.setOption(option)
}

function createMap(charName, node) {
    let div = document.createElement('div')
    div.id = charName
    div.style = 'width: 100%;height:100%;'
    document.querySelector('#' + node).appendChild(div)

    const myChart = echarts.init(document.getElementById(charName))

    echarts.registerMap('CHA', china)

    const option = {
        title: {
            text: "各省新能源汽车保有量",
            left: "center",
            textStyle: {
                //   fontSize: 30,
                color: "black"
            },
        },

        tooltip: {
            trigger: 'item'
        },

        visualMap: {
            min: 0,
            max: 90,
            left: 'left',
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            inRange: {
                color: ['#72C6EF', '#004E8F']
            }
        },

        series: [{
            name: '单位（万辆）',
            type: 'map',
            zoom: 1.2,
            mapType: 'CHA',
            label: {
                show: false
            },
            data: newCar.map(item => {
                var rObj = {};
                rObj.name = item.name
                rObj.value = item.car
                return rObj
            })
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
            data: ['Direct', 'Mail Ad', 'Klooo']
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