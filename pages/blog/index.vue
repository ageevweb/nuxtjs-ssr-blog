<template lang="pug">
  .wrapper-content.wrapper-content--fixed

    Intro(title="My posts: ")
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
