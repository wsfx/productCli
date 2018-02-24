<template>
  <div>
    <div class="card-group">
      <Card
        title="总用户数（人）"
        smTitle="注册人数"
        :num="8888"
      />
      <Card
        title="总用户数（人）"
        smTitle="注册人数"
        :num="88888888888"
      />
      <Card
        title="总用户数（人）"
        smTitle="注册人数"
        :num="123123123"
      />
    </div>
    <Content title="数据统计">
      <LineChart></LineChart>
    </Content>
  </div>
</template>

<script>
  import LineChart from './components/LineChart'
  export default {
    name: 'Home',
    components: {
      LineChart
    },
    data () {
      return {
        
      }
    }
  }

</script>

<style scoped lang="less">
.echarts {
  height: 300px;
}
.card-group {
  display: flex;
  padding: 20px 0;
  margin-bottom: 20px;
  & > div {
    flex:1;
    margin-left: 20px;
    &:first-child {
      margin: 0;
    }
  }
}
</style>