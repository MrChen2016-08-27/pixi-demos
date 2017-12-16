import 'pixi.js/dist/pixi';
import './css/layout.css';
import rendererTest from './renderer/rendererTest';

// 创建一个 Application， Application 将使用 webGL 创建一个渲染器, 如果不可以，则使用画布
const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: false,
  transparent: false,
  resolution: 1,
});

document.body.appendChild(app.view);

// 对渲染器部分属性测试
rendererTest.testAttr(app.renderer);

// 使用加载器来加载任何形式的图像，使其可以转换为纹理(webgl需要的格式)
PIXI.loader.add('water', 'src/img/water.png').load(setup);

function setup(loader, resources) {
  const { texture } = resources.water;
  const water = new PIXI.Sprite(texture);

  // 设置位置
  water.x = app.renderer.width / 2;
  water.y = app.renderer.height / 2;
  // 设置中心
  water.anchor.x = 0.5;
  water.anchor.y = 0.5;

  //添加到舞台
  app.stage.addChild(water);
};


