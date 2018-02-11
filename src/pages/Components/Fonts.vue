<template>
  <section id="fonts">
    <h1>Polices de caractère</h1>

    <p>Des polices libres, chinées sur le web.</p>

    <hr>

    <div class="grid">

      <div class="item m-2 xxl-3"
           v-for="(font, index) in fonts"
           :key="index">
        <div class="box">
          <a :href="font.link">
            <h5>
              {{ font.name }}
            </h5>
          </a>

          <h6>
            {{ font.description }}
          </h6>

          <p :class="['demo-box', font.class]">
            Jelly beans halvah cake sweet roll fruitcake toffee candy canes. Chocolate cake croissant macaroon jelly pie jelly beans fruitcake bonbon cake. Jelly-o ice cream jelly pastry. Pie cheesecake biscuit pastry lollipop cheesecake brownie sweet.
          </p>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'ComponentsFonts',
  data () {
    return {
      fonts: [
        {
          name: 'Raleway',
          description: 'Pour les titres',
          class: 'font-title',
          link: 'https://fonts.google.com/specimen/Raleway'
        },
        {
          name: 'Open Sans',
          description: 'Pour le texte',
          class: 'font-text',
          link: 'https://fonts.google.com/specimen/Open+Sans'
        },
        {
          name: 'LeviReBrushed',
          description: 'Pour les fantaisies',
          class: 'font-fantasy',
          link: 'http://www.onlinewebfonts.com/download/737bf92a1c2df108cc14f74f8c8d3b6d'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  #fonts
    .demo-box
      overflow: auto
      max-height: 15rem

</style>
