<template>
  <section id="wording">
    <h1>
      {{ $t('MY_COMPONENTS_PAGE.LANGUAGE.TITLE') }}
    </h1>
    <p>
      {{ $t('MY_COMPONENTS_PAGE.LANGUAGE.DESCRIPTION') }}
    </p>

    <p v-html="$t('MY_COMPONENTS_PAGE.LANGUAGE.CURRENT_LANGUAGE', { currentLanguage })">Chargement ...</p>

    <div class="grid">
      <div class="item m-2">
        <div class="box text-center">
          <z-icon name="fr-flag"
                  @click.native="setCountry('fr')"
                  class="big-flag"
                  :title="$t('LANGUAGE_FR')" />
        </div>
      </div>
      <div class="item m-2">
        <div class="box text-center">
          <z-icon name="uk-flag"
                  @click.native="setCountry('en')"
                  class="big-flag"
                  :title="$t('LANGUAGE_EN')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ZIcon from '@/components/ZIcon'
import { getCountryByStorage, setCountryToStorage } from '@/country'

export default {
  name: 'Language',
  components: { ZIcon },
  data () {
    return {
      country: null
    }
  },
  computed: {
    currentLanguage () {
      if (this.country === 'fr') return this.$t('LANGUAGE_FR')
      if (this.country === 'en') return this.$t('LANGUAGE_EN')
      return null
    }
  },
  methods: {
    getCountry () {
      this.country = getCountryByStorage()
    },
    setCountry (country) {
      setCountryToStorage(country)
      location.reload()
    }
  },
  mounted () {
    this.getCountry()
  }
}
</script>

<style lang="sass" scoped>
  .big-flag
    font-size: 8rem
    cursor: pointer
</style>
