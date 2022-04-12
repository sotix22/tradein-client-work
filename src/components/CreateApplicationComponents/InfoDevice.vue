<template>
  <section>
    <div class="form">
      <div class="form_content">
        <div class="form_content_block">
          <div class="content">
            <div class="content_title">
              <h5>Модель устройства</h5>
              <p>
                Введите Модель устройства для проверки участия устройства в
                TradeIn
              </p>
            </div>
            <div class="content_select">
              <div>
                <p>Модель</p>
                <input type="textf" v-model="FormSubmit.Model" />
              </div>
              <div class="btnCheckImei" @click="FindNumenclature">Искать</div>
              <ErComponent v-if="Err" :text="Err" />
            </div>
          </div>
        </div>
        <div v-if="Status && Phones.length > 0">
          <div class="form_content_block">
            <div class="content">
              <div class="content_title">
                <h5>Название магазина</h5>
                <p>Убедитесь что тут стоит именно ваш магазин</p>
              </div>
              <div class="content_select">
                <div>
                  <p>Торговая точка</p>
                  <input
                    v-model="FormSubmit.Retail.Title"
                    type="tel"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form_content_block">
            <div class="content">
              <div class="content_title">
                <h5>Модель</h5>
                <p>
                  Выберите модель устройства (Информацию о производителе вы
                  можете узнать там то или перейти в раздел помощь)
                </p>
              </div>
              <div class="content_select">
                <div>
                  <p>"Выберите модель устройства"</p>
                  <select v-model="FormSubmit.Phone">
                    <option
                      v-for="(options, index) in Phones"
                      :value="options"
                      :key="index"
                    >
                      {{ options.Model }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form_content_block">
            <div class="content">
              <div class="content_title">
                <h5>Цвет</h5>
                <p>Выберите Цвет устройства</p>
              </div>

              <div class="content_select">
                <div>
                  <p>"Выберите Цвет устройства"</p>
                  <select v-model="FormSubmit.Color">
                    <option
                      v-for="(Color, index) in FormSubmit.Phone.Color"
                      :value="Color"
                      :key="index"
                    >
                      {{ Color }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form_content_block">
            <div class="content">
              <div class="content_title">
                <h5>IMEI устрройства</h5>
                <p>
                  Введите только тот IMEI,который отображается по запросу *#06#
                  IMEI для планшетов с сим-картой, у которых отсутствует
                  номеронабератель, можно посмотреть в настройках устройства
                </p>
              </div>
              <div class="content_select">
                <div>
                  <p>IMEI</p>
                  <input
                    v-mask="IMEIMask"
                    type="tel"
                    v-model="FormSubmit.IMEI"
                    placeholder="XXXXX XXXXX XXXXX"
                  />
                </div>
                <ErComponent v-if="Err" :text="Err" />
              </div>
            </div>
          </div>
        </div>
        <div class="err-block" v-else-if="!Status && Phones.length == 0">
          <el-skeleton animated />
        </div>
        <div class="err-block" v-else-if="Status && Phones.length == 0">
          <ErComponent v-if="Status" text="Такого телефона не найдено" />
        </div>
      </div>
    </div>
    <div class="button_group">
      <div class="btn cancel" v-on:click="CancelReq()">Отмена</div>
      <div class="btn" v-if="varification" v-on:click="ContinueReq()">
        Далее
      </div>
    </div>
  </section>
</template>
<script>
import { mask } from "vue-the-mask";
import { config } from "../../api/constant.js";
import axios from "axios";
import vSelectOptions from "../Items/vSelectRequest.vue";
import ErComponent from "../Error.vue";
export default {
  data() {
    return {
      FormSubmit: {
        Retail: "",
        Phone: "",
        Color: "",
        IMEI: "",
        Model: "",
      },
      IMEIMask: {
        mask: "##### ##### #####",
        tokens: {
          "#": { pattern: /[0123456789]/ },
        },
      },
      Status: false,
      Phones: [],
      Err: "",
    };
  },
  mounted() {
    this.$store.dispatch("getPhones");
  },
  beforeCreate() {
    axios({
      method: "POST",
      mode: "no-cors",
      data: {
        code: localStorage.getItem("idRetail"),
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: `${config.url}/retail/getretailbycode`,
    })
      .then((res) => {
        let option = {
          Title: res.data.Title,
          Value: res.data.Code,
        };
        this.FormSubmit.Retail = option;
      })
      .catch((e) => console.log(e));
  },
  methods: {
    ContinueReq() {
      this.$emit("next", this.FormSubmit);
    },
    CancelReq() {
      this.$emit("cancel");
    },
    FindNumenclature() {
      console.log(this.FormSubmit);
      for (let key in this.FormSubmit) {
        if (key != "Model" && key != "Retail") {
          this.FormSubmit[key] = "";
        }
      }

      this.Phones = [];
      this.Status = false;
      if (this.FormSubmit.Model != "") {
        axios({
          method: "POST",
          mode: "no-cors",
          data: {
            name: this.FormSubmit.Model,
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/phone/search`,
        })
          .then((res) => {
            this.Phones = [];
            this.Status = true;

            if (res.data > 0 && res.data.length == 1) {
              this.FormSubmit.Phone = res.data[0];
            } else {
              res.data.forEach((element) => {
                if (element.Price && element.Status) {
                  this.Phones.push(element);
                }
              });
            }
          })
          .catch((e) => {
            this.Err = e.response.data;
            this.Phones = [];
            this.FormSubmit.Phone = "";
            setTimeout(() => {
              this.Err = "";
            }, 4000);
          });
      }
    },
    getRatailByCode() {
      new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          data: {
            code: localStorage.getItem("idRetail"),
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/retail/getretailbycode`,
        })
          .then((res) => resolve(res))
          .catch((e) => reject(e));
      });
    },
  },
  components: {
    vSelectOptions,
    ErComponent,
  },
  computed: {
    varification() {
      let status = true;
      for (let key in this.FormSubmit) {
        if (this.FormSubmit[key] == "") {
          status = false;
        }
      }
      return status;
    },
  },
  directives: { mask },
};
</script>
<style lang="scss" scoped>
.err-block {
  display: grid;
  justify-content: center;
}
.content_select {
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 40px;
  .btnCheckImei {
    margin-top: 15px;
  }
}
</style>
