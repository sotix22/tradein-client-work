<template>
  <div class="selector">
    <div class="selector-content" @click="openBlock">
      <div class="selector-content-item title">
        <p>{{ Title }}</p>
      </div>
      <div class="selector-content-item"></div>
      <div class="selector-content-item shivron">
        <shivron />
      </div>
    </div>

    <BlockStatus v-show="blockStatus" @getValue="getValueStatus" />
    <BlockIniciator
      v-show="blockIniciator"
      @getValue="getValueIniciator"
      :Iniciators="Iniciators"
    />
    <BlockDate v-show="blockData" @getValue="getValueDate" />
  </div>
</template>
<script>
import { config } from "../../api/constant";
import axios from "axios";
import shivron from "../vIco/ShivronDown.vue";
import BlockStatus from "../Blocks/BlockSelectStatus.vue";
import BlockIniciator from "../Blocks/BlockSelectIniciator.vue";
import BlockDate from "../Blocks/BlockSelectDate.vue";
export default {
  data() {
    return {
      Iniciators: [],
      Title: "Все",
      blockStatus: false,
      blockIniciator: false,
      blockData: false,
      formFilter: {
        status: "",
        iniciator: "",
        date: "",
      },
    };
  },
  watch: {
    FormSubmit(value) {
      console.log(value);
    },
  },
  methods: {
    getValueStatus(value) {
      this.$emit("getValueStatus", value);
      this.Title = value.title;
      this.formFilter.status = value;
      this.blockStatus = false;
    },
    getValueIniciator(value) {
      this.$emit("getValueIniciator", value);
      this.blockIniciator = false;
      this.Title = value.Login;
      this.blockIniciator = false;
      this.formFilter.iniciator = value;
    },
    getValueDate(value) {
      this.$emit("getValueDate", value);
      this.blockData = false;
      this.Title = value.title;
      this.blockData = false;
      this.formFilter.date = value;
    },
    openBlock() {
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/users/getUsersByCodeRetail`,
        data: {
          code: localStorage.getItem("idRetail"),
        },
      }).then((res) => {
        this.Iniciators = res.data;
      });
      if (this.$props.selectedStatus) {
        this.blockIniciator = false;
        this.blockData = false;

        this.blockStatus = !this.blockStatus;
      }
      if (this.$props.selectedIniciator) {
        this.blockData = false;
        this.blockStatus = false;
        this.blockIniciator = !this.blockIniciator;
      }
      if (this.$props.selectedDate) {
        this.blockIniciator = false;

        this.blockStatus = false;
        this.blockData = !this.blockData;
      }
    },
  },
  emits: ["getValueStatus", "getValueIniciator", "getValueDate"],
  props: {
    selectedStatus: {
      Type: Boolean,
    },
    selectedIniciator: {
      Type: Boolean,
    },
    selectedDate: {
      Type: Boolean,
    },
    FormSubmit: {
      Type: Object,
    },
  },
  components: { shivron, BlockStatus, BlockIniciator, BlockDate },
};
</script>
<style lang="scss">
.selector {
  cursor: pointer;
  position: relative;
  min-width: 255px;
  max-width: max-content;

  height: 29px;
  border-bottom: 2px solid #3652e3;
  &-content {
    padding: 2px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    &-item {
      display: grid;
      margin-bottom: 30px;
      p {
        margin-left: 10px;
        justify-items: end;
      }
    }
  }
}
.shivron {
  margin-right: 10px;
}
</style>
