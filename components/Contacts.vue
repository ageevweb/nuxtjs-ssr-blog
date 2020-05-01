<template lang="pug">
  section.contact
    .container.container--contact
      h2.title Contact me!

      Message(v-if="message" :message="message")

      form.contact-form(@submit.prevent="onSubmit")
        AppInput(v-model="user.name") Name:
        AppInput(v-model="user.email" type="email") Email:
        AppTextarea(v-model="user.message") Message:

        .controls
          button.btn.contactBtn Submit!

</template>


<script>

  export default {

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
  .contact{
    width: 600px;
    margin: 0 auto;
  }
  .container--contact{

    margin: 0 auto;
  }

  .contactBtn {
    background-color: saddlebrown;
    color: wheat;
    border: none;
    margin: 20px auto;
    display: block;
  }
</style>