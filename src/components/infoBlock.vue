<template>
  <div class="infoBlock">
    <div class="infoBlock__content">
      <ul>
        <li v-for="(element, index) in Info" :key="index">
          {{ element.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Info: Array,
  },
};
</script>
<style lang="scss" scoped>
.infoBlock {
  background: white;
  position: absolute;
  top: 30px;
  box-shadow: 10px 5px 5px grey;
  border: 1px solid grey;
  border-radius: 6px;
  height: auto;
  width: 200px;
  &__content {
    padding: 10px;
    ul {
      li {
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>