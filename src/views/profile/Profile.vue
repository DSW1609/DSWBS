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
          XMName: "DSW购物街",
          // 背景颜色
          bgc: "linear-gradient(#fffbd5, #b20a2c)",
          // 项目图片的长度
          widthI: "13vw",
          // 项目图片部分的总长度
          widthD: "26vw",
          // 图片右侧文字部分长度
          widthT: "13vw",
          // 图片部分上下间隔距离
          mTop: "2vw",
          // 项目图片链接
          src: {
            s0: require("../../assets/img/profile/Mall_01.png"),
            s1: require("../../assets/img/profile/Mall_02.png"),
            s2: require("../../assets/img/profile/Mall_03.png")
          },
          // 右侧文字
          te: {
            t0: "我是第一个图片的文字",
            t1: "我是第二个图片的文字",
            t2: "我是第三个图片的文字"
          }
        },
        {
          XMName: "仿写京东东PC端商城",
          bgc: "linear-gradient(#004e92, #000428)",
          widthI: "25vw",
          widthD: "40vw",
          widthT: "15vw",
          src: {
            s0: require("../../assets/img/profile/FJD_01.png"),
            s1: require("../../assets/img/profile/FJD_02.png"),
            s2: require("../../assets/img/profile/FJD_03.png"),
            s3: require("../../assets/img/profile/FJD_04.png")
          }
        },
        {
          XMName: "其他项目",
          bgc: "linear-gradient(#485563, #29323c)",
          widthI: "13vw",
          widthD: "26vw"
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
  width: 85vw;
  height: 88vh;
  margin: 0 auto;
  top: 9vh;
}
</style>