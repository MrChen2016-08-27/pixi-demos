import addResource from '@/gameModels/addResource';

const loader = addResource('water', 'cat');

class Round1{
  constructor(app) {
    this.app = app;
    this.water = null;
    this.cat = null;
    loader.load((loaderer, resources) => {
      this.initWater(resources);
      this.initCat(resources);
    });
  }
  initWater(resources) {
    this.water = this.getSprite(resources, 'water');
    // 设置位置
    this.water.x = this.app.renderer.width / 2;
    this.water.y = this.app.renderer.height / 2;
    // 设置中心
    this.water.anchor.x = 0.5;
    this.water.anchor.y = 0.5;
    // 添加到舞台
    this.app.stage.addChild(this.water);
  }
  initCat(resources) {
    this.cat = this.getSprite(resources, 'cat');
    // 设置位置
    this.cat.x = this.cat.width;
    this.cat.y = this.app.renderer.height - this.cat.height;
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

