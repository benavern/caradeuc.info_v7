<template>
  <div id="app">
    <z-header />
    <div id="content">
      <router-view/>
      <z-footer></z-footer>
    </div>
  </div>
</template>

<script>
import ZHeader from '@/components/ZHeader'
import ZFooter from '@/components/ZFooter'
export default {
  name: 'App',
  components: {
    ZHeader,
    ZFooter
  }
}
</script>

<style lang="sass">
@import 'styles/base'
</style>
