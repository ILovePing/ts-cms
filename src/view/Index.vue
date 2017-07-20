<template>
  <div id="indexContainer">
    <el-row>
      <el-col :span="18">
        <h1 class="web-title">俱乐部管理平台</h1>
      </el-col>
      <el-col :span="6">
      <h1 class="web-title" v-if="token"><el-tag>{{username}}</el-tag>，欢迎你 <span @click.prevent="logOutConfirm">登出</span></h1>
      <h1 class="web-title" v-else><router-link tag="span" to="/login">登录</router-link></h1>
      </el-col>
    </el-row>

  <el-row id="index-row">
    <el-col :span="3" class="nav">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
        <el-submenu index="1">
          <template slot="title">成员作品</template>
          <el-menu-item-group title="" >
            <el-menu-item v-for="user in userlist" :index="user.userName">{{user.username}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2"><router-link to="/userConf" tag="div">人员管理</router-link></el-menu-item>
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

    }
  },
  created(){
    this.getUserList()
  },
  computed:{
    ...mapState({
      username: ({login}) => login.username,
      token: ({login}) => login.token,
      userlist: ({user}) => user.userlist
    })
  },
  watch: {

  },
  methods: {
    ...mapActions([
      'logOut',
      'getUserList'
    ]),
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
        //根据当前多少个用户动态挂载路由
        console.log(key, keyPath);

        console.log('open')
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        console.log('close')
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
