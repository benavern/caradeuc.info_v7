<template>
  <div>
    <section id="intro">
      <h1>
        {{ $t('MY_COMPONENTS_PAGE.INTRO.TITLE') }}
      </h1>

      <p>
        {{ $t('MY_COMPONENTS_PAGE.INTRO.TEXT1') }}
      </p>

      <p>
        {{ $t('MY_COMPONENTS_PAGE.INTRO.TEXT2') }}
      </p>

    </section>

    <components-colors />

    <components-fonts />

    <components-buttons />

    <components-icons />

    <components-grid />

    <components-language />

  </div>
</template>

<script>
import ComponentsColors from './Components/Colors'
import ComponentsFonts from './Components/Fonts'
import ComponentsButtons from './Components/Buttons'
import ComponentsIcons from './Components/Icons'
import ComponentsGrid from './Components/Grid'
import ComponentsLanguage from './Components/Language'

export default {
  name: 'Components',
  components: {
    ComponentsColors,
    ComponentsFonts,
    ComponentsButtons,
    ComponentsIcons,
    ComponentsGrid,
    ComponentsLanguage
  }
}
</script>

<style lang="sass" scoped>
  section
    border-bottom: 1px solid $gray-light
    padding: 1.5rem 2rem

    &:first-child
      border-top: 1px solid $gray-light

    /deep/
      pre
        position: relative
        font-size: .8rem
        font-family: monospace
        overflow-y: hidden
        overflow-x: auto
        border: 1px solid $black
        border-radius: .3rem
        box-shadow: 0 0 1rem rgba($gray-dark, .5)
        padding-top: 3rem

        &:before
          content: attr(data-file)
          display: block
          position: absolute
          top: 0
          left: 0
          right: 0
          height: 2rem
          line-height: 2rem
          background-color: $gray-light
          background-image: linear-gradient(to top, darken($gray-light, 15%), $gray-light)
          border-bottom: 1px solid $black
          color: $gray-dark
          text-align: center
          font-weight: bold

      .demo-box
        background-color: $gray-lighter
        font-size: 1.2rem
        border: 1px solid $gray-light
        padding: 1rem

</style>
