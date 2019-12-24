<template>
  <div class="profile">
    <!-- 顶部导航栏 -->
    <div class="nav">
      <span
        v-for="(y,index) in years"
        :key="index"
        @click="navClick(index)"
        :class="{nav_bac:cIndex==index}"
      >
        {{y}}
        <transition enter-active-class="animated bounceInLeft">
          <em v-show="cIndex==index"></em>
        </transition>
      </span>
    </div>
    <!-- 下方文字 -->
    <div class="content">
      <div class="te">
        <span>{{ctt[cIndex].te}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      years: [2017, 2018, 2019],
      cIndex: 0,
      ctt: [
        {
          tit:"",
          te: `201720172017`
        },
        {
          te: `201820182018`
        },
        {
          te: `201920192019`
        }
      ]
    };
  },
  methods: {
    navClick(index) {
      this.cIndex = index;
    }
  }
};
</script>

<style scoped>
.profile {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.nav {
  position: relative;
  width: 70vw;
  height: 96px;
  margin: 0 auto;
  line-height: 100px;
  font-size: 30px;
  color: #5c6b77;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #bdc3c7, #5a6976, #bdc3c7) 1 8 1;
}
.nav span {
  position: relative;
  display: inline-block;
  width: 20vw;
  height: 90px;
  text-align: center;
  left: 5vw;
  cursor: pointer;
  transition: 0.3s;
}
.nav_bac {
  color: #fff;
  font-weight: bold;
}
em {
  position: absolute;
  width: 3vw;
  height: 3px;
  background-image: linear-gradient(to right, #fff, #bdc3c7);
  left: 0;
  right: 0;
  bottom: 20px;
  margin: auto;
}
.content {
  position: relative;
  width: 70vw;
  height: 80vh;
  margin: 0 auto;
}
.te{
  position: relative;
  font-size: 20px;
  color: #fff;
}
</style>