<template lang="pug">
  section.auth
    .container
      form.auth__form(@submit.prevent="onSubmit")
        AppInput(v-model="user.email") login:
        AppInput(v-model="user.password") password:

        .controls
          AppButton auth
          
</template>


<script>
import commentTable from '@/components/admin/CommentTable'

export default {

  data(){
    return {
        user: {
          email: 'ageevweb@gmail.com',
          password: 'prototypenuxtblog555'
      }
    }
  },


  methods: {
    onSubmit(){
      this.$store.dispatch('authUser', this.user)
        .then((res) => {
          console.log(res)
          // this.user.email = '';
          // this.user.password = '';
        })
    }
  }
}
</script>

<style lang="scss">
  .auth__form{
    margin-top: 200px;
  }
</style>



