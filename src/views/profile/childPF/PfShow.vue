<template>
  <div>
    <!-- 左侧文字 -->
    <div class="content_l">{{cont.te}}</div>
    <!-- 右侧展示栏 -->
    <div class="content_r"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cont: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style>
</style>