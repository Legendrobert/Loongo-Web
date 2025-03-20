
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
    <div v-if="changeSizeImg" class="headerImg imgSize40" @click="headerClick">D</div>
    <div v-else class="header" @click="layoutClick">
        <div class="headerImg imgSize32">D</div>
        <svgLayout class="svgLayout"></svgLayout>
        <div class="Layout">Layout</div>
    </div>
    <div class="notes">
        <span>Dongli’s</span>
        <span> Itinerary</span>
    </div>
    <div class="cards" >
        <el-carousel height="280px" style="width: 100%" :class="{ 'hide-indicators': !showIndicators }">
            <el-carousel-item v-for="(item,index) in cardList" :key="index" class="cardList" :style="{justifyContent:index === 0 && cardList[0].list.length !== 6 ? 'center' : 'flex-start'}">              
                <div v-if="index === 0 && cardList[0].list.length !== 6 " class="cards-add">
                    <div class="pics">
                        <img 
                            v-for="(item,index) in addCardPicList" 
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
                <div v-for="(v,i) in item.list" :key="i">
                    <div class="cards-city">
                        <img :src="v.imgName" width="168" height="168">
                        <div class="cityInfo">
                            <span class="cityName">{{v.cityName}}</span>
                            <div class="cityNum">{{v.Sum}}</div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="otherLike">
        <div class="otherLike-text">You may also like</div>
        <div class="switch">
            <SvgMagic></SvgMagic>
            <span>switch</span>
        </div>
        <div class="cityPicList">
            <div class="cardItem" :style="carouselStyle" ref="carouselInner">
                <div 
                    v-for="(item, index) in picList" 
                    :key="'original-' + index" 
                    class="picItem"
                    @mouseenter="mouseEnterFn(index)"
                    @mouseleave="mouseLeaveFn(index)"
                >
                    <img :src="item.imgName"  />
                    <div v-if="cityPicIndex !== index" class="cityName">
                        <svgLocation class="svgStyle" :width="16" :height="16" :fill="'#ccc'"></svgLocation>
                        <span>SICHUAN</span>
                    </div> 
                    <span v-if="cityPicIndex !== index" class="city">chengdu</span> 
                    <div v-if="cityPicIndex === index" class="hoverShare">
                        <svgShare></svgShare>
                    </div>
                    <div v-if="cityPicIndex === index" class="hoverCityMsg">
                        <div class="hoverCityMsg-item">36km</div>
                        <div class="hoverCityMsg-item">Xi Lake</div>
                    </div>

                </div>
        
                <div 
                    v-for="(item, index) in picList" 
                    :key="'copy-' + index" 
                    class="picItem"
                    @mouseenter="mouseEnterFn(index)"
                    @mouseleave="mouseLeaveFn(index)"
                >
                    <img :src="item.imgName" />
                    <div v-if="cityPicIndex !== index" class="cityName">
                        <svgLocation class="svgStyle" :width="16" :height="16" :fill="'#ccc'"></svgLocation>
                        <span>SICHUAN</span>
                    </div>
                    <span v-if="cityPicIndex !== index" class="city">chengdu</span> 
                    <div v-if="cityPicIndex === index" class="hoverShare">
                        <svgShare></svgShare>
                    </div>
                    <div v-if="cityPicIndex === index" class="hoverCityMsg">
                        <div class="hoverCityMsg-item">36km</div>
                        <div class="hoverCityMsg-item">Xi Lake</div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
    <!-- layout弹窗 -->
    <el-dialog 
        v-model="dialogFormVisible" 
        class="dialog"
        width="560px"
        center
        align-center
        >
        <template #header>
            <img :src="logo" width="40" height="40">
        </template>
        <div>  
            <div class="questionText">Are you sure to log out right now?</div>
            <div class="tips">
                <span>Currently you’ve collected</span>
                <span class="importentTips"> 4 </span>
                <span>cities and </span>
                <span class="importentTips">12 </span>
                <span>items in total, they will be removed immediately if you log out ...</span>
            </div>
        </div>
        <template #footer >
            <span class="dialog-footer">
                <el-button  @click="dialogFormVisible = false">Log out</el-button>
                <el-button color="#FF401A"  @click="dialogFormVisible = false">
                Keep Login
                </el-button>
            </span>
        </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, onMounted, reactive, nextTick,computed } from 'vue';
