import indexStore from '../../stores/index.store'

Page({
  data: indexStore.data,

  onLoad() {
    console.log('indexPage loaded!')
    indexStore.hello()
  },
})
