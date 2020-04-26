<template lang="pug">
  section.intro
    .container
      h2 {{ title }}

      slot

</template>

<script>


export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .intro{
    width: 100%;
    text-align: center;
    background: #0059ff;
    padding: 30px;
    color: #fff;
  }
</style>