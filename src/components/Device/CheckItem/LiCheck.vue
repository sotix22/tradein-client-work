<template>
  <li class="list">
    <div class="check">
      <div
        class="check_input"
        v-if="rateItem.value == 0 || rateItem.value == true"
      >
        <input disabled type="checkbox" checked />
      </div>
      <div class="check_input" v-else>
        <input disabled type="checkbox" />
      </div>
      <p class="check_text">
        {{ rateItem.title }}
      </p>
    </div>
  </li>
</template>
<script>
export default {
  name: "LiCheck",
  data() {
    return {};
  },
  props: { rateItem: Object },
};
</script>
<style lang="scss" scoped>
.list {
  .check {
    display: grid;
    grid-template-columns: min-content auto;
    background-color: white;
    grid-gap: 15px;
    .check_input {
      input {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
