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
          AppButton(btnClass="btnWhite") Submit!

</template>


<script>
  import AppButton from '@/components/UI/controls/button'

  export default {
    components: {
      AppButton
    },
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