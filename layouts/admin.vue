<template lang="pug">
  .wrapper
    Header
    .wrapper-content.wrapper-content--fixed
      Intro(title="Admin Page")
        nuxt-link.link.linkWhite(to="/admin") toAdmin
      nuxt
</template>

<script>
import Header from '@/components/system/Header'

  export default {
    components: {
      Header
    },

    data () {
      return {
        
      }
    }
  }
</script>

<style>

</style>
