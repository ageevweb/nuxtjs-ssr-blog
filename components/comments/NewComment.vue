<template lang="pug">
  section.contact
    .container
      h2.title New Comment

      message(v-if="message" :message="message")

      form.contact-form(@submit.prevent="onSubmit")
        AppInput(v-model="comment.name") Name:
        AppTextarea(v-model="comment.message") Comment:

        .controls
          AppButton(btnClass="btnWhite") Submit!

</template>


<script>
  import message from '@/components/UI/Message'
  import AppInput from '@/components/UI/controls/Input'
  import AppTextarea from '@/components/UI/controls/TextArea'
  import AppButton from '@/components/UI/controls/Button'


  export default {
    components: {
      message,
      AppInput,
      AppTextarea,
      AppButton
    },
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
        this.comment.name = '';
        this.comment.message = '';
        this.message = 'submited'
        console.log(this.comment)
      }
    }
  }
</script>

<style lang="scss">

</style>