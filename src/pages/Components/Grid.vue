<template>
  <section id="grid">
    <h1>
      {{ $t('MY_COMPONENTS_PAGE.GRID.TITLE') }}
    </h1>

    <p v-html="$t('MY_COMPONENTS_PAGE.GRID.DESCRIPTION')"></p>

    <div class="grid">
      <div v-for="(val, index) in gridItems"
           :key="index"
           :class="`item xs-${val}`">
        <div class="box demo-box">
          {{ val }}
        </div>
      </div>
    </div>

    <hr>

    <div class="grid">
      <div class="item m-2">
        <div class="box">
          <h5>
            {{ $t('EXAMPLE') }}
          </h5>

<pre data-file="grid.vue" v-pre>
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
          <h5>
            {{ $t('RESULT') }}
          </h5>

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
</template>

<script>
export default {
  name: 'ComponentsGrid',
  data () {
    let gridItems = []

    for (let i = 1; i <= 12; i++) {
      const items = Array(i).fill(i)
      gridItems = [...gridItems, ...items]
    }

    return {
      gridItems
    }
  }
}
</script>
