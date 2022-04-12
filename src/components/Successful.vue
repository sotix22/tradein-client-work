<template>
  <div class="container-fluid">
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Успешно!</h4>
      <p>
        {{text}}
      </p>
      <!-- <hr />
      <p class="mb-0">
        Если необходимо, используйте утилиты отступа для создания необходимых
        отступов.
      </p> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Successful",
  props:{
      text:String
  }
};
</script>
