<template>
  <div id="app">
    <z-header />
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import ZHeader from '@/components/ZHeader'
export default {
  name: 'App',
  components: { ZHeader }
}
</script>

<style lang="sass">
@import 'styles/base'
</style>
