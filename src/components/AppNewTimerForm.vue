<template>
  <div class="new-timer-form">
    <base-text-input
      placeholder="Name"
      v-model="newTimer.name"
    />
    <base-text-input
      placeholder="Time"
      v-model.number="newTimer.timeLeft"
    />
    <base-button
      label="Add"
      @click="addNewTimer"
    />
  </div>
</template>

<script>
export default {
  name: 'AppNewTimerForm',

  emits: {
    popupEvent: Object
  },

  data () {
    return {
      newTimer: {
        name: 'New Timer',
        timeLeft: 600,
        started: null,
        stopped: null
      }
    }
  },

  methods: {
    addNewTimer () {
      this.newTimer.timeLeft *= 1000
      this.$emit('popupEvent', {type: 'newTimer', payload: this.newTimer})
    }
  }
}
</script>

<style lang="scss" scoped>
.new-timer-form {
  display: flex;
  flex-direction: column;
}
</style>
