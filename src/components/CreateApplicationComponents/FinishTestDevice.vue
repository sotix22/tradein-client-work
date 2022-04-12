<template>
  <div class="finish">
    <div class="block_shadow"></div>
    <div class="finish_block" v-if="Request">
      <div class="finish_content">
        <div class="finish_title">
          <h1>
            {{ warning }} от
            {{
              new Date(Date.parse(Request.DataCreateRequest)).toLocaleString(
                "ru",
                "yyyy MM dd"
              )
            }}
          </h1>
        </div>
        <div class="finish_about">
          <div class="img">
            <img :src="test" alt="" />
          </div>

          <div class="finish_context">
            <h2>Смартфон {{ Request.DeviceTitle }}</h2>
            <div class="finish_context_list">
              <ul>
                <li>Адресс магазина: {{ Request.Retail }}</li>
                <li>ФИО продавца: {{ Request.Iniciator }}</li>
                <li>IMEI устройства: {{ Request.IMEI }}</li>
                <li>Цвет: {{ Request.Color }}</li>
              </ul>
            </div>

            <h2 id="price">Оценочная стоимость:{{ Request.Price }}Р</h2>
          </div>
        </div>
        <div class="finish_btn button_group">
          <div class="btn cancel" v-on:click="FinishReqBack">Назад</div>
          <div class="btn back" v-on:click="FinishReqFalse">
            Клиент Отказался
          </div>
          <div
            class="btn further"
            v-if="Request.Price > 100"
            v-on:click="FinishReqTrue"
          >
            Клиент Согласен
          </div>
        </div>
      </div>
    </div>

    <div class="finish_block" v-else>
      <div class="finish_content">
        <div class="finish_title">
          <h1>{{ title }}</h1>
        </div>

        <div class="finish_about">
          <div class="img" v-show="imgStatus">
            <img
              :height="500"
              :width="439"
              :src="Img"
              :onLoad="onLoadHandler"
              @error="onErrHandler"
              alt=""
            />
          </div>
          <div class="img" v-show="!imgStatus">
            <el-skeleton-item
              variant="image"
              style="width: 439px; height: 500px"
            />
          </div>
          <div class="finish_context">
            <h2>Смартфон {{ ResultRate.Model }}</h2>
            <div class="finish_context_list">
              <ul>
                <li>Адрес магазина: {{ ResultRate.Retail }}</li>
                <li>ФИО продавца: {{ ResultRate.Login }}</li>
                <li>IMEI устройства: {{ ResultRate.IMEI }}</li>
                <li>Цвет: {{ ResultRate.Color }}</li>
              </ul>
            </div>

            <h2 id="price">Оценочная стоимость:{{ ResultRate.Price }}Р</h2>
          </div>
        </div>

        <div class="finish_btn button_group">
          <div class="btn cancel" v-on:click="FinishReqBack">Назад</div>
          <div class="btn back" v-on:click="FinishReqFalse">
            Клиент Отказался
          </div>
          <div
            class="btn further"
            v-on:click="FinishReqTrue"
          >
            Клиент Согласен
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import test from "../../assets/Request/test/1.png";

export default {
  data() {
    return {
      title: "Итоговая  цена с учетом проверки устройства",
      warning: "Завершите заявку",
      test: test,
      err: "",
      imgStatus: false,
    };
  },
  computed: {
    CodeNomenclature() {
      return this.$store.getters.getCodeNomenclature;
    },
    Img() {
      let url = `http://192.168.100.155:3000/public/img/${this.CodeNomenclature}.jpg`;
      return url;
    },
    ResultRate() {
      return this.$store.getters.getResultRate;
    },
    Request() {
      return this.$store.getters.getRequest;
    },
  },
  methods: {
    onLoadHandler() {
      this.imgStatus = true;
    },
    onErrHandler() {
      this.imgStatus = false;
    },
    FinishReqBack() {
      this.$parent.finish = false;
    },
    FinishReqFalse() {
      this.$store.dispatch("RequestFalse").then((res) => {
        this.$emit("RequestFalse");
      });
    },
    FinishReqTrue() {
      this.$router.push("/CompletionTransaction");
    },
  },
};
</script>
<style lang="scss"></style>
