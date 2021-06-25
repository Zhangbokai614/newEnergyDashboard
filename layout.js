function createDiv(id, node, style) {
    let newDiv = document.createElement('div')
    newDiv.classList.add(...style)
    newDiv.id = id
    node === 'body' ? document.body.appendChild(newDiv) : document.querySelector('#' + node).appendChild(newDiv)
}

document.body.className = 'max-h-full h-screen flex flex-col '
createDiv('head', 'body', ['h-28', 'w-full', 'h1', 'text-green-500', 'text-center', 'text-6xl', 'flex', 'items-center', 'justify-center'])
document.querySelector('.h1').innerHTML = "新 能 源 汽 车 数 据 分 析 大 屏"
    // document.querySelector('#head').style = "background-image: url(./image/gg.jpg)"

createDiv('content', 'body', ['flex', 'flex-grow', 'grid', 'grid-cols-10', 'bg-cover', 'bg-center'])
    // document.querySelector('#content').style = "background-image: url(./image/background.svg)"

createDiv('left', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])
createDiv('middle', 'content', ['h-auto', 'col-span-4', 'flex', 'flex-col'])
createDiv('right', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])

createDiv('crad', 'left', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'rounded-lg','box'])
createDiv('crad2', 'left', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'rounded-lg','box'])
createDiv('crad3', 'left', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'rounded-lg', 'box'])

createDiv('middle0', 'middle', ['h-1/4', 'm-3', 'rounded', 'border', 'border-blue-300', 'shadow-md'])
createDiv('middle1', 'middle', ['h-3/4'])

createDiv('right0', 'right', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'rounded-lg', 'box'])
createDiv('right1', 'right', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'rounded-lg', 'box'])
createDiv('right2', 'right', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'rounded-lg', 'box'])

carateLineCharts('world', 'crad', world, '中、美、欧近五年新能源汽车销量(万辆)', '保有量')
createRingCharts('ring', 'crad2', battery, '2020 年全球动力电池装机格局')
carateBarCharts('x', 'crad3', newCar, 'title', '保有量')

carateLineCharts('xx', 'middle0', world, '传统汽车与新能源汽车产量对比', '保有量')
createMap('chinaMap', 'middle1')

carateBarCharts('EchartsRight2', 'right2', newCar, '各省新能源车保有量(万辆)', '保有量')
createRight0('EchartsRight0', 'right0')