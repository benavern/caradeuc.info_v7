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
  background: $green
  height: 2.5em
  line-height: 2.5em
  color: $white
  padding: 0 1.5em
  border: none
  outline: none
  box-shadow: 0 0 .8em rgba($black, .5)
  font-size: inherit
  text-variante: small-caps
  transition: all .3s

  &:hover
    box-shadow: 0 0 .8em rgba($black, .8)
    cursor: pointer
    background-color: $black

</style>
