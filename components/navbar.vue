<template>
  <div class="fixed navbar row justify-center">
    <div class="py-4" :class="{ 'kanahei-navbar': theme === 'kanahei' }">
      <img
        v-show="theme === 'kanahei'"
        width="100%"
        src="~/assets/img/logo.png"
        alt="logo"
      >
      <i18n-btn class="px-4 mb-5" />
      <theme-btn class="px-4" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarArea',
  props: {
    theme: { type: String, default: '' }
  }
}
</script>

<style lang="scss">
  .navbar {
    left: 0;
    top: 55px;
    width: 200px;
    height: 100vh;
    background: white;
    border: 1px solid #C7C3C6;
    .kanahei-navbar {
      background: url('~@/assets/img/bg.png') center center repeat;
      background-size: 100px auto;
      height: 100vh;
    }
  }
</style>
