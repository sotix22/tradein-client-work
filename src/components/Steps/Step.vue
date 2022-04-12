<template lang="">
  <div>
    <el-steps :active="index" align-center>
      <el-step
        v-for="(Step, index) in items"
        :key="index"
        :title="Step.index"
        :description="Step.label"
      ></el-step>
    </el-steps>
  </div>
</template>
<script>
export default {
  name: "Step",
  data() {
    return {};
  },
  props: {
    items: Array,
    index: Number,
  },
};
</script>
<style lang=""></style>
