<template>
  <header>
    <div class="header-block">
     <HeaderBlock :LogoProps="Logo" :iQuestionProps="iQuestion"/>
    </div>
    <div class="nav">
      <Navbar />
    </div>
  </header>
</template>
<script>
import Navbar from "./Navbar/Navbar.vue";
import Logo from "@/../public/img/LogoWhite.svg";
import iQuestion from "@/../public/img/Question.svg";
import HeaderBlock from "./HeaderComponents/HeaderBlock.vue";
export default {
  name: "Header",
  data() {
    return {
      Logo: Logo,
      iQuestion: iQuestion,
    };
  },
  components: {
    Navbar,
    HeaderBlock
  },
};
</script>
<style lang="scss">
header {
  height: 155px;
  width: 100%;
  .header-block {
    display: grid;
    background: #222222;
    height: 100px;
    align-items: center;

 
  }
  .nav {
    height: 55px;
  }
}
</style>
