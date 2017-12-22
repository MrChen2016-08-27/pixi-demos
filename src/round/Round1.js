import CatControl from '@/control/CatController';
import WaterControl from '@/control/WaterController';
import Round from '@/round/Round';


class Round1 extends Round{
  constructor(app) {
    super('round1');
    this.app = app;
    this.water = null;
    this.cat = null;
    this.loader.load((loaderer, resources) => {
      const { textures } = resources.round1;
      const waterTexture = textures['water.png'];
      const catTexture = textures['cat.png'];
      this.initWater(waterTexture);
      this.initCat(catTexture);
    })
  }
  initWater(waterTexture) {
    const self = this;
    const x = self.app.renderer.width / 2;
    const y = self.app.renderer.height / 2;
    const sprite = new PIXI.Sprite(waterTexture);
    sprite.position.set(x, y);
    sprite.anchor.set(0.5, 0.5);
    this.water = sprite;
    // 添加到舞台
    this.app.stage.addChild(this.water);

  }
  initCat(catTexture) {
    const self = this;
    const sprite = new PIXI.Sprite(catTexture);
    const x = sprite.width;
    const y = self.app.renderer.height - sprite.height;
    sprite.position.set(x, y);
    sprite.anchor.set(0.5, 0.5);
    this.cat = sprite;
    this.app.stage.addChild(this.cat);
  }
};

export default Round1;

