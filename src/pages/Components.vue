<template>
  <div>
    <section id="intro">
      <h1>Mes composants</h1>

      <p>
        J'ai développé ce site à l'aide de la librairie VueJs 2.5 et de sass (version indentée).
      </p>

      <p>
        Vous vous trouvez actuellement sur la page qui m'a permit de faire des tests.
        L'ordre des éléments de la page ne suit pas de logique particulière.
      </p>

    </section>

    <section id="colors">
      <h1>Colors</h1>

      <p>
        Des couleurs très monochrome avec une couleur verte, choisie avec amour, pour attirer l'oeil des passants.
      </p>

      <div class="grid">
        <div v-for="(color, index) in colors"
              :key="index"
              class="item m-2 l-3 xl-5 xxl-6">
          <div class="box">
            <span :class="['color-demo', `bg-${color}`]"></span>

            {{ color }}

            <span v-if="color === 'green'">
              = primary
            </span>

          </div>
        </div>
      </div>
    </section>

    <section id="buttons">
      <h1>Boutons</h1>

      <p>Des boutons, pour cliquer dessus...</p>
      <z-button @click.native="buttonTest">
        {{ $t('TEST') }}
      </z-button>

      <hr>

      <div class="grid">
        <div class="item m-2">
          <div class="box">
            <h5>Exemple</h5>

<pre v-pre>
&lt;z-button&gt;
  button text
&lt;/z-button&gt;
</pre>
          </div>
        </div>
        <div class="item m-2">
      <h5>Resultat</h5>
          <div class="box">
            <z-button>
              button text
            </z-button>
          </div>
        </div>
      </div>
    </section>

    <section id="icons">
      <h1>Icones</h1>

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

    <section id="grid">
      <h1>Grid</h1>

      <div class="grid">
        <div class="item xs-1"><div class="box demo-box">1</div></div>

        <div class="item xs-2"><div class="box demo-box">2</div></div>
        <div class="item xs-2"><div class="box demo-box">2</div></div>

        <div class="item xs-3"><div class="box demo-box">3</div></div>
        <div class="item xs-3"><div class="box demo-box">3</div></div>
        <div class="item xs-3"><div class="box demo-box">3</div></div>

        <div class="item xs-4"><div class="box demo-box">4</div></div>
        <div class="item xs-4"><div class="box demo-box">4</div></div>
        <div class="item xs-4"><div class="box demo-box">4</div></div>
        <div class="item xs-4"><div class="box demo-box">4</div></div>

        <div class="item xs-5"><div class="box demo-box">5</div></div>
        <div class="item xs-5"><div class="box demo-box">5</div></div>
        <div class="item xs-5"><div class="box demo-box">5</div></div>
        <div class="item xs-5"><div class="box demo-box">5</div></div>
        <div class="item xs-5"><div class="box demo-box">5</div></div>

        <div class="item xs-6"><div class="box demo-box">6</div></div>
        <div class="item xs-6"><div class="box demo-box">6</div></div>
        <div class="item xs-6"><div class="box demo-box">6</div></div>
        <div class="item xs-6"><div class="box demo-box">6</div></div>
        <div class="item xs-6"><div class="box demo-box">6</div></div>
        <div class="item xs-6"><div class="box demo-box">6</div></div>

        <div class="item xs-7"><div class="box demo-box">7</div></div>
        <div class="item xs-7"><div class="box demo-box">7</div></div>
        <div class="item xs-7"><div class="box demo-box">7</div></div>
        <div class="item xs-7"><div class="box demo-box">7</div></div>
        <div class="item xs-7"><div class="box demo-box">7</div></div>
        <div class="item xs-7"><div class="box demo-box">7</div></div>
        <div class="item xs-7"><div class="box demo-box">7</div></div>

        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>
        <div class="item xs-8"><div class="box demo-box">8</div></div>

        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>
        <div class="item xs-9"><div class="box demo-box">9</div></div>

        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>
        <div class="item xs-10"><div class="box demo-box">10</div></div>

        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>
        <div class="item xs-11"><div class="box demo-box">11</div></div>

        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
        <div class="item xs-12"><div class="box demo-box">12</div></div>
      </div>

      <hr>
      <div class="grid">
        <div class="item m-2">
          <div class="box">
            <h5>Exemple</h5>

<pre v-pre>
&lt;div class="grid"&gt;

  &lt;div class="item"&gt;
    &lt;div class="box"&gt;1&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="item xs-first"&gt;
    &lt;div class="box"&gt;1-1&lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="item xs-1 m-2"&gt;
    &lt;div class="box"&gt;2&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="item xs-2 m-4"&gt;
    &lt;div class="box"&gt;4&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="item xs-2 m-4"&gt;
    &lt;div class="box"&gt;4&lt;/div&gt;
  &lt;/div&gt;

&lt;/div&gt;
</pre>
          </div>
        </div>
        <div class="item m-2">
          <div class="box">
            <h5>Resultat</h5>

            <div class="grid">
              <div class="item">
                <div class="box demo-box">1</div>
              </div>
              <div class="item xs-first">
                <div class="box demo-box">1-1</div>
              </div>

              <div class="item xs-1 m-2">
                <div class="box demo-box">2</div>
              </div>
              <div class="item xs-2 m-4">
                <div class="box demo-box">4</div>
              </div>
              <div class="item xs-2 m-4">
                <div class="box demo-box">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      icons: ['github', 'linkedin', 'twitter', 'menu-open', 'menu-close']
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
      font-size: .8rem
      font-family: monospace
      overflow-x: auto

  #colors
    .color-demo
      display: inline-block
      border: 1px solid $black
      height: 1em
      width: 1em

  #grid
    .demo-box
      background-color: $gray-lighter
      text-align: center
      font-weight: bold
      border: 1px solid $gray-light

</style>
