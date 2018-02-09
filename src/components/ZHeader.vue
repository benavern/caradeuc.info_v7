<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <h1 class="font-fantasy">BC</h1>
        </router-link>
      </div>

      <div class="menu-switcher"
           @click="toggleMenu">
        {{ menuVisible ? '&times;' : '&Xi;' }}
      </div>

      <div class="social-links">
        <ul>
          <li>
            <a href="" target="_blank">link</a>
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
              <h2>
                {{ route.meta.displayName }}
              </h2>
              <h6>
                {{ route.meta.description }}
              </h6>
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'ZHeader',
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    hideMenu () {
      this.menuVisible = false
    }
  }
}
</script>

<style lang="sass">
  #content
    margin-left: $menu-width
</style>

<style lang="sass" scoped>

  header
    position: fixed
    left: 0
    top: 0
    height: 100vh
    width: $menu-width
    background-color: $white
    border-right: 1px solid $gray-light
    z-index: 999

    .header-content
      height: 100%
      width: 100%
      display: flex
      flex-direction: column
      justify-content: space-between
      text-align: center

      .logo
        a
          color: $black
          h1
            font-weight: normal

      .menu-switcher
        font-size: 2rem
        padding: 1rem 0
        cursor: pointer

        &:hover
          color: $primary

      .social-links
        ul
          list-style: none

    .menu
      position: absolute
      top: 0
      left: $menu-width
      width: calc(100vw - #{$menu-width})
      height: 100%
      background: rgba($black, .3)

      ul
        height: 100%
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

          a
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
