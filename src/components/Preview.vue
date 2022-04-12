<template>
  <div class="preview">
    <h3>ФИО клиента</h3>
    <p>{{request.Name}}</p>
    <h3>Модель Устройства</h3>
    <p>{{request.ModelDevice.Company}} {{request.ModelDevice.Model}}</p>
    <h3>IMEI устройства</h3>
    <p>{{request.IMEI}}</p>
    <h3>Цена:</h3>
    <p>{{request.ModelDevice.Price.A}}</p>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        request:Object
    }
};
</script>
<style scoped>
h3 {
    font-size: 14pt;
}
p {
  font-size: 14pt;
  font-weight: bold;
}
</style>