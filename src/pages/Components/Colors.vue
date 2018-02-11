<template>
  <section id="colors">
    <h1>Couleurs</h1>

    <p>
      Des couleurs très monochrome avec une couleur verte, choisie avec amour, pour attirer l'oeil des passants.
    </p>

    <hr>

    <div class="grid">
      <div v-for="(color, index) in colors"
            :key="index"
            class="item m-2 l-3 xl-5 xxl-6">
        <div class="box">
          <span :class="['color-demo', `bg-${color}`]"></span>

          {{ color }}

          <span v-if="color === 'green'">
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
      colors: ['black', 'gray-dark', 'gray', 'gray-light', 'gray-lighter', 'white', 'green']
    }
  }

}
</script>

<style lang="sass" scoped>
  #colors
    .color-demo
      display: inline-block
      border: 1px solid $black
      height: 1em
      width: 1em
</style>
