import indexStore from '../../stores/index.store'

Page({
  data: indexStore.data,

  onLoad() {
    console.log('indexPage loaded!')
    indexStore.hello()
    indexStore.bind('index', this)
  },

  /**
   * 表单项改变
   * @param e 
   */
  onFormItemChange(e: WechatMiniprogram.CustomEvent) {
    indexStore.onFormItemChange(e)
  },

  /**
   * 开始兑奖按钮被点击
   */
   onSubmit() {
    indexStore.onSubmit()
  },
})
