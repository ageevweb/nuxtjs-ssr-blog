<template lang="pug">
  section.comments(v-if="comments")
    .container
      h2.title Comments:
      p(v-if="!comments.length") There are no comments yet. You can be first!
      .comment(v-for="comment in comments" :key="comment.name")
        p {{comment.name}}
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
</style>