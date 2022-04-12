<template>
  <section>
    <div class="form">
      <div class="form_content">
        <div class="form_content_block">
          <div class="content">
            <div class="content_title">
              <h5>Удаление аккаунта</h5>
              <p>
                Поставь галочку после того как: <br />
                -ОБЯЗАТЕЛЬНО, в первую очередь удалить аккаунт от производителя
                <br />
                -Удалён аккаунт Google, iСloud, Microsoft <br />
                -Удалён аккаунт Samsung, Mi, Huawei, Flyme и любые<br />
                -Другие аккаунты производителя устройства <br />
                Подсказка: <br />
                -Для устройств Apple: <br />
                Настройки-Основные-Сброс-Стереть контент и
                настройки-Стереть-Стереть iPhone/iPad, после этого устройство
                сброситься до заводских настроек. <br />
                -Для устройств Android: <br />
                Настройки-Аккаунты/Пользователи и
                Аккаунты-Google/Samsung/Mi/Flyme/Huawei/-удалить аккаунт. <br />
                -Для устройств Windows Phone достаточно сбросить до заводских
                настроек, чтобы удалить аккаунт. <br />
                -Если аккаунты удалить не возможно, не принимайте данное
                устройство
              </p>
            </div>

            <div class="content_checkbox">
              <label for="deliteAccount">
                <input
                  type="checkbox"
                  v-model="deliteAccount"
                  name=""
                  id="deliteAccount"
                />
                <p>Аккаунт Удален</p>
              </label>
            </div>
          </div>
        </div>
        <div class="form_content_block">
          <div class="content">
            <div class="content_title">
              <h5>Сброс до заводских настроек</h5>
              <p>
                Поставь галочку после того как: <br />
                -Устройство сброшено до заводских настроек <br />
                Подсказка: <br />
                -Для устройств Apple, после удаления аккаунта, будет произведен
                сброс настроек. <br />
                -Для устройств Android: <br />
                Настройки-Восстановление и сброс/Сброс/Резервирование и сброс/
                <br />
                - Сброс настроек/Полный сброс/ -Сбросить настройки телефона.
                <br />
                -Для устройств Windows Phone: <br />
                Параметры-Система-Сведения об устройстве-Сброс настроек-Да
              </p>
            </div>

            <div class="content_checkbox">
              <label for="resetConfig">
                <input
                  v-model="resetConfig"
                  type="checkbox"
                  name=""
                  id="resetConfig"
                />
                <p>Настройки сброшены до заводских</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_group">
      <div class="btn cancel" v-on:click="CancelReq()">Отмена</div>
      <div class="btn further" v-if="varification" v-on:click="NextReq()">
        Далее
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      FormSubmit: {
        deliteAccount: localStorage.getItem("deliteAccount") || false,
        resetConfig: localStorage.getItem("resetConfig") || false,
      },
    };
  },
  methods: {
    NextReq() {
      this.$emit("NextReq");
    },
    CancelReq() {
      this.$emit("CancelReq");
    },
  },
  computed: {
    varification() {
      let status = true;
      for (let key in this.FormSubmit) {
        if (this.FormSubmit[key] == false) {
          status = false;
        }
      }
      return status;
    },
    deliteAccount: {
      get() {
        return this.$store.getters.getStatusDeliteAccount;
      },
      set(value) {
        let option = {
          value: value,
          type: "deliteAccount",
        };
        this.$store.dispatch("editClientInfo", option);
      },
    },
    resetConfig: {
      get() {
        return this.$store.getters.getStatusResetConfig;
      },
      set(value) {
        let option = {
          value: value,
          type: "resetConfig",
        };
        this.$store.dispatch("editClientInfo", option);
      },
    },
  },
  watch: {
    deliteAccount() {
      this.FormSubmit.deliteAccount =
        this.$store.getters.getStatusDeliteAccount;
    },
    resetConfig() {
      this.FormSubmit.resetConfig = this.$store.getters.getStatusResetConfig;
    },
  },
  props: {},
};
</script>
<style lang="scss" scoped>
label {
  cursor: pointer;
  width: 824px;
  height: 92px;
  padding: 16px;
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 10px;
  align-content: center;
  box-shadow: 0px 2px 6px 0px #3741511a;
  p {
    display: grid;
    align-items: center;
    margin: 0%;
  }
  input {
    height: 24px;
    width: 24px;
  }
}
</style>
