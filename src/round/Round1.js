import addResource from '@/gameModels/addResource';

const loader = addResource('water', 'cat');

class Round1{
  constructor(app) {
    this.app = app;
    loader.load((loaderer, resources) => {
      this.initWater(resources);
      this.initCat(resources);
    });
  }
  initWater(resources) {
    const water = this.getSprite(resources, 'water');
    // 设置位置
    water.x = this.app.renderer.width / 2;
    water.y = this.app.renderer.height / 2;
    // 设置中心
    water.anchor.x = 0.5;
    water.anchor.y = 0.5;
    this.app.stage.addChild(water);
  }
  initCat(resources) {
    const cat = this.getSprite(resources, 'cat');
    // 设置位置
    cat.x = cat.width;
    cat.y = this.app.renderer.height - cat.height;
    // 设置中心
    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;
    this.app.stage.addChild(cat);
  }
  getSprite(resources, name) {
    const { texture } = resources[name];
    const sprite = new PIXI.Sprite(texture);
    return sprite;
  }
};

export default Round1;

