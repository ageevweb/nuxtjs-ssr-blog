<template lang="pug">
  section.contact
    .container
      h2.title New Comment
      form.contact-form(@submit.prevent="onSubmit")
        label Name:
        input(type="text" v-model="comment.name")
        label Comment:
        textarea(v-model="comment.message")

        .controls
          button.btn.btnPrimary Submit

</template>


<script>
  export default {
    data(){
      return {
        comment: {
          name: '',
          message: ''
        }
      }
    },
    methods: {
      onSubmit(){
        console.log(this.comment)
      }
    }
  }
</script>

<style lang="scss">

</style>