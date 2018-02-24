import Content from '@/components/Content'
import Card from '@/components/Card'

export default {
  install (Vue) {
    Vue.component('Content', Content)
    Vue.component('Card', Card)
  }
}