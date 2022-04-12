<template>
  <div class="container-fluid">
    <nav class="navigation">
      <ul>
        <li
          v-for="(link, i) in nav_link_left"
          :key="i"
          :class="{ active: link.class }"
        >
          <router-link
            :to="link.link"
            v-on:click="linkActive(nav_link_left, link)"
            ><p>{{ link.title }}</p></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      Sidebar: false,
      brand: {
        title: "СдалКупил",
        link: "/",
      },
      nav_link_left: [
        {
          title: "Заявки",
          link: "/applications/",
          class: false,
        },
        {
          title: "Цены",
          link: "/price/",
          class: false,
        },
      ],
      nav_link_right: [
        {
          title: "Выход",
          link: "#login",
        },
        {
          title: "Вход",
          link: "/login",
        },
      ],
    };
  },
  mounted() {
    this.nav_link_left.forEach((el) => {
      if (el.link == this.$router.options.history.location) {
        el.class = true;
      } else {
        el.class = false;
      }
    });
  },
  methods: {
    linkActive: function (nav_link_left, link) {
      nav_link_left.forEach((element) => {
        element.class = false;
      });
      link.class = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  height: 55px;
  display: grid;
  align-items: end;
  background-color: #f9f9f9;
  border: none;
  border-bottom: 1px solid #c6c2de;
  ul {
    margin: 0;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 20px;

    p {
      font-family: "Inter400";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      display: grid;
      margin: 0;
      width: 60px;
      justify-content: center;
    }
  }
}
.active {
  border-bottom: 2px solid #25213b;
}
</style>
