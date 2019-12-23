<template>
  <div class="resume">
    <!-- 姓名 -->
    <div class="re_name">
      <!-- 左下角底色 -->
      <div class="re_na_l"></div>
      <!-- 右上角名字 -->
      <div class="re_na_r">
        <span class="na_b">王嘉辉</span>
        <br />
        <span class="na_m">WEB前端</span>
      </div>
    </div>
    <!-- 左下角内容 -->
    <div class="re_l">
      <!-- line -->
      <div class="re_line" v-for="(item,index) in me" :key="index">
        <div v-for="(me,value) in item" :key="value">
          <p>{{value}}: {{me}}</p>
        </div>
      </div>
    </div>
    <!-- 右 -->
    <div class="re_r">
      <!-- line -->
      <div class="r_line">
        <img src="~assets/img/index/tt_ac.png" alt />
        <span>专业技能</span>
      </div>
      <!-- one -->
      <transition enter-active-class="animated bounceInDown">
        <div class="rr_line" v-show="isSone">
          <Ss :ss="ss1" />
          <Ss :ss="ss2" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Ss from "components/ss/Ss";
export default {
  data() {
    return {
      // 定义个人信息
      me: [
        {
          性别: "男"
        },
        {
          年龄: "20"
        },
        {
          生日: "1999-09-18"
        },
        {
          毕业院校: "济南职业学院"
        },
        {
          期望职业: "WEB前端"
        },
        {
          电话: "15628960860"
        },
        {
          微信: "WWX99729"
        },
        {
          微博: "@DSW1609"
        },
        {
          GitHub: "DSW1609"
        },
        {
          邮箱: "DSW7296666@163.com"
        }
      ],
      isSone: false,
      // 技能
      ss1: [
        {
          class: "lg_ht",
          src: require("../../assets/img/resume/Html5.svg"),
          tit: `熟练掌握使用HTML,了解HTML5的新特性。<br />
          熟悉掌握并能正确的使用HTML5语义化标签,例如footer,nav,aside等,
          与搜索引擎建立良好沟通,提升代码可读性,灵活配合使用,优化用户体验。<br />
          快速配合CSS完成较为复杂的网页布局。
            `,
          star: 4
        },
        {
          class: "lg_css",
          src: require("../../assets/img/resume/css3.svg"),
          tit: `熟练掌握使用CSS,基础扎实,理解深刻,经验充足,能够配合HTML快速完成美观复杂的网页布局。<br />
          熟练高效的使用CSS3的选择器,清楚各种选择器的效果。<br />
          熟练正确使用transition,animation,transform等CSS3的新特性。
          `,
          star: 4
        },
        {
          class: "lg_js",
          src: require("../../assets/img/resume/js.svg"),
          tit: `熟练掌握使用JavaScript,基础扎实,代码规范,习惯良好,能够配合CSS灵活运用,完成想要达到的效果。<br />
          熟悉ES6新特性,例如声明变量(let,const)、箭头函数=>、数组和对象的解构,遍历(for...in,for...of)以及数组的高级方法(find,filter,reduce)。`,
          star: 4
        }
      ],
      ss2: [
        {
          class: "lg_vue",
          src: require("../../assets/img/resume/Vue.svg"),
          tit: `① 熟练使用Vue,Devtools,及用Vue Cli3快速搭建项目。<br />
          ② 熟悉Vue的模板语法,基础扎实,清楚Vue条件渲染(if show)的不同,熟练使用Vue的列表渲染。<br />
          ③ 熟练正确的使用Vue组件,掌握全局注册和以及在模块系统中局部注册的方式。了解组件中的插槽及ref注册引用信息。掌握组件传值三种方式: 父传子(props),
          子传父($emit),非父子(事件总线,VueX)。<br />
          ④ 掌握Vue中的监听事件,掌握v-model指令,创建双向数据绑定。了解并正确的使用事件修饰符和按键修饰符。<br />
          ⑤ 熟练使用应用过渡效果,配合使用第三方 CSS 动画库,如 Animate.css,制作优雅流畅的过渡效果,提升用户体验。<br />
          ⑥ 熟练使用Vue-Router,并正确使用路由懒加载配合keep-alive保持当前路由不被销毁,提升页面性能。<br />
          ⑦ 熟练使用Vuex,在多个组件共享状态时,例如在添加购物车中,使多页面数据达成一致。`,
          star: 4
        },
        {
          class: "lg_ps",
          src: require("../../assets/img/resume/PS.svg"),
          tit: `基本掌握PS大部分工具的使用方法。<br />
          例如钢笔工具,魔棒工具,仿制图章工具。<br />
          可以简单的对图片进行调成,裁剪,修复,抠图。<br />
          掌握PS一些常用快捷键,提高作图效率。<br />
          了解图层的层级关系,了解通道蒙版,了解路径等。<br />
          `,
          star: 3
        }
      ]
    };
  },
  components: {
    Ss
  },
  activated() {
    setTimeout(() => {
      this.isSone = true;
    }, 500);
  },
  deactivated() {
    this.isSone = false;
  }
};
</script>

