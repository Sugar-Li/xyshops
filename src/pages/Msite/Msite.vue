<template>
  <!--首页外卖-->

  <section class="msite">

    <HeaderTop :title="address.name">

     <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo?'/userInfo':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="{categorys,index} in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="{category,index} in categorys">
              <div class="food_container">
                <img src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>

          </div>

        </div>
        <!-- 分页符 -->
        <div class="swiper-pagination"></div>
      </div>

      <img src="./images/msite_back.svg" alt="">
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>

    </div>
  </section>
</template>

<script>
  //引入swiper构造函数，同时引入swiper的css样式组件
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  //引入组件
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

  // 引入vuex
  import {mapState, mapActions} from 'vuex'

  export default {
    date(){
      return{
        baseImgUrl:'https://fuss10.elemecdn,com'
      }
    },
    mounted() {
      this.getCategorys()
      this.getShops()

    },

    methods: {
      ...mapActions(['getCategorys','getShops'])
    },

    components: {
      HeaderTop,
      ShopList
    },

    computed: {
      ...mapState(['address', 'categorys','userInfo']),

      /*根据categorys一维数组生成一个二维数组
      * 小数组中的元素个数最大为8
      * */
      categorysArr() {
        const {categorys} = this
        const arr = []
        let minArr = []
        categorys.forEach(category => {
          if (minArr.length === 8) {//小数组长度为8时，更新小数组为空数组
            minArr = []
          }
          if (minArr.length === 0) {//小数组为空时将它加入到大数组中
            arr.push(minArr)
          }
          //将category加入到小数组中
          minArr.push(category)
          return arr
        })
      }
    },

    watch:{
      categorys(){//数据更新了，在异步界面跟新之前
        //界面更新就立即创建swiper对象
        this.$nextTick(()=>{//界面一旦更新，立即触发回调函数（该语句要写在数据更新之后）
          //创建一个Swiper，实现轮播
          new Swiper('.swiper-container', {
            loop: true,//可以循环轮播
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }




</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .msite //首页
    width 100%
    .msite_header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
