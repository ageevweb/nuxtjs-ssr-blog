<template lang="pug">
  section.post
    .container
      .post-header
        img(:src="post.img" :alt="post.title")
        h1.title {{post.title}}
        p {{post.descr}}
      .post-body
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