<template>
  <div class="viewRequest">
    <div class="card text-center">

      <div class="card-header">
        <h1>{{ title }} {{ Request._id }}</h1>
      </div>
      <div class="viewRequest_block">
        <div class="requestPhone">
          <logo v-if="Request" :Request="Request" />
        </div>

        <div class="requestdata">
          <div class="iniciatorRequest RequestData">
            <div class="avatar">
              <img :src="iniciator" alt="..." class="avatar_img" />
            </div>
            <div class="dataRequest">
              <h2>Точка:</h2>
              <h3>{{ Request.Retail }}</h3>
              <br />
              <h2>ФИО Инициатора:</h2>
              <h3>{{ Request.Iniciator }}</h3>
              <br />
            </div>
          </div>
          <hr />
          <div class="clientRequest RequestData">
            <div class="avatar">
              <img :src="dog" alt="..." class="avatar_img" />
            </div>
            <div class="dataRequest">
              <h2>ФИО Клиента:</h2>
              <h3>{{ Request.Client }}</h3>
              <br />
              <h2>Телефон Клиента:</h2>
              <h3>{{ Request.PhoneClient }}</h3>
              <br />
              <h2>Тип Выплаты:</h2>
              <h3>{{ Request.Compensation }}</h3>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        Заявка Создана {{ Request.DataCreateRequest }}
      </div>
    </div>
  
  </div>
</template>
<script>
import iniciator from "../assets/q.jpg";
import dog from "../assets/i.jpg";
import logo from "../components/PhoneRequest";
import "semantic-ui-css"
export default {
  data() {
    return {
      title: "Заявка Id",
      dog: dog,
      iniciator: iniciator,
      id: window.location.hash.split("/")[2],
    };
  },
  mounted() {
    this.$store.dispatch("getRequest", { id: this.id });
  },
  computed: {
    Request: function () {
      return this.$store.getters.getRequest;
    },
  },

  components: {
    logo,
  },
};
</script>
<style scoped>
.viewRequest_block {
  display: grid;
  grid-template-columns: min-content auto;
}
.viewRequest {
  margin: 0 20px;
}

.avatar {
  height: auto;
  width: 50px;
}
.avatar_img {
  border-radius: 50%;
  height: 250px;
}
.RequestData {
  display: grid;
  grid-template-columns: 300px auto;
}
.dataRequest {
  text-align: initial;
}
</style>