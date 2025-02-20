
<template>
  <div class="notLoggedIn">
    <div class="loggedIn-left">       
        <img :src="NoUserFound" width="240" height="240"> 
        <div class="content">
            <p class="text">No travel plan so far</p>
            <p class="tips">Oops, you haven’t added any city you like...</p>
        </div>
    </div>
    <div 
        class="loggedIn-right"
        :style="isMouseOver ? 'background:#660300;box-shadow: 0px 20px 40px rgba(143, 143, 143, 0.25)':'background:#FFEEE6'"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
    >
        <div class="pics">
            <img 
                v-for="(item,index) in picList" 
                :key="index" 
                :src="item.imgName" 
                width="245" 
                height="245"
            >          
        </div>
        <div class="add">
            <el-button 
                type="primary" 
                :icon="Plus" 
                class="addBtn"
                :style="isMouseOver ? 'color:#660300; background:#fff':'color:#FFF; background:#FF401A'"
                @click="handleAdd"
            />
            <div 
                class="tipsBtn"
                :style="isMouseOver ? 'color: #fff' :'color: #FF401A' "
            >Add more cities</div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import {
  Plus
} from '@element-plus/icons-vue'


const NoUserFound = ref( require('@/assets/imgs/noUserFound.png') );


const picList = ref(
    [
        {
            imgName: require('@/assets/imgs/beijing.png')
        },
        {
            imgName: require('@/assets/imgs/chengdu.png')
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png')
        }
    ])
const isMouseOver = ref(false)
const emits = defineEmits(["isUserFn"])
const handleMouseOver = ()=>{
    isMouseOver.value = true
}
const handleMouseLeave = ()=>{
    isMouseOver.value = false
}
// 添加更多城市
const handleAdd = ()=>{
    let isLogin = false
    if(isLogin){
        // 非注册用户
        // emits('isUserFn', false)
    }else{
        // 注册用户
        emits('isUserFn', true)
    }
}
</script>

<style lang="less" scoped>
.notLoggedIn{
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    
    box-sizing: border-box;
    padding: 80px;
    height: calc(100vh - 144px);
    

    .loggedIn-left{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        height: 100%;
        margin-right: 40px;

        .content{
            margin-top: 80px;

            .text{
                height: 60px;
                line-height: 60px;
                color: #121212;
                font-family: Bold;
                font-size: 40px;
                margin: 0 0 24px 0;
            }
            .tips{
                height: 27px;
                line-height: 27px;
                font-family: Regular;
                font-size: 20px;
                color: #B1B0B0;
            }
        }
    }
    .loggedIn-right{
        width: 50%;
        height: 100%;
        background: #FFEEE6;
        border-radius: 24px;
        margin-left: 40px;

        .pics{
            height: 50%;
            overflow: hidden;
            position: relative;

            img{
                border: 2px solid #FFFFFF;
                border-radius: 16px;
                position: absolute;

                &:nth-child(1){
                    left: 10%;
                    bottom: -50px;
                    rotate: -15deg;
                }
                &:nth-child(2){
                    left: 25%;
                    bottom: -14px;
                }
                &:nth-child(3){
                    right: 10%;
                    bottom: -14px;
                    rotate: 15deg;
                }
            }
           
        }
        .add{
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .addBtn{
                width: 80px;
                height: 80px;
                background: #FF401A;
                border-radius: 18px;
                font-size: 24px;
                border: none;

            }
            .tipsBtn{
                color:#FF401A;
                font-family: Bold;
                font-size: 40px;
                height: 60px;
                line-height: 60px;
                margin-top: 50px;
            }
        }
    }
}
</style>