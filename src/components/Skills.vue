<template>
  <div class="holder">

    <form @submit.prevent="addSkill">
      <input name="skill" v-validate="'min:5'" type="text" placeholder="Enter a skill you have..." v-model="skill" autofocus/>
      <transition name="bounce">
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill')}}</p>
      </transition>
    </form>

    <ul>
      <transition-group appear enter-active-class="animated zoomInUp" leave-active-class="animated zoomOutDown" asfsadfsdf>
        <li v-for="(data, index) in skills" :key="index">
          <b-button @click="deleteSkill(index)" variant="danger">Delete</b-button>
          {{data.skill}}
        </li>
      </transition-group>
    </ul>

    <p>The above are the skills that you possess </p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {},
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
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = '';
        }
      });
    },
    deleteSkill(index) {
      console.log(index);
      this.skills.splice(index, 1);
    },
  },
  computed: {},
};
</script>

<style scoped>
.holder {
  background: #fff;
  position: relative;
}

.holder > *:not(ul),
ul li,
.alert,
b-button {
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
  margin: 0;
  padding: 1.3em;
  color: gray;
  font-weight: 300;
}

/* .container {
  box-shadow: 0px 0px 40px lightgray;
} */

.alert {
  z-index: 2;
  position: absolute;
  color: red;
  background-color: yellow;
  font-weight: bold;
  padding: 0.1em 1.15em;
  margin-top: -1em;
  margin-left: 5px;
  width: calc(100% - 10px);
}

.bounce-enter-active {
  animation: bounce 0.5s;
}

.bounce-leave-active {
  transform: scale(0);
  transition: transform 0.5s;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
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

li button {
  float: right;
}
</style>
