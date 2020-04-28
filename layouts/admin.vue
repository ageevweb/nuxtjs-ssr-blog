<template lang="pug">
  .wrapper
    Header
    .wrapper-content.wrapper-content--fixed
      Intro(title="Admin Page")
        nuxt-link.link.linkWhite(to="/admin") Admin
        nuxt-link.link.linkWhite(to="/admin/new-post") NewPost
        nuxt-link.link.linkWhite(to="/admin/comments") Comments

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
