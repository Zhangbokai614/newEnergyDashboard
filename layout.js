function createDiv(id, node, style) {
    let newDiv = document.createElement('div')
    newDiv.classList.add(...style)
    newDiv.id = id
    node === 'body' ? document.body.appendChild(newDiv) : document.querySelector('#' + node).appendChild(newDiv)
}

document.body.className = 'max-h-full h-screen flex flex-col bg-blue-900'
createDiv('head', 'body', ['h-28', 'w-full', 'shadow-lg', 'border-b-4', 'border-yellow-400', 'border-opacity-95', 'text-7xl', 'h1', 'italic', 'text-center', 'text-blue-400'])
document.querySelector('.h1').innerHTML = "好看的大屏"
    // document.querySelector('#head').style = "background-image: url(./image/gg.jpg)"

createDiv('content', 'body', ['flex', 'flex-grow', 'grid', 'grid-cols-10', 'bg-cover', 'bg-center'])
    // document.querySelector('#content').style = "background-image: url(./image/background.svg)"

createDiv('left', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])
createDiv('middle', 'content', ['h-auto', 'col-span-4', 'flex', 'flex-col'])
createDiv('right', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])

createDiv('crad', 'left', ['h-full', 'm-3', 'bg-blue-400', 'bg-opacity-40', 'shadow-md', 'border'])
createDiv('crad2', 'left', ['h-full', 'm-3', 'bg-blue-400', 'bg-opacity-40', 'shadow-md', 'border'])
createDiv('crad3', 'left', ['h-full', 'm-3', 'bg-blue-400', 'bg-opacity-40', 'shadow-md', 'border'])

createDiv('right0', 'right', ['h-full', 'm-3', 'rounded', 'border', 'border-blue-300', 'shadow-md'])
createDiv('right1', 'right', ['h-full', 'm-3', 'rounded', 'border', 'border-blue-300', 'shadow-md'])
createDiv('right2', 'right', ['h-full', 'm-3', 'rounded', 'border', 'border-blue-300', 'shadow-md'])

carateBarCharts('bar', 'crad')
carateBarCharts('xx', 'crad2')
carateBarCharts('x', 'crad3')

createRight2('EchartsRight2', 'right2', newCar)