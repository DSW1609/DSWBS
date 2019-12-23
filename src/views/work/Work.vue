<template>
  <div class="work">
    <WorkImg :csl="csl1" />
    <WorkImg popClass="d_img2" :csl="csl2" />
  </div>
</template>

<script>
import WorkImg from "./childWK/WorkImg";
export default {
  data() {
    return {
      csl1: [
        {
          src: require("../../assets/img/work/JD_01.png"),
          te: `京东首页... <br />
          商城类页面是最复杂的
          `
        },
        {
          src: require("../../assets/img/work/JD_02.png")
        },
        {
          src: require("../../assets/img/work/JD_03.png")
        },
        {
          src: require("../../assets/img/work/JD_04.png")
        },
        {
          src: require("../../assets/img/work/JD_05.png")
        },
        {
          src: require("../../assets/img/work/JD_06.png")
        },
        {
          src: require("../../assets/img/work/JD_07.png")
        },
        {
          src: require("../../assets/img/work/JD_08.png")
        },
        {
          src: require("../../assets/img/work/JD_09.png")
        },
        {
          src: require("../../assets/img/work/JD_10.png")
        },
        {
          src: require("../../assets/img/work/TC_01.png")
        },
        {
          src: require("../../assets/img/work/VS_01.png")
        }
      ],
      csl2: [
        {
          src: require("../../assets/img/work/MB_01.png")
        },
        {
          src: require("../../assets/img/work/MB_02.png")
        },
        {
          src: require("../../assets/img/work/MB_03.png")
        },
        {
          src: require("../../assets/img/work/MB_04.png")
        },
        {
          src: require("../../assets/img/work/MB_05.png")
        },
        {
          src: require("../../assets/img/work/MB_06.png")
        },
        {
          src: require("../../assets/img/work/MB_07.png")
        }
      ]
    };
  },
  components: {
    WorkImg
  }
};
</script>

<style>
.work {
  position: relative;
  width: 100vw;
  height: 150vh;
  background-image: linear-gradient(#bdc3c7, #2c3e50);
  overflow: hidden;
}
</style>