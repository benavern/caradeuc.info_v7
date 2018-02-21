<template>
  <div id="home">
    <home-herozone />
    <div id="bottom"></div>

    <home-intro />

  </div>
</template>

<script>
import HomeHerozone from './Home/Herozone'
import HomeIntro from './Home/Intro'
export default {
  name: 'Home',
  components: {
    HomeHerozone,
    HomeIntro
  }
}
</script>
