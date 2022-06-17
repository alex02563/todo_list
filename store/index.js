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
    },
    {
      id: 3,
      content: '【台味冰旅行】台北｜君悅酒店｜住宿加贈 Double V 聯名冰品＋翌日延遲退房至 14:00｜平日限量升等 101 景觀客房',
      checked: true
    },
    {
      id: 4,
      content: '台北北投溫泉｜日勝生加賀屋國際溫泉飯店',
      checked: false
    },
    {
      id: 5,
      content: '【限時88折：買五送一】桃園青埔｜COZZI Blu 逸・市集 單人平日午晚餐通用券｜須自行電話訂位｜國泰飯店2022春季線上旅展',
      checked: false
    }
  ],
  locale: 'en',
  theme: 'default'
})

export const getters = {
  lists (state) {
    return state.lists
  },
  theme (state) {
    return state.theme
  }
}

export const mutations = {
  SET_LISTS (state, data) {
    state.lists = data
  },
  SET_THEME (state, theme) {
    state.theme = theme
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
