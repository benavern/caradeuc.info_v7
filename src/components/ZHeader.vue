<template>
  <header>
    <div class="header-content">
      <div class="logo"
           @click="hideMenu">
        <router-link to="/">
          <h1 class="font-fantasy">BC</h1>
        </router-link>
      </div>

      <div class="menu-switcher"
           @click="toggleMenu">
        <template v-if="!menuVisible">
          <z-icon name="menu-open"/>
        </template>

        <template v-if="menuVisible">
          <z-icon name="menu-close"/>
        </template>
      </div>

      <div class="social-links">
        <ul>
          <li v-for="(social, index) in socialLinks"
              :key="index">
            <a :href="social.link" target="_blank">
              <z-icon :name="social.icon"/>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <transition name="menu">
      <nav v-show="menuVisible"
           class="menu"
           @click="hideMenu">
        <ul>
          <li v-for="(route, index) in $router.options.routes"
              :key="index">
            <router-link :to="route.path">
              <h2 class="font-fantasy">
                {{ $t(route.meta.displayName) }}
              </h2>
              <h6>
                {{ $t(route.meta.description) }}
              </h6>
            </router-link>
          </li>
          <li @click.stop>
            <div class="menu-item-content">
              <h2 class="font-fantasy">
                {{ $t('LANGUAGE') }}
              </h2>

              <div class="grid choose-lang">
                <div class="grid-item xs-2">
                  <div :class="['box', {selected: currentLang === 'en'}]"
                       :title="$t('LANGUAGE_EN')"
                       @click="changeLang('en')">
                    <z-icon name="uk-flag" />
                  </div>
                </div>

                <div class="grid-item xs-2">
                  <div :class="['box', {selected: currentLang === 'fr'}]"
                       :title="$t('LANGUAGE_FR')"
                       @click="changeLang('fr')">
                    <z-icon name="fr-flag" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
import ZIcon from '@/components/ZIcon'
import { getCountryByStorage, setCountryToStorage } from '@/country'

export default {
  name: 'ZHeader',
  components: {
    ZIcon
  },
  data () {
    return {
      menuVisible: false,
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/benavern'
        },
        {
          icon: 'twitter',
          link: 'https://twitter.com/benavern'
        },
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/benjamincaradeuc'
        }
      ],
      currentLang: null
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible ? this.hideMenu() : this.showMenu()
    },
    showMenu () {
      document.body.style.overflow = 'hidden'
      this.menuVisible = true
    },
    hideMenu () {
      document.body.style.overflow = 'auto'
      this.menuVisible = false
    },
    changeLang (lang) {
      if (this.currentLang === lang) {
        this.hideMenu()
      } else {
        setCountryToStorage(lang)
        location.reload()
      }
    }
  },
  mounted () {
    this.currentLang = getCountryByStorage()
  }
}
</script>

<style lang="sass">
  #content
    margin-top: $menu-height-mobile

    @media (min-width: $medium)
      margin-top: 0
      margin-left: $menu-width-desktop
</style>

<style lang="sass" scoped>
  header
    position: fixed
    left: 0
    top: 0
    height: $menu-height-mobile
    width: 100%
    z-index: 999

    @media (min-width: $medium)
      height: 100vh
      width: $menu-width-desktop
      background-color: $white

    .header-content
      position: relative
      height: 100%
      width: 100%
      display: flex
      flex-direction: row
      justify-content: space-between
      text-align: center
      line-height: 1
      background-color: $white
      border-bottom: 1px solid $gray-light
      box-shadow: 0 0 .5rem rgba($black, .2)
      z-index: 1

      @media (min-width: $medium)
        flex-direction: column
        border-bottom: none
        border-right: 1px solid $gray-light

      .logo
        a
          color: $black
          h1
            line-height: $menu-height-mobile
            height: $menu-height-mobile
            padding: .5rem 1rem
            margin: 0

            @media (min-width: $medium)
             margin: 1.5rem 0

      .menu-switcher
        font-size: 2rem
        padding: 0 1rem
        cursor: pointer
        padding: 1rem

        &:hover
          color: $primary

      .social-links
        display: none

        @media (min-width: $medium)
          display: block

        ul
          list-style: none
          padding: 1rem 0
          font-size: 1.2rem

          li a
            display: block
            padding: .2em

    .menu
      position: absolute
      width: 100%
      top: $menu-height-mobile
      left: 0
      height: calc(100vh - #{$menu-height-mobile})
      background: rgba($black, .3)
      overflow: auto

      @media (min-width: $medium)
        width: calc(100vw - #{$menu-width-desktop})
        top: 0
        left: $menu-width-desktop
        height: 100%

      ul
        min-height: 100%
        list-style: none
        display: flex
        flex-direction: column
        position: relative

        li
          flex: 1
          border-top: 1px solid $gray-light
          display: flex
          background-color: $white
          transition: transform .5s

          &:first-child
            border-top: none

          a,
          .menu-item-content
            padding: 1rem
            flex: 1
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center

            h2
              color: $black
            h6
              color: $gray

            &:hover
              color: $primary
              background-color: $gray-lighter

              h2, h6
                color: $primary

            .choose-lang
              font-size: 4rem
              line-height: .8

              .box
                cursor: pointer
                filter: drop-shadow(0 0 .5rem rgba($black, .3))

                &.selected
                  filter: drop-shadow(0 0 1rem $black)
                  transform: scale(1.2)

      ////// transition settings //////
      &.menu-enter-active,
      &.menu-leave-active
        transition: opacity .3s

        li:nth-child(even)
          transform: translateX(-100%)

        li:nth-child(odd)
          transform: translateX(100%)

      &.menu-enter,
      &.menu-leave-to
        opacity: 0

        li
          transform: translateX(0)
      /////// END transition settings ///////

</style>
