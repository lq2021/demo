<template>
  <div class="home">
    <Header></Header>
    <CenterWrap></CenterWrap>
    <Footer></Footer>
  </div>
</template>
<script setup>
import Header from "./Header.vue"
import CenterWrap from './Center.vue'
import Footer from './Footer.vue'
</script>
<style lang="less" scoped>
.home{
  width: 1440px;
  background: #E6E6FA;
}
</style>