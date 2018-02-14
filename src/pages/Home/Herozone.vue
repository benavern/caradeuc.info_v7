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
        <router-link to="/nowhere">
          <z-button>
            {{ $t('HOME.HEROZONE.CALL_TO_ACTION') }}
          </z-button>
        </router-link>
      </div>
    </div>

    <div class="goto-bottom">
      <z-icon name="bottom"/>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon'
import ZButton from '@/components/ZButton'
export default {
  name: 'Herozone',
  components: {
    ZIcon,
    ZButton
  }
}
</script>

<style lang="sass" scoped>
  $blur: 5px

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

      h1
        text-shadow: 0 0 1rem $black

      .call-to-action
        margin: 3em 0

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

        h1
          font-size: 5rem
          line-height: 1

        .call-to-action
          font-size: 1.2rem // for the button size?

  @media (min-width: $large)
    #herozone
      height: 100vh
</style>
