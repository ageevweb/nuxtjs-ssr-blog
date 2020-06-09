<template lang="pug">
  section.auth
    .container
      form.auth__form(@submit.prevent="onSubmit")
        AppInput(v-model="user.email") login:
        AppInput(v-model="user.password" type="password") password:

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
          password: ''
      }
    }
  },


  methods: {
    onSubmit(){
      this.$store.dispatch('authUser', this.user)
        .then(res => {
          this.$router.push('/admin')
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



