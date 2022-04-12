<template>
  <div class="header-container header-content">
    <div class="logo-block">
      <div class="logo">
        <img :src="Logo" :width="225" :height="74" alt="" />
      </div>
    </div>
    <div class="middle-block"></div>
    <div class="right-header-block">
      <div v-on:click="viewSidebar()" class="block-icon">
        <img :src="iQuestion" :height="30" :width="30" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Logo: this.$props.LogoProps,
      iQuestion: this.$props.iQuestionProps,
    };
  },
  methods: {
    viewSidebar() {
      this.$store.dispatch("view");
    },
  },
  props: {
    iQuestionProps: String,
    LogoProps: String,
  },
};
</script>
<style lang="scss">
.header-container {
  margin: 0 25px;
}
.header-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
}
</style>
