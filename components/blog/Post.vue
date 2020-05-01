<template lang="pug">
  section.post
    .container
      .post-body
        .post-left
          img(:src="post.img" :alt="post.title")
        .post-right
          h1.title {{post.title}}
          p {{post.descr}}
      .post-content
        p {{post.content}}
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .post{

    &-body{
      display: flex;
    }
    

    &-left{
      width: 50%;
      padding-right: 30px;
    }
    &-right{
      width: 50%;
    }
  }
</style>