<template>
  <div class="DSWNNN" :style="{color:clr}">
    <span>DSW1609</span>
  </div>
</template>

<script>
export default {
  props: {
    clr: {
      type: String,
      default: "#888"
    }
  }
};
</script>

<style sscoped>
.DSWNNN {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  font-size: 30px;
  letter-spacing: 1px;
}
</style>