<template>
  <section>
    <div class="step_container container-fluid">
      <Step :index="index" :items="items" />
    </div>
    <keep-alive>
      <component
        @next="setData"
        @cancel="CancelReq"
        @back="BackReq"
        :is="items[index].component"
      />
    </keep-alive>
    <FinishTestDevice
      v-if="finish && !Requestfalse"
      @RequestFalse="RequestFalse"
    />
  </section>
</template>
<script>
import Step from "../components/Steps/Step.vue";
import InfoDevice from "../components/CreateApplicationComponents/InfoDevice.vue";
import InitialEstimate from "../components/CreateApplicationComponents/InitialEstimate";
import TestFunctionDevice from "../components/CreateApplicationComponents/TestFunctionDevice";
import VisualEstimate from "../components/CreateApplicationComponents/VisualEstimate";
import FinishTestDevice from "../components/CreateApplicationComponents/FinishTestDevice";
export default {
  data() {
    return {
      index: 0,
      Requestfalse: false,
      finish: true,

      items: [
        {
          index: "Шаг 1",
          label: "Информация об устройстве",
          component: "InfoDevice",
        },
        {
          index: "Шаг 2",
          label: "Начальная оценка",
          component: "InitialEstimate",
        },
        {
          index: "Шаг 3",
          label: "Визуальная оценка",
          component: "VisualEstimate",
        },
        {
          index: "Шаг 4",
          label: "Проверка функций",
          component: "TestFunctionDevice",
        },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("idRequest")) {
      this.$store.dispatch("getRequest", localStorage.getItem("idRequest"));
      this.index = 3;
      this.finish = true;
    } else {
      this.index = 0;
      this.finish = false;
    }
  },
  computed: {
    FormApplication() {
      return this.$store.getters.getFormApllication;
    },
  },
  methods: {
    setData(Value) {
      switch (this.index) {
        case 0:
          this.setInfoDevice(Value);
          break;
        case 1:
          this.setInitialEstimate(Value);
          break;
        case 2:
          this.setVisualEstimate(Value);
          break;
        case 3:
          this.setFunctionDevice(Value);
          break;
      }
    },
    RequestFalse() {
      this.Requestfalse = true;
    },
    setInfoDevice(Value) {
      console.log(Value);
      try {
        this.$store.dispatch("setInfoDeviceInfoStorageRequest", Value);
        this.ContinueReq();
      } catch (e) {
        console.error(e);
      }
    },
    setInitialEstimate(Value) {
      try {
        this.$store.dispatch("setInitialEstimateInfoStorageRequest", Value);
        this.ContinueReq();
      } catch (e) {
        console.error(e);
      }
    },
    setVisualEstimate(Value) {
      try {
        this.$store.dispatch("setVisualEstimateInfoStorageRequest", Value);
        this.ContinueReq();
      } catch (e) {
        console.error(e);
      }
    },
    setFunctionDevice(Value) {
      try {
        this.$store.dispatch("setFunctionDeviceInfoStorageRequest", Value);
        this.FinishReq();
      } catch (e) {
        console.error(e);
      }
    },

    CancelReq() {
      this.$router.push(`/applications/`);
    },
    ContinueReq() {
      this.index = this.index + 1;
      window.scrollTo(0, 0);
    },
    BackReq() {
      this.index = this.index - 1;
    },
    FinishReq() {
      this.$store.dispatch("RateDevice");
      this.finish = true;
    },
    ExitModel() {
      this.finish = false;
    },
    RequestFalse() {
      this.$router.push("/");
    },
  },
  components: {
    InfoDevice,
    InitialEstimate,
    TestFunctionDevice,
    VisualEstimate,
    FinishTestDevice,
    Step,
  },
};
</script>
<style lang="scss" scoped>
li {
  background-color: red;
}
</style>
