<template>
  <div class="holder">
    <input type="text" placeholder="Enter a skill you have..." v-model="skill" />
    <ul>
      <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
    </ul>
    <p>The above are the skills that you possess </p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    msg: String,
  },
  data() {
    return {
      skill: '',
      skills: [
        { skill: 'Vue.js' },
        { skill: 'Frontend Developer' },
        { skill: 'Javascript' },
      ],
    };
  },
  methods: {
    // handlers
    toggleAlert() {
      this.showAlert = !this.showAlert;
    },
  },
  computed: {
    // getters
    alert() {
      return {
        alert: true,
        alertActive: this.showAlert,
      };
    },
  },
};
</script>

<style scoped>
.holder {
  background: #fff;
}

.holder > *:not(ul),
ul li {
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 1em;
  font-size: 1.5em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
  font-weight: 500;
}

p {
  padding: 1em;
  font-size: 1.3em;
  text-align: center;
  margin: 0;
  padding: 1.3em;
  color: gray;
  font-weight: 500;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

::placeholder {
  color: #ccc;
  font-weight: 300;
}

input {
  font-family: inherit;
  border: 0;
  padding: 1em calc(1.15em + 5px);
  font-size: 1.3em;
  font-weight: 700;
  background-color: #666;
  color: white;
  width: 100%;
}
</style>
