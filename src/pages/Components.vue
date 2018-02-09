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

<pre v-pre>
&lt;z-button&gt;
  button text
&lt;/z-button&gt;
</pre>

    </section>

    <section>
      <h1>Icons</h1>

      <div v-for="(icon, index) in icons"
           :key="index">
        <z-icon :name="icon" color="#428f68"/>
        {{ icon }}
      </div>

<pre v-pre>
&lt;z-icon name="github" color="#428f68"/&gt;
</pre>

    </section>

  </div>
</template>

<script>
import ZButton from '@/components/ZButton'
import ZIcon from '@/components/ZIcon'

export default {
  name: 'Components',
  components: {
    ZButton,
    ZIcon
  },
  data () {
    return {
      colors: ['black', 'gray-dark', 'gray', 'gray-light', 'gray-lighter', 'white', 'green'],
      icons: ['github', 'linkedin', 'twitter']
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

    pre
      margin: 1rem -2rem
      padding: 1rem 2rem

  .color-demo
    display: inline-block
    border: 1px solid $black
    height: 1em
    width: 1em

</style>
