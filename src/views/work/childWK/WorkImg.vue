<template>
  <div>
    <div class="d_img" :class="popClass" v-for="(i,index) in csl" :key="index" @click="workImgCK">
      <img :src="i.src" alt />
      <!-- 隐藏文字区域 -->
      <div class="te_n">
        <!-- 背景 -->
        <div class="te_n_bg"></div>
        <!-- 内容 -->
        <div class="te_te">
          <span v-html="i.te"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cIndex: 0
    };
  },
  props: {
    csl: {
      type: Array,
      default: []
    },
    popClass: {
      type: String,
      default: "d_img"
    }
  },
  methods: {
    workImgCK(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.d_img {
  position: relative;
  float: left;
  width: 22vw;
  height: 25vh;
  overflow: hidden;
  margin: 1vw;
  left: 1vw;
  cursor: pointer;
  transition: 0.3s;
  border: 3px solid #fff;
  border-radius: 0.5vw;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.315);
  background: #f4f4f4;
}
.d_img2 {
  width: 12vw;
  height: 53vh;
  left: 1.4vw;
  margin: 0.8vw;
}
.d_img:hover {
  transform: scale(1.05);
}
.d_img img {
  width: 100%;
  height: 100%;
}
.te_n {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  transition: 0.3s;
  opacity: 0;
}
.te_n:hover {
  opacity: 1;
}
.te_n_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-image: linear-gradient(#bdc3c7, #2c3e50);
}
.te_te {
  position: relative;
  z-index: 999;
  font-size: 20px;
  color: #fff;
  text-align: center;
  /* line-height: 25vh; */
}
</style>