<template>
  <div class="navExplore">
    <div class="header">
      <div class="header-title">
        <span>Where Next</span>
        <img :src="greatWall" width="120" height="90">
        <span>?</span>
      </div>
      <div class="tips">for the terrific and memorable China trip</div>
    </div>
    <div class="chinaTrip">
      <div class="chinaTrip-left">
        <div class="title">
          <span>What</span>
          <div class="selectPart">
            <el-dropdown>
              <span class="el-dropdown-link">
                <svgAmerican class="svgIcon"></svgAmerican>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item disabled>Action 4</el-dropdown-item>
                  <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <span>like for China trip</span>
        </div>
        <ul class="rank">
          <li 
            v-for="i in 6" 
            :key="i"
            class="rankItem"
            :style="{ 
              borderBottom: i !== 6 ? '1px solid #CCCCCC' : 'none',
              fontFamily: i === 1 ? 'Semibold' : 'Regular'
            }"   
          >
            <span>Exiquisite Jewelery Shopping</span>
            <div 
              v-if="i === 1"
              class="rankItemNew"
              >NEW</div>
            <div>
              <div 
                v-if="i === 2"
                class="rankItemNum"
              >
                <svgRankUp></svgRankUp>
                {{i-1}}
              </div>
              <div 
                v-if="i === 3"
                class="rankItemNum">
                <svgRankDown></svgRankDown>
                {{i-1}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chinaTrip-right">
        <img 
          :src="greatWall" 
          width="517" 
          height="345"
          class="pic"
        >
        <div class="content">
          <div class="content-top">
            <div class="content-top-hot">
              <svgHot></svgHot>
              <span>5675</span>
            </div>
            <div class="sharePart">
              <svgShare :fillColor="'#fff'" ></svgShare>
            </div>
            
          </div>
          <div class="content-text">{{text}}</div>
        </div>
      </div>
      <div></div>
    </div>
    <div class="specialTour">
      <div class="specialTour-top">
        <span class="specialTour-top-title">Specialized Tours for</span>
        <ul class="specialTour-top-type">
          <li 
            v-for="(item,index) in specialTourList"
            :key="index"
            :class="typeActiveIndex === index ? 'active' : ''"
            @click="typeClick(index)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="specialTour-show">
        <div class="morePic">
          <div class="morePic-top">
            <div class="morePic-top-title">OFFICAL RECOMMENDATIONS</div>
            <div class="morePic-top-content">Unlock Exclusive Travel Guides</div>
            <div class="morePic-top-tips">Discover exiquisite and unique on Hotels, restaurants</div>
          </div>
          <div class="morePic-bottom">
            <div class="showMore">Show More</div>
            <img :src="hotAirBalloon" width="120" height="120">
          </div>
        </div>
        <ul class="picList">
          <li v-for="index in 5" :key="index" class="picItem">
            <img :src="greatWall" width="400" height="398">
            <div class="item-top">
              <div class="item-top-left">
                <svgHot :fillColor="'#fff'"></svgHot>
                <span>5678</span>
              </div>
              <svgShare :fillColor="'#121212'" class="item-top-right"></svgShare>
            </div>
            <div class="item-bottom">4-DAY TOUR OF THE GREAT WALL</div>
          </li>          
        </ul>
      </div>
      
    </div>
    <div class="bestTravel">
        <div class="title">Best Travel in China</div>
        <div class="carousel">
          <img :src="greatWall" width="100%" :height="600"> 
          <div class="introduce">
            <div class="introduce-title">The Long Journey</div>
            <div class="introduce-content">{{introduceContent}}</div>
            <div class="introduce-more">
              <span>View More</span>
              <svgToRight></svgToRight>
            </div>
          </div>
          <ul class="picList">
            <li class="picItem" v-for="(item,index) in cityPicList" :key="index">
              <img :src="item.imgName" :width="186" :height="160">
            </li>
          </ul>
        </div>
        <div class="button">
          <div v-for="(item,i) in 3" :key="i" :class="i === 0 ? 'buttonItem active' : 'buttonItem'" ></div>
        </div>

      </div>
    <div class="footer">
      <ul class="pics first">
        <li v-for="(item,i) in 6" :key="i">
          <img :src="greatWall" width="240" height="240">
        </li>
      </ul>
      <ul class="pics second">
        <li v-for="(item,i) in 6" :key="i">
          <img :src="greatWall" width="240" height="240">
        </li>
      </ul>
      <div class="text">
        <div>Top recommendations for you</div>
        <svgToDown class="toDown"></svgToDown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, nextTick,computed } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue'
import svgAmerican from '@/components/svg-icons/svg-american.vue'
import svgRankUp from '@/components/svg-icons/svg-rankUp.vue'
import svgRankDown from '@/components/svg-icons/svg-rankDown.vue'
import svgShare from '@/components/svg-icons/svg-share.vue'
import svgHot from '@/components/svg-icons/svg-hot.vue'
import svgToRight from '@/components/svg-icons/svg-toRight2.vue'
import svgToDown from '@/components/svg-icons/svg-toDown.vue'
// import LCarousel from "@/components/common/L-Carousel.vue"

