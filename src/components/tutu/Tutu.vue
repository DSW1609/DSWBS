<template>
  <div class="tutu">
    <img ref="tutu" src="~assets/img/index/tutu.png" @click="popClick" alt />
    <!-- 弹出框 -->
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="tutu_pop" v-show="isX">{{pop[popi]}}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 弹出文字
      pop: ["20岁", "属兔", "男孩子", "喜欢前端", "喜欢佳林"],
      // 定义初始展示的值
      popi: 0,
      // 显示弹出框
      isX: false
    };
  },
  methods: {
    popClick() {
      if (this.isX == false) {
        this.isX = true;
        this.popi == this.pop.length - 1 ? (this.popi = 0) : (this.popi += 1);
        setTimeout(() => {
          this.isX = false;
        }, 1500);
      }
    }
  }
};
</script>

<style>
.tutu {
  position: absolute;
  width: 130px;
  height: 130px;
  bottom: 2vh;
  left: 1.5vw;
}
.tutu img {
  position: absolute;
  bottom: 0;
  width: 55px;
  cursor: pointer;
  animation: 5s tuut linear infinite normal;
}
.tutu_pop {
  position: absolute;
  right: 0px;
  padding: 3px 6px;
  background: #18181a;
  border: 1px solid #575555;
  color: #fff;
  border-radius: 2px;
}
@keyframes tuut {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>