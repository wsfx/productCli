<template>
  <div class="tabel_list">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="图标"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.image" />
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      tableData: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="less">
.tabel_list {
  img {
    display: block;
    width: 80px;
    height: 80px;
  }
}
</style>