import {
  Plus
} from '@element-plus/icons-vue'
import SvgMagic from "@/components/svg-icons/svg-magic.vue"
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgPlus from '@/components/svg-icons/svg-plus.vue'
import svgShare from '@/components/svg-icons/svg-share.vue'
import svgLayout from '@/components/svg-icons/svg-layout.vue'
import LAlert from '@/components/common/L-Alert.vue'
import { useRouter, useRoute } from 'vue-router'
const logo = ref( require('@/assets/imgs/logo.png') );
const router = useRouter()
const route = useRoute()
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
const addCardPicList = reactive([
    {
        imgName: require('@/assets/imgs/beijing.png'),alt:'00'
    },
    {
        imgName: require('@/assets/imgs/chengdu.png'),alt:'01'
    },
    {
        imgName: require('@/assets/imgs/guangzhou.png'),alt:'02'
    }
])
const cardPicList = reactive(
    [
        {
            imgName: require('@/assets/imgs/beijing.png'),alt:'00'
        },
        {
            imgName: require('@/assets/imgs/chengdu.png'),alt:'01'
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png'),alt:'02'
        },
        {
            imgName: require('@/assets/imgs/beijing.png'),alt:'03'
        },
        {
            imgName: require('@/assets/imgs/chengdu.png'),alt:'04'
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png'),alt:'05'
        }
    ])
const alertText = ref('Hello Dongli, welcome to your itinerary!')
const userName = ref('D')
const shortName = userName.value.charAt(0)
const showAlert = ref(false)
const showCityName = ref(true)
const dialogFormVisible = ref(false)
const cityPicIndex = ref(-1)
const changeSizeImg = ref(true)
const speed = ref(1.5); // 调整滚动速度（值越大滚动越快）
// const scrollWeight = ref(681);
const scrollWeight = ref(0);
const requestId = ref(null)
const isTransitioning = ref(false);
// 引用 DOM 元素
const carouselInner = ref(null);


