class Water{
  constructor(texture) {
    // 回复HP容量
    this.hp = 100;
    // 所需金钱
    this.gold = 50;
    // sprite
    this.sprite = new PIXI.Sprite(texture['water.png']);
  }
}

export default Water;