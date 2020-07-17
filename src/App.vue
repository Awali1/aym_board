<template>
    <div id="app">
        <el-container>
            <el-header>
                <div class="left">
                    <img src="@/assets/images/logo.png">
                    <el-select v-model="nowr" @change="jump(nowr)">
                        <el-option v-for="item in routeList" :key="item.page" :label="item.name" :value="item.page">
                        </el-option>
                    </el-select>
                </div>
                <div class="right">
                    <i class="el-icon-time"></i>
                    <span>{{nowTime}}</span>
                </div>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return{
                routeList:[
                    {
                        name: '成品入库看板',
                        page:'Product'
                    },
                    {
                        name: '包材拉动',
                        page:'Packing'
                    },
                    {
                        name: '母托盘搬运',
                        page:'MotherTray'
                    },
                    {
                        name: '地面链/立库',
                        page:'floor'
                    },
                    {
                        name: '详情',
                        page:'detail'
                    }
                ],
                nowr:'',
                nowTime:'',
            }
        },
        mounted: function () {
            this.nowr = this.$route.name
            var self = this
            setInterval(function () {
                self.nowTime = self.nowDateTime()
            }, 3000)
        },
        methods:{
        }
    }
</script>

<style>
</style>