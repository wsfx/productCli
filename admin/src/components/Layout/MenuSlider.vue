<template>
    <el-menu
      :default-active="$route.path"
      class="menu-list"
      :router="true"
      @open="handleOpen"
      @close="handleClose">
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item> -->
      <template v-for="(item, index) in routes" v-if="item.component && !item.meta.isFull">
        <el-submenu v-if="item.children" :key="index" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.children"
            :key="index2" 
            :index="item.path+'/'+item2.path"
          >{{item2.meta.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :index="item.path"
          :key="index"
        >
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
.menu-list {
  border: 0;
}
</style>
