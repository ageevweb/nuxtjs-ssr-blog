<template lang="pug">
  commentTable( :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']")
    tbody(slot="tbody")
      tr(v-for="comment in comments" :key="comment.id")
        td
          span {{ comment.name }}
        td
          span {{ comment.text }}
        td
          span.status.true(v-if="comment.status") publish
          span.status.false(v-else) hidden
        td
          span.link(@click="changeComment(comment.id)") Change status
        td  
          span.link(@click="deleteComment(comment.id)") Delete

</template>

<script>
import commentTable from '@/components/admin/CommentTable'

export default {
  layout: 'admin',

  data(){
    return {
      comments: [
        {id: 1, name: 'Alex', text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', status: true},
        {id: 2, name: 'Bishop', text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', status: false},
      ]
    }
  },

  components: {
    commentTable
  },

  methods: {
    changeComment(id){
      console.log(id)
    },

    deleteComment(id){
      console.log(id)
    }
  }
}
</script>