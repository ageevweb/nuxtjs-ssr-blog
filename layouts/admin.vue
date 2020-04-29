<template lang="pug">
  .wrapper
    Header
    .wrapper-content.wrapper-content--fixed
      Intro(title="Admin Page")
        nuxt-link.link.linkWhite(to="/admin") Admin
        nuxt-link.link.linkWhite(to="/admin/new-post") NewPost
        nuxt-link.link.linkWhite(to="/admin/comments") Comments
        button.btn.btnPrimary(@click="logOutUser") logOut
      nuxt
</template>

<script>
import Header from '@/components/system/Header'

  export default {
    components: {Header},
    middleware: ['auth'],

    methods: {
      logOutUser(){
        this.$store.dispatch('logOutUser')
          .then(() =>{
            this.$router.push('/admin/auth')
          })
      }
    }
  }


</script>

<style>

</style>
