<template>
  <section id="icons">
      <h1>Icones</h1>

      <p>Parceque c'est quand même mieux que des images...</p>

      <div class="grid">
        <div v-for="(icon, index) in icons"
            :key="index"
            class="item m-2 l-3 xl-5 xxl-6">
          <div class="box">
            <z-icon :name="icon" color="#428f68"/>
            {{ icon }}
          </div>
        </div>
      </div>

      <hr>

      <div class="grid">
        <div class="item m-2">
          <div class="box">
            <h5>Exemple</h5>

<pre v-pre>
&lt;z-icon name="twitter" color="#abc"/&gt;
</pre>
          </div>
        </div>
        <div class="item m-2">
          <div class="box">
            <h5>Resultat</h5>

            <z-icon name="twitter" color="#abc"/>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import ZIcon from '@/components/ZIcon'

export default {
  name: 'ComponentsIcons',
  components: {
    ZIcon
  },
  data () {
    return {
      icons: ['github', 'linkedin', 'twitter', 'menu-open', 'menu-close']
    }
  }
}
</script>
