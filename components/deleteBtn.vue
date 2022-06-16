<template>
  <div
    class="px-4 cursor-pointer"
    @click="$emit('eventClick')"
  >
    <img src="~/assets/svg/delete.svg" alt="delete">
  </div>
</template>

<script>
export default {
  name: 'DeleteBtn'
}
</script>
