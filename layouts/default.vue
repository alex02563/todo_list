<template>
  <div :class="[theme === 'default' ? 'default' : 'kanahei']">
    <header class="flex row fixed">
      <hamber-btn @eventClick="isShow = !isShow" />
      <div class="grow-1">
        {{ $t('title') }}
        <img
          v-show="theme === 'kanahei'"
          width="50"
          class="ml-2"
          src="~/assets/img/logo.png"
          alt="logo"
        >
      </div>
      <img width="30" class="mr-2" src="~/assets/svg/logout.svg" alt="logout">
    </header>
    <main class="flex row justify-center pt-18">
      <nuxt />
    </main>
    <navbar v-show="isShow" :theme="theme" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultPage',
  data () {
    return {
      isShow: true
    }
  },
  head () {
    return {
      title: this.$t('title')
    }
  },
  computed: {
    ...mapGetters({
      theme: 'theme'
    })
  }
}
</script>
