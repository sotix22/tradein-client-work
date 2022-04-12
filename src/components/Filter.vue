<template>
  <div :class="{ BlockRequest: ShowBlockRequest }" class="filter filter-block">
    <FilterRequest
      :Request="Request"
      v-if="Request && ShowBlockRequest"
      @close="closeFilterRequest"
    />
    <div class="filter-content" v-else>
      <div class="filter-content-item">
        <h1 class="close" @click="closeFilter">X</h1>
        <p>Статус</p>
        <div class="filter-content-item-selector">
          <el-select
            v-model="FormSubmit.Status"
            class="select m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in Status"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="filter-content-item">
        <p>Сотрудник</p>
        <div class="filter-content-item-selector">
          <el-select
            v-model="FormSubmit.Iniciator"
            class="select m-2"
            placeholder="Select"
            size="large"
            :loading="!Iniciators"
          >
            <el-option
              v-for="item in Iniciators"
              :key="item.IdFace"
              :label="item.Login"
              :value="item.IdFace"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="filter-content-item">
        <p>Дата создания</p>
        <div class="filter-content-item-selector">
          <el-select
            disabled
            @visible-change="getIniciators"
            v-model="value"
            class="m-2"
            placeholder="В разработке"
            size="large"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <BtnGroup @reset="reset" @action="action"></BtnGroup>
    </div>
  </div>
</template>
<script>
import FilterRequest from "./FiterRequest.vue";
import { config } from "../api/constant";
import axios from "axios";
import BtnGroup from "../components/Blocks/BlockButtons.vue";
import selector from "./Selector/Selector.vue";
export default {
  data() {
    return {
      Request: [],
      ShowBlockRequest: false,
      Block: false,
      Iniciators: "",
      Status: [
        { id: 3, title: "Все" },
        { id: 0, title: "В ожидании" },
        { id: 1, title: "Подтверждено" },
        { id: 2, title: "Провал" },
      ],
      FormSubmit: {
        Status: 3,
        //По умолчанию 3 - Все
        Iniciator: "Все",
        //По умолчанию 0 - Все
        cDate: 0,
        //По умолчанию 0 - Все
        idRetail: localStorage.getItem("idRetail"),
      },
    };
  },
  mounted() {
    this.getIniciators();
  },
  methods: {
    closeFilter() {
      this.$emit("closeFilter");
    },
    closeFilterRequest() {
      this.ShowBlockRequest = false;
    },
    getIniciators() {
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
    },
    reset() {
      this.FormSubmit.Status = 3;
      this.FormSubmit.Iniciator = "Все";
      this.FormSubmit.cDate = 0;
    },
    action() {
      let Iniciator = "";
      if (this.FormSubmit.Iniciator === "Все") {
        Iniciator = 0;
      } else {
        Iniciator = this.FormSubmit.Iniciator;
      }
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/request/filter`,
        data: {
          Status: this.FormSubmit.Status,
          Iniciator: Iniciator,
          idRetail: this.FormSubmit.idRetail,
        },
      }).then((res) => {
        this.Request = res.data;
        console.log(this.Request);
        this.ShowBlockRequest = true;
      });
    },
    getValueStatus(status) {
      this.FormSubmit.Status = status;
    },
    getValueIniciator(iniciator) {
      this.FormSubmit.Iniciator = iniciator;
    },
    getValueDate(date) {
      this.FormSubmit.cDate = date;
    },
  },
  components: { selector, BtnGroup, FilterRequest },
};
</script>
<style lang="scss" scoped>
.close {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
}
.BlockRequest {
  position: fixed !important;
  width: 98% !important;
  height: 90% !important;
  left: 0 !important;
  right: 0;
  margin: 0 auto;
}

.filter {
  position: absolute;
  width: 720px;
  height: 400px;
  top: 10px;

  left: 527px;

  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.1);
  &-content {
    position: relative;
    height: 100%;
    padding: 20px;
    &-item {
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin-bottom: 30px;
      p {
        align-self: self-end;
      }
    }
  }
}
</style>
