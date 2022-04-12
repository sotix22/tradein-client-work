<template>
  <div  class="greeting">
    <div>
      <h1>{{ TextMSG }}</h1>
    </div>

    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    TextMSG: String,
  },
};
</script>
<style lang="scss" scoped>
.greeting{
  margin-bottom:20px;

}
hr{
  margin: 0;
}
</style>