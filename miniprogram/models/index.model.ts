export interface IndexOptions {
  onDataChange: () => void
}

export class IndexModel {
  phone: string
  code: string
  options: IndexOptions
  constructor(options: IndexOptions) {
    this.phone = ''
    this.code = ''
    this.options = options
  }

  hello() {
    console.log('Hello World! This is indexModel!')
  }

  /**
   * 表单项改变
   * @param e 
   */
  onFormItemChange(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget
    const { value } = e.detail
    // @ts-ignore
    this[id] = value
    this.options.onDataChange && this.options.onDataChange()
  }

  /**
   * 开始兑奖按钮被点击
   */
  onSubmit() {
    console.log(`indexModel.phone: ${this.phone}\nindexModel.code: ${this.code}`)
  }
}
