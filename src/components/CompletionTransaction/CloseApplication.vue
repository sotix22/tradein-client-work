<template>
  <div>
    <section>
      <div class="check_content">
        <Check id="check" />
      </div>
      <div class="print_button_group">
        <div class="print_block" v-show="false">
          <h4>Печать штрих-кода</h4>
          <p>Напечатайте штрих-код для товара</p>
          <div class="btn btn_blue disable">В разработке...</div>
        </div>

        <div class="print_block" v-show="true">
          <h4>Печать чека</h4>
          <p>Напечатайте чек в одном экзапляре</p>
          <div class="btn btn_blue" @click="printCheck">Печать чек-листа</div>
        </div>
        <div class="print_block">
          <h4>Печать договора</h4>
          <p>Напечатайте договор купли продажи в Двух экзамплярах</p>
          <div class="btn btn_blue" @click="getDoc">Печать</div>
        </div>
      </div>
    </section>
    <div class="button_group">
      <div class="btn back" v-on:click="BackReq()">Назад</div>
      <div class="btn finished" v-if="Status" v-on:click="FinishReq()">
        Завершить
      </div>
    </div>
  </div>
</template>
<script>
import Check from "../Device/Check.vue";
export default {
  data() {
    return {
      status: false,
    };
  },
  props: {},
  computed: {
    Status() {
      return this.status;
    },
  },
  components: {
    Check,
  },
  methods: {
    async printCheck() {
      window.print();
    },
    FinishReq() {
      this.$store.dispatch("RequestTrue").then((res) => {
        this.$emit("FinishReq");
      });
    },
    BackReq() {
      this.$emit("Back");
    },
    getDoc() {
      this.status = true;
      this.$store.dispatch("getDocumentSale").then((res) => {
        this.$store.dispatch("saveRequestLocalStorage");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@media print {
  .check_content {
    z-index: 20;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
  }
}

.disable {
  background: grey;
}
.button_group {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 15px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}
section {
  width: 1400px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  .print_button_group {
    .print_block {
      padding: 20px;
      border-bottom: 1px solid black;
      .btn {
        text-align: center;
        width: 82px;
      }
    }
  }
}
</style>
