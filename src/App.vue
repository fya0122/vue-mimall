<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import storege from '@/storage/index.js'
export default {
  name: 'App',
  mounted() {
    console.log(storege.getItem('b', 'user'))
  }
}
</script>
