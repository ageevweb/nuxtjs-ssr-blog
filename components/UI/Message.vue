<template lang="pug">
  .message(:class="messClass")
    p {{ message }}
</template>

<script>
export default {
  props: {
    messClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .message{
    &.success{
      color: chartreuse;
    }
    &.error{
      color: crimson;
    }
  }
</style>