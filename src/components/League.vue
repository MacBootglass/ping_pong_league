<template>
  <div class="league">
    <button
      type="button"
      class="btn btn-primary"
      v-on:click="close"
    >Close</button>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'league',
  store,
  props: [
    self,
  ],
  computed: {
  },
  methods: {
    close() {
      this.$store.commit('unselectLeague');
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';
</style>
