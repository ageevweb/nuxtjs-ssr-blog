<template lang="pug">
  section.contact
    .container
      h2.title New Comment

      AppMessage(v-if="message" :message="message")

      form.contact-form(@submit.prevent="onSubmit")
        AppInput(v-model="comment.name") Name:
        AppTextarea(v-model="comment.message") Comment:

        .controls
          AppButton(btnClass="btnWhite") Submit!

</template>


<script>

  export default {
    data(){
      return {
        message: null,

        comment: {
          name: '',
          message: ''
        }
      }
    },
    methods: {
      onSubmit(){
        this.$store.dispatch('addComment', {
          postId: '',
          publish: false,
          ...this.comment
        })
          .then(()=> {

            this.comment.name = '';
            this.comment.message = '';
            this.message = 'submited'
            
          })
          .catch(e => console.log(e))
      }
    }
  }
</script>

<style lang="scss">

</style>