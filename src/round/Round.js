class Round{
  constructor(loader) {
    this.progressListener(loader);
  }
  progressListener(loader) {
    loader.on('progress', (loader, res) => {
      console.log(`加载中...${res.url} ${loader.progress}%`);
    });
  }
}

export default Round;