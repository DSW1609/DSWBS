<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="animated slideInDown">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <!-- 导航栏 -->
    <NavBar />
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
body::-webkit-scrollbar {
  display: none;
}
body {
  background-image: linear-gradient(#bdc3c7, #2c3e50);
}
</style>
