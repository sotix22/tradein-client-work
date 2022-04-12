<template>
  <div class="fiter_request">
    <h2 @click="close">X</h2>
    <h1>Результаты поиска</h1>
    <RequestTable v-if="Request" :Requests="Request" />
    <p v-else>По данному запросу заявок нет</p>
  </div>
</template>
<script>
import RequestTable from "./Items/vTableApplicationsRequest.vue";
export default {
  props: {
    Request: {
      type: Array,
    },
  },
  components: {
    RequestTable,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  margin-bottom: 75px;
}
.fiter_request {
  padding: 20px;
  position: relative;
  text-align: center;
}
h2 {
  cursor: pointer;
}
</style>
