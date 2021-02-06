<template>
  <div id="app">
    <section class="title-company">
      <h1>{{nameCompany}}</h1>
    </section>

    <section class="content">
      <aside class="sidebar">
        <img src="./assets/logo.svg" alt="Logo Uello">
      </aside>

      <BoxInfos />

      <BaseMap />
    </section>
  </div>
</template>

<script>
import BoxInfos from './components/BoxInfos.vue'
//import Map from './components/Map.vue'
import BaseMap from './components/BaseMap.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    BoxInfos,
    //Map,
    BaseMap
  },
  computed: {
    ... mapState({
      nameCompany: state => state.nameCompany
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:#E5E5E5;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  align-items: center;

  .sidebar {
    width: 70px;
    height: 100vh;
    padding: 12px;
    background: #EA394F;
  }
}

.title-company {
  position: absolute;
  right: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 60px;
  align-items: center;

  h1 {
    position: relative;
    font-size: 18px;
    color: #EA394F;
    font-weight: 600;
    text-transform: uppercase;

    &::after {
      content: "";
      display: block;
      width: 3px;
      height: 100%;
      background: #EA394F;
      position: absolute;
      top: 0;
      left: -10px;
    }
  }
}


/* ============= RESPONSIVE ============= */
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;

    .sidebar {
      width: 100%;
      height: auto;
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }
}


/* ============= NORMALIZE ============= */

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}

div,
main,
aside,
section {
  box-sizing: border-box;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input { 
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
</style>
