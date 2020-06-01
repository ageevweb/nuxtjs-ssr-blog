<template lang="pug">
  nuxt-link.post-preview(:to="getLink")
    .post-content
      img(:src="post.img")
      h3.post-title {{ post.title }}
   
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
    max-width: 25%;
    padding: 15px;
  }
  .post-content{
    background-color: #32312d;
    border-radius: 10px;
    overflow: hidden;
  }
  .post-title{
    padding: 5px;
    text-align: center;
    color: burlywood;
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: 22px;
  }
</style>