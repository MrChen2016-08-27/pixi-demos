import resourceList from './resourceList';

/**
 * 存放加载的游戏模型资源配置
 */
const loader = new PIXI.loaders.Loader();
const addResource = function(...names) {
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
}

export default addResource;



