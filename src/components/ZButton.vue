<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ZButton'
}
</script>

<style lang="sass" scoped>
button
  display: inline-block
  background: #428f68
  height: 2.5em
  line-height: 2.5em
  color: #fff
  padding: 0 1.5em
  border: none
  border-radius: 2.5em
  outline: none
</style>
