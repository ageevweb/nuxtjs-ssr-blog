<template lang="pug">
  .wrapper
    Header
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
  .wrapper {
    background-image: url(../assets/img/bg.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    padding-bottom: 50px;
  }
  label{
    color: blanchedalmond
  }
</style>


