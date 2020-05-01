<template lang="pug">
  .wrapper-content.wrapper-content--fixed
    PostsList(:posts="postsLoaded")
</template>

<script>


export default {

  computed: {
    postsLoaded(){
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style>

</style>
