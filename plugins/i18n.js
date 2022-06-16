import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '~/locales/en.js'
import zhTw from '~/locales/zh_tw.js'

export default ({ app, store }) => {
  Vue.use(VueI18n)
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en,
      'zh-tw': zhTw
    }
  })
}
