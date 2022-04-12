<template>
  <div class="searcher">
    <div class="icon-search">
      <img :src="iSearch" :height="20" :width="20" alt="Поиск" />
    </div>
    <div class="input-search">
      <input type="text" v-model="Search" placeholder="Поиск..." />
    </div>
    <div class="icon-search" @click="openFilter()">
      <img :src="iMaster" :height="20" :width="20" alt="Поиск" />
    </div>
  </div>
</template>
<script>
import iSearch from "@/../public/img/Search.svg";
import iMaster from "@/../public/img/Master.svg";
export default {
  name: "Searcher",
  data() {
    return {
      iSearch: iSearch,
      iMaster: iMaster,
      Search: "",
    };
  },
  methods: {
    openFilter() {
      this.$emit("openFilter");
    },
  },
  watch: {
    Search(Value) {
      this.$store.dispatch("SearchPrice", Value);
    },
  },
  emits: ["openFilter"],
};
</script>
<style lang="scss" scoped>
.searcher {
  height: 40px;
  width: max(850px);
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  background: #f1f3f4;
  border-radius: 6px;
  align-items: center;
  .icon-search {
    display: grid;
    margin-left: 10px;
    margin-right: 10px;
  }
}
input[type="text"] {
  width: max(720px);
  height: 35px;
  border: none;
  background: #f1f3f4;
  color: #6e6893;
}
input[type="text"]:focus {
  outline: none;
}
</style>
