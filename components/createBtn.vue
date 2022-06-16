<template>
  <div
    class="create-btn cursor-pointer"
    @click="$emit('eventClick')"
  >
    <img class="pl-2" src="~/assets/svg/plus.svg" alt="plus">
  </div>
</template>

<script>
export default {
  name: 'CreateBtn'
}
</script>

<style lang="scss">
.create-btn {
  background: $create-btn;
  width: 35px;
  line-height: 35px;
}
</style>
