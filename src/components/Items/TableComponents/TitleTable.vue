<template>
  <img v-if="Img" :src="Img" :alt="Title" />
  <div v-else class="title">
    <p @mouseenter="ShowBlockInfo = true" @mouseleave="ShowBlockInfo = false">
      {{ Title }}
    </p>
    <div class="shivron-group">
      <div class="shivron-img" @click="Sort(Up)">
        <img :src="ShivronUp" :width="10" :height="10" alt="" />
      </div>
      <div class="shivron-img" @click="Sort(Down)">
        <img :src="ShivronDown" :width="10" :height="10" alt="" />
      </div>
    </div>
    <InfoBlock v-show="Info && ShowBlockInfo" :Info="Info" />
  </div>
</template>
<script>
import InfoBlock from "../../infoBlock.vue";
import ShivronUp from "../../../assets/Shivron-up.svg";
import ShivronDown from "../../../assets/Shivron-down.svg";
export default {
  name: "TitleTable",
  data() {
    return {
      ShivronUp: ShivronUp,
      ShivronDown: ShivronDown,
      ShowBlockInfo: false,
    };
  },
  components: {
    InfoBlock,
  },
  methods: {
    Sort(value) {
      this.$emit("Sort", value);
    },
  },
  props: {
    Title: String,
    Img: String,
    Up: String,
    Down: String,
    Info: [Array, Boolean],
  },
  emits: ["Sort"],
};
</script>
<style lang="scss" scoped>
.title {
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: auto min-content;
  align-items: center;
  grid-gap: 20px;
  p {
    color: #6e6893;
    font-family: "Inter500";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
  .shivron-group {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 1px;
  }
  .shivron-img {
    height: min-content;
    display: grid;
    cursor: pointer;
    height: 5px;
  }
}
</style>
