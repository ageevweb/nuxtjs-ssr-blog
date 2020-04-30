<template lang="pug">
  .wrapper-content.wrapper-content--fixed
    promo
    Intro(title="My last posts: ")
    PostsList(:posts="postsLoaded")
    contacts
</template>

<script>
import promo from '~/components/Promo.vue'
import contacts from '~/components/Contacts.vue'

export default {
  components: {
    promo,
    contacts
  },
  computed: {
    postsLoaded(){
      return this.$store.getters.getLastsPosts
    }
  }
}
</script>

<style>

</style>
