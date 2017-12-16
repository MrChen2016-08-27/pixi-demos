
const rendererTest = {
  // 对渲染器的属性测试
  testAttr(renderer) {
    // renderer 一个app渲染器包含了所有渲染属性，如背景色，高，宽等
    console.log(`渲染器背景色:${renderer.backgroundColor}`);
    console.log(`渲染器宽度:${renderer.view.width}`);

    // 为了确保画布被调整大小以匹配分辨率，请将autoResize设置为true
    renderer.autoResize = true;

    // 改变大小
    renderer.resize(512, 512);

    console.log(`渲染器宽度:${renderer.view.width}`);
  },
};

export default rendererTest;