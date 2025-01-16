<template>
  <div class="citys">
    <!-- 图片/视频 展示区 -->
    <div class="pics">
        <div class="large-image">
            <video          
              ref="videoRef"
              :src="beijingVideo" 
              type="video/mp4"
              controls
              controlsList="nodownload"
              :muted="isMuted"
              loop
            ></video>
        </div>
        <div class="small-images">
            <div class="small-image">
                <img :src="mainPic">
            </div>
            <div class="small-image">
                <img :src="mainPic">
            </div>
            <div class="small-image">
                <img :src="mainPic">
            </div>
            <div class="small-image">
                <img :src="mainPic">
                <svgMore class="svgMore"></svgMore>
            </div>
        </div>
    </div>
      <!-- 城市详情区 -->
    <div class="introduction">
        <div class="header">
            <div class="cityName">{{cityName}} City</div>
            <ul class="header-right">
                <li class="header-right-item" v-for="i in 3" :key="i">Metropolitan</li>
            </ul>
        </div>
        <div class="content">
            <div class="title">Introduction</div>
            <div class="details">{{detailsContent}}</div>
        </div>
        <div class="other">
            <div class="other-item" style="margin-right:80px">
                <svgTemperature></svgTemperature>
                <span class="title">Current temperature:</span>
                <span class="value">5~15˚C</span>
                <span class="line">|</span>
                <span class="value">41~59˚F</span>
            </div>
            <div class="other-item">
                <svgDate></svgDate>
                <span class="title">Ideal travel month:</span>
                <span class="value">Jun</span>
                <span class="line">|</span>
                <span class="value">Sep</span>
                <span class="line">|</span>
                <span class="value">Oct</span>
                <span class="line">|</span>
                <span class="value">Nov</span>
            </div>
        </div>
    </div>
    <!-- 分割线 -->
    <div class="divider-horizontal"></div>
    <!-- things to do  -->
    <div class="thingsToDo">
        <div class="thingsToDo-header">
            <span>What </span>
            <span class="text-color-red">Things to do </span>
            <span>in Shanghai</span>
        </div>
        <!-- Popular Events -->
        <div class="cardContainer">
            <div class="cardContainer-header">
                <div>Popular Events</div>
                <div class="cardContainer-header-right">
                    <roundToLeft></roundToLeft>
                    <roundToRight></roundToRight>
                </div>
            </div>
            <ul class="Events-list">
                <li 
                    v-for="i in 8" 
                    :key="i"
                    class="Events-list-item"
                >
                    <img :src="shanghaiblack">
                    <div class="item-text">
                        <p>{{cityName}}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula nulla, tempus</p>
                        <el-button>Add</el-button>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Featured Restaurants -->
        <div class="cardContainer">
                <div class="cardContainer-header">
                    <div>Featured Restaurants</div>
                    <div class="cardContainer-header-right">
                        <roundToLeft></roundToLeft>
                        <roundToRight></roundToRight>
                    </div>
                </div>
                <div class="restaurants-list">                                          
                    <div 
                        v-for="(item,index) in restaurantsList"
                        :key="index" 
                        class="restaurants-list-card"
                    >
                        <el-button class="carousel-button">Add</el-button>
                        <el-carousel 
                            class="carousel"
                            height="400px" 
                        >
                            <el-carousel-item v-for="(itemImg,i) in item.imgList" :key="i" activeIndex='0'>
                                <img :src="itemImg.imgName"> 
                            </el-carousel-item> 
                        </el-carousel>
                        <div class="introduce">
                            <div class="introduce-name">{{item.name}}</div>
                            <p class="introduce-content">{{item.introduce}}</p>
                            <ul class="introduce-tag">
                                <li>Chinese</li>
                                <li>Cuisine</li>
                                <li>Recommended</li>
                            </ul>
                        </div> 
                    </div>                                    
                </div>               
        </div>
        <!-- Cozy Hotels -->
        <div class="cardContainer">
            <div class="cardContainer-header">
                <div>Cozy Hotels</div>
                <div class="cardContainer-header-right">
                    <roundToLeft></roundToLeft>
                    <roundToRight></roundToRight>
                </div>
            </div>
            <div 
                class="hotel-list"
            >
                <div v-for="i in 3"
                     :key="i"
                >
                    <img :src="hotel">
                    <div class="hotel-details">
                        <div class="hotel-details-top">
                            <span class="hotelName">Hilton Hotel</span>
                            <div class="score">
                                <svgStart v-for="i in 5" :key="i"></svgStart>
                            </div>
                        </div>
                        <div class="hotel-details-bottom">
                            <div>
                                <span class="num">￥1,200</span>
                                <span class="englishNum">night</span>
                            </div>
                            <el-button class="addButton">Add</el-button>
                        </div>
                    </div>
                </div>         
            </div>
        </div>

    </div>
    <!-- 分割线 -->
    <div class="divider-horizontal"></div>
    <!-- Social Media -->
    <div class="socialMedia">
        <div class="cardContainer-header">
            <div>
                <span>What </span>
                <span style="color:#FF401A">Experts</span>
                <span> Say in Social Media</span>
                
            </div>
            <div class="cardContainer-header-right">
                <roundToLeft></roundToLeft>
                <roundToRight></roundToRight>
            </div>
        </div>
        <div class="content">
            <div class="content-card" v-for="i in 4" :key="i">
                <svgPlay class="svgPlay"></svgPlay>
                <img :src="vlog">
                <video 
                    ref="videoRef"
                    :src="beijingVideo" 
                    type="video/mp4"
                    controls
                    controlsList="nodownload"
                    :muted="isMuted"
                    loop           
                >
                </video>
                <div class="content-card-bottom">
                    <div class="title">TOP 10 places to visit in SH</div>
                    <div class="name">Stef Hoffger</div>
                    <div class="tags">
                        <div>Chinese</div>
                        <div>Cuisine</div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    <!-- 分割线 -->
    <div class="divider-horizontal"></div>
    <!-- Relevant Cities -->
    <div class="relevantCities">
        <div class="cardContainer-header">
            <div>
                <span style="color:#FF401A">Relevant </span>
               
                <span> Cities for You</span>  
            </div>
        </div>
        <div class="picContainer">
            <div class="picContainer-left">
                <img :src="xihu">
                <svgLove class="svgLove" :width="33" :height="28"></svgLove>
                <div class="pic-details">
                    <div class="city-name">Hangzhou</div>
                    <div class="city-others">
                        <div class="city-others-item">
                            <svgLocation class="svgLocation" :width="18" :height="18" :fill="'#fff'"></svgLocation>
                            <span>36km</span>
                        </div>
                        <div class="city-others-item">Xi Lake</div>

                    </div>
                </div>
            </div>
            <div class="picContainer-right">
                <div class="top-block">
                    <img :src="xihu">
                    <svgLove class="svgLove" :width="33" :height="28"></svgLove>
                    <div class="pic-details">
                        <div class="city-name">TOP 10 places to visit in SH</div>
                        <div class="city-others">
                            <div class="city-others-item">
                                <svgLocation class="svgLocation" :width="18" :height="18" :fill="'#fff'"></svgLocation>
                                <span>36km</span>
                            </div>
                            <div class="city-others-item">Xi Lake</div>

                        </div>
                    </div>
                </div>
                <div class="bottom-block">                 
                    <div class="bottom-image">
                        <img class="bottom-image" :src="xihu">
                        <svgLove class="svgLove" :width="33" :height="28"></svgLove>
                        <div class="pic-details">
                        <div class="city-name">TOP 10 places to visit in SH</div>
                        <div class="city-others">
                            <div class="city-others-item">
                                <svgLocation class="svgLocation" :width="18" :height="18" :fill="'#fff'"></svgLocation>
                                <span>36km</span>
                            </div>
                            <div class="city-others-item">Xi Lake</div>

                        </div>
                    </div>
                    </div>
                    <div class="bottom-image">
                        <img class="bottom-image" :src="xihu">
                        <svgLove class="svgLove" :width="33" :height="28"></svgLove>
                        <div class="pic-details">
                        <div class="city-name">TOP 10 places to visit in SH</div>
                        <div class="city-others">
                            <div class="city-others-item">
                                <svgLocation class="svgLocation" :width="18" :height="18" :fill="'#fff'"></svgLocation>
                                <span>36km</span>
                            </div>
                            <div class="city-others-item">Xi Lake</div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import video1 from "@/assets/video/beijing.mp4";
