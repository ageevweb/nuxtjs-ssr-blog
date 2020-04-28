<template lang="pug">
  NewPostForm(@submit="onSubmit" :postEdit="post")
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm'
import axios from 'axios'

export default {
  layout: 'admin',

  asyncData(contex){
    return axios.get(`https://nuxt-blog-68898.firebaseio.com/posts/${contex.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id: contex.params.postId}
        } 
      })
      .catch(e => contex.error(e))
  },

  components: {
    NewPostForm
  },

  methods: {
    onSubmit(post){
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>