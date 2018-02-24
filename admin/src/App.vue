<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import '@/static/css/reset.css'
import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  },
  created () {
    // this.$axios.get('/api/user/getUserInfo').then((data) => {
    //   console.log(data)
    // }, (error) => {
    //   this.$router.replace('/login')
    // })
  }
}
</script>

<style>

</style>
