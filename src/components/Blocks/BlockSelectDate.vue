<template>
  <div class="block">
    <div class="block-content">
      <p class="block-content-title">ДАТА СОЗДАНИЯ:</p>
      <div class="block-content-list">
        <ul>
          <li v-for="elem in list" :key="elem.id" @click="getValue(elem)">
            <label :for="key">
              <div class="block-content-elem">
                <div class="block-content-elem-title">
                  <span name="elem.id">
                    {{ elem.title }}
                  </span>
                </div>
                <div></div>
                <div class="block-content-elem-radio">
                  <!-- <input type="radio" name="elem.id" /> -->
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          title: "Все",
        },
        {
          id: 1,
          title: "Сегодня",
        },
        {
          id: 2,
          title: "Вчера",
        },
        {
          id: 3,
          title: "Другой период...",
        },
      ],
    };
  },
  methods: {
    hoverElem(value) {
      console.log(value);
    },
    getValue(value) {
      this.$emit("getValue", value);
    },
  },
};
</script>
<style lang="scss">
.block {
  position: absolute;
  width: 224px;
  height: 168px;
  top: 35px;
  right: -200px;
  background: #fff;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  border: 1px solid #c6c2de;
  &-content {
    padding: 20px;
    p {
      color: #6e6893;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .list {
      ul {
        li {
          font-size: 14px;
          color: #3c4257;
          margin-bottom: 5px;
        }
      }
    }
  }
}
.block-content-elem {
  display: grid;
  grid-template-columns: auto 1fr auto;
  &-title {
    span {
      color: #3c4257;
      cursor: pointer;
    }
  }
}
.block-content-elem:hover {
  cursor: pointer;
  background-color: #f2f0f9;
}
</style>
