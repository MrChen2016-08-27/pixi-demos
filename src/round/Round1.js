import CatControl from '@/control/CatController';
import WaterControl from '@/control/WaterController';
import Round from '@/round/Round';


class Round1 extends Round{
  constructor() {
    super('round1');
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
    const x = game.renderer.width / 2;
    const y = game.renderer.height / 2;
    const waterControl = new WaterControl();
    const waterSprite = new PIXI.Sprite(waterTexture);
    waterSprite.position.set(x, y);
    waterSprite.pivot.set(0.5, 0.5);
    // 添加到舞台
    game.stage.addChild(waterSprite);
    waterSprite.vx = Math.round(Math.random() * 3 + 0.5);
    waterSprite.vy = Math.round(Math.random() * 3 + 0.5);
    const range = {
      startX: this.cat.x,
      startY: 0,
      endX: game.renderer.width,
      endY: this.cat.y
    };
    this.waters.push(waterSprite);
    game.ticker.add(delta => {
      waterControl.rangeMove(waterSprite, range);
    });
  }
  initCat(catTexture) {
    const sprite = new PIXI.Sprite(catTexture);
    const x = sprite.width;
    const y = game.renderer.height - sprite.height;
    sprite.position.set(x, y);
    sprite.pivot.set(0.5, 0.5);
    sprite.vx = 2;
    sprite.vy = 2;
    this.cat = sprite;
    game.stage.addChild(this.cat);
    $global.methods.actionDirection(this.cat);
  }

};

export default Round1;

