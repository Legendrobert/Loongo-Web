
<template>
  <div class="LoggedIn">
    <LAlert 
        v-if="showAlert"
        class="userPic" 
        :text="alertText" 
        :isShowView="false" 
        :name="shortName"
        @closeAlertFn="closeAlertFn"
    ></LAlert>
    <div class="headerImg">D</div>
    <div class="notes">
        <span>Dongli’s</span>
        <span> Itinerary</span>
    </div>
    <div class="cards">
        <el-carousel height="280px" style="width: 100%" :class="{ 'hide-indicators': !showIndicators }">
            <el-carousel-item v-for="(item,index) in cardList" :key="index" class="cardList">
                <div v-for="(v,i) in item.list" :key="i">
                    <div class="cards-city">
                        <img :src="v.imgName" width="168" height="168">
                        <div class="cityInfo">
                            <span class="cityName">{{v.cityName}}</span>
                            <div class="cityNum">{{v.Sum}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="index === 0 && cardList[0].list.length !== 6 " class="cards-add">
                    <div class="pics">
                        <img 
                            v-for="(item,index) in cardPicList" 
                            :key="index" 
                            :src="item.imgName" 
                            width="86" 
                            height="86"
                        >          
                    </div>
                    <div class="add">
                        <div
                            
                            class="addBtn"
                            @click="handleAdd"
                        >
                            <svgPlus :width="10" :height="10"></svgPlus>
                        </div>
                        <div 
                            class="tipsBtn"
                        >Add more cities</div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
            
        
        <!-- <div class="cards-add">
            <div class="pics">
                <img 
                    v-for="(item,index) in cardPicList" 
                    :key="index" 
                    :src="item.imgName" 
                    width="86" 
                    height="86"
                >          
            </div>
            <div class="add">
                <div
                    
                    class="addBtn"
                    @click="handleAdd"
                >
                    <svgPlus :width="10" :height="10"></svgPlus>
                </div>
                <div 
                    class="tipsBtn"
                >Add more cities</div>
            </div>
        </div> -->
        
    </div>
    <div class="otherLike">
        <div class="otherLike-text">You may also like</div>
        <div class="switch">
            <SvgMagic></SvgMagic>
            <span>switch</span>
        </div>
        <ul class="cityPicList">
            <li 
                class="picItem"
                v-for="(item,index) in picList"
                :key="index"
            >
                <img :src="item.imgName">
                <div class="cityName">
                    <svgLocation class="svgStyle" :width="16" :height="16" :fill="'#ccc'"></svgLocation>
                    <span>SICHUAN</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import {
  Plus
} from '@element-plus/icons-vue'
import SvgMagic from "@/components/svg-icons/svg-magic.vue"
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgPlus from '@/components/svg-icons/svg-plus.vue'
import LAlert from '@/components/common/L-Alert.vue'
const showIndicators = ref(false);
const cardList = reactive([
    {
        list: [
            {
                imgName: require('@/assets/imgs/beijing.png'),
                cityName: 'SHANGHAI',
                Sum: 5
            }
        ]
    }
])
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
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png')
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png')
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png')
        }
    ])
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
        }
    ])
const alertText = ref('Hello Dongli, welcome to your itinerary!')
const userName = ref('D')
const shortName = userName.value.charAt(0)
const showAlert = ref(false)

onMounted(() => {
     setTimeout(() => {
        showAlert.value = true;
        setTimeout(() => {
            showAlert.value = false;
        }, 3000);
    }, 3000);
    if(cardList.length === 1){
        showIndicators.value = false
    }else{
        showIndicators.value = true
    }
});

// 添加更多城市
const handleAdd = ()=>{
    // 计算当前总共添加了多少城市
    let totalItems = 0 
    
    cardList.forEach((item,index)=>{
        totalItems = totalItems + item.list.length
    })
    
    const newItem = {
        imgName: require('@/assets/imgs/beijing.png'),
        cityName: 'SHANGHAI',
        Sum: 5
    }

    if (totalItems < 5) {
        // 第 1 ~ 5 个城市全部添加到 cardList[0].list
        cardList[0].list.push(newItem);
    } else if (11 > totalItems || totalItems === 5) {
        
        // 第 6 个城市，添加到 cardList[1].list
        if(cardList[1] === undefined){
            cardList.push({
                list: [newItem]
            })
        }else{         
            cardList[1].list.push(newItem)
        }        
    } else if (17 > totalItems || totalItems === 11) {
        // 第 7 个城市，添加到 cardList[2].list
        // cardList[2].list.push(newItem);
         if(cardList[2] === undefined){
            cardList.push({
                list: [newItem]
            })
        }else{          
            cardList[2].list.push(newItem)
        }
    } else {
        console.log('2222')
        // 后续的城市依次添加：先检查 cardList[0]，再 cardList[1]，最后 cardList[2]（每个上限 6 个）
        if (cardList[0].list.length < 6) {
            cardList[0].list.push(newItem);
        } 
    }

    if(cardList.length === 1){
        showIndicators.value = false
    }else{
        showIndicators.value = true
    }
}
// 关闭弹窗
const closeAlertFn = (val) => {
    showAlert.value = val
}
</script>

