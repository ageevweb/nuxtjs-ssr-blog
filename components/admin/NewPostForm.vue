<template lang="pug">
  .new-post
    .container
      form(@submit.prevent)
        AppInput(v-model="post.title") Title: 
        AppInput(v-model="post.descr") Description: 
        AppInput(v-model="post.img") IMG link: 
        AppTextarea(v-model="post.content") Content: 

        .controls
          AppButton(btnClass="btnDanger" @click="cancel") cancel
          AppButton(@click="submit") save

</template>

<script>

export default {

  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },

  data(){
    return {
      post: this.postEdit ? {...this.postEdit} : {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    cancel(){
      this.$router.push('/admin');
    },
    submit(){
      this.$emit('submit', this.post)
    }
  }
}
</script>