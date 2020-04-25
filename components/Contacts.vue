<template lang="pug">
  section.contact
    .container
      h2.title Contact me!
      form.contact-form(@submit.prevent="onSubmit")
        label Name:
        input(type="text" v-model="user.name")
        label Email:
        input(type="email" v-model="user.email")
        label Message:
        textarea(v-model="user.message")

        .controls
          button.btn.btnPrimary Submit

</template>


<script>
  export default {
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