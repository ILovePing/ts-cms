<template>
<div>
  <el-row>
  <el-col :span="20" :offset="2">
    <el-row>
      <el-col :span="4" :offset="20">
        <el-button id="newMember-btn" type="primary" @click="dialogFormVisible = true" icon="plus">添加新成员</el-button>
      </el-col>
      <el-col :span="24">
    <el-table
      :data="userlist"
      highlight-current-row>
      <el-table-column
      type="index"
      width="50">
    </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="score"
        label="分数"
        >
      </el-table-column>
      <el-table-column
        prop="uid"
        label="工号"
        >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        :formatter='sexFormatter'
        >
      </el-table-column>
      <el-table-column
        prop="apartment"
        label="部门"
        >
      </el-table-column>
      <el-table-column
        prop="mb"
        label="手机号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="加入日期"
        :formatter='dateFormatter'
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template scope="scope">
          <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
  </el-row>
  </el-col>
</el-row>
<!-- 新增用户 -->
<el-dialog :title="actionType===1?'新成员信息':'修改成员信息'" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="工号" :label-width="formLabelWidth">
      <el-input class="new_user-input" placeholder="请输入内容" v-model="form.uid" auto-complete="off">
        <template slot="prepend">T</template>
      </el-input>
    </el-form-item>
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input class="new_user-input" v-model="form.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="性别" :label-width="formLabelWidth">
      <el-radio class="radio" v-model="form.sex" label="1">男</el-radio>
      <el-radio class="radio" v-model="form.sex" label="0">女</el-radio>
    </el-form-item>
    <el-form-item label="所属部门" :label-width="formLabelWidth">
      <el-select v-model="form.apartment" placeholder="请选择部门">
        <el-option label="B2B" value="b2b"></el-option>
        <el-option label="SNS" value="SNS"></el-option>
        <el-option label="B2C" value="B2C"></el-option>
        <el-option label="手机" value="MB"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="联系方式" :label-width="formLabelWidth">
      <el-input class="new_user-input" v-model="form.mb" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button v-show="actionType===1" type="primary" @click="newUser">确 定</el-button>
    <el-button v-show="actionType===2" type="primary" @click="updUser">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import api from '../api/api'
import { mapState, mapActions } from 'vuex'
  export default {
    components:{

    },
    created:function(){
      this.getUserList();
    },
    data() {
      return {
        formLabelWidth: '100px',
        dialogFormVisible: false,
        form: {
          username: '',
          sex: '',
          apartment: '',
          mb: '',
          uid: '',
        },
        actionType:1,//1默认代表create操作，2代表更新操作
      }
    },
    computed:{
      ...mapState({
        userlist: ({user}) => user.userlist
      })
    },
    methods: {
      ...mapActions([
        'getUserList'
      ]),
      sexFormatter(row, column){
      return row.sex === '1'?'男':'女';
      },
      dateFormatter(row, column){
        return new Date(row.createtime).toLocaleString();
      },
      newUser(){
        api.userInsert(this.form).then(data => {
          if(data.data.result.affectedRows === 1){//插入成功，刷新表单
            this.dialogFormVisible = false;
            for(let i in this.form){this.form[i] = '';}
            this.getUserList();
          }else{
            console.log(data)
          }
        });
      },
      updUser(){
        api.userUpdate(this.form).then(data=>{
          if(data.data.result.affectedRows === 1){//修改成功，刷新表单
            this.dialogFormVisible = false;
            this.actionType = 1;
            this.getUserList();
          }else{
            console.log(data)
          }
        });
      },
      handleEdit(index,row) {
        // let {username,sex,apartment,mb,uid} = row;
        this.form = row;
        this.actionType = 2;
        this.dialogFormVisible = true;
        },
      handleDelete(index,row) {
        api.userDelete(row.uid).then(data => {
          if(data.data.result.affectedRows === 1){
            console.log('删除成功')
            this.getUserList();
          }else{
            console.log(data.result.message)
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
#newMember-btn{
  margin:20px 0;
}
  .new_user-input{
    width: 200px;
  }

</style>
