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
      // PC端
      csl1: [
        {
          src: require("../../assets/img/work/JD_01.png"),
          te: "PC端 模仿京东商城首页",
          link: "https://dsw1609.github.io/DSWJD"
        },
        {
          src: require("../../assets/img/work/JD_02.png"),
          te: "PC端 模仿京东商城首页",
          link: "https://dsw1609.github.io/DSWJD"
        },
        {
          src: require("../../assets/img/work/JD_03.png"),
          te: "PC端 模仿京东商城首页",
          link: "https://dsw1609.github.io/DSWJD"
        },
        {
          src: require("../../assets/img/work/JD_04.png"),
          te: "PC端 模仿京东商城-京东秒杀",
          link: "https://dsw1609.github.io/DSWJD/miaosha"
        },
        {
          src: require("../../assets/img/work/JD_05.png"),
          te: "PC端 模仿京东商城-领券中心",
          link: "https://dsw1609.github.io/DSWJD/youhuiquan"
        },
        {
          src: require("../../assets/img/work/JD_06.png"),
          te: "PC端 模仿京东商城-发现好货",
          link: "https://dsw1609.github.io/DSWJD/fxhh"
        },
        {
          src: require("../../assets/img/work/JD_07.png"),
          te: "PC端 模仿京东商城-品牌闪购",
          link: "https://dsw1609.github.io/DSWJD/red"
        },
        {
          src: require("../../assets/img/work/JD_08.png"),
          te: "PC端 模仿京东商城-商品详情",
          link: "https://dsw1609.github.io/DSWJD/sp_show"
        },
        {
          src: require("../../assets/img/work/JD_09.png"),
          te: "PC端 模仿京东商城-Footer",
          link: "https://dsw1609.github.io/DSWJD/red"
        },
        {
          src: require("../../assets/img/work/JD_10.png"),
          te: "PC端 模仿京东商城-商品参数",
          link: "https://dsw1609.github.io/DSWJD/sp_show"
        },
        {
          src: require("../../assets/img/work/TC_01.png"),
          te: "PC端 模仿腾讯网首页",
          link: "https://dsw1609.github.io/DSWTencent"
        },
        {
          src: require("../../assets/img/work/VS_01.png"),
          te: "PC端 模仿Vans官网",
          link: "https://dsw1609.github.io/DSWVans"
        }
      ],
      // 移动端
      csl2: [
        {
          src: require("../../assets/img/work/MB_01.png"),
          te: "小程序<br />模仿OPPO商城"
        },
        {
          src: require("../../assets/img/work/MB_02.png"),
          te: "个人小程序<br />新的灵感-首页"
        },
        {
          src: require("../../assets/img/work/MB_03.png"),
          te: "个人小程序<br />新的灵感-我的"
        },
        {
          src: require("../../assets/img/work/MB_04.png"),
          te: "移动端(Vue-开发)<br />DSW购物街-首页",
          link: "https://dsw1609.github.io/DSWMall/dist/index"
        },
        {
          src: require("../../assets/img/work/MB_05.png"),
          te: "移动端(Vue-开发)<br />DSW购物街-商品详情页"
        },
        {
          src: require("../../assets/img/work/MB_06.png"),
          te: "移动端(Vue-开发)<br />DSW购物街-商品参数页"
        },
        {
          src: require("../../assets/img/work/MB_07.png"),
          te: "移动端(Vue-开发)<br />DSW购物街-购物车为空页面"
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
  overflow: hidden;
}
</style>