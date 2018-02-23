<template>
  <section class="container"  id="icons">
      <h1>
        {{ $t('MY_COMPONENTS_PAGE.ICONS.TITLE')}}
      </h1>

      <p>
        {{ $t('MY_COMPONENTS_PAGE.ICONS.DESCRIPTION')}}
      </p>

      <div class="grid">
        <div v-for="(icon, index) in icons"
            :key="index"
            class="grid-item xs-2 m-3 l-4 xl-5 xxl-6">
          <div class="box">
            <z-icon :name="icon" color="#428f68"/>
            {{ icon }}
          </div>
        </div>
      </div>

      <hr>

      <div class="grid">
        <div class="grid-item m-2">
          <div class="box">
            <h5>
              {{ $t('EXAMPLE') }}
            </h5>

<pre data-file="icone.vue" v-pre>
&lt;z-icon name="twitter" color="#abc"/&gt;
</pre>
          </div>
        </div>
        <div class="grid-item m-2">
          <div class="box">
            <h5>
              {{ $t('RESULT') }}
            </h5>

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
      icons: ['github', 'linkedin', 'twitter', 'menu-open', 'menu-close', 'bottom', 'uk-flag', 'fr-flag']
    }
  }
}
</script>
