import resourceList from '@/resources/resourceList';

const methods = {
  getSprite(resources, name) {
    const { texture } = resources[name];
    const sprite = new PIXI.Sprite(texture);
    return sprite;
  },
  loadSprite(loader, className) {
    const newSprite = (resolve) => {
      loader.load((loader, resources) => {
        const oSprite = this.getSprite(resources, className);
        resolve(oSprite);
      });
    };
    return new Promise(newSprite);
  },
  addResource(...names) {
    const loader = new PIXI.loaders.Loader();
    names.forEach((name) => {
      resourceList.some((obj) => {
        if (obj.name === name) {
          loader.add(name, obj.path);
          return true;
        }
        return false;
      });
    });
    return loader;
  },
};

window.$global = {
  methods,
};