import addResource from '@/resources/addResource';

const loader = addResource('water', 'cat');

class Round1{
  constructor(app) {
    this.app = app;
    this.water = null;
    this.cat = null;
    loader.load((loaderer, resources) => {
      this.initWater(resources);
      this.initCat(resources);
      console.log('加载完成');
    }).on('progress', (loader, res) => {
      console.log(`加载中...${res.url} ${loader.progress}%`);
    });
  }
  initWater(resources) {
    this.water = this.getSprite(resources, 'water');
    const x = this.app.renderer.width / 2;
    const y = this.app.renderer.height / 2;
    // 设置位置
    this.water.position.set(x, y);
    // 设置中心
    this.water.anchor.x = 0.5;
    this.water.anchor.y = 0.5;

    // 添加到舞台
    this.app.stage.addChild(this.water);
  }
  initCat(resources) {
    this.cat = this.getSprite(resources, 'cat');
    const x = this.cat.width;
    const y = this.app.renderer.height - this.cat.height;
    // 设置位置
    this.cat.position.set(x, y);
    // 设置中心
    this.cat.anchor.x = 0.5;
    this.cat.anchor.y = 0.5;
    // 添加到舞台
    this.app.stage.addChild(this.cat);
  }
  getSprite(resources, name) {
    const { texture } = resources[name];
    const sprite = new PIXI.Sprite(texture);
    return sprite;
  }
};

export default Round1;

