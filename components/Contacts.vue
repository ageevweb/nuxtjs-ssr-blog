<template lang="pug">
  section.contact
    .container
      h2.title Contact me!
      form.contact-form(@submit.prevent="onSubmit")

        AppInput(v-model="user.name") Name:
        AppInput(v-model="user.email" type="email") Email:
        AppTextarea(v-model="user.message") Message:

        .controls
          AppButton Submit!

</template>


<script>
  import AppButton from '@/components/UI/controls/Button'
  import AppInput from '@/components/UI/controls/Input'
  import AppTextarea from '@/components/UI/controls/TextArea'


  export default {
    components: {
      AppButton,
      AppInput,
      AppTextarea
    },
    data(){
      return {
        user: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      onSubmit(){
        console.log(this.user)
      }
    }
  }
</script>

<style lang="scss">

</style>