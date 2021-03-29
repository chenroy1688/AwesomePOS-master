<template lang="pug">
    .left-nav
        ul
            li.icon.iconfont.icon-wodezichan
                div 收银
            li.icon.iconfont.icon-dianpu
                div 店鋪
            li.icon.iconfont.icon-hanbao
                div 商品
            li.icon.iconfont.icon-huiyuanqia
                div 會員
            li.icon.iconfont.icon-shijian
                div 搶購
            li.icon.iconfont.icon-tongji
                div 統計
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #fff;
        padding:10px;
    }
</style>
