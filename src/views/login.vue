<template>
  <div class="login">
    <div class="left">
        <img :src="relax" width="152" height="135">
        <p class="texts">Come and check your unique itinerary!</p>
        <p class="notes">Also explore more interesting contents with the magic of AI</p>
        <div class="signInGoogle">
            <svgGoogle class="svg"></svgGoogle>
            <span>Sign in with Google</span>
        </div>
        <div class="signInOthers">
            <div class="buttonStyle">
                <svgTwitter class="svg"></svgTwitter>
                <span>Sign in with X</span>
            </div>
            <div class="buttonStyle">
                <svgApple class="svg"></svgApple>
                <span>Sign in with Apple</span>
            </div>
        </div>

    </div>
    <div class="right">
        <div 
            class="cardItem"
            v-for="(item,index) in cardPicList" 
            :key="index"
        >
            <img                 
                :src="item.imgName"
                width="240"
                height="240"
            >
            <div class="province">
                <svgLocation class="svgStyle" :fill="'#ccc'" :width="16" :height="16"></svgLocation>
                <span>SICHUAN</span>
            </div>           
            <span class="city">chengdu</span> 
        </div>

        
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgGoogle from "@/components/svg-icons/svg-google.vue"
import svgTwitter from "@/components/svg-icons/svg-twitter.vue"
import svgApple from "@/components/svg-icons/svg-apple.vue"
const relax = ref( require('@/assets/imgs/relax.png') );
const cardPicList = ref(
    [
        {
            imgName: require('@/assets/imgs/beijing.png')
        },
        {
            imgName: require('@/assets/imgs/chengdu.png')
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png')
        },{
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
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
    box-sizing: border-box;
    .left{
        width: 560px;
        height: 652px;
        margin-right: 80px;


        img{
            margin-left: 4px;
            margin-top: 12px; 
        }
        .texts{
            font-size: 40px;
            line-height: 60px;
            color: #121212;
            margin-top: 24px;
        }
        .notes{
            font-size: 20px;
            line-height: 27px;
            font-family: Regular;
            color: #B1B0B0;
            margin-top: 24px;
            padding: 0;
        }
        .signInGoogle{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
            border-radius: 16px;
            background: #FF401A;
            color: #fff;
            font-family: Bold;
            font-size: 24px;
            line-height: 80px;
            text-align: center;
            margin-top: 75px;

            span{
                margin-left: 16px;
            }
            .svg{
                margin-top: 20px;
            }
        }
        .signInOthers{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 40px;

            .buttonStyle{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 64px;
                border: 2px solid #CCCCCC;
                border-radius: 16px;
                line-height: 62px;
                text-align: center;
                background: #FFFFFF;
                font-size: 20px;
                font-family: Regular;
                color: #595959;

                span{
                    margin-left: 16px;
                }
                .svg{
                    margin-top: 10px;
                }
            }
        }
    }
    .right{
        width: 640px;
        height: 652px;
        background: #FFEEE6;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 28px;
        overflow: hidden;

        .cardItem{
            position: relative;

            .province{
                position: absolute;
                left: 16px;
                top: 16px;
                display: flex;
                color: #ccc;
                font-size: 14px;

                .svgStyle{
                    margin-top: 2px;
                }
            }
            .city{
                position: absolute;
                left: 16px;
                bottom: 16px;
                font-family: Bold;
                font-size: 28px;
                color: #FFFFFF;
            }
        }
    }
}
</style>