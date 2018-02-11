<template>
  <section id="buttons">
    <h1>Boutons</h1>

    <p>Des boutons, pour cliquer dessus...</p>
    <z-button @click.native="doSomething">
      {{ $t('TEST') }}
    </z-button>

    <hr>

    <div class="grid">
      <div class="item m-2">
        <div class="box">
          <h5>Exemple</h5>

<pre v-pre>
&lt;z-button @click.native="doSomething"&gt;
  button text
&lt;/z-button&gt;
</pre>
        </div>
      </div>
      <div class="item m-2">
    <h5>Resultat</h5>
        <div class="box">
          <z-button @click.native="doSomething">
            button text
          </z-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ZButton from '@/components/ZButton'

export default {
  name: 'ComponentsButtons',
  components: {
    ZButton
  },
  methods: {
    doSomething () {
      alert(this.$t('TEST'))
    }
  }
}
</script>
