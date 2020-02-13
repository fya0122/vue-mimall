<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import orderHeader from '@/components/orderheader.vue'
import navFooter from '@/components/navfooter.vue'
export default {
  components: {
    orderHeader,
    navFooter
  }
}
</script>