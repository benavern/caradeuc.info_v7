<template>
  <section class="container" id="colors">
    <h1>
        {{ $t('MY_COMPONENTS_PAGE.COLORS.TITLE') }}
    </h1>

    <p>
      {{ $t('MY_COMPONENTS_PAGE.COLORS.DESCRIPTION') }}
    </p>

    <hr>

    <div class="grid">
      <div v-for="(color, index) in colors"
            :key="index"
            class="grid-item xs-2 m-3 l-4 xl-5 xxl-6">
        <div class="box">
          <div :class="['color-demo', `bg-${color.name}`]">
            <div :class="['color-demo-hex', `color-${color.display}`, 'font-bold']">
              {{ color.hex }}
            </div>
          </div>

          {{ color.name }}

          <span v-if="color.name === 'green'">
            = primary
          </span>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsColors',
  data () {
    return {
      colors: [
        { name: 'black', hex: '#000', display: 'white' },
        { name: 'gray-dark', hex: '#4d4d4d', display: 'white' },
        { name: 'gray', hex: '#999', display: 'white' },
        { name: 'gray-light', hex: '#e6e6e6', display: 'black' },
        { name: 'gray-lighter', hex: '#fafafa', display: 'black' },
        { name: 'white', hex: '#fff', display: 'black' },
        { name: 'green', hex: '#428f68', display: 'white' }
      ]
    }
  }

}
</script>

<style lang="sass" scoped>
  #colors
    .color-demo
      position: relative
      height: 0
      padding-top: 35%
      border: 1px solid $black

      .color-demo-hex
        position: absolute
        right: 0
        bottom: 0
        padding: .5rem 1rem

</style>
