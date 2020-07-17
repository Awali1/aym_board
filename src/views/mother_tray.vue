<template>
    <div class="mother_tray">
        <el-row :gutter="10">
            <el-col :span="12" class="dqrw">
                <div class="box leftBox" @click="detail(task01)">
                    <div class="lineTitle">
                        <p><span>当前任务</span></p>
                    </div>
                    <div class="boxContent">
                        <div class="imgBox">
                            <img src="../assets/images/mt01.png">
                            <span>托盘种类</span>
                            <p>{{task01.tc_code}}</p>
                        </div>
                        <div class="TitleBox">
                            <div class="row">
                                <p><span class="label">任务号：</span><span>{{task01.task_code}}</span></p>
                                <p><span class="label">入库口：</span><span>{{task01.task_path_point}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">产线：</span><span>{{task01.task_path_point}}</span></p>
                                <p><span class="label">优先级：</span><span>{{task01.is_top}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">物料号：</span><span>{{task01.tc_code}}</span></p>
                                <p><span class="label">产生时间：</span><span>{{task01.create_time}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">箱号：</span><span>{{task01.box_barcode}}</span></p>
                            </div>
                            <div class="row progress">
                                <p><span class="label">状态：</span>
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="parseInt(task01.percent || 0)"
                                        status="exception"></el-progress>
                                </p>
                                <span>接收RCS发出的托盘举起信号</span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12" class="xyrw">
                <div class="box rightBox" @click="detail(task02)">
                    <div class="lineTitle">
                        <p><span>当前任务</span></p>
                    </div>
                    <div class="boxContent">
                        <div class="imgBox">
                            <img src="../assets/images/mt01.png">
                            <span>托盘种类</span>
                            <p>{{task02.tc_code}}</p>
                        </div>
                        <div class="TitleBox">
                            <div class="row">
                                <p><span class="label">任务号：</span><span>{{task02.task_code}}</span></p>
                                <p><span class="label">入库口：</span><span>{{task02.task_path_point}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">产线：</span><span>{{task02.task_path_point}}</span></p>
                                <p><span class="label">优先级：</span><span>{{task02.is_top}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">物料号：</span><span>{{task02.tc_code}}</span></p>
                                <p><span class="label">产生时间：</span><span>{{task02.create_time}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">箱号：</span><span>{{task02.box_barcode}}</span></p>
                            </div>
                            <div class="row progress">
                                <p><span class="label">状态：</span>
                                    <el-progress class="progressType0" :text-inside="true" :stroke-width="18"
                                        :percentage="parseInt(task02.percent || 0)"></el-progress>
                                </p>
                                <span>增派 AGV进入，将托盘放下，开反馈完成状态。</span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" class="cprk">
                <div class="box">
                    <div class="title">
                        成品入库列表
                    </div>
                    <div class="boxContent aymTable">
                        <el-table :data="tableData" :height="residueHeight([300]) + 'px'">
                            <el-table-column prop="task_code" align="center" label="任务号"></el-table-column>
                            <el-table-column prop="task_path_point" align="center" label="产线"></el-table-column>
                            <el-table-column prop="" align="center" label="物料号"></el-table-column>
                            <el-table-column prop="aaa" align="center" label="箱号"></el-table-column>
                            <el-table-column prop="task_path_point" align="center" label="入库口"></el-table-column>
                            <el-table-column prop="is_top" align="center" label="优先级">
                                <template slot-scope="scope">
                                    <p :class="scope.row.is_top? 'status03':'status02'">
                                        {{scope.row.is_top? '二级':'一级'}}
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="create_time" align="center" label="产生时间"></el-table-column>
                            <el-table-column align="center" label="状态">
                                <template slot-scope="scope">
                                    <p class="status04 borderBox">
                                        {{scope.row.task_status}}
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="操作">
                                <template slot-scope="scope">
                                    <el-button type="warning" size="small" @click="detail(scope.row)">详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>

        <!-- <el-dialog class="aymDialog" title="详情" :visible.sync="dialogShow" :close-on-click-modal="false" width="1000px">
            <div>
                <div class="lineTitle">
                    <p><span>当前任务</span></p>
                </div>
                <div style="overflow: hidden;">
                    <div class="leftT noscrollbar" >
                        <div class="TitleBox">
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rightT noscrollbar">
                        <div class="TitleBox">
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                            <div class="row">
                                <p>
                                    <span class="label">任务号：</span>
                                    <span>{{}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lineTitle">
                    <p><span>当前任务</span></p>
                </div>
                <el-table :data="tableData" height="35vh">
                    <el-table-column prop="task_code" align="center" label="任务号"></el-table-column>
                    <el-table-column prop="task_path_point" align="center" label="产线"></el-table-column>
                    <el-table-column prop="" align="center" label="物料号"></el-table-column>
                    <el-table-column prop="aaa" align="center" label="箱号"></el-table-column>
                    <el-table-column prop="task_path_point" align="center" label="入库口"></el-table-column>
                    <el-table-column prop="is_top" align="center" label="优先级">
                        <template slot-scope="scope">
                            <p :class="scope.row.is_top? 'status03':'status02'">
                                {{scope.row.is_top? '二级':'一级'}}
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="create_time" align="center" label="产生时间"></el-table-column>
                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            <p class="status04 borderBox">
                                {{scope.row.task_status}}
                            </p>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="warning" size="small" @click="dialogShow=false">警告按钮</el-button>
                <el-button type="warning" size="small" @click="dialogShow=false">警告按钮</el-button>
            </span>
        </el-dialog> -->

    </div>
</template>

<script>
    export default {
        name: 'mother_tray',
        data() {
            return {
                tableData: [{}],
                task01:{},
                task02:{},

                // dialogShow:false,
            }
        },
        mounted: function () {
            this.queryData()
        },
        methods: {
            queryData() {
                let self = this
                this.$http.request({
                    url: '/api/task',
                    method: 'GET',
                    params: {
                        pageNum: '',
                        pageSize: 'PALLETPULL',
                        // PRODPULL成品拉动,MATPULL包材拉动,PALLETPULL母托盘拉动,PRODHOUSE成品入立库,LINEPOINT点到点拉动
                        taskType: '',
                        // START任务开始,EXECUTE任务进行中,CANCEL任务取消,COMPLETE任务正常完成,WARNCOMP任务异常完成
                        taskStatus: '',
                        beginTime: '',
                        endTime: ''
                    }
                }).then(function (resp) {
                    self.tableData = resp.data.list
                    self.task01 = self.tableData[0]
                    self.task02 = self.tableData[1]
                })
            },
            detail(value){
                this.$router.push({
                    name: 'detail',
                    params: {
                        detailData: value
                    }
                })
                // this.dialogShow = true
            }
        }
    }
</script>

<style>
</style>