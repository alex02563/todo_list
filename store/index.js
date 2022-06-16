export const state = () => ({
  lists: [
    {
      id: 0,
      content: '【台北小巨蛋旁】玄牝.詠春 │ 禪仙道課程 : 方士的修行藝術 / 武術 / 肢體開發',
      checked: false
    },
    {
      id: 1,
      content: '【預售74折】台北展覽 | 普立茲新聞攝影獎80週年展門票',
      checked: true
    },
    {
      id: 2,
      content: '【預售74折】台北展覽 | 義大利怪美殿堂特展 TOILETPAPER: The Studio門票',
      checked: false
    }
  ],
  locale: 'en'
})

export const getters = {
  lists (state) {
    return state.lists
  }
}

export const mutations = {
  SET_LISTS (state, data) {
    state.lists = data
  }
}

export const actions = {
  setLists ({ commit }, data) {
    window.$nuxt.$root.$loading.start()
    setTimeout(() => {
      window.$nuxt.$root.$loading.finish()
      commit('SET_LISTS', data)
    }, 1000)
  }
}
