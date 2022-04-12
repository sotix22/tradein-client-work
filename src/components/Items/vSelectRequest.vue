<template>
  <div class="form_content_block">
    <div class="content">
      <div class="content_title">
        <h5>{{ Title }}</h5>
        <p>{{ Warning }}</p>
      </div>

      <div class="content_select">
        <p>{{ TitleParagraph }}</p>
        <select @input="getValue">
          <option
            v-for="(item, index) in Options"
            :key="index"
            :value="item"
            >{{ item.Title }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vSelectRequest",
  data() {
    return {
      result: "",
    };
  },
  methods: {
    getValue(value) {
      this.$emit("getValue", value);
    },
  },
  props: {
    Options: Array,
    Title: String,
    Warning: String,
    TitleParagraph: String,
  },
};
</script>
<style lang=""></style>
