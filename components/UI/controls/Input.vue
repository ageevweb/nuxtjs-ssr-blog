<template lang="pug">
  .control
    label
      slot
    input(
      v-bind="$attrs"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
      :required="required"
    )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style lang="scss">
  input{
    margin-bottom: 15px;
  }
</style>