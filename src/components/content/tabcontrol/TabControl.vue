<template>
  <div class="TabControl">
    <div v-for="(item, index) in titles" :key="index"
    :class="{'active': index===currentindex}"
    @click="currentindex=index"
     class="TabControl-item">
     <span>
      {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data () {
      return {
          currentindex:0
      }
  },
  methods: {

  }
};
</script>

<style>
.TabControl{
    display: flex;
    text-align: center;
    font-size:15px ;    
    line-height: 40px;
    height: 40px;
}
.TabControl-item{
    flex: 1;
}
.TabControl span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span {
    border-bottom:3px solid var(--color-tint) ;

}
</style>