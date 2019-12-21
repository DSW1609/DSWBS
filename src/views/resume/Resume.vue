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
    <transition enter-active-class="animated bounceInDown">
      <div class="re_l" v-show="isSone">
        <!-- line -->
        <div class="re_line" v-for="(item,index) in me" :key="index">
          <div v-for="(me,value) in item" :key="value">
            <p>{{value}}: {{me}}</p>
          </div>
        </div>
      </div>
    </transition>
    <!-- 右 -->
    <div class="re_r">
      <!-- line -->
      <div class="r_line">
        <img src="~assets/img/index/tt_ac.png" alt />
        <span>专业技能</span>
      </div>
      <div class="rr_line">
        <!-- one -->
        <transition enter-active-class="animated bounceInDown">
          <div class="r_one" v-show="isSone">
            <!-- 左侧logo -->
            <div class="r_one_lg lg_ht">
              <img src="~assets/img/resume/Html5.svg" alt />
              <h3>HTML5</h3>
            </div>
            <div class="r_one_lg lg_css">
              <img src="~assets/img/resume/css3.svg" alt />
              <h3>CSS3</h3>
            </div>
            <div class="r_one_lg lg_js">
              <img src="~assets/img/resume/js.svg" alt />
              <h3>JavaCript</h3>
            </div>
          </div>
        </transition>
        <!-- one -->
        <transition enter-active-class="animated bounceInDown">
          <div class="r_one" v-show="isSone">
            <!-- 左侧logo -->
            <div class="r_one_lg lg_vue">
              <img src="~assets/img/resume/Vue.svg" alt />
              <h3>Vue</h3>
            </div>
            <div class="r_one_lg lg_ps">
              <img src="~assets/img/resume/PS.svg" alt />
              <h3>PS</h3>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
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
      isSone: false
    };
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

<style scoped>
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
  height: 70vh;
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
  background: #41b883;
}
.lg_ps {
  background: #4286f4;
}
</style>