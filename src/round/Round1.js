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
      this.initCat(catTexture);
      this.initWater(waterTexture);
    })
  }

  initWater(waterTexture) {
    const self = this;
    const x = self.app.renderer.width / 2;
    const y = self.app.renderer.height / 2;
    const waterControl = new WaterControl();
    const sprite = new PIXI.Sprite(waterTexture);
    sprite.position.set(x, y);
    sprite.anchor.set(0.5, 0.5);
    this.water = sprite;
    // 添加到舞台
    this.app.stage.addChild(this.water);
    let distance = {
      x: 2,
      y: 3
    };
    const range = {
      startX: this.cat.x,
      startY: 0,
      endX: this.app.renderer.width,
      endY: this.cat.y
    };
    this.app.ticker.add(delta => {
      console.log(this.cat.y);
      distance = waterControl.rangeMove(this.water, range, distance);
    });
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

