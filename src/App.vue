<template>
  <Home />
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Home from "./components/Home.vue";
UIkit.use(Icons);

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>
