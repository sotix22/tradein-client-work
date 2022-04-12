<template>
  <div class="container-fluid">
    <div class="searcher-block">
      <Searcher @openFilter="openFilter" />
    </div>
    <div class="btn" @click="createApplication()">Добавить</div>
    <div v-if="token" class="content">
      <Table />
    </div>
    <Filter
      @closeFilter="closeFilter"
      @sendFilter="sendFilter"
      v-show="filterShow"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Searcher from "@/components/Searcher/Searcher";
import Filter from "../components/Filter.vue";
export default {
  name: "Applications",
  data() {
    return {
      filterShow: false,
    };
  },
  components: {
    Searcher,
    Filter,
    Table: defineAsyncComponent(() =>
      import("@/components/Items/vTableApplications")
    ),
  },
  methods: {
    closeFilter() {
      this.filterShow = false;
    },
    sendFilter() {
      this.filterShow = false;
    },
    openFilter() {
      this.filterShow = true;
    },
    createApplication: function () {
      this.$router.push("/createApllication/");
    },
  },
  mounted() {
    this.$store.dispatch("RequestPending");
    this.$store.dispatch(
      "getRequestsByRetail",
      localStorage.getItem("idRetail")
    );
  },
  computed: {
    token: function () {
      return this.$store.getters.getToken;
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  margin: 10px 0 10px 0;
  width: 110px;
}
</style>
