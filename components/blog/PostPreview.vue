<template lang="pug">
  nuxt-link.post-preview(:to="/blog/+post.id")
    img(:src="post.img")
    .post-content
      h3.post-title {{ post.title }}
      p.post-descr {{ post.descr }}
        
        
</template>


<script>
  export default {
    props:{
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .post-preview{
    max-width: 33%;
    padding: 15px;
  }
</style>