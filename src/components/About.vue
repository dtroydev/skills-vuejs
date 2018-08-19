<template>
  <div>
    <h1>Hello {{ their_name }}, This is an About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati modi perspiciatis ipsa qui iusto rem. Ad expedita, ex officia labore esse unde suscipit est deleniti, ducimus reiciendis vel minus.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name,
    };
  },
};
</script>

<style></style>
