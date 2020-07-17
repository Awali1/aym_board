<template>
    <div class="product">
        <el-row :gutter="10">
            <el-col :span="12" class="dqrw">
                <div class="box leftBox">
                    <div class="lineTitle">
                        <p><span>当前任务</span></p>
                    </div>
                    <div class="boxContent">
                        <div class="imgBox">
                            <img v-if="task01.is_warning" src="../assets/images/mt01_1.png">
                            <img v-else src="../assets/images/mt01.png">
                            <span>物料号</span>
                            <p>{{task01.tc_code=='PRODPULLTASK'?'成品入地面链':'成品入立库'}}</p>
                        </div>
                        <div class="TitleBox">
                            <div class="row">
                                <p><span class="label">任务号：</span><span>{{task01.task_code}}</span></p>
                                <p><span class="label">入库口：</span><span>{{task01.ge_name}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">产线：</span><span>{{task01.line_name}}</span></p>
                                <p><span class="label">优先级：</span><span :class="task01.is_top? 'status02':'status03'">{{task01.is_top?'二级':'一级'}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">物料号：</span><span>{{task01.prod_code}}</span></p>
                                <p><span class="label">产生时间：</span><span>{{task01.create_time}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">箱号：</span><span>{{task01.box_barcode}}</span></p>
                                <p v-if="task01.is_warning" style="color:red;"><span class="label">异常信息：</span><span>{{task01.warn_message}}</span></p>
                            </div>
                            <div class="row progress">
                                <p><span class="label">状态：</span>
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="parseInt(task01.percent || 0)"
                                        status="exception"></el-progress>
                                </p>
                                <span>{{task01.flow_name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12" class="xyrw">
                <div class="box rightBox">
                    <div class="lineTitle">
                        <p><span>当前任务</span></p>
                    </div>
                    <div class="boxContent">
                        <div class="imgBox">
                            <img v-if="task02.is_warning" src="../assets/images/mt01_1.png">
                            <img v-else src="../assets/images/mt01.png">
                            <span>物料号</span>
                            <p>{{task02.tc_code}}</p>
                        </div>
                        <div class="TitleBox">
                           <div class="row">
                                <p><span class="label">任务号：</span><span>{{task02.task_code}}</span></p>
                                <p><span class="label">入库口：</span><span>{{task02.ge_name}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">产线：</span><span>{{task02.line_name}}</span></p>
                                <p><span class="label">优先级：</span><span :class="task02.is_top? 'status02':'status03'">{{task02.is_top?'二级':'一级'}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">物料号：</span><span>{{task02.prod_code}}</span></p>
                                <p><span class="label">产生时间：</span><span>{{task02.create_time}}</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">箱号：</span><span>{{task02.box_barcode}}</span></p>
                                <p v-if="task02.is_warning" style="color:red;"><span class="label">异常信息：</span><span>{{task02.warn_message}}</span></p>
                            </div>
                            <div class="row progress">
                                <p><span class="label">状态：</span>
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="parseInt(task02.percent || 0)"
                                        status="exception"></el-progress>
                                </p>
                                <span>{{task02.flow_name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" class="cprk">
                <div class="box">
                    <div>
                        <div class="title" style="float: left;">
                            成品入库列表
                        </div>
                        <div  style="float: left;">
                            <span class="selectTitle">单元</span>
                            <el-select v-model="queryParam.unitCode" @change="getLineList();queryData()">
                                <el-option v-for="(item, index) in unitList" :key="index" :label="item.unitName" :value="item.unitCode">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <span class="selectTitle">产线</span>
                            <el-select v-model="queryParam.lineCode" @change="queryData()">
                                <el-option v-for="(item, index) in lineList" :key="index" :label="item.lineName" :value="item.lineCode">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    
                    <div class="boxContent aymTable">
                        <el-table :data="tableData" :height="residueHeight([300]) + 'px'">
                            <el-table-column prop="task_code" align="center" label="任务号"></el-table-column>
                            <el-table-column prop="task_path_point" align="center" label="产线"></el-table-column>
                            <el-table-column prop="" align="center" label="物料号"></el-table-column>
                            <el-table-column prop="aaa" align="center" label="箱号"></el-table-column>
                            <el-table-column prop="task_path_point" align="center" label="入库口"></el-table-column>
                            <el-table-column prop="" align="center" label="是否异常">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.PAGE_ROW_NUMBER == 1" style="color: red">是</span>
                                    <span v-else>否</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="" align="center" label="异常信息">
                                <template slot-scope="scope">
                                    <span style="color:red">{{scope.row.PAGE_ROW_NUMBER == 1?'地面链不允许进入':''}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="优先级">
                                <template slot-scope="scope">
                                    <p :class="scope.row.is_top? 'status03':'status02'">
                                        {{scope.row.is_top? '一级':'二级'}}
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
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'product',
        data() {
            return {
                is_top:true,
                tableData: [],
                task01:{},
                task02:{},

                unitList: [],
                lineList: [],
                
                queryParam: {
                    unitCode: '',
                    lineCode: '',
                    pageNum: 1,
                    pageSize: 10,
                    taskType: 'PRODPULL',
                    taskStatus: '',

                }
            }
        },
        mounted: function () {
            this.queryData();
            this.getUnitList();
        },
        methods: {
            queryData() {
                let self = this
                this.$http.request({
                    url: '/api/task',
                    method: 'GET',
                    params: this.queryParam
                }).then(function (resp) {
                    console.log(resp);
                    self.tableData = resp.data.list
                    self.task01 = self.tableData[0]
                    self.task02 = self.tableData[1]
                })
            },
            getUnitList() {
                let self = this
                this.$http.request({
                    url: '/api/sysbase/unit',
                    method: 'GET',
                }).then(function (resp) {
                    console.log(resp);
                    self.unitList = resp.data;
                })
            },
            getLineList() {
                let self = this
                this.$http.request({
                    url: '/api/sysbase/line',
                    method: 'GET',
                    params: {
                        unitCode: this.queryParam.unitCode
                    }
                }).then(function (resp) {
                    console.log(resp);
                    self.lineList = resp.data;
                })
            }
        }
    }
</script>

<style>
</style>