// 计算属性来动态设置轮播容器的样式
const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${scrollWeight.value}px)`, // 修改为竖向滚动
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none',
  };
});
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
    // 执行自动轮播
    nextTick(() => {
        startAutoScroll();
    });
});
// 添加城市
const handleAdd = () => {
    router.push({name: 'Destination'})
}
// 添加城市的逻辑方法
const handleAddFn = ()=>{

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
// 启动平滑滚动
const startAutoScroll = () => {
  const step = () => {
    scrollWeight.value += speed.value;

    // 获取单个 item 的高度 + 间隔
    const itemHeight = carouselInner.value?.children[0]?.offsetHeight || 0;
    const itemMargin = 28;
    const totalHeight = (itemHeight + itemMargin) * cardPicList.length;

    // 滚动到底部时，立即回到顶部，形成无缝循环
    if (scrollWeight.value >= totalHeight) {
      scrollWeight.value = 0;
    }

    requestId.value = requestAnimationFrame(step);
  };
  requestId.value = requestAnimationFrame(step);
};
// 停止滚动（可选）
const stopAutoScroll = () => {
  if (requestId.value) {
    cancelAnimationFrame(requestId.value);
    requestId.value = null;
  }
};
const mouseEnterFn = (i)=>{
    stopAutoScroll()
    showCityName.value = false
    cityPicIndex.value = i
}
const mouseLeaveFn = (i)=>{
    startAutoScroll()
    showCityName.value = true
    cityPicIndex.value = -1
}
// 点击头像
const headerClick = ()=>{
    changeSizeImg.value = false
}
// 点击退出
const layoutClick = () => {
    dialogFormVisible.value = true
}
</script>

<style lang="less" scoped>
.LoggedIn{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #FFEEE6, #FFF 60%);
    overflow: scroll;
    
    .userPic{
        position: absolute;
        top: 120px;

    }
    .headerImg{
        background: #FF401A;
        color: #FFF;
        font-family: Semibold;
        font-size: 20px;
        text-align: center;
        border-radius: 50%;
        
    }
    .imgSize40{
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin-top: 35px;
            margin-bottom: 16px;
        }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 27px;
        margin-bottom: 16px;
        height: 48px;
        line-height: 48px;
        background: #FFFFFF;
        padding: 0 12px;
        border-radius: 100px;
        box-shadow: 0px 8px 16px 0px rgba(255, 64, 26, 0.05);
        gap: 12px;

        &:hover{
            color: #FF401A;

            ::v-deep svg path{
                stroke:#FF401A
            }
        }
        .imgSize32{
            width: 32px;
            height: 32px;
            line-height: 32px;
        }
        .layout{
            color: #121212;
            font-family: Regular;
            font-size: 14px;
        }
        .svgLayout{
            margin-top: 4px;
        }
    }
    .notes{
        height: 42px;
        line-height: 42px;
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
                
            .cards-city{
                width: 200px;
                height: 240px;
                border-radius: 16px;
                box-sizing: border-box;
                padding: 16px;
                background: #FFFFFF;
                box-shadow: 0px 8px 16px rgba(131, 131, 131, 0.1);
                margin-left: 18px;
                
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
        // margin: 40px 28px 28px 28px;
        width: 100%;
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
            margin-top: 39px;
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
            width: 100%;
            display: flex;
            // gap: 28px;

            .cardItem{
                width: 240px;
                height: 240px !important;          
                display: flex;
                flex-direction: row;
                // align-items: center;
                // flex-direction: column;
                // gap:5.8vh;
                gap: 28px;
            }
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
                .city{
                    position: absolute;
                    left: 16px;
                    bottom: 16px;
                    font-family: Bold;
                    font-size: 28px;
                    color: #FFFFFF;
                }
                .hoverShare{
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    width: 32px;
                    height: 32px;
                    background: #fff;
                    border-radius: 25px;
                }
                .hoverCityMsg{
                    position: absolute;
                    left: 16px;
                    bottom: 16px;
                    display: flex;
                    gap: 16px;

                    .hoverCityMsg-item{
                        height: 30px;
                        line-height: 30px;
                        border-radius: 8px;
                        border: 1.5px solid #B1B0B0;
                        padding: 0px 8px;
                        color: #fff;
                        font-size: 16px;
                        font-family: Semibold;
                    }
                }
            }
        }
    }
    .dialog{
        .questionText{
            height: 42px;
            line-height: 42px;
            color: #121212;
            font-size: 28px;
            font-family: Bold;
            margin-bottom: 24px;
        }
        .tips{
            font-size: 16px;
            font-family: Regular;
            color: #CCCCCC;
            line-height: 22px;
            
            .importentTips{
                font-family: Bold;
                color: #FF401A;
            }
        }
        .el-button{
            width: 244px;
            height: 48px;
            line-height: 48px;
            font-size: 16px;
            font-family: Regular;
            border-radius: 12px;

            &:nth-child(1){
                border: 1.5px solid #CCCCCC;

                &:hover{
                    background: #fff;
                    color: #595959;
                }
            }

            &:nth-child(2){
                

                &:hover{
                    background: #FF401A;
                    color: #FFFFFF;
                }
            }
        }
    }
    ::v-deep .el-dialog__footer{
        padding-top: 40px;
    }
    ::v-deep .el-dialog__header{
        height: 40px;
        padding: 0 0 40px 0;
    }
    ::v-deep .el-dialog__headerbtn{
        right: 5px;
        top: 21px;
        
    }
    ::v-deep .el-dialog__headerbtn .el-dialog__close{
        color: #121212;
    }
    ::v-deep .el-dialog{
        padding: 24px !important;
        border-radius: 24px;
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