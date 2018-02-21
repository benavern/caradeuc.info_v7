<template>
  <section id="intro" class="container">
      <div class="grid">
        <div class="item m-2">
          <div class="box">
            <h2 v-html="$t('HOME.INTRO.TITLE')"></h2>

            <p>
              {{ $t('HOME.INTRO.TEXT1') }}
            </p>

            <p>
              {{ $t('HOME.INTRO.TEXT2') }}
            </p>
          </div>
        </div>

        <div class="item m-2">
          <div class="box code-img-wrapper">
            <img src="../../assets/code.png" alt="Code icone">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'HomeIntro'
}
</script>

<style lang="sass" scoped>
#intro
  /deep/ .line-through
    position: relative
    display: inline-block

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      right: 0
      height: 0
      border-top: 0.1em solid $green

  .code-img-wrapper
    position: relative

    img
      display: block
      max-width: 100%
      height: auto
      margin: auto
</style>
