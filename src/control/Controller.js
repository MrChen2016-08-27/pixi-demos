class Controller{
  constructor() {
    this.loader = new PIXI.loaders.Loader();
  }
  loadSprite(config, className) {
    const newSprite = (resolve) => {
      this.loader.load((loader, resources) => {
        const oSprite = $global.methods.getSprite(resources, className);
        for (const attr in config) {
          oSprite[attr] = config[attr];
        }
        resolve(oSprite);
      });
    };
    return new Promise(newSprite);
  }
  /**
   * [rangeMove 在指定范围内移动]
   * @param  {Sprite对象} sprite   [用于改变对象的移动属性]
   * @param  {Object} range    [限制移动范围，startX 开始移动x坐标, startY 开始移动Y坐标, endX 结束移动x坐标, endY 结束移动y坐标]
   * @param  {Object} distance [移动距离, { x,y }, 应该放在 app.ticker.add 外层]
   * @return {Object}          [返回被改变后的移动距离对象]
   */
  rangeMove(sprite, range, distance) {
    let distanceX = distance.x;
    let distanceY = distance.y;
    const xStartValidate = sprite.x < range.startX && distanceX < 0;
    const xEndValidate = sprite.x > range.endX && distanceX > 0;
    const yStartValidate = sprite.y < range.startY && distanceY < 0;
    const yEndValidate = sprite.y > range.endY && distanceY > 0;
    if (xStartValidate || xEndValidate) {
      distanceX = -distanceX;
    }
    if (yStartValidate || yEndValidate) {
      distanceY = -distanceY;
    }
    sprite.x += distanceX;
    sprite.y += distanceY;
    return {
      x: distanceX,
      y: distanceY
    };
  }
}

export default Controller;