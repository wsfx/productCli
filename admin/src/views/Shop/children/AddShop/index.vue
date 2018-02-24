<template>
  <div>
    商家审核
    <Content title="添加商铺">
      <el-steps :active="2" align-center>
        <el-step title="添加商户信息" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="填写运营信息" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="添加营业资质" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="审核" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </Content>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>