<template>
  <div id="home">
    <herozone />

    <div class="container">
      {{ $t('HELLO_WORLD') }}
    </div>
  </div>
</template>

<script>
import Herozone from './Home/Herozone'
export default {
  name: 'Home',
  components: { Herozone }
}
</script>
