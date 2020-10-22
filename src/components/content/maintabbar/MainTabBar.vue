<template>
    <div class="MainBar">
          <tab-bar>
      <TabBarItem path="/Home" :query='{id:1}' activeColor='green'>
        <img src="@/assets/img/tabbar/shouye_1.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/shouye.svg"
          alt="shouye"
          slot="item-icon-active"
        />
        <div slot="tabbartitle">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor='green'>
        <img src="@/assets/img/tabbar/fenlei_1.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/fenlei.svg"
          alt="shouye"
          slot="item-icon-active"
        />
        <div slot="tabbartitle">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor='green'>
        <img src="@/assets/img/tabbar/gouwuche_1.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/gouwuche.svg"
          alt="shouye"
          slot="item-icon-active"
        />
        <div slot="tabbartitle">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor='green'>
        <img src="@/assets/img/tabbar/A_1.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/A.svg"
          alt="shouye"
          slot="item-icon-active"
        />
        <div slot="tabbartitle">我的</div>
      </TabBarItem>
    </tab-bar>
    </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/tabbar.vue";
import TabBarItem from "@/components/common/tabbar/TabBaritem.vue";
export default {
    name: 'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
.MainBar{
  bottom: 0;
  left: 0;
  right: 0;
}
</style>