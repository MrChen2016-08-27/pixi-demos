import Cat from '@/models/Cat';

const className = 'Cat';

class CatController{
  constructor() {
    this.model = new Cat();
  }
}

export default CatController;