<style>
.resume {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #18181a;
  overflow: hidden;
}
.re_name {
  position: absolute;
  left: 8vw;
  top: 9vh;
  width: 168px;
  height: 100px;
}
.re_na_l {
  position: absolute;
  width: 143px;
  height: 80px;
  bottom: 0px;
  background-image: linear-gradient(to right, #4286f4, #18181a);
}
.re_na_r {
  position: absolute;
  right: 0;
  width: 143px;
  height: 80px;
  text-align: right;
}
.na_b {
  font-size: 40px;
  letter-spacing: 5px;
  color: #fff;
}
.star {
  position: relative;
  float: left;
  margin: 3px;
  margin-top: 10px;
  width: 30px;
}
.star_a {
  width: 28px;
  top: 1px;
}
.na_m {
  position: relative;
  top: 10px;
  font-size: 20px;
  letter-spacing: 3px;
  color: #ebebed;
}
.re_l {
  position: absolute;
  height: 60vh;
  left: 8.5vw;
  color: #fff;
  bottom: 9vh;
}
.re_line {
  position: relative;
  width: 30vw;
  height: 6vh;
  font-size: 20px;
}
.re_r {
  position: absolute;
  width: 55vw;
  height: 83vh;
  right: 12vw;
  top: 0;
  bottom: 0;
  margin: auto;
  background-image: linear-gradient(#bdc3c7, #2c3e50);
  box-shadow: 0px 0px 10px #000;
  border-radius: 2vw;
  overflow: hidden;
}
.r_line {
  position: relative;
  width: 152px;
  margin-top: 20px;
  color: #fff;
  font-size: 22px;
  padding: 6px 3px;
  background-image: linear-gradient(to right, #4286f4, #b5bbc0);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 2px 2px 20px #b5bbc0;
}
.r_line img {
  position: relative;
  float: left;
  width: 30px;
  top: -2px;
  margin-left: 5px;
  margin-right: 3px;
}
.rr_line {
  position: relative;
  width: 54vw;
  margin: 0 auto;
  top: -2vh;
  margin-top: 2.2vh;
  border-radius: 20px;
}
.r_one {
  position: relative;
  float: left;
  width: 26vw;
  margin-left: 15px;
  left: -7px;
}
.r_one_lg {
  margin-top: 15px;
  height: 22vh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.432) 052;
  border-radius: 10px;
  overflow: hidden;
  color: #ffffff;
}
.r_one_lg img {
  position: relative;
  float: left;
}
.r_one_lg h3 {
  position: relative;
  top: 5px;
  font-size: 14px;
  letter-spacing: 1px;
}
.lg_ht {
  background: #e54d26;
}
.lg_css {
  background: #0070ba;
}
.lg_js {
  color: #333;
  background: #f0db4f;
}
.lg_vue {
  height: 46vh;
  background: #4fc08d;
}
.lg_ps {
  color: rgb(26, 26, 26);
  background: #4286f4;
}
</style>