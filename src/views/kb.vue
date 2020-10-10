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
            style="width:200px"
            placeholder="请输入内容"
          ></el-input>
          <el-button type="warning" style="float:right;">按钮</el-button>
        </div>
      </div>
    </div>
    <el-col :span="12">
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
    </el-col>
    <el-col :span="12" style="padding-left:10px">
      <div class="box" style="height:80vh">
      <div style="height:7vh;border-bottom:2px solid #376b7b;line-height:7vh;padding:0 2vh;color:#fff">
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
            <!-- <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="warning" size="small" @click="detail(scope.row)">详情</el-button>
                </template>
            </el-table-column> -->
          </el-table>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      tableData: [{}],
      input: ""
    };
  },
  mounted: function() {},
  methods: {}
};
</script>

<style></style>
