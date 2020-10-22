<template>
  <div class="tabbar-item" @click="itemclick">
    <div class="item-icon" v-if="!isactive">
      <slot name="item-icon"></slot>
      <!-- <img src="@/assets/img/tabbar/shouye_1.svg" alt="" /> -->
    </div>
    <div class="item-icon-active" v-else>
      <slot name="item-icon-active"></slot>
      <!-- <img src="@/assets/img/tabbar/shouye.svg" alt="" /> -->
    </div>
    <div :style="isactiveColor">
      <slot name="tabbartitle">首页</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    query: Object,
    activeColor: {
      type: String,
      default: "pink",
    },
  },
  computed: {
    isactive() {
      //  return this.$route.path.includes(this.path)
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isactiveColor() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemclick() {
      // console.log(this.$router);
      // this.$router.push(this.path);
      this.$router.push({
        path:this.path,
        query: this.query
      })
    },
  },
};
</script>

<style>
.tabbar-item {
  flex: 1;
  float: left;
  box-shadow: -2px 0 3px rgba(100, 100, 100, 0.3);
  vertical-align: middle;
}
.tabbar-item img {
  height: 25px;
}
.tabbaractivefont {
  color: yellow;
}
</style>
