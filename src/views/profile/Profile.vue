<template>
  <div class="profile">
    <!-- 主要内容 -->
    <div class="content">
      <!-- 两侧切换按钮 -->
      <div class="button button_l" v-show="cIndex!=0" @click="cIndex--"></div>
      <div class="button button_r" v-show="cIndex!=years.length-1" @click="cIndex++"></div>
      <transition mode="out-in" enter-active-class="animated zoomIn">
        <PfShow :cont="y2017[cIndex]" />
      </transition>
    </div>
  </div>
</template>
<script>
import DSWNNN from "components/DSWNNN/DSWNNN";
import PfShow from "./childPF/PfShow";
export default {
  data() {
    return {
      years: [2017, 2018, 2019],
      cIndex: 0,
      y2017: [
        {
          te: 20177777777
        },
        {
          te: 20188888888
        },
        {
          te: 20199999999
        }
      ]
    };
  },
  components: {
    DSWNNN,
    PfShow
  },
  methods: {}
};
</script>

<style>
.profile {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.content {
  position: relative;
  width: 70vw;
  height: 82vh;
  background: #f4f4f4;
  margin: auto;
  top: 9vh;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}
.content_l {
  position: absolute;
  width: 26vw;
  height: 98%;
  left: 0.5vw;
  top: 1%;
  transition: 1s;
}
.content_r {
  position: absolute;
  top: 0;
  right: 0;
  width: 43vw;
  height: 100%;
  border-left: 1px dashed rgba(0, 0, 0, 0.1);
  background: #e3e8e7;
}
.button {
  position: relative;
  float: left;
  width: 30px;
  height: 30px;
  background: yellow;
  z-index: 999;
  top: 50%;
  transform: scaleY(-50%);
}
.button_r {
  float: right;
}
</style>