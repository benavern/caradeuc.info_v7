<template>
  <section id="fonts">
    <h1>
      {{ $t('MY_COMPONENTS_PAGE.FONTS.TITLE') }}
    </h1>

    <p>
      {{ $t('MY_COMPONENTS_PAGE.FONTS.DESCRIPTION') }}
    </p>

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

          <p :class="['demo-box', 'text-justify', font.class]">
            {{ $t('LOREM') }}
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
    const wording = this.$t('MY_COMPONENTS_PAGE.FONTS')
    return {
      fonts: [
        {
          name: 'Raleway',
          description: wording.RALEWAY_DESC,
          class: 'font-title',
          link: 'https://fonts.google.com/specimen/Raleway'
        },
        {
          name: 'Open Sans',
          description: wording.OPEN_SANS_DESC,
          class: 'font-text',
          link: 'https://fonts.google.com/specimen/Open+Sans'
        },
        {
          name: 'LeviReBrushed',
          description: wording.LEVI_RE_BRUSHED_DESC,
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
