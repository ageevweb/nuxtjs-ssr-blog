<template lang="pug">
  footer
    p footer
    //- .navbar
    //-   .container
    //-     .navbar-content
    //-       .logo
    //-         nuxt-link.logo-link(to="/") BlogNuxtjs
    //-       ul.navbar-list
    //-         li.navbar-item(v-for="link in links" :key="link.title")
    //-           nuxt-link.navbar-link(:title="link.title" :to="link.url") {{ link.title }}
</template>


<script>
  export default {
    data () {
      return {
        links: [
          { title: 'Blog', url: '/blog' },
          { title: 'About', url: '/about' },
          { title: 'Admin', url: '/admin' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  footer{
    background-color: #32312d;
  }
  // .logo a{
  //   color: wheat;
  // }
  // .nuxt-link-exact-active{
  //   color: saddlebrown !important;
  // }

  // .navbar{
  //   background-color: #32312d;

  //   &-item a{
  //     color: wheat;
  //   }
  // }
</style>