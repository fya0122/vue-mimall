<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import navHeader from '@/components/navheader.vue'
import navFooter from '@/components/navfooter.vue'
export default {
  components: {
    navHeader,
    navFooter
  }
}
</script>
