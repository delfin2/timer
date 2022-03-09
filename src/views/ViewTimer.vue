<template>
  <div class="view-home">
    <base-button
      :tabindex="loading ? -1 : 0"
      label="Add timer"
      @click="addTimerPopup"
    />

    <template v-if="timers.length">
      <AppTimerCard
        v-for="(timer, idx) in timers"
        :key="idx"
        v-bind="timer"
        :loading="timersLoadingStat[idx]"
        :inactive="loading"
        @remove-timer="removeTimer(idx)"
        @start-timer="(startedTime) => startTimer(idx, startedTime)"
        @stop-timer="(stoppedTime) => stopTimer(idx, stoppedTime)"
      />

      <base-button
        :tabindex="loading ? -1 : 0"
        label="Add timer"
        @click="addTimerPopup"
      />
    </template>

    <base-loader v-if="loading" />
  </div>
</template>

<script>
import AppTimerCard from '@/components/AppTimerCard.vue'
import {newTimer, getTimers, removeTimerByIdx, updTimerById} from '@/localStorageApi.js'
import {defineAsyncComponent, markRaw} from 'vue'

export default {
  name: 'ViewTimer',

  components: {
    AppTimerCard
  },

  emits: {
    'toggle-popup': Object
  },

  data () {
    return {
      timers: [],
      timersLoadingStat: [],
      AppNewTimerForm: markRaw(defineAsyncComponent(() => import('@/components/AppNewTimerForm.vue'))),
      loading: false
    }
  },

  mounted () {
    this.fetchTimers()
  },

  methods: {
    removeTimer (idx) {
      this.loading = true
      removeTimerByIdx(idx)
        .then(() => this.timers.splice(idx, 1))
        .finally(() => this.loading = false)
    },
    startTimer (idx, startedTime) {
      this.timersLoadingStat[idx] = true
      const target = this.timers[idx]
      target.started = startedTime.toUTCString()
      target.stopped = null
      updTimerById(idx, {started: target.started, stopped: target.stopped})
        .then(timer => this.timers.splice(idx, 1, timer))
        .finally(() => this.timersLoadingStat[idx] = false)
    },
    stopTimer (idx, stoppedTime) {
      this.timersLoadingStat[idx] = true
      const target = this.timers[idx]
      const startedTime = new Date(target.started)
      const passedTime = stoppedTime - startedTime
      target.stopped = stoppedTime.toUTCString()
      target.timeLeft = target.timeLeft - passedTime
      updTimerById(idx, {stopped: target.stopped, timeLeft: target.timeLeft})
        .then(timer => this.timers.splice(idx, 1, timer))
        .finally(() => this.timersLoadingStat[idx] = false)
    },
    addTimerPopup () {
      this.$emit('toggle-popup', this.AppNewTimerForm)
    },
    fetchTimers () {
      this.loading = true
      getTimers()
        .then(timers => this.timers = timers)
        .finally(() => this.loading = false)
    },
    createNewTimer (payload) {
      this.loading = true
      newTimer(payload)
        .then(timer => this.timers.push(timer))
        .finally(() => this.loading = false)
      this.$emit('toggle-popup')
    }
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  position: relative;
}
</style>
