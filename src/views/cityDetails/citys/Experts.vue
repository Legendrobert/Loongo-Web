<template>
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
</template>

<script setup>
import { ref } from 'vue';
import roundToLeft from '@/components/svg-icons/svg-roundToLeft.vue'
import roundToRight from '@/components/svg-icons/svg-roundToRight.vue'
import svgPlay from '@/components/svg-icons/svg-play.vue'
import video1 from "@/assets/video/beijing.mp4";
const vlog = ref( require('@/assets/imgs/vlog.png') );
const beijingVideo = ref(video1);
const isMuted = ref(true)
</script>

<style lang="less" scoped>
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
            // // 隐藏全屏按钮
            // video::-webkit-media-controls-fullscreen-button {
            //     display: none !important;
            // }
        }
    }
    
</style>