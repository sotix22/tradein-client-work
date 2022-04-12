<template>
  <section>
    <Sidebar v-if="View" :Login="Login" />
    <vHeader v-if="token" />
    <router-view></router-view>
  </section>
</template>
<script>
import vHeader from "@/components/Header/Header.vue";
import Sidebar from "@/components/Sidebar";

export default {
  name: "App",
  computed: {
    token: function () {
      return this.$store.getters.getToken;
    },
    Login: function () {
      return this.$store.getters.getLogin;
    },
    View: function () {
      return this.$store.getters.getViewSidebar;
    },
  },
  components: {
    vHeader,
    Sidebar,
  },
};
</script>
<style lang="scss"></style>
