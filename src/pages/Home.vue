<template>
  <div id="home">
    <home-herozone />
    <div id="bottom"></div>

    <home-intro />

    <websites />

  </div>
</template>

<script>
import HomeHerozone from './Home/Herozone'
import HomeIntro from './Home/Intro'
import Websites from './Home/Websites'

export default {
  name: 'Home',
  components: {
    HomeHerozone,
    HomeIntro,
    Websites
  }
}
</script>
