<template>
  <div class="null-content">
    <div class="img">
      <img :src="img" alt="" :height="300" />
    </div>
    <p>{{ title }}</p>
  </div>
</template>
<script>
import mouse from "../../../assets/svg/no-content/mouse.svg";
export default {
  data() {
    return {
      img: mouse,
    };
  },
  props: {
    title: {
      type: String,
      default: "У вас не заведенно ни одной заявки......",
    },
  },
};
</script>
<style lang="scss" scoped>
.null-content {
  display: grid;
  justify-content: left;
  grid-template-columns: min-content auto;
  align-items: center;
  .img {
    position: relative;
  }
  p {
    font-family: "Courier New", Courier, monospace;
    padding-left: 20px;
    font-size: 20px;
  }
}
</style>
