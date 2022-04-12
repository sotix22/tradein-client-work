<template>
  <div class="alert alert-danger" role="alert">Ошибка! {{ text }}</div>
</template>
<script>
export default {
  name: "ErrorMSG",
  props: {
    text: String,
  },
};
</script>
<style scoped></style>
