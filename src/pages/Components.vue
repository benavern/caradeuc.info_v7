<template>
  <div>
    <section>
      <h1>Colors</h1>

      <div v-for="(color, index) in colors"
            :key="index">
        <span :class="['color-demo', `bg-${color}`]"></span>

        {{ color }}

        <span v-if="color === 'green'">
          = primary
        </span>
      </div>
    </section>
    <section>
      <h1>Buttons</h1>

      <z-button @click.native="buttonTest">
        {{ $t('TEST') }}
      </z-button>

    </section>

  </div>
</template>

<script>
import ZButton from '@/components/ZButton'

export default {
  name: 'Components',
  components: {
    ZButton
  },
  data () {
    return {
      colors: ['black', 'gray-dark', 'gray', 'gray-light', 'gray-lighter', 'white', 'green']
    }
  },
  methods: {
    buttonTest () {
      alert(this.$t('TEST'))
    }
  }
}
</script>

<style lang="sass" scoped>
  section
    border-bottom: 1px solid $gray-light
    padding: 1.5rem 2rem

    &:first-child
      border-top: 1px solid $gray-light

  .color-demo
    display: inline-block
    border: 1px solid $black
    height: 1em
    width: 1em

</style>
