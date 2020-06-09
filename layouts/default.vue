<template lang="pug">
  .wrapper
    Header
    nuxt
    Footer
</template>

<script>
import Header from '@/components/system/Header'
import Footer from '@/components/system/Footer'

  export default {
    components: {
      Header,
      Footer
    },

    data () {
      return {}
    }
  }
</script>

<style>
  .wrapper {
    background-image: url(../assets/img/bg.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }
  label{
    color: blanchedalmond
  }
</style>


