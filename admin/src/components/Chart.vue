<template>
  <div id="echarts-box" class="echarts"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

  export default {
    props: {
      options: {
        type: Object,
        default () {
          return {
              title: {
                  text: 'ECharts 入门示例'
              },
              tooltip: {},
              xAxis: {
                  data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }]
          }
        }
      }
    },
    data () {
      return {
        myChart: ''
      }
    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$el);
      // 绘制图表
      this.myChart.setOption(this.options);
    },
    methods: {
      setOption (options) {
        this.myChart.setOption(options);
      }
    }
  }
</script>

<style scoped>

</style>