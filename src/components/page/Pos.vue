<template>
    <div class="pos">
        <div>
            <el-row>
                <el-col :span="7" class="pos-order" id="order-list">
                    <el-tabs>
                        <!-- 点餐 -->
                        <el-tab-pane label="点餐">
                            <!-- :data="tableData" 綁定數據 -->
                            <el-table :data="tableData" border show-summary style="width: 100%">
                                <!-- prop 對應tableData的數據名稱 -->
                                <el-table-column prop="goodsName" label="商品"></el-table-column>
                                <el-table-column prop="count" label="數量" width="70"></el-table-column>


                                <el-table-column prop="price" label="單價" width="70"></el-table-column>
                                <el-table-column label="操作" width="100" fixed="right">
                                    <template scope="scope"><!-- scope.row傳入當下數據 -->
                                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                        <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>

                            <!-- 統計數量/價格 -->
                            <div class="totalDiv">
                                <small>数量：</small>
                                <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;
                                <small>总计：</small>
                                <strong>{{totalMoney}}</strong> 元
                            </div>

                            <!-- 操作 -->
                            <div class="order-btn">
                                <el-button type="warning">挂单</el-button>
                                <el-button type="danger" @click="delAllGoods()">删除</el-button>
                                <el-button type="success" @click="checkout()"> 结账</el-button>
                            </div>
                        </el-tab-pane>
                        <!-- 挂单 -->
                        <el-tab-pane label="挂单">
                            挂单
                        </el-tab-pane>
                        <!-- 外卖 -->
                        <el-tab-pane label="外卖">
                            外卖
                        </el-tab-pane>
    
                    </el-tabs>
                </el-col>
    
                <!--商品展示-->
                <el-col :span="17">
                    <div class="often-goods">
                        <div class="title">常用商品</div>
                        <!-- 常用商品 -->
                        <div class="often-goods-list">
                            <ul>
                                <li v-for="(goods,index) in oftenGoods" :key="index" @click="addOrderList(goods)">
                                    <span>{{goods.goodsName}}</span>
                                    <span class="o-price">￥{{goods.price}}元</span>
                                </li>
    
                            </ul>
                        </div>
                    </div>
                    <!-- 餐點種類 -->
                    <div class="goods-type">
                        <el-tabs>
                            <el-tab-pane label="汉堡">
                                <ul class='cookList'>
                                    <!-- 傳入當下餐點數據 @click="addOrderList(goods) -->
                                    <li v-for="(goods,index) in type0Goods" :key="index" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{ goods.goodsName }}</span>
                                        <span class="foodPrice">￥{{ goods.price }}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="小食">
                                <ul class='cookList'>
                                    <li v-for="(goods,index) in type1Goods" :key="index" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <ul class='cookList'>
                                    <li v-for="(goods,index) in type2Goods" :key="index" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <ul class='cookList'>
                                    <li v-for="(goods,index) in type3Goods" :key="index" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
//引入axios
import axios from 'axios';

