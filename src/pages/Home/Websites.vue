<template>
  <section id="websites">
    <website-item v-for="(website, i) in websites"
                  :key="i"
                  :name="website.name"
                  :description="website.description"
                  :url="website.url"
                  :img="website.img"
                  v-if="website.display"/>
  </section>
</template>

<script>
import WebsitesData from './websitesData'
import WebsiteItem from '@/components/WebsiteItem'

export default {
  name: 'Websites',
  components: { WebsiteItem },
  data () {
    return {
      websites: WebsitesData
    }
  }
}
</script>