import svgMore from '@/components/svg-icons/svg-more.vue'
import roundToLeft from '@/components/svg-icons/svg-roundToLeft.vue'
import roundToRight from '@/components/svg-icons/svg-roundToRight.vue'
import svgTemperature from '@/components/svg-icons/svg-temperature.vue'
import svgDate from '@/components/svg-icons/svg-date.vue'
import svgStart from '@/components/svg-icons/svg-start.vue'
import svgPlay from '@/components/svg-icons/svg-play.vue'
import svgLove from '@/components/svg-icons/svg-love.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'


const route = useRoute()
const mainPic = ref( require('@/assets/imgs/shanghai.png') );
const vlog = ref( require('@/assets/imgs/vlog.png') );
const xihu = ref( require('@/assets/imgs/xihu.png') );
const shanghaiblack = ref( require('@/assets/imgs/shanghaiblack.png') );
const restaurants = ref( require('@/assets/imgs/restaurants.png') );
const hotel = ref( require('@/assets/imgs/hotel.png') );
const isMuted = ref(true)
const beijingVideo = ref(video1);
const detailsContent = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city into two districts: Pudong and Puxi. The Pudong skyline looks like it was ripped from the Jetsons; on the Puxi side, you can walk the Bund riverside district to get a taste of old Shanghai. The food scene is phenomenal.')
const cityName = computed(() => route.params.cityName)
 

