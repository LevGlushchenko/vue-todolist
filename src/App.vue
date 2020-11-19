<template>
  <div id="app">
    <h1>Vue.js Todo List</h1>
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form";
export default {
  name: "App",
  components: {
    Form
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);
}
</style>
