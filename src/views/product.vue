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
                            <img src="../assets/images/logo.png">
                            <span>物料号</span>
                            <p>20123214234123</p>
                        </div>
                        <div class="TitleBox">
                            <div class="row">
                                <p><span class="label">任务号：</span><span>20202022020</span></p>
                                <p><span class="label">入库口：</span><span>20202022020</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">产线：</span><span>20202022020</span></p>
                                <p><span class="label">优先级：</span><span>三级</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">物料号：</span><span>20202022020</span></p>
                                <p><span class="label">产生时间：</span><span>20202022020</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">箱号：</span><span>20202022020</span></p>
                            </div>
                            <div class="row progress">
                                <p><span class="label">状态：</span>
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="50"
                                        status="exception"></el-progress>
                                </p>
                                <span>接收RCS发出的托盘举起信号</span>
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
                            <img src="../assets/images/logo.png">
                            <span>物料号</span>
                            <p>20123214234123</p>
                        </div>
                        <div class="TitleBox">
                            <div class="row">
                                <p><span class="label">任务号：</span><span>20202022020</span></p>
                                <p><span class="label">入库口：</span><span>20202022020</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">产线：</span><span>20202022020</span></p>
                                <p><span class="label">优先级：</span><span>三级</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">物料号：</span><span>20202022020</span></p>
                                <p><span class="label">产生时间：</span><span>20202022020</span></p>
                            </div>
                            <div class="row">
                                <p><span class="label">箱号：</span><span>20202022020</span></p>
                            </div>
                            <div class="row progress">
                                <p><span class="label">状态：</span>
                                    <el-progress class="progressType0" :text-inside="true" :stroke-width="18"
                                        :percentage="23"></el-progress>
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
                            <el-table-column prop="aaa" align="center" label="任务号"></el-table-column>
                            <el-table-column prop="aaa" align="center" label="产线"></el-table-column>
                            <el-table-column prop="aaa" align="center" label="物料号"></el-table-column>
                            <el-table-column prop="aaa" align="center" label="箱号"></el-table-column>
                            <el-table-column prop="aaa" align="center" label="入库口"></el-table-column>
                            <el-table-column align="center" label="优先级">
                                <template slot-scope="scope">
                                    <p class="status03">
                                        三级
                                    </p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="aaa" align="center" label="产生时间"></el-table-column>
                            <el-table-column align="center" label="状态">
                                <template slot-scope="scope">
                                    <p class="status04 borderBox">
                                        三级
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
                tableData: [
                    { aaa: '111' },
                    { aaa: '111' },
                    { aaa: '111' },
                    { aaa: '111' },
                    { aaa: '111' }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style>
</style>