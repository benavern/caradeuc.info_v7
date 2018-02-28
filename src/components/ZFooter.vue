<template>
  <section id="footer">
    <div class="footer-background"></div>
    <div class="footer-content text-center color-white container">
      <h1 class="footer-title font-fantasy">{{$t('FOOTER.TITLE')}}</h1>

      <p class="footer-subtitle text-center">{{$t('FOOTER.SUBTITLE')}}</p>

      <router-link to="/contact">
        <z-button>{{$t('FOOTER.CONTACT')}}</z-button>
      </router-link>

      <div class="footer-copyright"
             v-html="$t('FOOTER.COPYRIGHT', {symbole: '&#10084;'})"></div>
    </div>
  </section>
</template>

<script>
import ZButton from '@/components/ZButton'
export default {
  name: 'ZFooter',
  components: { ZButton }
}
</script>

<style lang="sass" scoped>
  $blur: 5px

  #footer
    position: relative
    padding-top: 3rem
    background-color: $black
    overflow: hidden

    .footer-background
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: -$blur
      background:
        image: url('../assets/bg.jpg')
        position: center center
        size: cover
        attachment: fixed
      filter: blur($blur)

    .footer-content
      position: relative
      text-shadow: 0 0 1rem $black

      .footer-copyright
        margin-top: 5rem
        font-size: .75rem
        font-style: italic
        font-weight: 100

  @media (min-width: $medium)
    #footer
      .footer-content
        h1
          font-size: 5rem
          line-height: 1

</style>
