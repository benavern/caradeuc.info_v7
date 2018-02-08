<template>
  <div>
    <h1>
      {{ $t('HELLO_WORLD') }}
    </h1>

    <z-button @click.native="test">
      {{ $t('TEST') }}
    </z-button>
  </div>
</template>

<script>
import ZButton from '@/components/ZButton'

export default {
  name: 'Home',
  components: {
    ZButton
  },
  methods: {
    test () {
      alert(this.$t('TEST'))
    }
  }
}
</script>

<style lang="sass" scoped>
  h1
    font-family: sans-serif
</style>
