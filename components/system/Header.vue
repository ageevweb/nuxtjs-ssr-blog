<template lang="pug">
  header
    .navbar
      .container
        .navbar-content
          .logo BlogNuxtjs
          ul.navbar-list
            li.navbar-item(v-for="link in links" :key="link.title")
              nuxt-link.navbar-link(:title="link.title" :to="link.url") {{ link.title }}
</template>


<script>
  export default {
    data () {
      return {
        links: [
          { title: 'Home', url: '/' },
          { title: 'About', url: '/about' }

        ]
      }
    }
  }
</script>

<style lang="scss">
  .nuxt-link-exact-active{
    color: rgb(0, 68, 255);
  }
</style>