<template>
  <div class="mother_tray">
    <div
      class="box"
      style="height:8vh;margin-top:1vh;margin-bottom:2vh;padding:2vh 2vh 0 2vh"
    >
      <div>
        <div style="color:white">
          <span style="margin-right:50px"
            >原件：<el-input
              v-model="input"
              style="width:200px"
              placeholder="请输入内容"
            ></el-input
          ></span>
          **：<el-input
            v-model="input"
            style="width:200px;"
            placeholder="请输入内容"
          ></el-input>
          <el-button type="primary" style="float:right;" @click="search"
            >搜索</el-button
          >
          <el-button
            type="warning"
            style="float:right;margin-right:10px"
            @click="addRowShow = true"
            >添加</el-button
          >
        </div>
      </div>
    </div>
    <!-- <el-col :span="12">
      <div class="box" style="height:80vh">
        <div class="title">
          成品入库列表
        </div>
        <div class="boxContent aymTable">
          <el-table :data="tableData" height="75vh">
            <el-table-column
              prop="task_code"
              align="center"
              label="任务号"
            ></el-table-column>
            <el-table-column
              prop="task_path_point"
              align="center"
              label="产线"
            ></el-table-column>
            <el-table-column
              prop=""
              align="center"
              label="物料号"
            ></el-table-column>
            <el-table-column
              prop="aaa"
              align="center"
              label="箱号"
            ></el-table-column>
            <el-table-column
              prop="task_path_point"
              align="center"
              label="入库口"
            ></el-table-column>
            <el-table-column prop="is_top" align="center" label="优先级">
              <template slot-scope="scope">
                <p :class="scope.row.is_top ? 'status03' : 'status02'">
                  {{ scope.row.is_top ? "二级" : "一级" }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              prop="create_time"
              align="center"
              label="产生时间"
            ></el-table-column>
            <el-table-column align="center" label="状态">
              <template slot-scope="scope">
                <p class="status04 borderBox">
                  {{ scope.row.task_status }}
                </p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col> -->
    <el-col>
      <div class="box" style="height:80vh">
        <div
          style="height:7vh;border-bottom:2px solid #376b7b;line-height:7vh;padding:0 2vh;color:#fff"
        >
          <span style="margin-right:50px">合计：2552323</span>
          <span style="margin-right:50px">产线：1号线</span>
          <span style="margin-right:50px">不合格：23</span>
        </div>
        <div class="title">
          成品入库列表
        </div>
        <div class="boxContent aymTable">
          <el-table :data="tableData" height="68vh">
            <el-table-column
              prop="value"
              align="center"
              label="任务号"
            ></el-table-column>
            <el-table-column
              prop="value"
              align="center"
              label="产线"
            ></el-table-column>
            <el-table-column
              prop="value"
              align="center"
              label="物料号"
            ></el-table-column>
            <el-table-column
              prop="value"
              align="center"
              label="箱号"
            ></el-table-column>
            <el-table-column
              prop="value"
              align="center"
              label="入库口"
            ></el-table-column>
            <el-table-column prop="is_top" align="center" label="优先级">
              <template slot-scope="scope">
                <p :class="scope.row.is_top ? 'status03' : 'status02'">
                  {{ scope.row.is_top ? "二级" : "一级" }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              prop="value"
              align="center"
              label="产生时间"
            ></el-table-column>
            <el-table-column align="center" label="状态">
              <template slot-scope="scope">
                <p class="status04 borderBox">
                  {{ scope.row.task_status }}
                </p>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="del(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
    <el-dialog
      class="aymDialog"
      title="添加"
      :visible.sync="addRowShow"
      :close-on-click-modal="false"
      width="1100px"
    >
      <div>
        <div class="lineTitle">
          <p><span>添加行</span></p>
        </div>
        <div style="overflow: hidden;">
          <el-form :inline="true" label-width="110px">
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="test">
              <el-input
                v-model="addRowObj.value"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" size="small" @click="addRowShow = false"
          >取消</el-button
        >
        <el-button type="warning" size="small" @click="addRowConfirm()"
          >添加</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      addRowShow: false,
      addRowObj: {},

      tableData: [],
      input: ""
    };
  },
  mounted: function() {
    this.search();
  },
  methods: {
    // 搜索
    search() {
      this.$http
        .request({
          url: "/api/stampTask/select",
          method: "GET",
          params: {}
        })
        .then(resp => {
          if (resp.status == 100) {
            this.tableData = resp.data;
          } else {
            self.$message({
              type: "warning",
              message: resp.message
            });
          }
        });
    },
    // 添加
    addRowConfirm() {
      this.tableData.push(this.addRowObj);
      this.$http
        .request({
          url: "/api/stampTask/add",
          method: "PUT",
          showLoading: true,
          data: this.addRowObj
        })
        .then(resp => {
          if (resp.status == 100) {
            this.tableData = resp.data;
            this.addRowShow = false;
            this.addRowObj = {};
          } else {
            self.$message({
              type: "warning",
              message: resp.message
            });
          }
        });
    },
    //删除
    del(row) {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .request({
              url: "/api/stampTask/delete",
              method: "POST",
              showLoading: true,
              params: {}
            })
            .then(resp => {
              if (resp.status == 100) {
              } else {
                self.$message({
                  type: "warning",
                  message: resp.message
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style></style>
