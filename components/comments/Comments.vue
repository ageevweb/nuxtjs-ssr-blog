<template lang="pug">
  section.comments(v-if="comments")
    .container
      h2.title Comments:
      p(v-if="!comments.length") There are no comments yet. You can be first!
      .comment(v-for="comment in comments" :key="comment.name")
        h3 ⟪ {{comment.name}} ⟫
        p {{comment.message}}
      

</template>


<script>
  export default {
    data(){
      return {
        
      }
    },
    props: {
      comments: {
        type: Array,
        default: null
      }
    }

  }
</script>

<style lang="scss">
  .comments{
    margin: 0 auto;
    width: 600px;
  }

  .comment{
    padding: 10px;
    background-color: rgba(1,1,1, .5);
    color: antiquewhite;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
    h3{
      margin-bottom: 10px;
      font-size: 24px;
      line-height: 1;
    }
  }
</style>