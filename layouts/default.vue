<template>
  <div>
    <header class="flex row fixed">
      <hamber-btn @eventClick="isShow = !isShow" />
      <div class="grow-1">
        {{ $t('title') }}
      </div>
      <img width="30" class="mr-2" src="~/assets/svg/logout.svg" alt="logout">
    </header>
    <main class="flex row justify-center pt-18">
      <nuxt />
    </main>
    <navbar v-show="isShow" />
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
  data () {
    return {
      isShow: false
    }
  },
  head () {
    return {
      title: this.$t('title')
    }
  }
}
</script>
