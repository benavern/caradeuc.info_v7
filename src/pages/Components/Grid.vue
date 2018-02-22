<template>
  <section class="container"  id="grid">
    <h1>
      {{ $t('MY_COMPONENTS_PAGE.GRID.TITLE') }}
    </h1>

    <p v-html="$t('MY_COMPONENTS_PAGE.GRID.DESCRIPTION')"></p>

    <hr>

    <h3>
      {{ $t('MY_COMPONENTS_PAGE.GRID.SIMPLE_SUBTITLE') }}
    </h3>

    <p>
      {{ $t('MY_COMPONENTS_PAGE.GRID.SIMPLE_DESCRIPTION') }}

      <code>
        {{ $t('MY_COMPONENTS_PAGE.GRID.SIMPLE_EXAMPLE') }}
      </code>
    </p>

    <div class="grid">
      <div v-for="(val, index) in gridItems"
           :key="index"
           :class="`grid-item xs-${val}`">
        <div :class="['box', 'demo-box', , { 'selected': val == 2 }]">
          {{ val }}
        </div>
      </div>
    </div>

    <hr>

    <h3>
      {{ $t('MY_COMPONENTS_PAGE.GRID.ADVANCED_SUBTITLE') }}
    </h3>

    <p>
      {{ $t('MY_COMPONENTS_PAGE.GRID.ADVANCED_DESCRIPTION') }}

      <code>
        {{ $t('MY_COMPONENTS_PAGE.GRID.ADVANCED_EXAMPLE') }}
      </code>
    </p>

    <div class="grid">
      <div v-for="(val, index) in [1, 2, 3, 4]"
           :key="index"
           :class="['grid-item', `xs-${val}-${val+1}`]">
        <div :class="['box', 'demo-box', , { 'selected': val == 2 }]">
          {{ val + '-' + (val+1) }}
        </div>
      </div>
    </div>

    <p>...</p>

    <hr>

    <h3>
      {{ $t('MY_COMPONENTS_PAGE.GRID.PUSH_SUBTITLE') }}
    </h3>

    <p>
      {{ $t('MY_COMPONENTS_PAGE.GRID.PUSH_DESCRIPTION') }}

      <code>
        {{ $t('MY_COMPONENTS_PAGE.GRID.PUSH_EXAMPLE1') }}
      </code>,

      <code>
        {{ $t('MY_COMPONENTS_PAGE.GRID.PUSH_EXAMPLE2') }}
      </code>
    </p>

    <div class="grid"
         v-for="(val, index) in [0, 4, 2, '3-4']"
         :key="index">
      <div :class="['grid-item', `push-xs-${val}`, `xs-4`]">
        <div :class="['box', 'demo-box', { 'selected': val == 2 }]">
          push {{ val }}
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="grid-item push-xs-2-3 xs-3">
        <div class="box demo-box selected">push 2-3</div>
      </div>
    </div>

    <hr>

    <div class="grid">
      <div class="grid-item m-2">
        <div class="box">
          <h5>
            {{ $t('EXAMPLE') }}
          </h5>

<pre data-file="grid.vue" v-pre>
&lt;div class="grid"&gt;

  &lt;div class="grid-item"&gt;
    &lt;div class="box"&gt;1&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="grid-item xs-first"&gt;
    &lt;div class="box"&gt;1-1&lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="grid-item xs-1 m-2"&gt;
    &lt;div class="box"&gt;2&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="grid-item xs-2 m-4"&gt;
    &lt;div class="box"&gt;4&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="grid-item xs-2 m-4"&gt;
    &lt;div class="box"&gt;4&lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="grid-item push-xs-2 xs-2 push-m-3 m-2-3"&gt;
    &lt;div class="box"&gt;Push&lt;/div&gt;
  &lt;/div&gt;

&lt;/div&gt;
</pre>
        </div>
      </div>
      <div class="grid-item m-2">
        <div class="box">
          <h5>
            {{ $t('RESULT') }}
          </h5>

          <div class="grid">
            <div class="grid-item">
              <div class="box demo-box">1</div>
            </div>
            <div class="grid-item xs-first">
              <div class="box demo-box">First</div>
            </div>

            <div class="grid-item xs-1 m-2">
              <div class="box demo-box">2</div>
            </div>
            <div class="grid-item xs-2 m-4">
              <div class="box demo-box">4</div>
            </div>
            <div class="grid-item xs-2 m-4">
              <div class="box demo-box">4</div>
            </div>

            <div class="grid-item push-xs-2 xs-2 push-m-3 m-2-3">
              <div class="box demo-box">Push</div>
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

<style lang="sass" scoped>
  .demo-box
    font-size: 2rem
    font-weight: bold
    text-align: center

    &.selected
      background-color: $green
      color: $white
</style>
