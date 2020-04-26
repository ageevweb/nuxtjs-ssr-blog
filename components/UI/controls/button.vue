<template lang="pug">
  button.btn(
    :class="btnClass"
    v-on="$listeners"
  )
    slot
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btnPrimary'
    }
  }
}
</script>