<template>
  <ul class="navbar" :class="{navbar_2: cIndex==2}">
    <li
      v-for="(t,index) in navbar.length"
      :key="index"
      @click="navClick(index)"
      @mouseover="navMover(index)"
      @mouseout="navMout(index)"
    >
      <router-link :to="router[index]">
        <img :src="index == cIndex||index==mIndex ? imgAcSrc : imgPathSrc" alt />
        <div
          class="item"
          :style="index == cIndex||index==mIndex ? WidthA : WidthD"
        >{{navbar[index]}}</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navbar: ["首页", "简历 ", "作品", "项目"],
      // 路由切换
      router: ["/index", "/resume", "/work", "/profile"],
      WidthD: {
        width: "0px"
      },
      WidthA: {
        width: "80px"
      },
      // 默认显示
      cIndex: 0,
      // 触碰中显示
      mIndex: 0
    };
  },
  methods: {
    navClick(index) {
      this.cIndex = index;
    },
    navMover(index) {
      this.mIndex = index;
    },
    navMout() {
      this.mIndex = this.cIndex;
    }
  },
  computed: {
    imgPathSrc() {
      return require("../../assets/img/index/tt.svg");
    },
    imgAcSrc() {
      return require("../../assets/img/index/tt_ac.svg");
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 50px;
  height: 200px;
  right: 1.5vw;
  z-index: 999;
  top: -50px;
  bottom: 0;
  margin: auto;
  transition: 0.3s;
}
.navbar_2 {
  right: 0.5vw !important;
}
li {
  position: relative;
  list-style: none;
  width: 50px;
  text-align: center;
  margin-top: 5px;
}
li img {
  position: relative;
  width: 50px;
}
.item {
  position: absolute;
  height: 30px;
  background: #fff;
  color: #333;
  top: 0;
  right: 50px;
  transition: 0.35s;
  top: 10px;
  overflow: hidden;
  line-height: 30px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>