const restaurantsList = ref([
  {
    imgList: [
        {
            imgName: require('@/assets/imgs/restaurants.png')
        },{
            imgName:require('@/assets/imgs/beijing.png')
        },{
            imgName:require('@/assets/imgs/chengdu.png')
        },{
            imgName:require('@/assets/imgs/guangzhou.png')
        },{
            imgName:require('@/assets/imgs/shanghai.png')
        }
    ],
    name:'Xinrong Ji',
    introduce: 'From ridiculous sales figures to margins and costs that just don’t add up.  You hear the investors pull the plans apart and wonder to yourself “how the hell can these guys get it so wrong?”'
  },{
    imgList: [
        {
            imgName: require('@/assets/imgs/restaurants.png')
        },{
            imgName:require('@/assets/imgs/beijing.png')
        },{
            imgName:require('@/assets/imgs/chengdu.png')
        },{
            imgName:require('@/assets/imgs/guangzhou.png')
        },{
            imgName:require('@/assets/imgs/shanghai.png')
        }
    ],
    name:'Xinrong Ji',
    introduce: 'From ridiculous sales figures to margins and costs that just don’t add up.  You hear the investors pull the plans apart and wonder to yourself “how the hell can these guys get it so wrong?”'
  },{
    imgList: [
        {
            imgName: require('@/assets/imgs/restaurants.png')
        },{
            imgName:require('@/assets/imgs/beijing.png')
        },{
            imgName:require('@/assets/imgs/chengdu.png')
        },{
            imgName:require('@/assets/imgs/guangzhou.png')
        },{
            imgName:require('@/assets/imgs/shanghai.png')
        }
    ],
    name:'Xinrong Ji',
    introduce: 'From ridiculous sales figures to margins and costs that just don’t add up.  You hear the investors pull the plans apart and wonder to yourself “how the hell can these guys get it so wrong?”'
  }
])
</script>

