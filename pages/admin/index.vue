<template lang="pug">
  PostsList(:posts="postsLoaded" admin=true)
</template>


<script>
export default {
  layout: 'admin',
  
  computed: {
    postsLoaded(){
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>