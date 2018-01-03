<template>
  <header class="navbar bg-gray">
    <section class="navbar-section">
      <img src="../assets/logo.svg" alt="logo" class="logo"/>
      <span class="text-primary">{{title}}</span>
    </section>
    <section class="navbar-section"></section>
  </header>
</template>

<script>
import store from '../store';

export default {
  name: 'navbar',
  store,
  props: [
    'title',
  ],
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .logo {
    width: 1.5rem;
    height: auto;
    margin-right: .5rem;
  }

  .navbar {
    border-bottom-color: $primary-color;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding: .5rem;
  }
</style>
