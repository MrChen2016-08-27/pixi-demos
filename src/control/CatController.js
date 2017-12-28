import Controller from './Controller';
import Cat from '@/models/Cat';

class CatController extends Controller{
  constructor() {
    super();
    this.cat = new Cat();
    this.loadHp();
  }
  loadHp() {
    this.cat.hp = 500;
    const maxHp = new PIXI.Graphics();
    const nowHp = new PIXI.Graphics();
    game.stage.addChild(maxHp);
    game.ticker.add(() => {
      maxHp.clear();
      maxHp.beginFill(0x66CCFF);
      maxHp.drawRect(0, 0, this.cat.hp, 50);
    });
  }

}

export default CatController;