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
    height: 100vh
    background-color: $black
    overflow: hidden

    .herozone-background
      position: absolute
      top: -$blur
      left: -$blur
      right: -$blur
      bottom: -$blur
      background:
        image: url('../../assets/bg.jpg')
        position: center center
        size: cover
        attachment: fixed
      filter: blur($blur)
      opacity:

    .herozone-content
      position: absolute
      top: 50%
      left: 50%
      width: 90%
      transform: translate(-50%, -50%)
      text-shadow: 0 0 1rem $black

      h1
        font-size: 5rem

      .call-to-action
        padding: 5rem 0
        font-size: 3rem // for the button size?

</style>
