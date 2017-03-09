<template>
  <div>
    <div class="header">header</div>
    <div class="tab">tab</div>
    <div class="content">content</div>
    <router-link to="header">tab1</router-link>
    <router-link to="footer">tab2</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {}
  }
</script>

<style>

</style>
