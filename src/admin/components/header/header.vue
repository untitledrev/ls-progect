<template lang="pug" src="./header.pug"></template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>