const greatWall = ref( require('@/assets/imgs/greatWall.png') );
const hotAirBalloon = ref( require('@/assets/imgs/hotAirBalloon.png') );
const text = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city...')
const introduceContent = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city into two districts: Pudong and Puxi.')
const specialTourList = reactive(['Landscape','Hiking','City Walk'])
const cityPicList = reactive([
  {
    imgName: require('@/assets/imgs/greatWall.png')
  },{
    imgName:require('@/assets/imgs/beijing.png')
  },{
    imgName:require('@/assets/imgs/chengdu.png')
  }
])
const typeActiveIndex = ref(1)

// 点击type按钮
const typeClick = (i)=>{
  typeActiveIndex.value = i
}
</script>

<style lang="less" scoped>
.navExplore{
  height: calc(100vh - 88px);
  
  overflow: scroll;
  .header{
    display: flex;
    flex-direction: column; /* 让子元素垂直排列 */
    align-items: center;    /* 左右居中 */
    padding: 120px 64px;
    background: #fff;


    .header-title{
      font-size: 80px;
      color: #121212;
      height: 109px;
      line-height: 109px;

      img{
        border-radius: 16px;
        transform: rotate(-15deg);
        margin: 0 30px;
        box-shadow: 0px 16px 32px 0px rgba(196, 196, 196, 0.5);
      }
    }
    .tips{
      height: 36px;
      line-height: 36px;
      color: #B1B0B0;
      font-size: 24px;
      font-family: Semibold;
      margin-top:24px;
    }
  }
  .chinaTrip{
    padding: 64px;
    box-sizing: border-box;
    background: #F9F9F9;
    display: flex;
    justify-content: space-between;

    .chinaTrip-left{
     
      .title{
        height: 60px;
        line-height: 60px;
        color: #121212;
        font-size: 40px;
        font-family: Bold;
        display: flex;
        margin-bottom: 40px;
        gap: 8px;

         .selectPart{
            width: 80px;
            height: 48px;
            background: #fff;
            border: 2px solid #F9F9F9;
            border-radius: 100px;

            .el-dropdown{
              width: 100%;
            }
            .el-dropdown-link{
              width: 100%;
              height: 48px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 10px;

              .el-icon svg{
                color: #121212;
              }

            }
          }
      }
      .rank{
        

        .rankItem{
          display: flex;
          
          font-size: 20px;
          color: #121212;
          padding: 23px 0px !important;

          .rankItemNew{
            width: 49px;
            height: 28px;
            margin-left: 16px;
            line-height: 28px;
            text-align: center;
            background: #B31200;
            border-radius: 8px;
            font-size: 14px;
            font-family: Seminold;
            color: #FFFFFF;
          }
          .rankItemNum{
            display: flex;
            margin-left: 16px;
            gap: 12px;
          }
        }
      }
    }
    .chinaTrip-right{
      width: 517px;
      height: 511px;
      background: #fff;
      box-shadow: 0px 8px 16px 0px rgba(131, 131, 131, 0.1);
      border-radius: 24px;

      .pic{
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
      }
      .content{
        padding: 24px;

        .content-top{
          display: flex;
          justify-content: space-between;

          .content-top-hot{
            width: 84px;
            height: 35px;
            border: 1.5px solid #F3F3F3;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #121212;
            font-family: Seminold;
            margin-bottom: 16px;
            gap: 12px;
          }
          .sharePart{
            width: 32px;
            height: 32px;
            background: #FF401A;
            border-radius: 50%;
            
          }
        }
        .content-text{
          font-size: 16px;
          color: #595959;
          font-family: Regular;
          line-height: 22px;
        }
      }
    }
  }
  .specialTour{
    padding: 88px 0 88px 64px;
    background: #fff;

    .specialTour-top{
      display: flex;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      margin-bottom: 65px;

      .specialTour-top-title{
        color: #121212;
        font-size: 40px;
        font-family: Bold;
      }
      .specialTour-top-type{
        display: flex;
        gap: 24px;

        li{
          height: 41px;
          line-height: 41px;
          padding: 0 16px !important;
          text-align: center;
          border-radius: 100px;
          border: 1.5px solid #CCCCCC;
          color: #121212;
          font-size: 20px;
          font-family: Regular;
        }
        .active{
          color: #fff;
          font-family: Semibold;
          background: #121212;
          border: 1.5px solid #121212;
        }
      }
      
    }
    .specialTour-show{
        gap: 28px;
        display: flex;

        .morePic{
          position: relative;
          width: 320px;
          height: 398px;
          background: #F9F9F9;
          border-radius: 24px;
          padding: 24px;
          box-sizing: border-box;
          
          .morePic-top{

            .morePic-top-title{
              height: 20px;
              line-height: 20px;
              font-family: Seminold;
              font-size: 14px;
              color: #595959;
              margin-bottom: 16px;
            }
            .morePic-top-content{
              height: 72px;
              line-height: 36px;
              font-family: Bold;
              font-size: 24px;
              color: #121212;
              margin-bottom: 16px;
            }
            .morePic-top-tips{
              height: 20px;
              line-height: 20px;
              font-family: Regular;
              font-size: 14px;
              color: #B1B0B0;
            }
          }
          .morePic-bottom{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 24px 0 0 24px;
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;

            .showMore{
              width: 137px;
              height: 46px;
              line-height: 46px;
              background: #FF401A;
              border-radius: 100px;
              text-align: center;
              font-size: 16px;
              font-family: Bold;
              margin-bottom: 24px;
              position: relative;
              bottom: -50px;
              color: #FFFFFF;
            }
          }
        }
        .picList{         
          width: calc(100vw - 412px);
          height: 460px;
          overflow-x: scroll;
          display: flex;
          gap: 28px;
          

          &::-webkit-scrollbar{
            height: 8px;
            margin-top: 50px;
            margin-right: 64px;
            background: #F3F3F3;
            border-radius: 4px;

          }
          &::-webkit-scrollbar-thumb {
            background: #121212;
            border-radius: 4px;
          }
          

          .picItem{
            border-radius: 24px;
            position: relative;
            display: inline-block;
            display: flex;
            
            img{
              border-radius: 24px;

                &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #121212; /* 半透明黑色 */
                opacity: 0.8; /* 20% 透明度 */
              }
            }
            .item-top{
              position: absolute;
              top: 0;
              width: -webkit-fill-available;
              margin: 24px;
              display: flex;
              justify-content: space-between;

              .item-top-left{
                height: 38px;
                display: flex;
                color: #FFFFFF;
                justify-content: space-between;
                align-items: center;
                background: rgba(18, 18, 18, 0.8);
                border-radius: 100px;
                padding: 0 12px;
                box-sizing: border-box;
                gap: 4px;
              }
              .item-top-right{
                width: 32px;
                height: 32px;
                background: #fff;
                border-radius: 50%;
              }
            }   
            .item-bottom{
              position: absolute;
              bottom: 54px;
              width: 352px;
              color: #FFFFFF;
              font-family: Bold;
              font-size: 28px;
              line-height: 42px;
              width: -webkit-fill-available;
              margin: 24px;
            }  
          }
        }
      }
  }
  .bestTravel{
    padding: 0 64px 88px 64px;
    background: #fff;

    .title{
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-family: Bold;
      color: #121212;
      margin-bottom: 64px;
    }
    .carousel{
      height: 600px;
      position: relative;
      margin-bottom: 64px;

      img{
        border-radius: 24px;
      }
      .introduce{
        width: 480px;
        position: absolute;
        left: 64px;
        bottom: 64px;

        .introduce-title{
          height: 60px;
          line-height: 60px;
          color: #FFFFFF;
          font-size: 40px;
          font-family: Bold;
        }
        .introduce-content{
          line-height: 22px;
          color: #F3F3F3;
          font-size: 16px;
          font-family: Regular;
          margin: 40px 0;
        }
        .introduce-more{
          width: 146px;
          height: 56px;
          line-height: 56px;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          background: #fff;
          border-radius: 100px;
          color: #000000;
          font-size: 16px;
          font-family: Semibold;
        }
      }
      .picList{
        position: absolute;
        bottom: 60px;
        right: 64px;
        display: flex;
        gap: 40px;

        .picItem{
          img{
            border-radius: 12px;
          }
        }
      }

      // img{
      //   border-radius: 24px;
      // }
      // .content{
        
      // }
    }
    .button{
      width: 100%;
      height: 12px;
      display: flex;
      justify-content: center;
      gap: 16px;

      .buttonItem{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #F3F3F3;
      }
      .active{
        background: #121212;
      }
    }
  }
  .footer{
    width: 100%;
    
    background: #121212;
    // margin-top: 88px;
    padding: 64px 0;
    box-sizing: border-box;

    .pics{
      display: flex;
      gap: 40px;

      img{
        border-radius: 24px;
      }
      
    }
    .first{
      margin-bottom: 40px !important;
      position: relative;
      left: -80px;
    }
    .second{
      position: relative;
      left: -120px;
    }
    .text{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 56px;
      font-family: Bold;
      color: #fff;
      // height: 76px;
      line-height: 76px;
      margin-top: 64px;

      .toDown{
        height: 40px;
        margin-top: 40px;
      }
    }
  }
}
// ::v-deep .el-carousel--horizontal, .el-carousel--vertical{
//               border-radius: 16px;
//             }
//             ::v-deep .el-carousel__arrow{
//               display: none
//             }
//             ::v-deep .el-carousel__indicators{
//               position: absolute;
//               // left:56px;
//               bottom: 0px;
//             }
//             ::v-deep .el-carousel__button{
//               width: 8px;
//               height: 8px;
//               margin:0 8px;
//               border-radius: 50%;
//               background: #F3F3F3;
//             }
//             :deep(.el-carousel__indicator.is-active .el-carousel__button) {
//               background-color: #121212 !important;  /* 选中颜色 */
//             }
</style>