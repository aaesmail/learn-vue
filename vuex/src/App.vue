<template>
  <base-container v-if="authenticated" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';
import UserAuth from './components/UserAuth';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  computed: {
    ...mapGetters(['authenticated']),
  },

  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
