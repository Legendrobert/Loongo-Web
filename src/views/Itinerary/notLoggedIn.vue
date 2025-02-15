
<template>
  <div class="loggedIn">
    <div class="loggedIn-left">       
        <img :src="NoUserFound" width="240" height="240"> 
        <div class="content">
            <p class="text">No travel plan so far</p>
            <p class="tips">Oops, you haven’t added any city you like...</p>
        </div>
    </div>
    <div class="loggedIn-right">
        <div class="pics">
            <img 
                v-for="(item,index) in picList" 
                :key="index" 
                :src="item.imgName" 
                width="40%" 
                height="243"
            >          
        </div>
        <div class="add">
            <el-button 
                type="primary" 
                :icon="Add" 
                class="addBtn"
            />
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

<style lang="less" scoped>
.loggedIn{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 52px;
    box-sizing: border-box;
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
            background: yellow;

            .addBtn{
                width: 80px;
                height: 80px;
                background: #FF401A;
                border-radius: 18px;
            }
        }
    }
}
</style>