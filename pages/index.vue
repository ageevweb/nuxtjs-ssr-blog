<template lang="pug">
  .wrapper-content.wrapper-content--fixed
    promo
    intro(title="My last posts: ")
</template>

<script>
import promo from '~/components/Promo.vue'
import intro from '~/components/UI/Intro.vue'


export default {
  components: {
    promo,
    intro
  }
}
</script>

<style>

</style>
