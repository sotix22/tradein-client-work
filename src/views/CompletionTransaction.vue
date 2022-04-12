<template>
  <section>
    <div class="step_container">
      <Step :index="index" :items="items" />
    </div>
    <keep-alive>
      <component
        @NextReq="ContinueReq"
        @CreateReq="ContinueReq"
        @FinishReq="FinishReq"
        @CancelReq="CancelReq"
        @Back="BackReq"
        :is="items[index].component"
      />
    </keep-alive>
  </section>
</template>
<script>
import Step from "../components/Steps/Step.vue";
import AccountReset from "../components/CompletionTransaction/AccountReset.vue";
import CloseApplication from "../components/CompletionTransaction/CloseApplication.vue";
import CreateApplication from "../components/CompletionTransaction/CreateApplication.vue";
export default {
  data() {
    return {
      index: 0,
      finish: false,
      items: [
        {
          index: "Шаг 1",
          label: "Аккаунт и сброс",
          component: "AccountReset",
        },
        {
          index: "Шаг 2",
          label: "Заполнение договора",
          component: "CreateApplication",
        },
        {
          index: "Шаг 3",
          label: "Завершение сделки",
          component: "CloseApplication",
        },
      ],
    };
  },
  methods: {
    CancelReq() {
      this.$router.push(`/`);
    },
    ContinueReq() {
      this.index = this.index + 1;
      window.scrollTo(0, 0);
    },
    BackReq() {
      this.index = this.index - 1;
    },
    FinishReq() {
      this.$router.push(`/`);
    },
    ExitModel() {
      this.finish = false;
    },
  },
  props: {},
  components: {
    Step,
    AccountReset,
    CloseApplication,
    CreateApplication,
  },
};
</script>
