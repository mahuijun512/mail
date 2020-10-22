<template>
<div class="nav-bar" :style="{'background-color':bgcolor}">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
</div>
    
</template>

<script>
export default {
    name:'NavBar',
    props:{
        bgcolor:String
    }
}
</script>

<style>
.nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: -1px 2px  0px rgba(100, 100, 100, .1);
}
.nav-center{
    flex: 1;
}
.nav-left{
    width: 60px;
}
.nav-right{
    width: 60px;
}
</style>