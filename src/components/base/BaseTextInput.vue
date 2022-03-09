<template>
  <input
    class="base-text-input"
    type="text"
    v-model="value"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'BaseTextInput',

  props: {
    modelValue: [String, Number],
    placeholder: [String, Number]
  },

  emits: {
    'update:modelValue': [String, Number]
  },

  computed: {
    value: {
      get () {return this.modelValue},
      set (newVal) {this.$emit('update:modelValue', newVal)}
    }
  }
}
</script>

<style lang="scss" scoped>
.base-text-input {
  font-size: 1.6rem;
}
</style>
