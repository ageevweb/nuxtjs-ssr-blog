<template lang="pug">
  .wrapper-content.wrapper-content--fixed
    post(:post="post")
    comments(:comments="comments")
    newComment(:postId="$route.params.id")
</template>

<script>
import post from '@/components/blog/Post.vue'
import comments from '@/components/comments/Comments.vue'
import newComment from '@/components/comments/NewComment.vue'

import axios from 'axios'


export default {
  components: {
    post,
    comments,
    newComment
  },

  async asyncData(context){
    let [post, comments] = await Promise.all([
      axios.get(`https://nuxt-blog-68898.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://nuxt-blog-68898.firebaseio.com/comments.json`)
    ])

    // фильтрация комментария
    let postComments = Object.values(comments.data).filter(comment => (comment.postId === context.params.id) && comment.publish);

    return {
      post: post.data,
      comments: postComments
    }
  }
}
</script>