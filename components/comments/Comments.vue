<template lang="pug">
  section.comments(v-if="comments")
    .container
      h2.title Comments
      .comment(v-for="comment in comments" :key="comment.text")
        p {{comment.name}}
        p {{comment.text}}
      

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

</style>