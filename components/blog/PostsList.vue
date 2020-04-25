<template lang="pug">
  section.post-list
    .container
      .posts__wrapper 
        postPreview(
          v-for="post in posts" 
          :key="post.id"
          :post="post"
        )
        
</template>


<script>
import postPreview from '@/components/blog/PostPreview'

  export default {
    components: {
      postPreview
    },

    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .posts__wrapper{
    display: flex;
    flex-direction: row;
    
  }
</style>