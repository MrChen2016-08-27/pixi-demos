import 'pixi.js/dist/pixi.js';

// 应用程序将使用 webGL 创建一个渲染器, 如果不可以，则使用画布
const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: false,
  transparent: false,
  resolution: 1,
});

document.body.appendChild(app.view);
// renderer 看做一个渲染器包含了所有渲染属性，如背景色，高，宽等
console.log(`渲染器背景色:${app.renderer.backgroundColor}`);
console.log(`渲染器宽度:${app.renderer.view.width}`);

// 为了确保画布被调整大小以匹配分辨率，请将autoResize设置为true
app.renderer.autoResize = true;

// 改变大小
app.renderer.resize(512, 512);

console.log(`渲染器宽度:${app.renderer.view.width}`);

