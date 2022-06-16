<template>
  <div class="px-4 cursor-pointer" @click="$emit('eventClick')">
    <img v-show="!value" src="~/assets/svg/check.svg" alt="check">
    <img v-show="value" src="~/assets/svg/checked.svg" alt="checked">
  </div>
</template>

<script>
export default {
  name: 'CheckedBtn',
  props: {
    value: { type: Boolean, default: false }
  }
}
</script>
