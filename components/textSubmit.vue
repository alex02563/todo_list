<template>
  <div class="text-area">
    <input
      v-model.trim="_value"
      :placeholder="$t('typing')"
      class="grow-1 mr-4 pl-2"
      @keyup.enter="$emit('eventClick')"
    >
    <create-btn
      @eventClick="$emit('eventClick')"
    />
  </div>
</template>

<script>
export default {
  name: 'TextSubmit',
  props: {
    value: { type: String, default: '' }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
.text-area {
  height: 35px;
  input {
    font-size: 15px;
  }
}
</style>
