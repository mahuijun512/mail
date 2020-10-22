<template>
  <div id="tabbar">
      <slot></slot>   
  </div>
</template>
<script>
export default {
  name: "tabbar",

};
</script>

<style>
#tabbar {
  background-color: white;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 49px;
  box-shadow: 1px -3px 1px rgba(100, 100, 100, 0.1);
}

</style>
