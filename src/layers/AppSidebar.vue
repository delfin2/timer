<template>
<div class="app-sidebar">
  <div class="app-sidebar__list">
    <button
      class="app-sidebar__list__el"
      v-for="(el, idx) in mockData.elements"
      :key="idx"
      @click="$router.push(el.route)"
    >
      {{el.label}}
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppSidebar',

  data () {
    return {
      mockData: {
        elements: [
          {
            label: 'Home',
            route: '/'
          },
          {
            label: 'Settings',
            route: '/settings'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-sidebar {
  background-color: var(--second-background);
  max-width: 300px;
  font-size: 1.6rem;
  padding: 5px;

  &__list {
    &__el {
      padding: 5px;
      font-size: 1em;
      display: block;
      color: var(--base-color);
    }
  }
}
</style>
