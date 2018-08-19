<template>
  <div id="app">
    <Skills/>
  </div>
</template>

<script>
import Skills from './components/Skills.vue';

export default {
  name: 'app',
  components: {
    Skills,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700");

body {
  background-color: #eeeeee;
  font-family: "Quicksand", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}

@media (min-width: 0px) {
  #app {
    font-size: 0.7em;
    width: 80%;
  }
}

@media (min-width: 768px) {
  #app {
    font-size: 0.8em;
    width: 70%;
  }
}

@media (min-width: 992px) {
  #app {
    font-size: 0.9em;
    width: 60%;
  }
}

@media (min-width: 1200px) {
  #app {
    font-size: 1em;
    width: 50%;
  }
}
</style>
