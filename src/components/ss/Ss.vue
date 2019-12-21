<template>
  <div class="r_one">
    <div class="r_one_lg" v-for="s in ss" :key="s.tit" :class="s.class">
      <!-- 左侧logo -->
      <img :src="s.src" alt />
      <!-- 点亮的星星 -->
      <img class="star" v-for="s in s.star" :key="s.tit" :src="sSrc" alt />
      <!-- 为点亮的星星 -->
      <img class="star star_a" v-for="s in 5-s.star" :key="s.tit" :src="saSrc" alt />
      <!-- 标题 -->
      <div class="r_te">
        <h3 v-html="s.tit"></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 星星
      sSrc: require("../../assets/img/resume/star.svg"),
      saSrc: require("../../assets/img/resume/star_a.svg")
    };
  },
  props: {
    ss: {
      type: Array,
      default: {}
    }
  }
};
</script>

<style>
.r_te {
  position: absolute;
  margin-top: 60px;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 18px;
}
</style>