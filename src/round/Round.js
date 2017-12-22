class Round{
  constructor(name) {
    this.loader = $global.methods.addResource(name);
    this.progressListener(this.loader);
  }
  progressListener(loader) {
    loader.on('progress', (loader, res) => {
      console.log(`加载中...${res.url} ${loader.progress}%`);
    });
  }
}

export default Round;