<style lang="less" scoped>
.LoggedIn{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #FFEEE6, #FFF 60%);
    
    .userPic{
        position: absolute;
        top: 120px;

    }
    .headerImg{
        width: 40px;
        height: 40px;
        background: #FF401A;
        color: #FFFFFF;
        font-family: Semibold;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 16px;
        border-radius: 50%;
    }
    .notes{
        height: 42px;
        font-size: 28px;
        font-family: Bold;
        margin-bottom: 40px;
        
        span:nth-child(1){
            color: #121212
        }
        span:nth-child(2){
            color: #FF401A;
        }
    }
    .cards{
        display: flex;
        width: 100%;
        .cardList{
            display: flex;
            justify-content: center;
        
        
            .cards-city{
                width: 200px;
                height: 240px;
                border-radius: 16px;
                box-sizing: border-box;
                padding: 16px;
                background: #FFFFFF;
                box-shadow: 0px 8px 16px rgba(131, 131, 131, 0.1);
                margin-right: 18px;
                
                img{
                    border-radius: 8px;
                    margin-bottom: 16px;
                }
                .cityInfo{
                    display: flex;
                    justify-content: space-between;

                    .cityName{
                        font-size: 16px;
                        font-family: Bold;
                        color:  #121212;
                        height: 24px;
                        line-height: 24px;
                    }
                    .cityNum{
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        background: #F3F3F3;
                        border-radius: 50%;
                        font-size: 14px;
                        color: #121212;
                        font-family: Seminold;
                        text-align: center;
                    }
                }
            }
        }
        .cards-add{
            width: 200px;
            height: 240px;
            background: #FFEEE6;
            border-radius: 8px;
            
            .pics{
                height: 50%;
                overflow: hidden;
                position: relative;

                img{
                    border: 2px solid #FFFFFF;
                    border-radius: 8px;
                    position: absolute;

                    &:nth-child(1){
                        left: 10%;
                        bottom: -22px;
                        rotate: -15deg;
                    }
                    &:nth-child(2){
                        left: 25%;
                        bottom: -8px;
                    }
                    &:nth-child(3){
                        right: 10%;
                        bottom: -9px;
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
                    width: 24px;
                    height: 24px;
                    background: #FF401A;
                    border-radius: 4px;
                    font-size: 10px;
                    color: #fff;
                    border: none;
                    text-align: center;
                    line-height: 24px;

                }
                .tipsBtn{
                    color:#FF401A;
                    font-family: Semibold;
                    font-size: 16px;
                    height: 22px;
                    line-height: 22px;
                    margin-top: 16px;
                }
            }
        }
    }
    .otherLike{
        margin-top: 40px;
        margin: 40px 28px 28px 28px;
        width: 96%;
        border-top: 2px solid #f3f3f3;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .otherLike-text{
            width: 214px;
            height: 36px;
            line-height: 36px;
            font-size: 24px;
            font-family: Bold;
            background-image: linear-gradient(to right, #FF401A 0%, #FFC61A 80%); /* 渐变背景 */
            background-clip: text; 
            color: transparent; 
            margin-bottom: 28px;
            margin-top: 40px;
        }
        .switch{
            display: flex;
            justify-content: space-between;
            padding: 0 12px;
            box-sizing: border-box;
            width: 100px;
            height: 38px;
            font-size: 16px;
            font-family: Semibold;
            line-height: 38px;
            border-radius: 8px;
            text-align: center;
            background-image: linear-gradient(to right, #FF401A 0%, #FFC61A 80%);
            color: #fff; 
            margin-bottom: 28px;
            

            ::v-deep svg{
                margin-top:13px;
            }

        }
        .cityPicList{
            display: flex;
            gap: 28px;

            .picItem{
                position: relative;

                img{
                    width:240px;
                    height: 240px;
                    border-radius: 16px;
                }
                .cityName{
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    display: flex;
                    font-size: 14px;
                    color: #CCCCCC;

                    .svgStyle{
                        margin-top: 2px;
                        margin-right: 8px;
                    }
                }
            }
        }
    }
    ::v-deep .el-carousel--horizontal, .el-carousel--vertical{
        border-radius: 16px;
    }
    ::v-deep .el-carousel__arrow{
        display: none
    }
    
    ::v-deep .el-carousel__button{
        width: 12px;
        height: 12px;
        // margin:20px 12px;
        border-radius: 50%;
        background: #FF401A;
    }
    ::v-deep .el-carousel__indicator--horizontal{
        margin: 0 8px !important;
    }
    ::v-deep .hide-indicators .el-carousel__indicators {
        display: none;
    }
}
</style>