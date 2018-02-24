<template>
  <div>
    <el-card >
      <div class="box-card">
        <h3>{{title}}<small>{{smTitle}}</small></h3>
        <output>{{getNum}}</output>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props:{
      title: {
        type: String,
        default: ''
      },
      smTitle: {
        type: String,
        default: ''
      },
      num: {
        type: Number,
        default: 0
      }
    },
    computed: {
      getNum () {
        let re = /(\d{1,})(\d{3})/g
        let newNum = this.num.toString()

        while(re.test(newNum)) {
          newNum = newNum.replace(re, '$1，$2')
        }

        return newNum
      }
    }
  }
</script>

<style scoped lang="less">
.box-card {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    h3 {
      small {
        display: block;
        font-size: 12px;
      }
    }
    output {
      font-size: 24px;
    }
}
</style>