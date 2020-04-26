<template lang="pug">
  section.contact
    .container
      h2.title New Comment
      form.contact-form(@submit.prevent="onSubmit")

        AppInput(v-model="comment.name") Name:
        AppTextarea(v-model="comment.message") Comment:

        .controls
          AppButton(btnClass="btnWhite") Submit!

</template>


<script>
  import AppInput from '@/components/UI/controls/Input'
  import AppTextarea from '@/components/UI/controls/TextArea'
  import AppButton from '@/components/UI/controls/Button'


  export default {
    components: {
      AppInput,
      AppTextarea,
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