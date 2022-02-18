import { Store } from 'westore'
import { IndexModel } from '../models/index.model'

class IndexStore extends Store {
  indexModel: IndexModel
  constructor() {
    super()
    this.data = {}
    this.indexModel = new IndexModel()
  }

  hello() {
    console.log('Hello World! This is indexStore!')
    this.indexModel.hello()
  }
}

const indexStore = new IndexStore()
export default indexStore
