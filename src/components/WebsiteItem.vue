<template>
  <a :href="url"
     class="website-item"
     target="_blank">
     <div class="website-item-background"
          :style="{'background-image': `url(${img})`}" />
     <div class="website-item-content container">
      <h2>{{ $t(name) }}</h2>

      <p>{{ $t(description) }}</p>
     </div>
  </a>
</template>

<script>
export default {
  name: 'WebsiteItem',
  props: [ 'name', 'url', 'description', 'img' ]
}
</script>

<style lang="sass" scoped>
.website-item
  position: relative
  display: block
  border-bottom: 1px solid $gray-light
  overflow: hidden
  cursor: help

  &:last-child
    border-bottom: none

  .website-item-background
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    margin: -10px
    filter: blur(5px)
    background:
      color: $black
      position: top center
      repeat: no-repeat
      size: cover

    &:before,
    &:after
      content: ''
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%

    &:before
      background-color: rgba($black, .2)

    &:after
      display: none

  .website-item-content
    position: relative
    text-shadow: 0 0 .5em $black
    color: $white

  @media (min-width: $medium)
    .website-item-background:after
      display: block
      background-color: $white
      transform: translateX(0%)
      transition: transform .3s

    &:hover
      .website-item-background:after
        transform: translateX(100%)

    .website-item-content
      text-shadow: none
      color: $black
      transition: color .3s

    &:hover
      .website-item-content
        text-shadow: 0 0 .5em $black
        color: $white

</style>
