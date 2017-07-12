<template>
  <div id="indexContainer">

    <el-row id="index-row">
      <el-col :span="24">
        <h1 class="web-title">俱乐部管理平台</h1>
      </el-col>
    <el-col :span="3" class="nav">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
        <el-submenu index="1">
          <template slot="title">成员作品</template>
          <el-menu-item-group title="">
            <el-menu-item index="polo">polo</el-menu-item>
            <el-menu-item index="chopper">chopper</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2"><router-link to="/userConf" tag="span">人员管理</router-link></el-menu-item>
      </el-menu>
  </el-col>
  <el-col :span="21">
    <router-view></router-view>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        主页: '/',
        草帽: '/caomao',
        西瓜: '/Xigua',
        黑白: '/BlackWhite',
        乔巴: '/Chopper',
        马可波罗: '/Polo',
        弗洛修: '/fuluo',
        摩登: '/modeng',
      }
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style lang="scss">
html,body,#indexContainer,#index-row{
  height: 100%;
}
#indexContainer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .web-title{
    margin:0;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 25px;
    background: #58B7FF;
    color: #fff;
    letter-spacing: 8px;
    font-family: cursive;
  }
  .nav{
    height:calc(100% - 60px);
  }
  .el-menu{
    height: 100%;
  }

}
</style>
