<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
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
  padding-top: 3em;
}
body,
html {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}

nav a {
  display: inline-block;
  font-size: 1.25em;
  padding: 0.5em 1em;
  margin-right: 0.5em;
  margin-bottom: 0.4em;
  /* font-weight: 300; */
  /* font-weight: 400; */
  font-weight: 500;
  /* font-weight: 700; */
  background: #fff;
  border-radius: 0.3em;
  /* color: rgb(0, 110, 255); */
  text-decoration: none;
}

nav a:hover {
  text-decoration: none;
  color: white;
  background-color: orange;
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
