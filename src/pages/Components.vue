<template>
  <div>
    <section id="intro">
      <h1>Mes composants</h1>

      <p>
        J'ai développé ce site à l'aide de la librairie VueJs 2.5 et de sass (version indentée).
      </p>

      <p>
        Vous vous trouvez actuellement sur la page qui m'a permit de faire des tests.
        L'ordre des éléments de la page ne suit pas de logique particulière.
      </p>

    </section>

    <components-colors />

    <components-fonts />

    <components-buttons />

    <components-icons />

    <components-grid />

  </div>
</template>

<script>
import ComponentsColors from './Components/Colors'
import ComponentsFonts from './Components/Fonts'
import ComponentsButtons from './Components/Buttons'
import ComponentsIcons from './Components/Icons'
import ComponentsGrid from './Components/Grid'

export default {
  name: 'Components',
  components: {
    ComponentsColors,
    ComponentsFonts,
    ComponentsButtons,
    ComponentsIcons,
    ComponentsGrid
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
        font-size: .8rem
        font-family: monospace
        overflow-x: auto

      .demo-box
        background-color: $gray-lighter
        text-align: center
        font-size: 1.2rem
        border: 1px solid $gray-light
        padding: 1rem

</style>
