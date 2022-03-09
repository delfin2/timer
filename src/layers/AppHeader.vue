<template>
<div class="app-header">
  <button
    class="material-icons app-header__sidebar-button"
    @click="$emit('toggle-sidebar')"
  >
    reorder
  </button>
  <span class="app-header__title">
    Timer
  </span>
</div>
</template>

<script>
export default {
  name: 'AppHeader',

  emits: {
    'toggle-sidebar': null
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 10px;

  &__sidebar-button {
    margin-right: 10px;
    color: var(--base-color);
  }

  &__title {
    font-size: 2.5rem;
  }
}
</style>
