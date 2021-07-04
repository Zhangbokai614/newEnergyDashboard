function createDiv(id, node, style) {
    const newDiv = document.createElement('div')
    newDiv.classList.add(...style)
    newDiv.id = id
    node === 'body' ? document.body.appendChild(newDiv) : document.querySelector('#' + node).appendChild(newDiv)
}

function createButton (id, node, click, text, style) {
    const button = document.createElement('button')
    button.classList.add(...style)
    button.id = id
    button.innerHTML = text
    button.onclick = click
    node === 'body' ? document.body.appendChild(button) : document.querySelector('#' + node).appendChild(button)
}

document.body.className = 'max-h-full h-screen flex flex-col '
createDiv('head', 'body', ['h-36', 'w-full', 'h1', 'text-center', 'font-mono','text-6xl', 'flex', 'items-center', 'justify-center', 'z-50'])

document.querySelector('.h1').innerHTML = "新 能 源 汽 车 数 据 分 析 大 屏"

createDiv('contentBox', 'body', ['flex', 'flex-grow', 'relative'])
createDiv('content', 'contentBox', ['flex', 'flex-grow','grid', 'grid-cols-10', 'z-50'])
document.querySelector('#content')

createDiv('left', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])
createDiv('middle', 'content', ['h-auto', 'col-span-4', 'flex', 'flex-col', 'border-r-2', 'border-l-2', 'border-blue-200', 'mt-2'])
createDiv('right', 'content', ['h-auto', 'col-span-3', 'flex', 'flex-col'])

createDiv('crad', 'left', ['h-full', 'm-3', 'p-2', 'bg-opacity-40', 'shadow-md','leftBox'])
createDiv('crad2', 'left', ['h-full', 'm-3', 'p-2', 'bg-opacity-40', 'shadow-md', 'leftBox'])

createDiv('middleOne', 'middle', ['h-1/3', 'm-3', 'middleBox', 'flex', 'flex-row', 'flex-nowrap'])
createDiv('middleOneLeft', 'middleOne', ['border-r-2', 'h-full', 'w-1/5', 'flex', 'flex-col', 'space-y-2', 'p-2'])
createDiv('middleOneRight', 'middleOne', ['h-full', 'w-4/5', 'p-2'])
createContrast('xx', 'middleOneRight', contrast, '全国', 0)
createButton('test', 'middleOneLeft', () => {createContrast('xx', 'middleOneRight', contrast, '全国')}, '全国',['h-1/6', 'border-2', 'border-blue-400', 'flex', 'flex-grow', 'text-white', 'text-base', 'justify-center', 'transition', 'duration-500', 'ease-in-out', 'hover:bg-blue-300', 'transform', 'hover:-translate-y-1', 'hover:scale-110'])
createButton('test', 'middleOneLeft', () => {createContrast('xx', 'middleOneRight', contrast, '大众集团')}, '大众集团',['h-1/6', 'border-2', 'border-blue-400', 'flex', 'flex-grow', 'text-white', 'text-base', 'justify-center', 'transition', 'duration-500', 'ease-in-out', 'hover:bg-blue-300', 'transform', 'hover:-translate-y-1', 'hover:scale-110'])
createButton('test', 'middleOneLeft', () => {createContrast('xx', 'middleOneRight', contrast, '长安汽车')}, '长安汽车',['h-1/6', 'border-2', 'border-blue-400', 'flex', 'flex-grow', 'text-white', 'text-base', 'justify-center', 'transition', 'duration-500', 'ease-in-out', 'hover:bg-blue-300', 'transform', 'hover:-translate-y-1', 'hover:scale-110'])
createButton('test', 'middleOneLeft', () => {createContrast('xx', 'middleOneRight', contrast, '吉利')}, '吉利',['h-1/6', 'border-2', 'border-blue-400', 'flex', 'flex-grow', 'text-white', 'text-base', 'justify-center', 'transition', 'duration-500', 'ease-in-out', 'hover:bg-blue-300', 'transform', 'hover:-translate-y-1', 'hover:scale-110'])
createButton('test', 'middleOneLeft', () => {createContrast('xx', 'middleOneRight', contrast, '五菱')}, '五菱',['h-1/6', 'border-2', 'border-blue-400', 'flex', 'flex-grow', 'text-white', 'text-base', 'justify-center', 'transition', 'duration-500', 'ease-in-out', 'hover:bg-blue-300', 'transform', 'hover:-translate-y-1', 'hover:scale-110'])
createDiv('middleTwo', 'middle', ['h-2/3', 'm-3', 'middleBox'])

createDiv('right0', 'right', ['h-1/6', 'm-3', 'p-2', 'bg-opacity-40', 'shadow-md', 'rightBox'])
createDiv('right1', 'right', ['h-3/6', 'm-3', 'shadow-md', 'rightBox'])
createDiv('right2', 'right', ['h-2/6', 'm-3', 'p-2', 'bg-opacity-40', 'shadow-md', 'rightBox'])

createNewCar('chartsRight0', 'right0')
createWordCloud('chartsRight1', 'right1')
carateBaCharts0('chartsRight2', 'right2')

carateWorldSalesCharts('world', 'crad', world, '中、美、欧近五年新能源汽车销量(万辆)', '保有量')
createRingCharts('ring', 'crad2', battery, '2020 年全球动力电池装机格局')

createMap('map', 'middleTwo')