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
                                <span>接收RCS发出的托盘举起信号</span>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col class="xyrw">
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
                                <span>接收RCS发出的托盘举起信号</span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="16" class="cprk">
                <div class="box">
                    <div class="title">
                        成品入库列表
                    </div>
                    <div class="boxContent aymTable">
                        <el-table :data="tableData" :height="residueHeight([80]) + 'px'">
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
                            <!-- <el-table-column align="center" label="操作">
                                <template slot-scope="scope">
                                    <el-button type="warning" size="small" @click="detail(scope.row)">详情</el-button>
                                </template>
                            </el-table-column> -->
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
                tableData: [{}],
                task01: {},
                task02: {},

                detailData: {}
            }
        },
        mounted: function () {
            console.log(this.$route.params.detailData)
        },
        methods: {
            
        }
    }
</script>

<style>
</style>