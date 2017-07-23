<style scoped lang="scss">
.el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
<template>
  <div>
    <el-row >
      <el-col :span="22" :offset="1">
        <el-row style="margin:20px 0;">
          <el-col :span="4" >
            <el-input v-model.trim="queryContent" placeholder="记分规则查询" auto-complete="off"></el-input>
          </el-col>
          <el-col :span="3" :offset="1">
            <el-button id="newRule-btn" type="primary" @click="dialogFormVisible = true" icon="plus">添加记分规则</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table :data="scoreRuleQryedBy" highlight-current-row>
              <el-table-column prop="rulename" label="描述">
              </el-table-column>
              <el-table-column prop="ruletype" label="类型" sortable :formatter='typeFormatter'>
              </el-table-column>
              <el-table-column prop="rulevalue" label="分值" sortable>
              </el-table-column>
            </el-table>
          </el-col>
      </el-row>
    </el-col>
  </el-row>
  <!-- 新增规则 -->
  <el-dialog title="添加积分规则" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="记分原因" :label-width="formLabelWidth">
        <el-input placeholder="请输入记分原因" v-model="form.rulename" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="记分类型" :label-width="formLabelWidth">
        <el-radio class="radio" v-model="form.ruletype" label="0">减分</el-radio>
        <el-radio class="radio" v-model="form.ruletype" label="1">加分</el-radio>
      </el-form-item>
      <el-form-item label="分值" :label-width="formLabelWidth">
        <el-input-number v-model="form.rulevalue" @change="handleChange" :min="1" :max="10"></el-input-number>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="newRule">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import api from '../api'
import { mapState, mapActions } from 'vuex'
  export default {
    components:{

    },
    created:function(){
      this.getScoreRuleList()
    },
    data() {
      return {
        queryContent:'',
        formLabelWidth: '100px',
        dialogFormVisible: false,
        form: {
          rulename: '',
          ruletype: '0',
          rulevalue: 0,

        },
      }
    },
    computed:{
      ...mapState({
        scoreRuleList: ({scoreRule}) => scoreRule.scoreRuleList,
      }),
      scoreRuleQryedBy(){
        if(this.queryContent){
          return this.scoreRuleList.filter(rule => rule.rulevalue == this.queryContent)
        }else{
          return this.scoreRuleList
        }
      }
    },
    methods: {
      ...mapActions([
        'getScoreRuleList',
      ]),
      typeFormatter(row, column){
      return row.ruletype === '1'?'加分':'减分';
      },
      newRule(){
        api.scoreRuleInsert(this.form).then(data => {
          if(data.data.result.success){//插入成功，刷新表单
            this.dialogFormVisible = false;
            for(let i in this.form){this.form[i] = '';}
            this.getScoreRuleList();
          }else{
            console.log(data)
          }
        });
      },
    }
  }
</script>
