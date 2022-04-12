<template>
  <section>
    <div class="form">
      <div class="form_content">
        <div class="form_content_block">
          <div class="content">
            <div class="content_title">
              <h5>ФИО Клиента</h5>
              <p>Взять информацию из паспорта клиента</p>
            </div>

            <div class="content_input col_3_input">
              <div>
                <p>Фамилия</p>
                <input v-model="firstName" type="text" placeholder="Фамилия" />
              </div>
              <div>
                <p>Имя</p>
                <input v-model="lastName" type="text" placeholder="Имя" />
              </div>
              <div>
                <p>Отчество</p>
                <input
                  v-model="secondName"
                  type="text"
                  placeholder="Отчество"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="form_content_block">
          <div class="content">
            <div class="content_title">
              <h5>Номер телефона клиента</h5>
              <p>Удостоверится что это действительно номер телефона клиента</p>
            </div>

            <div class="content_input">
              <div>
                <p>Номер телефона</p>
                <input
                  type="tel"
                  v-model="phone"
                  v-mask="phoneMask"
                  placeholder="+7( ) - - -"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="form_content_block">
          <div class="content">
            <div class="content_title">
              <h5>Документ удостоверяющий личность</h5>
              <p>Попросите у клиента документ</p>
            </div>

            <div class="content_block_content">
              <div>
                <p>Документ</p>
                <!-- <select class="select" v-model="document">
                  <option value="1" selected>Паспорт РФ</option>
                </select> -->
                <el-select v-model="document" disabled placeholder="Паспорт">
                  <el-option
                    v-for="item in option"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>

              <div class="col_3_input">
                <div>
                  <p>Серия</p>
                  <input
                    v-model="seriesDocument"
                    v-mask="seriesMask"
                    type="text"
                    placeholder="Серия"
                  />
                </div>
                <div>
                  <p>Номер</p>
                  <input
                    v-model="numberDocument"
                    v-mask="numberMask"
                    type="text"
                    placeholder="Номер"
                  />
                </div>
                <div>
                  <p>Дата Выдачи</p>
                  <input type="date" v-model="dateDocument" />
                </div>
              </div>
              <div class="textarea">
                <p>Кем Выдан</p>
                <textarea
                  class="textarea"
                  v-model="whoIssued"
                  name="text"
                ></textarea>
              </div>
              <div>
                <p>Адрес прописки</p>
                <input
                  type="text"
                  v-model="address"
                  placeholder="Адрес прописки"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_group">
      <div class="btn cancel" v-on:click="CancelReq()">Отмена</div>
      <div class="btn back" v-on:click="BackReq()">Назад</div>
      <div class="btn further" v-if="varification" v-on:click="CreateReq()">
        Далее
      </div>
    </div>
  </section>
</template>
<script>
import { mask, tokens } from "vue-the-mask";
export default {
  data() {
    return {
      FormSubmit: {
        firstName: localStorage.getItem("firstName") || "",
        lastName: localStorage.getItem("lastName") || "",
        secondName: localStorage.getItem("secondName") || "",
        numberDocument: localStorage.getItem("numberDocument") || "",
        seriesDocument: localStorage.getItem("seriesDocument") || "",
        dateDocument: localStorage.getItem("dateDocument") || "",
        whoIssued: localStorage.getItem("whoIssued") || "",
        address: localStorage.getItem("address") || "",
        phone: localStorage.getItem("phone") || "",
      },
      phoneMask: {
        mask: "+7(###)-###-##-##",
        tokens: {
          "#": { pattern: /[0123456789]/ },
          F: {
            pattern: /(?!8)\d/,
          },
        },
      },
      seriesMask: {
        mask: "## ##",
        tokens: {
          "#": { pattern: /[0123456789]/ },
          F: {
            pattern: /(?!8)\d/,
          },
        },
      },
      numberMask: {
        mask: "## ## ##",
        tokens: {
          "#": { pattern: /[0123456789]/ },
          F: {
            pattern: /(?!8)\d/,
          },
        },
      },
      option: [
        {
          value: "1",
          label: "Паспорт",
        },
      ],
    };
  },
  computed: {
    firstName: {
      get() {
        return this.$store.getters.getFirstName;
      },
      set(value) {
        let option = {
          value: value,
          type: "firstName",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.firstName = value;
      },
    },
    lastName: {
      get() {
        return this.$store.getters.getLastName;
      },
      set(value) {
        let option = {
          value: value,
          type: "lastName",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.lastName = value;
      },
    },
    secondName: {
      get() {
        return this.$store.getters.getSecondName;
      },
      set(value) {
        let option = {
          value: value,
          type: "secondName",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.secondName = value;
      },
    },
    seriesDocument: {
      get() {
        return this.$store.getters.getSeriesDocument;
      },
      set(value) {
        let option = {
          value: value,
          type: "seriesDocument",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.seriesDocument = value;
      },
    },
    numberDocument: {
      get() {
        return this.$store.getters.getNumberDocument;
      },
      set(value) {
        let option = {
          value: value,
          type: "numberDocument",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.numberDocument = value;
      },
    },
    dateDocument: {
      get() {
        return this.$store.getters.getDateDocument;
      },
      set(value) {
        let option = {
          value: value,
          type: "dateDocument",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.dateDocument = value;
      },
    },
    whoIssued: {
      get() {
        return this.$store.getters.getWhoIssued;
      },
      set(value) {
        let option = {
          value: value,
          type: "whoIssued",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.whoIssued = value;
      },
    },
    address: {
      get() {
        return this.$store.getters.getAddress;
      },
      set(value) {
        let option = {
          value: value,
          type: "address",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.address = value;
      },
    },

    phone: {
      get() {
        return this.$store.getters.getPhone;
      },
      set(value) {
        let option = {
          value: value,
          type: "phone",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.phone = value;
      },
    },
    document: {
      get() {
        return this.$store.getters.getDocument;
      },
      set(value) {
        let option = {
          value: value,
          type: "document",
        };
        this.$store.dispatch("editClientInfo", option);
        this.FormSubmit.document = value;
      },
    },

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
  methods: {
    CreateReq() {
      this.$store.dispatch("getRequest").then((res) => {
        this.$emit("CreateReq");
      });
    },
    CancelReq() {
      this.$emit("CancelReq");
    },
    BackReq() {
      this.$emit("Back");
    },
  },
  props: {},
  directives: { mask },
};
</script>
