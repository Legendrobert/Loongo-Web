<template>
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
                    <div class="city-name" style="width: 45vw">Hangzhou</div>
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
                        <div class="city-name" style="width: 45vw">TOP 10 places to visit in SH</div>
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
                        <div class="city-name" style="width: 20vw">TOP 10 places to visit in SH</div>
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
                        <div class="city-name" style="width: 20vw">TOP 10 places to visit in SH</div>
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
</template>

<script setup>
import { ref } from 'vue';
import roundToLeft from '@/components/svg-icons/svg-roundToLeft.vue'
import roundToRight from '@/components/svg-icons/svg-roundToRight.vue'
import svgLove from '@/components/svg-icons/svg-love.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'
const xihu = ref( require('@/assets/imgs/xihu.png') );
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
                        // height:42px;
                        line-height: 42px;
                        font-size: 28px;
                        font-family: Bold;
                        margin-bottom: 20px;
                        word-wrap: break-word;
                    }
                    .city-others{
                        width: 440px;
                        display: flex;

                        .city-others-item{
                           
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
</style>