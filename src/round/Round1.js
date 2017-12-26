import CatControl from '@/control/CatController';
import WaterControl from '@/control/WaterController';
import Round from '@/round/Round';


class Round1 extends Round{
  constructor(app) {
    super('round1');
    game = app;
    // 关卡总共水资源集合
    this.waters = [];
    this.cat = null;
    this.loader.load((loaderer, resources) => {
      const { textures } = resources.round1;
      const waterTexture = textures['water.png'];
      const catTexture = textures['cat.png'];
      this.initCat(catTexture);
      for (let i = 0; i < 3; i++) {
        this.initWater(waterTexture);
      }
    })
  }

  initWater(waterTexture) {
    const self = this;
    const x = self.app.renderer.width / 2;
    const y = self.app.renderer.height / 2;
    const waterControl = new WaterControl();
    const waterSprite = new PIXI.Sprite(waterTexture);
    waterSprite.position.set(x, y);
    waterSprite.pivot.set(0.5, 0.5);
    // 添加到舞台
    game.stage.addChild(waterSprite);
    let distance = {
      x: Math.round(Math.random() * 3 + 0.5),
      y: Math.round(Math.random() * 3 + 0.5)
    };
    const range = {
      startX: this.cat.x,
      startY: 0,
      endX: game.renderer.width,
      endY: this.cat.y
    };
    this.waters.push(waterSprite);
    game.ticker.add(delta => {
      distance = waterControl.rangeMove(waterSprite, range, distance);
    });
  }
  initCat(catTexture) {
    const self = this;
    const sprite = new PIXI.Sprite(catTexture);
    const x = sprite.width;
    const y = self.app.renderer.height - sprite.height;
    sprite.position.set(x, y);
    sprite.pivot.set(0.5, 0.5);
    this.cat = sprite;
    game.stage.addChild(this.cat);
  }

};

export default Round1;

