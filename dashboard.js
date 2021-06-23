const body = document.body


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
                fontSize: 25
            },
            subtextStyle: {
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
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