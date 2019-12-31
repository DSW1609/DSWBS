<template>
  <div class="profile" :style="{backgroundImage:yy[pre].bgc}">
    <!-- 主要内容 -->
    <div class="content">
      <PfShow :cont="yy" @hdp="hdp" />
    </div>
  </div>
</template>
<script>
import DSWNNN from "components/DSWNNN/DSWNNN";
import PfShow from "./childPF/PfShow";
export default {
  data() {
    return {
      cIndex: 0,
      pre: 0,
      yy: [
        {
          // 项目名称
          XMName: "DSW购物街(Vue+Vue Cli3+Vue-Router+Vuex)",
          // 项目图片的长度
          widthI: "13vw",
          // 图片部分上下间隔距离
          // mTop: "2vw",
          // 文字颜色
          color: "#fff",
          // 项目图片文字数据
          base: [
            {
              src: require("../../assets/img/profile/Mall_01.png")
            },
            {
              src: require("../../assets/img/profile/Mall_02.png")
            },
            {
              src: require("../../assets/img/profile/Mall_03.png")
            }
          ]
        },
        {
          XMName: "仿写京东东PC端商城(HTML+CSS+JavaScript+JQuery)",
          widthI: "25vw",
          base: [
            {
              src: require("../../assets/img/profile/FJD_01.png"),
              te: "我是第一个图片的文字"
            },
            {
              src: require("../../assets/img/profile/FJD_02.png"),
              te: "我是第二个图片的文字"
            },
            {
              src: require("../../assets/img/profile/FJD_03.png"),
              te: "我是第三个图片的文字"
            },
            {
              src: require("../../assets/img/profile/FJD_04.png"),
              te: "我是第四个图片的文字"
            }
          ]
        },
        {
          XMName: "其他项目",
          widthI: "13vw"
        }
      ]
    };
  },
  components: {
    DSWNNN,
    PfShow
  },
  methods: {
    hdp(pre) {
      this.pre = pre;
    }
  }
};
</script>

<style>
.profile {
  position: relative;
  width: 100%;
  height: 100vh;
}
.content {
  position: relative;
  width: 100vw;
  height: 99vh;
  top: 1vh;
  margin: 0 auto;
}
</style>