<template>
  <button v-if="authenticated" @click="logout">Logout</button>
  <button v-else @click="login">Login</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['authenticated']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
