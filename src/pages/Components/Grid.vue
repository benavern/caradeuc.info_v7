<template>
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
</template>

<script>
export default {
  name: 'ComponentsGrid'
}
</script>
