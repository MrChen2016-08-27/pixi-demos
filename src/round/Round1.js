import CatControl from '@/control/CatController';
import WaterControl from '@/control/WaterController';
import Cat from '@/models/Cat';
import Water from '@/models/Water';
import Round from '@/round/Round';


class Round1 extends Round{
  constructor() {
    super('round1');
    this.map = new PIXI.Container();
    // 关卡总共水资源集合
    this.waters = [];
    this.cat = null;
    this.player
    this.initRound();
    this.initGameLoopList();

  }
  initRound() {
    // 关卡资源加载完成后初始化事件
    this.loader.load((loaderer, resources) => {
      const { textures } = resources.round1;
      for (let i = 0; i < 3; i++) {
        this.initWater(textures);
      }
      this.initCat(textures);
      game.stage.addChild(this.map);
      this.runGameLoop();
    })
  }
  initGameLoopList() {
    const self = this;
    this.gameLoopList = {
      waterRangeMove: self.waterRangeMove.bind(this),
    };
  }
  initWater(texture) {
    const x = game.renderer.width / 2;
    const y = game.renderer.height / 2;
    const water = new Water(texture);
    const waterSprite = water.sprite;
    waterSprite.position.set(x, y);
    waterSprite.pivot.set(0.5, 0.5);
    // 添加到容器
    this.map.addChild(waterSprite);
    waterSprite.vx = Math.random() * 3;
    waterSprite.vy = Math.random() * 3;
    this.waters.push(water);
  }
  // 水瓶随机移动
  waterRangeMove() {
    const waterControl = new WaterControl();
    this.waters.forEach((water) => {
      const { sprite } = water;
      const range = {
        startX: 0,
        startY: 0,
        endX: game.renderer.width - sprite.width,
        endY: game.renderer.height - sprite.height,
      };
      waterControl.rangeMove(sprite, range);
    });
  }
  // 动态运行事件循环
  runGameLoop() {
    game.ticker.add(() => {
      for (let action in this.gameLoopList) {
        this.gameLoopList[action]();
      }
    });
  }
  initCat(texture) {
    this.cat = new Cat(texture);
    const { sprite } = this.cat;
    const x = sprite.width;
    const y = game.renderer.height - sprite.height;
    sprite.position.set(x, y);
    sprite.pivot.set(0.5, 0.5);
    sprite.vx = 2;
    sprite.vy = 2;
    this.map.addChild(sprite);
    // 添加键盘方向控制
    $global.methods.actionDirection(sprite);
    // 碰撞到则移除水瓶
    game.ticker.add(delta => {
      this.waters.forEach((water, index) => {
        const isImpact = $global.methods.hitTestRectangle(sprite, water.sprite);
        if (isImpact) {
          this.map.removeChild(water.sprite);
          this.waters.splice(index, 1);
        }
      });
    });
  }

};

export default Round1;

