<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>

</template>

<script>
  //引入FootGuide组件
  import FootGuide from './components/FootGuide/FootGuide.vue'
  import {mapActions} from 'vuex'

  export default {
    mounted() {
      this.getAddress()
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getAddress','getUserInfo'])
    },

    components: {
      FootGuide
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%

</style>
