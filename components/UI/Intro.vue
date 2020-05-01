<template lang="pug">
  section.intro
    .container
      h2.intro-title {{ title }}
      slot

</template>

<script>


export default {
  props: {
    title: {
      type: String,
      required: true
    },

  }
}
</script>

<style lang="scss">
  .intro{
    width: 100%;
    text-align: center;
    background-color: #32312d;
    padding: 30px;
    color: #fff;
  }

  .intro-title{
    font-size: 25px;
  }
</style>