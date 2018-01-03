<template>
  <navbar title="Dashboard"/>
</template>

<script>
import store from './store';
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  store,
  data() {
  },
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
</style>
