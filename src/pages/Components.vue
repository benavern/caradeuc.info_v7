<template>
  <div>
    <section class="container"  id="intro">
      <h1>
        {{ $t('MY_COMPONENTS_PAGE.INTRO.TITLE') }}
      </h1>

      <p v-html="$t('MY_COMPONENTS_PAGE.INTRO.TEXT1', { url: 'https://github.com/benavern/caradeuc.info_v7' })"></p>

      <p>
        {{ $t('MY_COMPONENTS_PAGE.INTRO.TEXT2') }}
      </p>
    </section>

    <section class="container links">
      <ul>
        <li v-for="(link, index) in links"
            :key="index">
          <a :href="link.url"
             @click.prevent="goto(link.url)">
            {{ link.name }}
          </a>
        </li>
      </ul>
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

import smoothScroll from '@/utils/smooth-scroll'

export default {
  name: 'Components',
  components: {
    ComponentsColors,
    ComponentsFonts,
    ComponentsButtons,
    ComponentsIcons,
    ComponentsGrid,
    ComponentsLanguage
  },
  data () {
    return {
      links: [
        { name: this.$t('MY_COMPONENTS_PAGE.COLORS.TITLE'), url: '#colors' },
        { name: this.$t('MY_COMPONENTS_PAGE.FONTS.TITLE'), url: '#fonts' },
        { name: this.$t('MY_COMPONENTS_PAGE.BUTTONS.TITLE'), url: '#buttons' },
        { name: this.$t('MY_COMPONENTS_PAGE.ICONS.TITLE'), url: '#icons' },
        { name: this.$t('MY_COMPONENTS_PAGE.GRID.TITLE'), url: '#grid' },
        { name: this.$t('MY_COMPONENTS_PAGE.LANGUAGE.TITLE'), url: '#language' }
      ]
    }
  },
  methods: {
    goto (link) {
      const target = document.querySelector(link)
      if (target) smoothScroll(target)
    }
  }
}
</script>

<style lang="sass" scoped>
  section
    /deep/
      pre
        position: relative
        font-size: .8rem
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
