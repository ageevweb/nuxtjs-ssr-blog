<template lang="pug">
  NewPostForm(@submit="onSubmit" :postEdit="post")
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm'

export default {
  layout: 'admin',

  data(){
    return {
      post: 
        {
          id: 1,
          title: 'title 1',
          descr: 'Lorem ipsum dolor sit amet ',
          img: 'https://www.myplanet-ua.com/wp-content/uploads/2016/03/11_cr.png',
          content: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    }
  },

  components: {
    NewPostForm
  },

  methods: {
    onSubmit(post){
      console.log(post)
    }
  }
}
</script>