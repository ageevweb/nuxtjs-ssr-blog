<template lang="pug">
  nuxt-link.post-preview(:to="getLink")
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
      },
      admin: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      getLink(){
        return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
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