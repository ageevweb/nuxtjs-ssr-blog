<template lang="pug">
  NewPostForm(@submit="onSubmit")
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm'

export default {
  layout: 'admin',

  components: {
    NewPostForm
  },

  methods: {
    onSubmit(post){
      this.$store.dispatch('addPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>