<template>
  <div id="app">
    <transition enter-active-class="animated zoomIn">
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
  background: #18181a;
}
</style>
