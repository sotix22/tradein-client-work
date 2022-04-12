<template>
  <section>
    <div class="form">
      <div class="form_content">
        <div class="demonstration form_content_block">
          <div class="demonstration-model">
            <div v-show="DemonstrationDevice && imgStatus">
              <img
                :height="400"
                :onLoad="onLoadHandler"
                @error="onErrHandler"
                :width="334"
                :src="Img"
                alt=""
              />
            </div>
            <el-skeleton-item
              v-show="!imgStatus"
              variant="image"
              style="width: 400px; height: 267px"
            />
          </div>
          <div class="demonstration-content">
            <div class="content_title">
              <h5>Устройство</h5>
              <p>Смартфон {{ Device }}</p>
            </div>
            <div class="content_checkbox">
              <label for="dPower">
                <input
                  type="checkbox"
                  v-model="FormSubmit.dPower.value"
                  name="dPower"
                  id="dPower"
                />
                <p>Устройство включается</p>
              </label>
            </div>
          </div>
        </div>
        <div class="form_content_block" v-if="Facelock">
          <div class="content">
            <div class="content_title">
              <h5>Разблокировка с помощью лица</h5>
              <p>
                Поставь галочку, если на устройстве исправно работает или
                отсутствует функция разблокировка по лицу помощь...
              </p>
            </div>

            <div class="content_radio">
              <div class="radio_box">
                <input
                  type="radio"
                  v-model="FormSubmit.dFaceUnLocked"
                  name="dFaceUnLocked"
                  :value="{
                    title: 'Разблокировка с помощью лица работает',
                    value: 0,
                  }"
                  id=""
                />
                <p>Работает</p>
              </div>
              <div class="radio_box">
                <input
                  type="radio"
                  v-model="FormSubmit.dFaceUnLocked"
                  name="dFaceUnLocked"
                  :value="{
                    title: 'Разблокировка с помощью лица не работает',
                    value: 20,
                  }"
                  id=""
                />
                <p>Не Работает</p>
              </div>
            </div>
          </div>
        </div>
        <div class="form_content_block" v-if="Impress">
          <div class="content">
            <div class="content_title">
              <h5>Сканер отпечатка пальца</h5>
              <p>
                Поставь галочку, если на устройстве работает функция
                разблокировка с помощью отпечатка пальца помощь...
              </p>
            </div>

            <div class="content_radio">
              <div class="radio_box">
                <input
                  type="radio"
                  v-model="FormSubmit.dScanToch"
                  name="dScanToch"
                  :value="{
                    title: 'Сканер отпечатка пальца работает',
                    value: 0,
                  }"
                  id=""
                />
                <p>Работает</p>
              </div>
              <div class="radio_box">
                <input
                  type="radio"
                  v-model="FormSubmit.dScanToch"
                  name="dScanToch"
                  id=""
                  :value="{
                    title: 'Сканер отпечатка пальца не работает',
                    value: 20,
                  }"
                />
                <p>Не Работает</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_group">
      <div class="btn cancel" v-on:click="CancelReq()">Отмена</div>
      <div class="btn back" v-on:click="BackReq()">Назад</div>
      <div class="btn" v-if="varification" v-on:click="ContinueReq()">
        Далее
      </div>
    </div>
  </section>
</template>

<script>
import DemonstrationDevice from "@/assets/img/00000016330.jpg";
export default {
  data() {
    return {
      DemonstrationDevice: DemonstrationDevice,
      imgStatus: false,
      FormSubmit: {
        dPower: {
          value: false,
          title: "Устройство включается",
        },
        dFaceUnLocked: {
          title: "Разблокировка с помощью лица работает",
          value: 0,
        },
        dScanToch: {
          title: "Сканер отпечатка пальца работает",
          value: 0,
        },
      },
    };
  },
  computed: {
    Device() {
      return this.$store.state.storageRequest.FormApllication.TitlePhone;
    },
    CodeNomenclature() {
      return this.$store.getters.getCodeNomenclature;
    },
    Impress() {
      return this.$store.getters.Impress;
    },
    Facelock() {
      return this.$store.getters.Facelock;
    },
    Img() {
      let url = `http://192.168.100.155:3000/public/img/${this.CodeNomenclature}.jpg`;
      return url;
    },
    varification() {
      let status = true;

      if (this.FormSubmit.dPower.value) {
        return status;
      } else {
        status = false;
        return status;
      }
    },
  },
  methods: {
    onLoadHandler() {
      this.imgStatus = true;
    },
    onErrHandler() {
      this.imgStatus = false;
    },
    ContinueReq() {
      this.$emit("next", this.FormSubmit);
    },
    BackReq() {
      this.$emit("back");
    },
    CancelReq() {
      this.$emit("cancel");
    },
  },
};
</script>
<style lang="scss">
.demonstration {
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 30px;
  .demonstration-content {
    display: grid;
    grid-gap: 30px;
    grid-template-rows: min-content min-content;
    align-content: center;
    .content_checkbox label {
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
  }
}
</style>
