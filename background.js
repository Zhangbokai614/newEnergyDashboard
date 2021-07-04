createDiv('bottom', 'body', ['z-40', 'max-h-screen', 'h-full', 'w-full', 'bg-cover', 'bg-center', 'absolute', 'inset-x-0'])
document.querySelector('#bottom').style = "background-image: url(./image/db.png)"

createDiv('starrySky', 'body', ['z-20', 'max-h-screen', 'h-full', 'w-full', 'bg-cover', 'bg-center', 'absolute', 'inset-x-0'])
document.querySelector('#starrySky').style = "background-image: url(./image/ds.png)"

createDiv('earth', 'body', ['z-30', 'max-h-screen', 'h-full', 'w-full', 'bg-cover', 'bg-center', 'absolute', 'inset-x-0'])
// document.querySelector('#earth').style = "background-image: url(./image/d.png)"

var mouse = { x: 0, y: 0 }
document.addEventListener('mousemove', (e) => {
  mouse.x = e.pageX
  mouse.y = e.pageY
  document.querySelector("#bottom").style.backgroundPosition = (-mouse.x * 0.1 + 100 + 'px ')
  document.querySelector("#earth").style.backgroundPosition = (-mouse.x * 0.08 + 100 + 'px ') + (-mouse.y * 0.03 + 30 + 'px')
  document.querySelector("#starrySky").style.backgroundPosition = (-mouse.x * 0.04 + 100 + 'px ') + (-mouse.y * 0.02 + 10 + 'px')
})

backgroundEarth('earth2', 'earth')

function backgroundEarth(chartsName, node) {
  let div = document.createElement('div')
  div.id = chartsName
  div.style = 'width: 100%;height:100%;'
  document.querySelector('#' + node).appendChild(div)
  const chart = document.querySelector("#" + chartsName)
  const myChart = echarts.init(chart)
  var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'
  option = {
    // backgroundColor: '#fff',
    globe: {
      viewControl: {
        autoRotate: 'boolean',
        autoRotateDirection: 'ccw',
        autoRotateSpeed: '5',
        // distance: '1'
      },
      baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
      // heightTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
      displacementScale: 0.04,
      shading: 'realistic',
      // environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
      realisticMaterial: {
        roughness: 2
      },
      postEffect: {
        enable: true
      },
      light: {
        main: {
          intensity: 5,
          shadow: true
        },
        ambientCubemap: {
          // texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
          diffuseIntensity: 0.2
        }
      }
    }
  };
  myChart.setOption(option);
}
