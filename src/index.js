import 'pixi.js/dist/pixi.js';

// 应用程序将使用 webGL 创建一个渲染器, 如果不可以，则使用画布
const app = new PIXI.Application();
document.body.appendChild(app.view);
