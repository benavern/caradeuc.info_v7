<template>
  <section class="container"  id="buttons">
    <h1>
      {{ $t('MY_COMPONENTS_PAGE.BUTTONS.TITLE') }}
    </h1>

    <p>
      {{ $t('MY_COMPONENTS_PAGE.BUTTONS.DESCRIPTION') }}
    </p>

    <z-button @click.native="doSomething">
      {{ $t('MY_COMPONENTS_PAGE.BUTTONS.BUTTON_TEXT') }}
    </z-button>

    <hr>

    <div class="grid">
      <div class="grid-item m-2">
        <div class="box">
          <h5>
            {{ $t('EXAMPLE') }}
          </h5>

<pre data-file="button.vue" v-pre>
&lt;z-button @click.native="doSomething"&gt;
  button text
&lt;/z-button&gt;
</pre>
        </div>
      </div>

      <div class="grid-item m-2">
        <div class="box">
          <h5>
            {{ $t('RESULT') }}
          </h5>
          <div class="box">
            <z-button @click.native="doSomething">
              button text
            </z-button>
          </div>
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
      alert(this.$t('MY_COMPONENTS_PAGE.BUTTONS.BUTTON_ALERT'))
    }
  }
}
</script>
