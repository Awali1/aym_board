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
                    <span>2020-02-02 02:02:20</span>
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
                        name: '成品入库看板详情',
                        page:'ProductDetails'
                    },
                    {
                        name: '包材拉动',
                        page:'Packing'
                    },
                    {
                        name: '母托盘搬运',
                        page:'MotherTray'
                    }
                ],
                nowr:''
            }
        },
        mounted: function () {
            this.nowr = this.$route.name
        },
        methods:{

        }
    }
</script>

<style>
</style>