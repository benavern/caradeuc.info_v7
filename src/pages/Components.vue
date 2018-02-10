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
      <h1>Couleurs</h1>

      <p>
        Des couleurs très monochrome avec une couleur verte, choisie avec amour, pour attirer l'oeil des passants.
      </p>

      <hr>

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

    <section id="fonts">
      <h1>Polices de caractère</h1>

      <p>Des polices libres, chinées sur le web.</p>

      <hr>

      <div class="grid">
        <div class="item l-3">
          <div class="box">
            <h5>Raleway</h5>
            <h6>Pour les titres</h6>
            <p class="font-title demo-box">
              Jelly beans halvah cake sweet roll fruitcake toffee candy canes. Chocolate cake croissant macaroon jelly pie jelly beans fruitcake bonbon cake. Jelly-o ice cream jelly pastry. Pie cheesecake biscuit pastry lollipop cheesecake brownie sweet.
            </p>
          </div>
        </div>
        <div class="item l-3">
          <div class="box">
            <h5>OpenSans</h5>
            <h6>Pour le texte</h6>
            <p class="font-text demo-box">
              Jelly beans halvah cake sweet roll fruitcake toffee candy canes. Chocolate cake croissant macaroon jelly pie jelly beans fruitcake bonbon cake. Jelly-o ice cream jelly pastry. Pie cheesecake biscuit pastry lollipop cheesecake brownie sweet.
            </p>
          </div>
        </div>
        <div class="item l-3">
          <div class="box">
            <h5>Brown Fox</h5>
            <h6>Pour les fantaisies</h6>
            <p class="font-fantasy demo-box">
              Jelly beans halvah cake sweet roll fruitcake toffee candy canes. Chocolate cake croissant macaroon jelly pie jelly beans fruitcake bonbon cake. Jelly-o ice cream jelly pastry. Pie cheesecake biscuit pastry lollipop cheesecake brownie sweet.
            </p>
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

    <section id="grid">
      <h1>Grille</h1>

      <p>
        Une grille très simple mais puissante qui exploite la propriété flexbox écrite en 15 lignes de sass
      </p>

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

  .demo-box
    background-color: $gray-lighter
    text-align: center
    // font-weight: bold
    border: 1px solid $gray-light
    padding: 1rem

  #colors
    .color-demo
      display: inline-block
      border: 1px solid $black
      height: 1em
      width: 1em

  #fonts
    .demo-box
      overflow: auto
      max-height: 12rem
</style>
