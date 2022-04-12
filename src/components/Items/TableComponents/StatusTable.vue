<template>
  <div v-if="Status === StatusTrue" class="status true">
    <div class="ellipse ellipse-true"></div>
    <p>{{ StatusTrue }}</p>
  </div>
  <div v-else-if="Status === StatusFalse" class="status false">
    <div class="ellipse ellipse-false"></div>
    <p>{{ StatusFalse }}</p>
  </div>
  <div v-else-if="Status === StatusPending" class="status pending">
    <div class="ellipse ellipse-pending"></div>
    <p>{{ StatusPending }}</p>
  </div>
</template>
<script>
export default {
  name: "StatusTable",
  data() {
    return {
      StatusTrue: "Подтверждено",
      StatusFalse: "Не Подтверждено",
      StatusPending: "В ожидании",
    };
  },
  props: {
    Status: String,
  },
};
</script>
<style lang="scss" scoped>
.status {
  display: grid;
  grid-template-columns: min-content auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-gap: 5px;
  border-radius: 10px;
  width: 130px;
  height: 20px;
  p {
    font-family: "Inter500";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
  }
}
.true {
  background: #cdffcd;
  p {
    color: #007f00;
  }
}
.false {
  background: #ffe0e0;
  p {
    color: #d30000;
  }
}
.pending {
  background: #ffeccc;

  p {
    color: #965e00;
  }
}
.ellipse {
  height: 6px;
  width: 6px;
  border-radius: 50%;
}
.ellipse-true {
  background: #007f00;
}
.ellipse-false {
  background: #d30000;
}
.ellipse-pending {
  background: #965e00;
}
</style>
