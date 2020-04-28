<template lang="pug">
  client-only
    commentTable( :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']")
      tbody(slot="tbody")
        tr(v-for="comment in comments" :key="comment.id")
          td
            span {{ comment.name }}
          td
            span {{ comment.message }}
          td
            span.status.true(v-if="comment.publish") publish
            span.status.false(v-else) hidden
          td
            span.link(@click="changeComment(comment)") Change status
          td  
            span.link(@click="deleteComment(comment.id)") Delete

</template>

<script>
import commentTable from '@/components/admin/CommentTable'
import axios from 'axios'

export default {
  layout: 'admin',

  data(){
    return {
      comments: []
    }
  },

  mounted() {
    this.loadComments()
  },

  components: {
    commentTable
  },

  methods: {
    changeComment(comment){
      comment.publish = !comment.publish
      axios.put(`https://nuxt-blog-68898.firebaseio.com/comments/${comment.id}.json`, comment)
      console.log(comment)
    },

    deleteComment(id){
      axios.delete(`https://nuxt-blog-68898.firebaseio.com/comments/${id}.json`)
        .then(res=>  this.loadComments())
     
    },

    loadComments(){
      axios.get('https://nuxt-blog-68898.firebaseio.com/comments.json')
      .then(res =>{
        let commentsArray = [];
        Object.keys(res.data).forEach(key => {
          const comment = res.data[key];
          commentsArray.push({...comment, id: key})
        })
        this.comments = commentsArray
      })
    }
  }
}
</script>