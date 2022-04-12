<template>
  <div class="container-fluid">
    <div class="searcher-block">
      <Searcher />
    </div>
    <TablePrice :phones="phones" v-if="token" />
    <Alert v-else />
  </div>
</template>
<script>
import Searcher from "@/components/Searcher/Searcher";
import Greeting from "@/components/Greeting";
import TablePrice from "@/components/Items/vTablePrice";
import Alert from "@/components/Allert";
export default {
  name: "Price",
  components: { Searcher, Greeting, TablePrice, Alert },
  computed: {
    token: function () {
      return this.$store.getters.getToken;
    },
    phones: function () {
      return this.$store.getters.getPhones;
    },
  },
  mounted() {
    this.$store.dispatch("getPhones");
  },
};
</script>
<style lang="scss" scoped>
.searcher-block {
  margin-top: 20px;
  height: 70px;
  display: grid;
  background: #f9f9f9;
  justify-content: center;
  align-content: center;
  border-radius: 8px 8px 0px 0px;
}
</style>
