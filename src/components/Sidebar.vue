<template>
  <div class="sidebar_nav shadow-lg p-3 mb-5 bg-white rounded">
    <div class="close" v-on:click="exit">X</div>
    <div class="nav_sotiks">
      <div class="sidebar_content">
        <div class="sidebar_content_logo content">
          <div class="icon">
            <img width="40" height="40" :src="logo" />
          </div>
          <h2>Меню</h2>
        </div>
        <div class="sidebar_content_links content">
          <ul>
            <a
              v-for="(link, key) in links"
              :key="key"
              @click.prevent="Active(link)"
              :href="link.url"
            >
              <div v-bind:class="{ active: link.active }" class="link">
                <div class="icon">
                  <i :class="link.icon"></i>
                </div>

                <div>
                  <li>{{ link.title }}</li>
                </div>
              </div>
            </a>
          </ul>
        </div>
        <div class="sidebar_content_person content">
          <div class="avatar">
            <img
              width="75"
              height="75"
              src="https://svgsilh.com/svg/1801287.svg"
              class="rounded-circle"
              alt="..."
            />
          </div>
          <div class="btn-group dropup">
            <p>{{ Login }}</p>

            <ul class="dropdown-menu">
              <li class="nav-item">
                <a class="nav-link link" href="#/login" v-on:click="logout"
                  >Выход</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "../assets/bi_person_full.svg";
import biboxseam from "../assets/bi-box-seam.svg";
import bicalculator from "../assets/bi-calculator.svg";
import bichatleftdots from "../assets/bi-chat-left-dots.svg";
import bidiagram from "../assets/bi-diagram.svg";
export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "",
          active: false,
          icon: "bi bi-box-seam",
        },
        {
          title: "Dashboard",
          url: "",
          active: false,
          icon: "bi bi-calculator",
        },
        {
          title: "Order",
          url: "",
          active: false,
          icon: "bi bi-chat-left-dots",
        },
        {
          title: "Costumers",
          url: "",
          active: false,
          icon: "bi bi-pie-chart-fill",
        },
      ],
      logo: logo,
      biboxseam: biboxseam,
      bicalculator: bicalculator,
      bichatleftdots: bichatleftdots,
      bidiagram: bidiagram,
    };
  },
  methods: {
    Active(link) {
      this.links.forEach((element) => {
        element.active = false;
      });
      link.active = !link.active;
    },
    exit() {
      this.$store.dispatch("exit");
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
  computed: {},
  props: {
    Login: String,
  },
  components: {
    logo,
    biboxseam,
    bicalculator,
    bichatleftdots,
    bidiagram,
  },
};
</script>
<style lang="scss" scoped>
.btn-close {
  position: absolute;
}
li {
  list-style-type: none;
}
p {
  font-weight: bold;
}
a {
  color: #212529;
  outline: none;
  text-decoration: none;
}
a:hover :visited {
  color: #212529;
  font-size: 18px;
}
.active {
  height: 100%;
  background: #0d6efd;
  border-radius: 5px;
  color: white;
}

.sidebar_nav {
  color: #212529;
  display: grid;
  background-color: white;
  position: fixed;

  right: 0;
  width: 300px;
  height: 100%;
  z-index: 1;

  .nav_sotiks {
    margin: 20px;
    .sidebar_content {
      display: grid;
      grid-template-rows: min-content 1fr min-content;
      height: 100%;
      .content {
        padding: 10px 0;
      }
      .sidebar_content_logo {
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        grid-gap: 10px;
      }
      .sidebar_content_links {
        border-top: 1px solid black;
        ul {
          display: grid;
          grid-template-rows: auto auto auto auto;

          margin: 0;
          padding: 0;
          a {
            font-size: 20px;
            padding: 5px 0;
            .link {
              display: grid;
              grid-template-columns: min-content auto;
              align-items: center;
              grid-gap: 10px;
              padding-left: 10px;
              height: 40px;
              .icon {
                height: 20px;
                width: 20px;
              }
            }
          }
        }
      }
      .sidebar_content_person {
        display: grid;
        grid-template-columns: min-content auto;
        border-top: 1px solid black;
        align-items: end;
      }
    }
  }
}
.close {
  position: absolute;
  cursor: pointer;
}
.shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.5); /* Параметры тени */
}
</style>
