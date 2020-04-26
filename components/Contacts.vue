<template lang="pug">
  section.contact
    .container
      h2.title Contact me!

      message(v-if="message" :message="message")

      form.contact-form(@submit.prevent="onSubmit")
        AppInput(v-model="user.name") Name:
        AppInput(v-model="user.email" type="email") Email:
        AppTextarea(v-model="user.message") Message:

        .controls
          AppButton Submit!

</template>


<script>
  import message from '@/components/UI/Message'
  import AppButton from '@/components/UI/controls/Button'
  import AppInput from '@/components/UI/controls/Input'
  import AppTextarea from '@/components/UI/controls/TextArea'

  export default {
    components: {
      message,
      AppButton,
      AppInput,
      AppTextarea
    },
    data(){
      return {
        message: null,
        user: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      onSubmit(){
        this.user.name =  '',
        this.user.email = '',
        this.user.message = '',

        this.message = 'submited'
        console.log(this.user)
      }
    }
  }
</script>

<style lang="scss">

</style>