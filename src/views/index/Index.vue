<template>
  <div class="index">
    <!-- 左上角名字 -->
    <div class="index_lname">
      <i>@</i>
      <span>DSW1609</span>
    </div>
    <!-- 渐变背景 -->
    <div class="index_jbg">
      <!-- 左半圆 -->
      <div class="index_lby">
        <img src="~assets/img/index/index_bg.jpg" alt />
      </div>
      <!-- 遮挡层 -->
      <div class="index_zd"></div>
    </div>
    <!-- 右侧文字 -->
    <div class="index_te">
      <span>
        ABOUT
        <br />DSWANG
      </span>
      <br />
      <span class="index_te2">
        关于王嘉辉
        <span class="index_temini">- 简历 作品</span>
      </span>
    </div>
    <!-- 右上角点点 -->
    <div class="index_rdian">
      <span v-for="item in 8" :key="item">·</span>
    </div>
    <!-- 左下角兔兔提示 -->
    <Tutu />
    <!-- 右下角三角指示 -->
    <div class="index_rsj">
      <!-- 三角形 -->
      <img src="~assets/img/index/jt.png" alt />
      <img class="rsj_2" src="~assets/img/index/jt.png" alt />
    </div>
  </div>
</template>

<script>
import Tutu from "components/tutu/Tutu";
export default {
  components: {
    Tutu
  }
};
</script>

<style scoped>
.index {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #18181a;
  overflow: hidden;
}
.index_lname {
  position: absolute;
  left: 2vw;
  font-weight: bold;
  font-size: 20px;
  top: 1vh;
}
.index_lname i {
  position: relative;
  font-size: 15px;
  top: -3px;
  padding-right: 2px;
}
.index_lby {
  position: absolute;
  right: -60px;
  width: 300px;
  height: 500px;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  border-radius: 350px 0 0 300px;
  border: 2px solid #18181a;
  box-shadow: 0px 0px 20px #000;
  background-image: linear-gradient(#944757, #956094);
}
.index_lby img {
  position: absolute;
  width: 380px;
  left: -60px;
  top: 15px;
  transform: rotate(-12deg);
  opacity: 0.8;
}
.index_jbg {
  position: absolute;
  width: 100px;
  height: 100vh;
  background-image: linear-gradient(to right, #18181a, #101012);
  transform: rotate(11deg);
  left: 25vw;
}
.index_zd {
  position: absolute;
  width: 200px;
  height: 120vh;
  background: #18181a;
  right: -200px;
  top: -20vh;
  box-shadow: -5px -5px 10px #101012;
}
.index_te {
  position: absolute;
  height: 500px;
  font-size: 120px;
  letter-spacing: 2px;
  color: #fff;
  font-weight: bold;
  left: 40vw;
  top: 100px;
  bottom: 0;
  margin: auto;
}
.index_te2 {
  position: relative;
  font-size: 50px;
  top: -50px;
  left: 8px;
}
.index_temini {
  font-size: 35px;
}
.index_rdian {
  position: relative;
  float: right;
  right: 2vw;
  font-size: 20px;
  font-weight: bolder;
  top: 1vh;
}
.index_rdian span {
  margin: 3px;
}
.index_rsj {
  position: absolute;
  width: 35px;
  bottom: 2vh;
  right: 2vw;
  text-align: center;
}
.index_rsj img {
  transform: rotate(-90deg);
}
.rsj_2 {
  width: 30px;
  opacity: 0.7;
}
</style>