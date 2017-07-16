<template>
  <div id="indexContainer">
    <el-row>
      <el-col :span="18">
        <h1 class="web-title">俱乐部管理平台</h1>
      </el-col>
      <el-col :span="6">
      <h1 class="web-title" v-if="status"><el-tag>{{username}}</el-tag>，欢迎你 <span @click.prevent="logOutConfirm">登出</span></h1>
      <h1 class="web-title" v-else><router-link tag="span" to="/login">登录</router-link></h1>
      </el-col>
    </el-row>

    <el-row id="index-row">
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
import { mapState, mapActions } from 'vuex'
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
  computed:{
    ...mapState({
      username: ({login}) => login.username,
      status: ({login}) => login.status,
      message: ({showmsg}) => showmsg.message
    })
  },
  watch: {
    'message': 'alterMsg'
  },
  methods: {
    ...mapActions([
      'logOut'
    ]),
    alterMsg(){
      let {type,message} = this.message
       this.$message({
         type,
         message
       });
    },
    logOutConfirm(){
      this.$confirm('确认注销?', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'info'
       }).then(() => {
         this.logOut();
       })
    },
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
html,body,#index-row{
  height: 100%;
}
#indexContainer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:calc(100% - 60px);
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
    height: 100%;
  }
  .el-menu{
    height: 100%;
  }

}
</style>
