import CatControl from '@/control/CatController';
import WaterControl from '@/control/WaterController';
import Round from '@/round/Round';


class Round1 extends Round{
  constructor(app) {
    const loader = $global.methods.addResource('water', 'cat');
    super(loader);
    this.app = app;
    this.water = null;
    this.cat = null;
    this.loader = loader;
    this.loader.load((loaderer, resources) => {
      this.initWater(resources);
      this.initCat(resources);
    })
  }
  initWater(resources) {
    const self = this;
    const x = self.app.renderer.width / 2;
    const y = self.app.renderer.height / 2;
    const sprite = $global.methods.getSprite(resources, 'water');
    const waterCont = new WaterControl();
    sprite.position.set(x, y);
    sprite.anchor.set(0.5, 0.5);
    this.water = sprite;
    // 添加到舞台
    this.app.stage.addChild(this.water);

  }
  initCat(resources) {
    const self = this;
    const CatCont = new CatControl();
    const sprite = $global.methods.getSprite(resources, 'cat');
    const x = sprite.width;
    const y = self.app.renderer.height - sprite.height;
    sprite.position.set(x, y);
    sprite.anchor.set(0.5, 0.5);
    this.cat = sprite;
    this.app.stage.addChild(this.cat);
  }
};

export default Round1;

