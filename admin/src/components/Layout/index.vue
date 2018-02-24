<template>
    <el-container class="layout" v-if="!$route.meta.isFull">
        <el-aside width="150px" class="left-menu">
            <div class="logo">
                <img src="https://shadow.elemecdn.com/faas/napos-introduce/assets/eleme_logo.svg"/>
                <span>商家管理后台</span>
            </div>
            <MenuSlider />
        </el-aside>
        <el-container>
            <el-header>
                <HeaderBar/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
    <div v-else>
        <router-view></router-view>
    </div>
</template>

<script>
import MenuSlider from './MenuSlider'
import HeaderBar from './HeaderBar'

export default {
  name: 'Layout',
  components: {
    MenuSlider,
    HeaderBar
  },
  created () {
      console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
.layout {
    padding-left: 150px;
}
.left-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 150px;
  background: #fff;
  border-right: 1px solid #eee;
  left: 0;
  .logo {
      font-size: 20px;
      text-align: center;
      color: #0091ea;
      font-weight: bold;
      padding: 20px 0;
      img {
          display: block;
          width: 60%;
          margin: 10px auto;
      }
  }
}
</style>
