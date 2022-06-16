<template>
  <div
    class="loading-bg fixed"
    :class="{
      'page-enter-active': loading,
      'page-leave-active': !loading
    }"
  >
    <h1>
      {{ $t('loading') }}
    </h1>
  </div>
</template>
<script>
export default {
  name: 'TodoListLoading',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
<style lang="scss">
.loading-bg {
  width: 100%;
  height: 100%;
  background: #ffffffac;
  text-align: center;
  padding-top: 45vh;
  &.page-enter-active {
    transition: all .25s ease-in;
    z-index: 2;
  }
  &.page-leave-active {
    opacity: 0;
    transition: all .25s ease-out;
    z-index: -1;
  }
}
</style>