<style lang="less" scoped>
.citys{
    width: 100%;
    .pics {
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        gap: 15px;
        width: 100%;
        height: auto;
        margin-bottom: 40px;

        .large-image {
            grid-column: 1 / 2;
            grid-row: 1 / 3;

        }

         .large-image video {
            width: 100%;
            height:420px;
            object-fit: cover;
            border-top-left-radius: 24px;
            border-bottom-left-radius: 24px;
        }
        video::-webkit-media-controls-play-button{
            display: none !important;
        }
        /* 隐藏“播放时长” */
        video::-webkit-media-controls-time-remaining-display,
        video::-webkit-media-controls-current-time-display {
            display: none !important;
        }
        .small-images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            gap: 15px;
        }
        .small-images .svgMore{
            position: absolute;
            right: 20px;
            bottom: 20px;
        }

        .small-image img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .small-image:nth-child(2) img{
            border-top-right-radius: 24px;
            // border-bottom-right-radius: 24px;
        }
        .small-image:nth-child(4){
            position: relative;
        }
        .small-image:nth-child(4) img{
            
            // border-top-right-radius: 24px;
            border-bottom-right-radius: 24px;
        }
    }
    .introduction{
        width: 100%;
        height: auto;
  
        .header{
            height: 87px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .cityName{
                font-family: Bold;
                font-size: 64px;
            }
            .header-right{
                display: flex;
                justify-content: space-between;
                width: 557px;

                .header-right-item{
                    // width: 127px;
                    height: 27px;
                    padding: 8px 16px !important;
                    font-size: 20px;
                    font-family:  Semibold;
                    border-radius: 8px;
                }
                .header-right-item:nth-child(1){
                    color: #00998A;
                    background: #E9F5F5;
                }
                .header-right-item:nth-child(2){
                    color: #B39500;
                    background: #F5F4E9;
                }
                .header-right-item:nth-child(3){
                    color: #B31200;
                    background: #F5E9E9;
                }
            }
            
        }
        .content{
            background: #F9F9F9;
            border-radius: 16px;
            padding: 28px;
            margin-top: 40px;
            .title{
                color: #121212;
                font-size: 28px;
                // font-family: Bold;
            }

            .details{
                color: #595959;
                font-size: 20px;
                font-family: Regular;
                margin-top: 28px;
            }
        }
        .other{
            display: flex;
          
            margin-top: 40px;
         
            .other-item{
                height: 42px;
                display: flex;
                align-items: center;
                color:#595959;
                    font-size: 20px;
                    font-family: Regular;
                   

                .title{
                 
                    margin-left: 8px;
                    margin-right: 16px;
                }
                .value{
                    color: #121212;
                }
                .line{
                    color: #CCCCCC;
                    margin: 0 7px;
                }
            }
        }
    }
    .divider-horizontal{
        width: 100%;
        height: 120px;
        border-top: 1.5px solid #F3F3F3;
        margin-top: 120px;
    }
  
    .thingsToDo{
        .thingsToDo-header{
            height: 60px;
            line-height: 60px;
            font-size: 40px;
            font-family: Bold;
            color: #121212;
            margin-bottom: 20px;

            .text-color-red{
                color: #FF401A;
            }
        }
        
        .cardContainer{
            margin-top: 60px;

            
            .Events-list{
                width: 100%;
                display: grid;
                grid-template-columns: repeat(4, minmax(325px, 1fr)); /* 最小宽度 328px，自适应屏幕 */
                gap:clamp(10px, 1.7vw, 30px);
                box-sizing: border-box;
                

                .Events-list-item{
                    height: 328px;
                    border-radius: 24px;
                    position: relative;
                    
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 24px;
                        background-color: #121212;
                        opacity: 0.7;
                    }
                    .item-text{
                        position: absolute;
                        bottom: 20px;
                        left: 20px;
                        right: 20px;

                        p:nth-child(1){
                            color: #FFF;
                            font-size: 28px;
                            font-family: Bold;
                            height: 42px;
                            line-height: 42px;
                            margin: 0;
                            padding: 0;
                        }
                        p:nth-child(2){
                            color: #F9F9F9;
                            font-size: 16px;
                            line-height: 21px;
                            font-family: Regular;
                            margin: 0;
                            padding: 0;
                        }
                        .el-button{
                            width: 100%;
                            height: 43px;
                            background: #FFFFFF;
                            border-radius: 12px;
                            margin-top: 15px;
                            font-family: Semibold;
                            font-size: 20px;
                            color: #121212;
                        }
                    }
                }
            }
            .restaurants-list{
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, minmax(442px, 1fr)); /* 最小宽度 328px，自适应屏幕 */
                gap:clamp(10px, 1.7vw, 30px);
                box-sizing: border-box;

                .restaurants-list-card{
                    position: relative;
                    .carousel-button{
                        width: 79px;
                        height: 40px;
                        border-radius: 12px;
                        background: #FFFFFF;
                        color: #121212;
                        font-size: 20px;
                        font-family: Semibold;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        z-index: 999;
                    }
                    .carousel{
                        height: 400px;
                        border-radius: 24px;

                        img{
                            height: 400px;
                            background-color: #000;
                            opacity: 0.8;
                        }
                        ::v-deep .el-carousel--horizontal, .el-carousel--vertical{
                            border-radius: 16px;
                        }
                        ::v-deep .el-carousel__arrow{
                            display: none
                        }
                        
                        ::v-deep .el-carousel__button{
                            width: 16px;
                            height: 16px;
                            margin:20px 12px;
                            border-radius: 50%;
                        }
                    }
                    .introduce{
                        margin-top: 16px;
                        .introduce-name{
                            height: 42px;
                            line-height: 42px;
                            color:#121212;
                            font-size: 28px;
                            font-family: Bold;
                        }
                        .introduce-content{
                            height: 44px;
                            font-size: 16px;
                            color: #B1B0B0;
                            line-height: 21.79px;
                            margin: 8px 0 16px 0;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        .introduce-tag{
                            display: flex;
                            color: #121212;
                            font-size: 16px;
                            font-family: Regular;

                            li{
                                height: 30px;
                                line-height: 30px;
                                padding: 0 8px !important;
                                background: #F3F3F3;
                                border-radius: 8px;
                                margin-right: 16px !important;
                            }
                        }
                    } 
                }
                               
            }
            .hotel-list{
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, minmax(442px, 1fr)); /* 最小宽度 328px，自适应屏幕 */
                gap:clamp(10px, 1.7vw, 30px);
                box-sizing: border-box;

                img{
                    width: 100%;
                    height: 360px;
                    border-top-left-radius: 24px;
                    border-top-right-radius: 24px;
                }
                .hotel-details{
                    height: 142px;
                    border-bottom-left-radius: 24px;
                    border-bottom-right-radius: 24px;
                    border: 2px solid #F3F3F3;
                    padding: 20px;
                    margin-top: -4px;
                    box-sizing: border-box;

                    .hotel-details-top{
                        height: 42px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 20px;

                        .hotelName{
                            font-size: 28px;
                            color: #121212;
                            font-family: Bold;
                        }
                        .score{
                            display: flex;
                        }
                    }
                    .hotel-details-bottom{
                        height: 40px;
                        line-height: 40px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .num{
                            color: #121212;
                            font-size: 20px;
                            font-family: Bold;
                            margin-right: 8px;
                        }
                        .englishNum{
                            color: #B1B0B0;
                            font-size: 20px;
                            font-family: Regular;
                        }
                        .addButton{
                            width: 79px;
                            height: 40px;
                            background-color: #000;
                            color: #fff;
                            font-size: 20px;
                            font-family: Semibold;
                            border-radius: 12px;
                        }
                    }
                }
            }
        }
    }
    .socialMedia{
        
        .content{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, minmax(325px, 1fr)); /* 最小宽度 328px，自适应屏幕 */
            gap:clamp(10px, 1.7vw, 30px);
            box-sizing: border-box;
            margin-top: 52px;

            .content-card{
                position: relative;

                .svgPlay{
                    position: absolute;
                    top: 30%;
                    left: 50%;
                    z-index: 1000;
                }
                img{
                    width: 100%;
                    height: 240px;
                    border-radius: 24px;
                    position: absolute;
                    z-index: 999;
                }
                video{
                    width: 100%;
                    height: 240px;
                    border-radius: 24px;
                }
                .content-card-bottom{
                    margin-top: 16px;

                    .title{
                        height: 27px;
                        line-height: 27px;
                        font-size: 20px;
                        font-family: Bold;
                        color:#000;
                    }
                    .name{
                        color: #000;
                        margin: 16px 0;
                        font-family: Regular;
                        font-size: 16px;
                    }
                    .tags{
                        display: flex;

                        div{
                            width: 78px;
                            height: 30px;
                            line-height: 30px;
                            font-size: 16px;
                            border-radius: 8px;
                            font-family: Semibold;
                            text-align: center;

                            &:nth-child(1){
                                color: #121212;
                                background: #F3F3F3;
                                margin-right: 16px;
                            }
                            &:nth-child(2){
                                color: #FF401A;
                                background: #FFEEE6;
                            }
                        }

                    }

                }
            }
            
            video::-webkit-media-controls-play-button{
                display: none !important;
            }
            video::-webkit-media-controls-time-remaining-display,
            video::-webkit-media-controls-current-time-display {
                display: none !important;
            }
        }
    }
    .relevantCities{
        
        .picContainer {
            display: grid;
            grid-template-columns: 1fr 1fr; 
            gap: clamp(10px, 1.7vw, 30px); /* 自适应间距 */
            height: 480px;
            margin-top: 52px;
            overflow: hidden;

            .picContainer-left {
                position: relative;
                height: 480px;

                img{
                    width: 100%;
                    height: 480px;
                    border-radius: 24px;
                }
                .svgLove{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
                
            }
        }
        

        .picContainer-right {
            height: 100%;
            display: grid;
            grid-template-rows: 2fr 3fr; /* 上下分布，上部分2份高度，下部分3份高度 */
            gap: clamp(10px, 1.7vw, 30px); /* 上下间距 */

            .top-block {
                height: 224px;
                position: relative;

                img{
                    // background-color: #aaa; /* 占位背景色，可替换为图片 */
                    // background-size: cover;
                    // background-position: center;
                    border-radius: 24px;
                    width: 100%;
                    height: 224px;
                }
                .svgLove{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }

            }
            .bottom-block {
                display: grid;
                grid-template-columns: 1fr 1fr; /* 左右两列等宽 */
                gap: clamp(10px, 1.7vw, 30px); /* 左右间距 */

                .bottom-image {
                    height: 224px;
                    position: relative;

                    img{
                        border-radius: 24px;
                        width: 100%;
                        height: 224px;
                    }
                    .svgLove{
                        position: absolute;
                        top: 20px;
                        right: 20px;
                    }

                }
            }
        }
        .pic-details{
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                    color: #FFFFFF;

                    .city-name{
                        height:42px;
                        line-height: 42px;
                        font-size: 28px;
                        font-family: Bold;
                        margin-bottom: 20px;
                    }
                    .city-others{
                        width: 440px;
                        display: flex;

                        .city-others-item{
                            width: 79px;
                            height: 38px;
                            line-height: 38px;
                            border: 2px solid #B1B0B0;
                            border-radius: 8px;
                            font-size: 16px;
                            font-family: Semibold;
                            text-align: center;
                            display: flex;
                            box-sizing: border-box;
                            padding: 0 8px;
                            margin-right: 16px;

                            .svgLocation{
                                margin-right: 7px;
                                margin-top: 3px;
                            }
                        }
                    }
                }
        




    }
    .cardContainer-header{
        height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 32px;
        color: #121212;
        margin-bottom: 28px;

        .cardContainer-header-right{
            width: 104px;
            display: flex;
            justify-content: space-between;
        }
    }
    // video::-webkit-media-controls-play-button{
    //   display: none !important;
    // }
    // /* 隐藏“播放时长” */
    // video::-webkit-media-controls-time-remaining-display,
    // video::-webkit-media-controls-current-time-display {
    //   display: none !important;
    // }
    // 隐藏进度条  此方法无效
    // video::webkit-media-controls-timeline{
    //     display: none !important;
    // }
}
</style>