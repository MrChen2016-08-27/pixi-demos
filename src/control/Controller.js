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
}

export default Controller;
