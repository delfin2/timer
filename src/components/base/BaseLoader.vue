<template>
  <div class="base-loader">
    <div class="base-loader__background"></div>
    <base-spinner class="base-loader__spinner" />
  </div>
</template>

<script>
export default {
  name: 'BaseLoader'
}
</script>

<style lang="scss" scoped>
.base-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 6rem;

  &__background {
    z-index: 11;
    position: absolute;
    background-color: var(--base-color);
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }

  &__spinner {
    z-index: 12;
    width: 1em;
    height: 1em;
  }
}
</style>