export default {
    name: 'Pos',
    data() {
        return {
            //订单列表的值
            tableData: [
                // {
                //     goodsName: '可口可乐',
                //     price: 8,
                //     count:1
                // },
                // {
                //     goodsName: '香辣鸡腿堡',
                //     price: 20,
                //     count:1
                // },
                // {
                //     goodsName: '薯条',
                //     price: 13,
                //     count:1
                // },
                // {
                //     goodsName: '甜筒',
                //     price: 8,
                //     count:1
                // },
            ], 
            //常用商品數據
            oftenGoods: [
                // {
                //     goodsId:1,
                //     goodsName:'香辣鸡腿堡',
                //     price:18
                // }, {
                //     goodsId:2,
                //     goodsName:'田园鸡腿堡',
                //     price:15
                // }, {
                //     goodsId:3,
                //     goodsName:'和风汉堡',
                //     price:15
                // }, {
                //     goodsId:4,
                //     goodsName:'快乐全家桶',
                //     price:80
                // }, {
                //     goodsId:5,
                //     goodsName:'脆皮炸鸡腿',
                //     price:10
                // }, {
                //     goodsId:6,
                //     goodsName:'魔法鸡块',
                //     price:20
                // }, {
                //     goodsId:7,
                //     goodsName:'可乐大杯',
                //     price:10
                // }
            ],
            //第一個類別商品
            type0Goods: [],
            type1Goods: [],
            type2Goods: [],
            type3Goods: [],

            totalMoney: 0, //订单总价格
            totalCount: 0  //订单商品总数量
        }
    },
    mounted: function () {
        //用js解決height問題
        var orderHeight = document.body.clientHeight;
        document.getElementById("order-list").style.height = orderHeight + 'px';
    },
    created() {
        //读取常用商品列表 oftenGoods
        axios.get('./static/oftenGoods.json')
            .then(res => {
                console.log(res);
                this.oftenGoods = res.data;
            })
            .catch(error => {
                console.log(error);
                alert('Error');
            })
        //读取分类商品列表 type0Goods
        axios.get('./static/typeGoods.json')
            .then(res => {
                // console.log(res);
                this.type0Goods = res.data[0]; //漢堡
                this.type1Goods = res.data[1]; //小食
                this.type2Goods = res.data[2]; //飲料
                this.type3Goods = res.data[3]; //套餐

            })
            .catch(error => {
                console.log(error);
                alert('Error');
            })
    },
    methods: {
        //添加订单列表的方法
        addOrderList(meal) {
            console.log('goods',meal);

            this.totalMoney = 0; //總價清空
            this.totalCount = 0;
            let isExist = false; //判斷訂單是否已有該商品

            //先判断是否这个商品已经存在于订单列表
            for(let i = 0; i < this.tableData.length; i++){
                console.log('goodsIdsss',this.tableData[i].goodsId)
                if(this.tableData[i].goodsId == meal.goodsId) isExist = true //商品存在
            }
            //根据isExist的值判断订单列表中是否已经有此商品
            if(isExist){
                //存在就进行数量添加
                let arr = this.tableData.filter(item => item.goodsId == meal.goodsId)
                console.log('arr',arr)
                //arr[0] 為當下篩選出來的數據
                arr[0].count++
            }else{
                //商品未存在就加入該商品
                this.tableData.push(
                    {
                        goodsId   : meal.goodsId,
                        goodsName : meal.goodsName,
                        price     : meal.price,
                        count     : 1
                    }
                )
            }
            //計算金額
            this.getAllMoney()

        },
        //删除单个商品
        delSingleGoods(goods) {
            console.log('ggggg',goods);
            if(goods.count != 1){ //商品多件不能一次刪除
                goods.count--
                this.getAllMoney();
            }else{
                //過濾掉 點選刪除的數據
                this.tableData = this.tableData.filter(item => item.goodsId != goods.goodsId);
                this.getAllMoney();
            }
        },
        //删除所有商品
        delAllGoods() {
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;
        },
        //汇总数量和金额
        getAllMoney() {
            this.totalCount = 0;
            this.totalMoney = 0;
            //
            if (this.tableData) {
                this.tableData.forEach((elm) => {
                    this.totalCount += elm.count
                    this.totalMoney = this.totalMoney + (elm.count * elm.price)
                })
            }
        },
        //结账方法模拟
        checkout() {
            if (this.totalCount!=0) { //防呆 商品數量不能為0
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
                this.$message({
                    message: '結帳成功!!非常謝謝您!!',
                    type: 'success'
                });
            }else{
                this.$message.error('您的訂購單沒有商品,無法結帳!!');
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bos{border:1px solid #0000ff;}
.pos {
    font-size: 12px;
}
.pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
}
.order-btn {
    margin-top: 10px;
    text-align: center;
}
.title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
}

.often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #d4d4d4;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    cursor: pointer;
}

.goods-type {
    clear: both;
}

.o-price {
    color: #58B7FF;
}

.often-goods-list {
    border-bottom: 1px solid #C0CCDA;
    height: auto;
    overflow: hidden;
    padding-bottom: 10px;
    background-color: #F9FAFC;
}

.cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
}

.cookList li span {

    display: block;
    float: left;
}

.foodImg {
    width: 40%;
}

.foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
}

.foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}

.totalDiv {
    height: auot;
    overflow: hidden;
    text-align: right;
    font-size: 16px;
    background-color: #fff;
    border-bottom: 1px solid #E5E9F2;
    padding: 10px;
}
</style>
