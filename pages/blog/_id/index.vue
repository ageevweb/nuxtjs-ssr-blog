<template lang="pug">
  .wrapper-content.wrapper-content--fixed
    post(:post="post")
    comments(:comments="comments")
    newComment
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
    return {
      post: post.data,
      comments: comments.data
    }
  }

  // data(){
  //   return {
  //     post: 
  //       {
  //         id: 1,
  //         title: 'title 1',
  //         descr: 'Lorem ipsum dolor sit amet ',
  //         img: 'https://www.myplanet-ua.com/wp-content/uploads/2016/03/11_cr.png',
  //         content: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  //       },
  //     comments: [
  //       {name: 'Alex', text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  //       {name: 'Bishop', text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  //     ]
  //   }
  // }
}
</script>