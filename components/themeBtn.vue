<template>
  <div class="select-btn ma-1">
    {{ $t('theme') }} ：
    <select v-model="theme" @change="changeTheme($event)">
      <option v-for="(list, idx) in themeList" :key="`theme-${idx}`" :value="list.value">
        {{ $t(list.name) }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'ThemeBtn',
  data () {
    return {
      theme: '',
      themeList: [
        {
          name: 'default',
          value: 'default'
        },
        {
          name: 'kanahei',
          value: 'kanahei'
        }
      ]
    }
  },
  mounted () {
    this.theme = this.$store.state.theme
  },
  methods: {
    changeTheme ($event) {
      this.$store.commit('SET_THEME', $event.target.value)
    }
  }
}
</script>
