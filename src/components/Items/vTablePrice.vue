<template>
  <table border="1">
    <tr class="title-table content-table">
      <th v-for="(el, index) in TitleTable" :key="index">
        <TitleTable
          :Down="el.down"
          :Up="el.up"
          :Title="el.title"
          :Info="el.info"
          @Sort="Sort"
        />
      </th>
    </tr>
    <tbody v-if="getLoading">
      <el-skeleton :rows="7" animated />
    </tbody>

    <tbody v-else-if="phones.length == 0 && !getLoading">
      <el-empty description="Нет данных по ценам" :image-size="300"></el-empty>
    </tbody>
    <tbody v-else-if="phones.length > 0 && !getLoading">
      <tr class="content-table" v-for="(Phone, index) in phones" :key="index">
        <td>{{ Phone.Model }}</td>
        <td>{{ Phone.Company }}</td>
        <td v-for="(PhonePrice, index) in Phone.Price" :key="index">
          {{ PhonePrice }}
        </td>
      </tr>
    </tbody>

    <tr class="title-table" id="bottom-title">
      <th>
        <div class="title-table-bottom">
          <div>
            <p>Позиций на странице: {{ phones.length }}</p>
          </div>
          <div>
            <p>1-2 из 1</p>
          </div>
          <div class="title-table-bottom-icons">
            <div class="icon">
              <img :src="VectorLeft" width="6" height="10" alt="" />
            </div>
            <div class="icon">
              <img :src="VectorRight" width="6" height="10" alt="" />
            </div>
          </div>
        </div>
      </th>
    </tr>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
import VectorLeft from "../../assets/Vector-left.svg";
import VectorRight from "../../assets/Vector-right.svg";
import TitleTable from "./TableComponents/TitleTable.vue";
export default {
  name: "Table",
  data() {
    return {
      VectorLeft: VectorLeft,
      VectorRight: VectorRight,
      TitleTable: [
        {
          title: "Название",
          up: "ModelUp",
          down: "ModelDown",
          info: false,
        },
        {
          title: "Брэнд",
          up: "BrandUp",
          down: "BrandDown",
          info: false,
        },
        {
          title: "Цена A (Идеальное)",
          up: "PriceAUp",
          down: "PriceADown",
          info: [
            { title: "Экран в идеальном состоянии" },
            { title: "Корпус в идеальном состоянии" },
            { title: "Все функции работают" },
            { title: "Устройство выглядит как новое" },
          ],
        },
        {
          title: "Цена B (Хорошее)",
          up: "PriceBUp",
          down: "PriceBDown",
          info: [
            { title: "Экран со следами эксплуатации" },
            { title: "Корпус со следами эксплуатации" },
            { title: "Все функции работают" },
          ],
        },
        {
          title: "Цена C (Удовлетварительное)",
          up: "PriceCUp",
          down: "PriceCDown",
          info: [
            { title: "Экран со следами эксплуатации" },
            { title: "Корпус поврежден" },
            { title: "Все функции работают" },
          ],
        },
        {
          title: "Цена D (С дефектом)",
          up: "PriceDUp",
          down: "PriceDDown",
          info: [
            { title: "Экран поврежден" },
            { title: "Функции могут не работать" },
          ],
        },
      ],
    };
  },
  methods: {
    Sort(Key) {
      console.log(Key);
      let option = {
        Key: Key,
      };

      this.$store.dispatch("SortPhone", option);
    },
  },
  computed: {
    //   phones: function () {
    //     return this.$store.getters.getPhones;
    //   },
    ...mapGetters(["getLoading"]),
  },
  components: { TitleTable },
  props: {
    phones: Array,
  },
};
</script>
<style lang="scss" scoped>
.content-table {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 2fr 2fr 2fr;
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
  grid-template-columns: 2fr 1fr 2fr 2fr 2fr 2fr;
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
