function createDiv(id, node, style) {
    let newDiv = document.createElement('div')
    newDiv.classList.add(...style)
    newDiv.id = id
    node === 'body' ? document.body.appendChild(newDiv) : document.querySelector('#' + node).appendChild(newDiv)
}

document.body.className = 'max-h-full h-screen flex flex-col '
createDiv('head', 'body', ['h-28', 'w-full', 'h1', 'text-green-500', 'text-center', 'text-4xl', 'flex', 'items-center', 'justify-center'])
document.querySelector('.h1').innerHTML = "新能源汽车数据分析大屏"
    // document.querySelector('#head').style = "background-image: url(./image/gg.jpg)"

createDiv('content', 'body', ['flex', 'flex-grow', 'grid', 'grid-cols-10', 'bg-cover', 'bg-center'])
    // document.querySelector('#content').style = "background-image: url(./image/background.svg)"

createDiv('left', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])
createDiv('middle', 'content', ['h-auto', 'col-span-4', 'flex', 'flex-col'])
createDiv('right', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])

createDiv('crad', 'left', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'box'])
createDiv('crad2', 'left', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'box'])
createDiv('crad3', 'left', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'box'])

createDiv('middle0', 'middle', ['h-1/4', 'm-3', 'rounded', 'border', 'border-blue-300', 'shadow-md'])
createDiv('middle1', 'middle', ['h-3/4'])

createMap('chinaMap', 'middle1')

createDiv('right0', 'right', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'box'])
createDiv('right1', 'right', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'box'])
createDiv('right2', 'right', ['h-full', 'm-3', 'bg-opacity-40', 'shadow-md', 'border', 'box'])

carateBarCharts('bar', 'crad')
carateBarCharts('xx', 'crad2')
carateBarCharts('x', 'crad3')

createRight2('EchartsRight2', 'right2', newCar)
createRight0('EchartsRight0', 'right0')