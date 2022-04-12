<template lang="">
  <div class="button-group">
    <div class="btn grey" @click="reset">Сбросить</div>
    <div class="btn" @click="action">Поиск</div>
  </div>
</template>
<script>
export default {
  methods: {
    action() {
      this.$emit("action");
    },
    reset() {
      this.$emit("reset");
    },
  },
};
</script>
<style lang="scss">
.button-group {
  display: grid;
  position: absolute;
  bottom: 60px;
  right: 20px;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
}
.grey {
  color: black;
  background-color: #e5e5e5;
}
</style>
