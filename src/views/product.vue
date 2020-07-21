<template>
    <div class="product">
        <el-row :gutter="10">
            <el-col :span="12" class="dqrw">
                <div class="box leftBox" @click="detail(task01)">
                    <div class="lineTitle">
                        <p><span>当前任务</span></p>
                    </div>
                    <div class="boxContent">
                        <div class="imgBox">
                            <img v-if="task01.is_warning" src="../assets/images/mt01_1.png">
                            <img v-else src="../assets/images/mt01.png">
                            <span></span>
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
                <div class="box rightBox" @click="detail(task02)">
                    <div class="lineTitle">
                        <p><span>当前任务</span></p>
                    </div>
                    <div class="boxContent">
                        <div class="imgBox">
                            <img v-if="task02.is_warning" src="../assets/images/mt01_1.png">
                            <img v-else src="../assets/images/mt01.png">
                            <span></span>
                            <p>{{task01.tc_code=='PRODPULLTASK'?'成品入地面链':'成品入立库'}}</p>
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
                                    <el-progress :text-inside="true" :stroke-width="16" :percentage="parseInt(task02.percent || 0)"
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
                                <el-option label="全部" value=""></el-option>
                                <el-option v-for="(item, index) in unitList" :key="index" :label="item.unitName" :value="item.unitCode">
                                </el-option>
                            </el-select>
                        </div>
                        <div style="float: left;">
                            <span class="selectTitle">产线</span>
                            <el-select v-model="queryParam.lineCode" @change="queryData()">
                                <el-option label="全部" value=""></el-option>
                                <el-option v-for="(item, index) in lineList" :key="index" :label="item.lineName" :value="item.lineCode">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <span class="selectTitle">任务状态</span>
                            <el-select v-model="queryParam.taskStatus" @change="queryData()">
                                <!-- <el-option label="全部" value=""></el-option> -->
                                <el-option label="任务开始" value="START"></el-option>
                                <el-option label="任务进行中" value="EXECUTE"></el-option>
                                <el-option label="任务取消" value="CANCEL"></el-option>
                                <el-option label="任务正常完成" value="COMPLETE"></el-option>
                                <el-option label="任务异常完成" value="WARNCOMP"></el-option>
                                
                            </el-select>
                        </div>
                    </div>
                    
                    <div class="boxContent aymTable">
                        <el-table :data="tableData" :height="residueHeight([300]) + 'px'">
                            <el-table-column prop="task_code" align="center" label="任务号">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.is_warning" style="color: red">{{scope.row.task_code}}</span>
                                    <span v-else>{{scope.row.task_code}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="line_name" align="center" label="产线"></el-table-column>
                            <el-table-column prop="line_name" align="center" label="完成率">
                                <template slot-scope="scope">
                                    <span>{{scope.row.percent}}%</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="prod_code" align="center" label="物料号"></el-table-column>
                            <el-table-column prop="box_barcode" align="center" label="箱号"></el-table-column>
                            <el-table-column prop="erp_warehouse" align="center" label="库存地"></el-table-column>
                            <el-table-column prop="" align="center" label="是否异常">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.is_warning" style="color: red">是</span>
                                    <span v-else>否</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="" align="center" label="异常信息">
                                <template slot-scope="scope">
                                    <span style="color:red">{{scope.row.warn_message}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="优先级">
                                <template slot-scope="scope">
                                    <p :class="scope.row.is_top? 'status02':'status03'">
                                        {{scope.row.is_top? '二级':'一级'}}
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="create_time" align="center" label="产生时间"></el-table-column>
                            <el-table-column align="center" label="状态">
                                <template slot-scope="scope">
                                    <p class="status04">
                                        <div class="borderBox" v-if="scope.row.task_status == 'START'">任务开始</div>
                                        <div class="borderBox" v-if="scope.row.task_status == 'EXECUTE'">任务进行中</div>
                                        <div class="borderBox" v-if="scope.row.task_status == 'CANCEL'">任务取消</div>
                                        <div class="borderBox" v-if="scope.row.task_status == 'COMPLETE'">任务正常完成</div>
                                        <div class="borderBox" v-if="scope.row.task_status == 'WARNCOMP'">任务异常完成</div>
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="详情">
                                <template slot-scope="scope">
                                    <el-button type="primary" @click="detail(scope.row)">详情</el-button>
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
                    taskStatus: 'EXECUTE',

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

                self.task01 = {};
                self.task02 = {};
                this.$http.request({
                    url: '/api/task',
                    method: 'GET',
                    params: this.queryParam
                }).then(function (resp) {
                    console.log(resp);
                    self.tableData = resp.data.list
                    if(self.tableData.length == 1){
                        self.task01 = self.tableData[0]
                        self.tableData.splice(0, 1);  
                    }

                    if(self.tableData.length >= 2){
                        self.task01 = self.tableData[0]
                        self.task02 = self.tableData[1]
                        self.tableData.splice(0, 2);  
                    }

                     
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
            },
            detail(value){
                if(value.task_code == undefined){
                    return;
                }
                this.$router.push({
                    name: 'detail',
                    params: {
                        detailData: value
                    }
                })
            }
        }
    }
</script>

<style>
</style>