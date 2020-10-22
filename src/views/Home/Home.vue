<template>
  <div class="home">
    <nav-bar bgcolor="deeppink" class="home-nav">
      <div slot="center" class="centerfont">购物街</div>
    </nav-bar>
    <Home-Swiper :banners="banners" />
    <Recommend-View :recommend="recommend" />
    <FultureView />
    <TabControl :titles="titles" class="hometabcontrol" />
    <ul>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
      <li>ddadadada</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import FultureView from "./childcomps/FultureView";
import TabControl from "components/content/tabcontrol/TabControl";
import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommend: null,
      titles: ["流行", "新款", "精选"]
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FultureView,
    TabControl
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector(".hometabcontrol").offsetTop;
      // console.log(scrollTop,offsetTop)
      scrollTop < offsetTop+44
        ? document.querySelector(".hometabcontrol").classList.remove("hometabcontrol-active")
        : document.querySelector(".hometabcontrol").classList.add("hometabcontrol-active")
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    });
  },

  // 监听事件
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.home {
  overflow: scroll;
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.centerfont {
  color: white;
}
.hometabcontrol-active {
  background-color: white;
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
}
</style>
