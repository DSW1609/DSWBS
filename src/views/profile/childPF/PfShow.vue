<template>
  <div class="PfShow">
    <el-carousel
      :autoplay="false"
      arrow="never"
      trigger="click"
      @change="((pre, next) =&gt; {myFun(pre)})"
    >
      <el-carousel-item v-for="(item,index) in cont" :key="index">
        <div
          class="PfImgC"
          v-for="(s,indez) in item.src"
          :style="{width:item.widthD,backgroundImage:item.bgc,marginTop:item.mTop}"
          :key="indez"
        >
          <!-- 左侧图片 -->
          <img class="PfImg" :style="{width:item.widthI}" :src="s" alt />
          <!-- 右侧文字说明 -->
          <div class="PfImgTe" :style="{width:item.widthT,left:item.widthI}">{{item.te}}</div>
        </div>
        <!-- 底部项目名字 -->
        <div class="XMName">
          <span>{{item.XMName}}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cont: {
      type: Array,
      default: []
    }
  },
  methods: {
    myFun(pre) {
      this.$emit("hdp", pre);
    }
  }
};
</script>

<style>
.el-carousel__container {
  height: 88vh !important;
}
.PfImgC {
  position: relative;
  float: left;
  margin-left: 1vw;
  margin-top: 1vw;
  top: -1vw;
  border-radius: 0.5vw;
}
.PfImg {
  border: 3px solid #fff;
  border-radius: 0.5vw;
}
/* 底部指示条 */
.el-carousel__button {
  width: 68px;
  height: 6px;
  border-radius: 6px;
}
.PfImgTe {
  position: absolute;
  top: 0;
  height: 100%;
}
.XMName {
  position: absolute;
  width: 60vw;
  height: 10vh;
  bottom: 18px;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 39px;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  font-family: "MicroSoft Yahei";
}
</style>