<template>
  <Chart :options="polar" ref="chartVm"></Chart>
</template>

<script>
  import Chart from '@/components/Chart'

  export default {
    data () {
      return {
        chartData: {},
        legendData: [],
        xAxisData: [],
        polar: {
          tooltip: {
              trigger: 'axis',
              backgroundColor: '#409EFF',
              textStyle: {
                fontSize: 12
              }
          },
          color: ['#0ee9dc','#facc0d','#38c9fa'],
          legend: {
              data:[]
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: [],
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              }
          },
          yAxis: {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              }
          },
          series: []
        }
      }
    },
    components: {
      Chart
    },
    watch: {
      chartData (newVal) {
        let legendData = Object.keys(newVal);

        this.polar.legend.data = legendData  // ['用户注册', '用户注册' ,...]
        this.polar.xAxis.data = Object.keys(newVal[legendData[0]])

        
        this.polar.series = Array.from(legendData, (key, index) => {
          return {
              name: key,
              type:'line',
              stack: '总量',
              data: Object.values(newVal[key]),
              smooth: true,
              symbol: 'roundRect',
              showSymbol: false,
              lineStyle: {
                shadowColor: this.polar.color[index],
                shadowBlur: 10
              }
          }
        })
        this.$refs.chartVm.setOption(this.polar)
      }
    },
    created () {
      this.getChartData()
      setInterval(() => {
        this.getChartData()
      }, 1000)
    },
    methods: {
      getRandom (){
        return parseInt( Math.random()*300 )
      },
      getChartData () {
        let chartData = {
          '用户注册': {
            '周二': this.getRandom(),
            '周三': this.getRandom(),
            '周四': this.getRandom(),
            '周五': this.getRandom(),
            '周六': this.getRandom(),
            '周日': this.getRandom(),
            '今天': this.getRandom(),
          },
          '商户注册': {
            '周二': this.getRandom(),
            '周三': this.getRandom(),
            '周四': this.getRandom(),
            '周五': this.getRandom(),
            '周六': this.getRandom(),
            '周日': this.getRandom(),
            '今天': this.getRandom(),
          },
          '新增订单': {
            '周二': this.getRandom(),
            '周三': this.getRandom(),
            '周四': this.getRandom(),
            '周五': this.getRandom(),
            '周六': this.getRandom(),
            '周日': this.getRandom(),
            '今天': this.getRandom(),
          }
        }
        this.chartData = chartData;
      }
    }
  }
</script>

<style scoped>

</style>