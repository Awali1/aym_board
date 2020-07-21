<template>
    <div class="mother_tray">
        <el-row :gutter="10">
            <el-col :span="8">
                <el-col style="margin-top: 10px;" class="dqrw">
                    <div class="box" style="height: 44vh;margin-bottom: 1vh;">
                        <div class="lineTitle">
                            <p><span>当前任务</span></p>
                        </div>
                        <div class="boxContent" style="position: relative;height: 100%;">
                            <div class="imgBox2">
                                <img src="../assets/images/mt01.png">
                                <p>
                                    <span v-if="task01.task_type == 'PRODPULL'">成品拉动</span>
                                    <span v-if="task01.task_type == 'MATPULL'">包材拉动</span>
                                    <span v-if="task01.task_type == 'PALLETPULL'">母托盘拉动</span>
                                    <span v-if="task01.task_type == 'PRODHOUSE'">成品入立库</span>
                                    <span v-if="task01.task_type == 'POINTPULL'">点到点拉动</span>
                                </p>
                            </div>
                            <div class="TitleBox TitleBox2">
                                <div class="rowBlock">
                                    <p><span class="label">任务号：</span><span>{{task01.task_code}}</span></p>
                                    <p><span class="label">入库口：</span><span>{{task01.ge_name}}</span></p>
                                </div>
                                <div class="rowBlock">
                                    <p><span class="label">产线：</span><span>{{task01.line_name}}</span></p>
                                    <p><span class="label">优先级：</span>
                                       <span :class="task01.is_top? 'status02':'status03'">{{task01.is_top?'二级':'一级'}}</span>
                                    </p>
                                </div>
                                <div class="rowBlock">
                                    <p><span class="label">物料号：</span><span>{{task01.prod_code}}</span></p>
                                    <p><span class="label">产生时间：</span><span>{{task01.create_time}}</span></p>
                                </div>
                                <div class="rowBlock">
                                    <p><span class="label">箱号：</span><span>{{task01.box_barcode}}</span></p>
                                    <p><span class="label">库存地：</span><span>{{task01.erp_warehouse}}</span></p>
                                </div>
                            </div>
                            <div class="row2 progress2">
                                <p><span class="label">状态：</span>
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="parseInt(task01.percent || 0)"
                                        status="exception"></el-progress>
                                </p>
                                <!-- <span>{{task01.flow_name}}</span> -->
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col class="xyrw" v-show="false">
                    <div class="box" style="height: 45vh;">
                        <div class="lineTitle">
                            <p><span>当前任务</span></p>
                        </div>
                        <div class="boxContent" style="position: relative;height: 100%;">
                            <div class="imgBox2">
                                <img src="../assets/images/mt01.png">
                                <span>托盘种类</span>
                                <p>{{task01.tc_code}}</p>
                            </div>
                            <div class="TitleBox TitleBox2">
                                <div class="rowBlock">
                                    <p><span class="label">任务号：</span><span>{{task01.task_code}}</span></p>
                                    <p><span class="label">入库口：</span><span>{{task01.task_path_point}}</span></p>
                                </div>
                                <div class="rowBlock">
                                    <p><span class="label">产线：</span><span>{{task01.task_path_point}}</span></p>
                                    <p><span class="label">优先级：</span><span>{{task01.is_top}}</span></p>
                                </div>
                                <div class="rowBlock">
                                    <p><span class="label">物料号：</span><span>{{task01.tc_code}}</span></p>
                                    <p><span class="label">产生时间：</span><span>{{task01.create_time}}</span></p>
                                </div>
                                <div class="rowBlock">
                                    <p><span class="label">箱号：</span><span>{{task01.box_barcode}}</span></p>
                                </div>
                            </div>
                            <div class="row2 progress2">
                                <p><span class="label">状态：</span>
                                    <el-progress :text-inside="true" :stroke-width="18"
                                        :percentage="parseInt(task01.percent || 0)" status="exception">
                                    </el-progress>
                                </p>
                                <!-- <span>接收RCS发出的托盘举起信号</span> -->
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="16" class="cprk">
                <div class="box">
                    <div class="title">
                        <span style="float: left;">任务流程列表</span>
                        <el-row style="float: right; margin-right: 2% ">
                            <el-button type="danger" v-if="nowTaskInfo.task_status != 'CANCEL'" @click="taskCancel">任务取消</el-button>
                            <el-button type="danger" v-if="nowTaskInfo.task_status == 'CANCEL'" @click="replayTask">重新发送任务</el-button>
                            <el-button type="danger" @click="taskWarnComplete">任务异常完成</el-button>
                        </el-row>
                    </div>
                    <div class="boxContent aymTable" style="clear: both">
                        <el-table :data="tableData" :height="residueHeight([80]) + 'px'">
                            <el-table-column prop="tm_code" align="center" label="流程编号"></el-table-column>
                            <el-table-column prop="tc_desc" align="center" label="流程描述">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.tc_id == nowTaskInfo.now_tc_id">
                                        <span v-if="nowTaskInfo.is_warning" style="color: red">{{scope.row.tc_desc}}</span>
                                        <span v-else class="status03">{{scope.row.tc_desc}}</span>
                                    </span>
                                    <span v-else>{{scope.row.tc_desc}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="task_code" align="center" label="任务号"></el-table-column>
                            <el-table-column prop="create_time" align="center" label="创建时间"></el-table-column>
                            <el-table-column prop="update_time" align="center" label="完成时间">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.tc_id == nowTaskInfo.now_tc_id">当前正在执行</span>
                                    <span v-else>{{scope.row.update_time}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="tw_content" align="center" label="异常信息"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data() {
            return {
                tableData: [],
                task01: {},
                task02: {},

                detailData: {},

                nowTaskInfo: '',
            }
        },
        mounted: function () {
            console.log(this.$route.params.detailData)
            this.task01 = this.$route.params.detailData;
            this.nowTaskInfo = this.task01;

            this.getTableData();
        },
        methods: {
            getTableData() {
                let self = this
                this.$http.request({
                    url: '/api/task/flow',
                    method: 'GET',
                    params: {
                        taskCode: this.nowTaskInfo.task_code
                    }
                }).then(function (resp) {
                    console.log(resp);
                    self.tableData = resp.data;
                })
            },
            taskCancel() {
                let self = this
                this.$confirm('是否取消该任务?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.request({
                        url: '/api/task/cancel',
                        method: 'POST',
                        params: {
                            taskCode: this.nowTaskInfo.task_code
                        }
                    }).then(function (resp) {
                        if(resp.status == 100){
                            self.$message({
                                type: 'success',
                                message: '任务取消成功!'
                            });
                        }else{
                            self.$message({
                                type: 'warning',
                                message: resp.message
                            });
                        }
                        self.getTableData();
                    })
                })
            },
            taskWarnComplete() {
                let self = this
                this.$confirm('是否将改任务异常完成?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.request({
                        url: '/api/task/warnComplete',
                        method: 'POST',
                        params: {
                            taskCode: this.nowTaskInfo.task_code
                        }
                    }).then(function (resp) {
                        if(resp.status == 100){
                            self.$message({
                                type: 'success',
                                message: '异常完成成功!'
                            });
                        }else{
                            self.$message({
                                type: 'warning',
                                message: resp.message
                            });
                        }
                        self.getTableData();
                    })
                })
            },
            replayTask() {
                let self = this
                this.$confirm('确定重新发送此任务吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.request({
                        url: '/api/task/replay',
                        method: 'POST',
                        params: {
                            taskCode: this.nowTaskInfo.task_code
                        }
                    }).then(function (resp) {
                        if(resp.status == 100){
                            self.$message({
                                type: 'success',
                                message: '任务重新发送成功!'
                            });
                        }else{
                            self.$message({
                                type: 'warning',
                                message: resp.message
                            });
                        }
                        self.getTableData();
                    })
                })
            }
        }
    }
</script>

<style>
</style>