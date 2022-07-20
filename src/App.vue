<template>
  <nav>
    <router-link to="/">Task 1</router-link> |
    <router-link to="/task2">Task 2</router-link> |
    <router-link to="/task3">Task 3</router-link>
  </nav>
  <router-view />
</template>

<script></script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
button {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
