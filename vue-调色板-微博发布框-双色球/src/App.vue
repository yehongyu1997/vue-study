<template>
    <div>
        <div>
            <h1>{{a}}</h1>
            <button @click="add(1)">按我加1</button>
            <button @click="add(3)">按我加3</button>
            <button @click="add(5)">按我加5</button>
            <button @click="a+=10">按我加10</button>
            <button @click="a=0">重置数字</button>
        </div>
        <div class="pic">
            <button @click="gopre" :disabled="c==1">
                                                 查看上一张
                                             </button>
            <img :src="`/images/ym${c}.jpg`" alt="">
            <button @click="gonext" :disabled="c==4">
                                                 查看下一张
                                             </button>
        </div>
        <div class="v-for">
            <h1>
                v-for指令：
            </h1>
            <input type="text" ref="kuang">
            <button @click="tianjia">添加</button>
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    {{index}}--{{item}}
                    <button @click="del(index)">删除</button>
                </li>
            </ul>
        </div>
        <div class="v-model">
            <h1>双向绑定：</h1>
            <input type="text" v-model="a">
            <h1>
                {{a}}
            </h1>
            <button @click="add(3)">按我加3</button>
        </div>
        <div class="tiaoseban">
            <h1>调色板：</h1>
            <div class="box" :style="{'background-color':`rgb(${r},${g},${b}`}"></div>
            <p> <input type="range" v-model="r" min="0" max="255"> <span>{{r}}</span></p>
            <p> <input type="range" v-model="g" min="0" max="255"> <span>{{g}}</span></p>
            <p> <input type="range" v-model="b" min="0" max="255"> <span>{{b}}</span></p>
        </div>
        <div class="weibo">
            <h1>微博发布框：</h1>
            <textarea cols="30" rows="10" v-model="content"></textarea>
            <span :class="{'danger':content.length>140}">字数：{{content.length}}/140</span>
            <button :disabled="content.length>140">发布</button>
            <button @click="content=''">清空</button>
        </div>
        <div class="shuangseqiu">
            <h1>双色球</h1>
            <p v-for="i in 33" :key="i" :class="{'cur':arr.includes(i)}" @click="clickhan(i)">{{i}}</p>
            <button @click="random">随机6个球</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                a: 0,
                c: 1,
                arr: [
                    3, 5, 7, 11
                ],
                r: 100,
                g: 100,
                b: 200,
                content: ''
            }
        },
        methods: {
            add(n) {
                this.a += n
            },
            gonext() {
                this.c += 1
            },
            gopre() {
                this.c -= 1
            },
            tianjia() {
                var value = this.$refs.kuang.value;
                this.arr.push(value)
            },
            del(m) {
                this.arr.splice(m, 1)
            },
            clickhan(i) {
                if (this.arr.includes(i)) {
                    this.arr.filter(item => item != i)
                } else {
                    if (this.arr.length < 6) {
                        this.arr.push(i)
                    }else(
                        alert('最多选择6个球')
                    )
                }
                // if (this.arr.includes(i)) {
                //     this.arr.filter(item => item != i);
                // } else {
                //     if (this.arr.length < 6) {
                //         this.arr.push(i);
                //     } else(
                //         alert('最多选6个球')
                //     )
                // }
            },
            random() {
                var arr  = [];
                while(arr.length!=6){
                    var n = parseInt(Math.random()*33)+1;
                    if(!arr.includes(n)){
                        arr.push(n)
                    }
                    this.arr=arr
                }
                // var arr = [];
                // while (arr.length != 6) {
                //     var n = parseInt(Math.random() * 33) + 1;
                //     if (!arr.includes(n)) {
                //         arr.push(n);
                //     }
                //     this.arr = arr
                // }
            }
        }
    }
</script>

<style lang="less" scoped>
    img {
        width: 200px;
        height: 200px;
    }
    .pic {
        margin-top: 10px;
    }
    .v-for {
        margin-top: 10px;
        background-color: pink;
        border-radius: 8px;
    }
    .v-model {
        margin-top: 10px;
        background-color: orange;
        padding: 20px;
        border-radius: 8px;
    }
    .tiaoseban .box {
        width: 300px;
        height: 300px;
    }
    .danger {
        color: red;
        font-weight: bold;
    }
    .weibo {
        background: skyblue;
        padding: 20px;
        border-radius: 8px;
    }
    .shuangseqiu {
        background: rgba(228, 216, 107, 0.61);
        height: 200px;
        margin-top: 10px;
        border-radius: 8px;
    }
    .shuangseqiu p {
        float: left;
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        border-radius: 50%;
        margin-right: 10px;
        text-align: center;
        line-height: 30px;
        &.cur {
            background: red;
            color: white;
        }
    }
</style>