<template>
  <section>
    <table border="1">
      <tr class="title-table content-table">
        <th
          :class="{ Eye: el.img }"
          v-for="(el, index) in TitleTable"
          :key="index"
        >
          <TitleTable
            :Down="el.down"
            :Up="el.up"
            :Title="el.title"
            :Img="el.img"
            @Sort="Sort"
          />
        </th>
      </tr>
      <tbody v-if="typeof Requests == 'object' && Requests.length == 0">
        <NullRequests />
      </tbody>
      <tbody v-else-if="typeof Requests == 'object' && Requests.length > 0">
        <tr class="content-table" v-for="(request, key) in Requests" :key="key">
          <td>{{ request.Iniciator }}</td>
          <td>{{ request.DeviceTitle }}</td>
          <td>
            {{
              new Date(Date.parse(request.DataCreateRequest)).toLocaleString(
                "ru",
                "yyyy MM dd"
              )
            }}
          </td>
          <td>{{ request.Price }}₽</td>
          <td v-if="request.Client && request.Status == 1">
            {{ request.Client.firstName }} {{ request.Client.lastName }}
            {{ request.Client.secondName }}
          </td>
          <td class="yellow" v-else-if="request.Status == 0">
            Заявка заполнена не до конца
          </td>
          <td class="red" v-else-if="request.Status == 2">Сделка провалена</td>
          <td>
            <Status :Status="StatusTrue" v-if="request.Status == 1" />
            <Status :Status="StatusPending" v-else-if="request.Status == 0" />
            <Status :Status="StatusFalse" v-else />
          </td>
          <td class="Eye">
            <img @click="PreOn(request._id)" :src="Eye.Img" :alt="Eye.Title" />
          </td>
        </tr>
      </tbody>
      <tbody v-else-if="Requests == 'loading'">
        <el-skeleton :rows="7" animated />
      </tbody>
      <tr class="title-table" id="bottom-title">
        <th>
          <div class="title-table-bottom">
            <div>
              <p>Заявок на странице: {{ Requests.length }}</p>
            </div>
            <div>
              <p>Страница {{ Page }}</p>
            </div>
            <div class="title-table-bottom-icons">
              <div class="icon" @click="SkipPage('-')" v-if="Page > 1">
                <img :src="VectorLeft" width="6" height="10" alt="" />
              </div>
              <div class="icon" @click="SkipPage('+')">
                <img :src="VectorRight" width="6" height="10" alt="" />
              </div>
            </div>
          </div>
        </th>
      </tr>
      <div v-if="Pre" class="pre">
        <Preview @CloseE="PreClose" v-on:Close="Close" :id="idViewRequest" />
      </div>
    </table>
  </section>
</template>
<script>
import NullRequests from "./Request/NullRequests.vue";
import Status from "./TableComponents/StatusTable.vue";
import VectorLeft from "../../assets/Vector-left.svg";
import VectorRight from "../../assets/Vector-right.svg";
import TitleTable from "./TableComponents/TitleTable.vue";
import Eye from "../../../public/img/Eye.svg";
import Preview from "./Request/PreviewRequest.vue";
export default {
  name: "Table",
  data() {
    return {
      Skip: 0,
      Page: 1,
      loading: false,
      Pre: false,
      StatusTrue: "Подтверждено",
      StatusFalse: "Не Подтверждено",
      StatusPending: "В ожидании",
      VectorLeft: VectorLeft,
      VectorRight: VectorRight,
      Eye: { Img: Eye, Title: "Глаз" },
      idViewRequest: "",
      TitleTable: [
        {
          title: "Имя",
          up: "NameUp",
          down: "NameDown",
        },
        {
          title: "Устройство",
          up: "DeviceUp",
          down: "DeviceDown",
        },
        {
          title: "Дата создания",
          up: "DateUp",
          down: "DateDown",
        },
        {
          title: "Цена выкупа",
          up: "PriceUp",
          down: "PriceDown",
        },
        {
          title: "Клиент",
          up: "ClientUp",
          down: "ClientDown",
        },
        {
          title: "Статус",
          up: "StatusUp",
          down: "StatusDown",
        },
        {
          title: "Глаз",
          img: Eye,
        },
      ],
    };
  },
  computed: {
    Requests() {
      return this.$store.getters.getRequests;
    },
  },
  components: { TitleTable, Status, Preview, NullRequests },
  methods: {
    PreClose: function () {
      this.Pre = false;
    },
    PreOn: function (id) {
      this.idViewRequest = id;
      this.Pre = true;
    },
    Sort(Key) {
      this.Page = 1;
      this.Skip = 0;
      let option = {
        Key: Key,
        Skip: this.Skip,
      };

      this.$store.dispatch("getSortRequest", option);
    },
    SkipPage(value) {
      if (value == "+") {
        this.Skip = this.Skip + 5;
        this.Page = this.Page + 1;
        this.$store.dispatch("SkipRequest", this.Skip);
      } else {
        this.Skip = this.Skip - 5;
        this.Page = this.Page - 1;

        this.$store.dispatch("SkipRequest", this.Skip);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.red {
  color: red;
}
.yellow {
  color: #965e00;
}
.pre {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr min-content;
}
#bottom-title {
  display: grid;
  grid-template-columns: auto;
  justify-items: end;
  align-items: center;
}
.title-table {
  border-top: 1px solid #d9d5ec;
  border-bottom: 1px solid #d9d5ec;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr min-content;
  th {
    .title-table-bottom {
      margin-right: 20px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 50px;
      align-items: center;

      p {
        font-family: "Inter400";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        letter-spacing: 0.05em;

        /* Fonts/Primary Variant */

        color: #6e6893;
      }

      .title-table-bottom-icons {
        display: grid;
        grid-template-columns: min-content min-content;
        grid-gap: 15px;
        .icon {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
