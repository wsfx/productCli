<template>
  <section class="section-box">
    <h2 v-if="title" class="title"> {{title}}</h2>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'Content',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less">
.section-box {
  background: #fff;
  padding: 10px 0;
  .title {
    font-size: 24px;
    color: #000;
    line-height: 50px;
  }
}
</style>