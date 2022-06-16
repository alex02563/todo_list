<template>
  <div
    class="px-4 cursor-pointer"
    @click="$emit('eventClick')"
  >
    <img src="~/assets/svg/hamber.svg" alt="hamber">
  </div>
</template>

<script>
export default {
  name: 'HamberBtn'
}
</script>
