<template>
  <div id="herozone"
       class="text-center color-white">
    <div class="herozone-background"></div>
    <div class="herozone-content">
      <h1 class="font-fantasy"
          v-html="$t('HOME.HEROZONE.GREATING')"></h1>

      <h6>
        {{ $t('HOME.HEROZONE.SUBTITLE') }}
      </h6>

      <div class="call-to-action">
        <a href="http://labo.caradeuc.info">
          <z-button>
            {{ $t('HOME.HEROZONE.CALL_TO_ACTION') }}
          </z-button>
        </a>
      </div>
    </div>

    <div class="goto-bottom"
         @click="toBottom">
      <z-icon name="bottom"
              color="#fff"/>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon'
import ZButton from '@/components/ZButton'
import smoothScroll from '@/utils/smooth-scroll'
export default {
  name: 'HomeHerozone',
  components: {
    ZIcon,
    ZButton
  },
  methods: {
    toBottom () {
      const bottom = document.querySelector('#bottom')
      smoothScroll(bottom)
    }
  }
}
</script>

<style lang="sass" scoped>
  $blur: 5px

  @keyframes jump
    0%
      transform: translate(-50%, 0)
    20%
      transform: translate(-50%, 0)
    40%
      transform: translate(-50%, -1rem)
    50%
      transform: translate(-50%, 0)
    60%
      transform: translate(-50%, -.5rem)
    80%
      transform: translate(-50%, 0)
    100%
      transform: translate(-50%, 0)

  #herozone
    position: relative
    background-color: $black
    overflow: hidden

    .herozone-background
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: -$blur
      background:
        image: url('../../assets/bg.jpg')
        position: center center
        size: cover
        attachment: fixed
      filter: blur($blur)

    .herozone-content
      position: relative
      text-shadow: 0 0 1rem $black
      padding: 0 1rem
      margin: 3rem 0 5rem

      h1
        text-shadow: 0 0 1rem $black

      .call-to-action
        margin: 3em 0

    .goto-bottom
      position: absolute
      bottom: 0
      left: 50%
      transform: translate(-50%, 0)
      font-size: 2rem
      filter: drop-shadow(0 0 .2rem $black)
      animation:
        name: jump
        duration: 1.5s
        iteration-count: infinite

      &:hover
        cursor: pointer

  @media (min-width: $medium)
    #herozone
      height: 768px // for compatibility
      height: calc(100vh - #{$menu-height-mobile})

      .herozone-content
        position: absolute
        top: 50%
        left: 50%
        width: 90%
        transform: translate(-50%, -50%)
        margin: 5rem 0

        h1
          font-size: 5rem
          line-height: 1

        .call-to-action
          font-size: 1.2rem

      .goto-bottom
        font-size: 3rem

  @media (min-width: $large)
    #herozone
      height: 100vh

      .goto-bottom
        font-size: 4rem
</style>
