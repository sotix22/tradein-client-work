<template>
  <div class="preview">
    <div class="background-check active-modal" v-show="CheckShow">
      <h1 @click="CloseCheck">X</h1>
      <div class="pre-check-block">
        <Check
          :Request="request"
          :Client="request.Client"
          :Rate="request.Rate"
        />
      </div>
    </div>

    <div class="preview-content" v-if="request">
      <div class="close" @click="close">Х</div>
      <div class="img-Device">
        <img
          v-show="imgStatus"
          ref="img"
          :onLoad="onLoadHandler"
          :src="img"
          :height="465"
          :width="465"
          alt="device"
        />
        <el-skeleton-item
          v-show="!imgStatus"
          variant="image"
          style="width: 465px; height: 465px"
        />
      </div>
      <div class="content">
        <h2>Смартфон {{ request.DeviceTitle }}</h2>
        <div class="list">
          <ul>
            <li>Адресс магазина:{{ request.Retail }}</li>
            <li>ФИО продавца: {{ request.Iniciator }}</li>
            <li>Imei устройства: {{ request.IMEI }}</li>
          </ul>
        </div>
        <div></div>
        <div @click="openCheck(request._id)" class="price check">
          <h3>Открыть чек лист</h3>
        </div>
        <div @click="syncCheck(request._id)" class="price check">
          <h3>Синхронизировать заявку с 1С</h3>
        </div>
      </div>
      <div></div>
      <div class="price">
        <h3>Оценочная стоимость: {{ request.Price }}₽</h3>
      </div>
    </div>
    <div class="info" v-show="Sync"><h3>Успешная синхронизация!</h3></div>
  </div>
</template>
<script>
import Check from "../../Device/CheckPreview.vue";
import { config } from ".././../../api/constant.js";
import axios from "axios";
import img from "../../../../public/img/Device.jpg";
export default {
  name: "Preview",
  data() {
    return {
      img: img,
      imgStatus: false,
      request: "",
      CheckShow: false,
      Sync: false,
    };
  },
  mounted() {
    axios({
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: `${config.url}/request/getrequestsbyid`,
      data: {
        id: this.$props.id,
      },
    }).then((res) => {
      this.request = res.data;
      this.img = `http://192.168.100.155:3000/public/img/${res.data.DeviceId}.jpg`;
    });
  },

  methods: {
    CloseCheck() {
      this.CheckShow = false;
    },
    openCheck() {
      this.CheckShow = true;
    },
    onLoadHandler(value) {
      this.imgStatus = true;
    },
    close() {
      this.$emit("CloseE");
    },
    async syncCheck(id) {
      try {
        this.Sync = false;
        let data = await axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/sync`,
          data: {
            id: id,
          },
        });
        if (data.status == 200) {
          this.Sync = true;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  components: { Check },
  props: {
    id: String,
    Img: String,
    Title: String,
    Address: String,
    Client: String,
    Imei: String,
    Price: String,
  },
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
}
.preview {
  height: auto;
  width: auto;
  margin: 70px;
  background: white;
  box-shadow: 0px 0px 4px rgba(55, 65, 81, 0.06),
    0px 2px 6px rgba(55, 65, 81, 0.1);
  .close {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }
  .preview-content {
    padding: 20px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .img-Device {
      display: grid;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .content {
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      justify-content: left;
      h2 {
        font-family: "Inter700";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        color: #4f566b;
        margin-bottom: 100px;
      }
      .list {
        ul {
          display: grid;
          grid-template-rows: auto auto auto;
          li {
            font-family: "Inter500";
            font-style: normal;
            font-size: 24px;
            line-height: 43px;
            color: #4f566b;
          }
        }
      }
    }
  }
  .price {
    display: grid;
    justify-content: end;
    h3 {
      font-family: "Inter700";
      font-style: normal;
      font-size: 36px;
      line-height: 43px;
      color: #4f566b;
      margin-bottom: 30px;
      margin-right: 30px;
    }
  }
}
.background-check {
  z-index: 15;
  position: fixed;
  background: grey;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.pre-check-block {
  z-index: 20;
  margin: 0 auto;
  margin-top: 100px;
  width: 500px;
}
h1 {
  position: absolute;
  top: 25px;
  left: 50px;
  cursor: pointer;
  color: white;
}
h3 {
  cursor: pointer;
}
</style>
