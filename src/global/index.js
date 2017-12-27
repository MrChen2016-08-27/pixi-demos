import resourceList from '@/resources/resourceList';
import keyBoard from './keyBoard';

const methods = {
  keyBoard,
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
  /**
   * [actionDirection 对一个 sprite 添加方向操作]
   * @param  {Object} sprite [一个 Sprite 对象， 必须]
   * @param  {Object} range [移动的范围限制， 可选]
   * @return {[]}        [无]
   */
  actionDirection(sprite, range = {}) {
    const left = keyBoard(37),
      up = keyBoard(38),
      right = keyBoard(39),
      down = keyBoard(40);
    left.keydown = () => {
      sprite.vx = -Math.abs(sprite.vx);
    };
    up.keydown = () => {
      sprite.vy = -Math.abs(sprite.vy);
    };
    right.keydown = () => {
      sprite.vx = Math.abs(sprite.vx);
    };
    down.keydown = () => {
      sprite.vy = Math.abs(sprite.vy);
    };
    game.ticker.add(() => {
      const maxX = range.endX || game.renderer.width - sprite.width;
      const minX = range.startX || 0;
      const maxY = range.endY || game.renderer.height - sprite.height;
      const minY = range.startY || 0;
      const isMoveX = (sprite.x === maxX && sprite.vx < 0) || (sprite.x === minX && sprite.vx > 0);
      const isMoveY = (sprite.y === maxY && sprite.vy < 0) || (sprite.y === minY && sprite.vy > 0);
      if (left.isDown || right.isDown) {
        // x范围控制
        if (sprite.x < maxX && sprite.x > minX) {
          sprite.x += sprite.vx;
        } else if (sprite.x > maxX) {
          sprite.x = maxX;
        } else if (sprite.x < minX) {
          sprite.x = minX;
        } else if (isMoveX) {
          sprite.x += sprite.vx;
        }
      }
      if (up.isDown || down.isDown) {
        // y范围控制
        if (sprite.y < maxY && sprite.y > minY) {
          sprite.y += sprite.vy;
        } else if (sprite.y > maxY) {
          sprite.y = maxY;
        } else if (sprite.y < minY) {
          sprite.y = minY;
        } else if (isMoveY) {
          sprite.y += sprite.vy;
        }
      }
    });
  },
};

window.$global = {
  methods,
};