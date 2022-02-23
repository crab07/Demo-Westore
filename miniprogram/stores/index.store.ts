import { Store } from 'westore'
import { IndexModel, IndexOptions } from '../models/index.model'

class IndexStore extends Store {
  indexModel: IndexModel
  constructor() {
    super()
    this.data = {
      phone: '',
      code: ''
    }
    const indexOptions = <IndexOptions>{
      onDataChange: () => {
        this.data.phone = this.indexModel.phone
        this.data.code = this.indexModel.code
        this.update()
      }
    }
    this.indexModel = new IndexModel(indexOptions)
  }

  hello() {
    console.log('Hello World! This is indexStore!')
    this.indexModel.hello()
  }

  /**
   * 表单项改变
   * @param e 表单项对象
   */
  onFormItemChange(e: WechatMiniprogram.CustomEvent) {
    this.indexModel.onFormItemChange(e)
  }

  /**
   * 开始兑奖按钮被点击
   */
  onSubmit() {
    console.log(`indexStore.data.phone: ${this.data.phone}\nindexStore.data.code: ${this.data.code}`)
    this.indexModel.onSubmit()
  }
}

const indexStore = new IndexStore()
export default indexStore
