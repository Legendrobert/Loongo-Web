<!-- alert -->
<template>
  <div class="L-Alert">
        <img :src="props.img" width="40" height="40">
        <span class="text">{{props.text}}</span>
        <span class="red" @click="handleView">View</span>
        <svgClose 
            class="svgClose"
            @click="handleClose"
        ></svgClose>
  </div>
</template>

<script setup>
import { ref,defineProps } from 'vue';
// import userImg from "@/assets/imgs/userImg.png"
import svgClose from "@/components/svg-icons/svg-close.vue"

const emits = defineEmits(["closeAlertFn"])
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  }
});
const handleView = () =>{
    alert('跳转Itinerary')
}
const handleClose = () =>{
    emits('closeAlertFn', false)
}
</script>

<style lang="less" scoped>
.L-Alert{
    // width: 566px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 16px 24px;
    background: #121212;
    color: #F3F3F3;
    border-radius: 16px;
    font-size: 16px;
    box-shadow: 0px 16px 32px rgba(168, 168, 168, 0.25);
    // text-align: center;
    
    img{
        border-radius: 50%;
        border: 1px solid #FFFFFF;
    }
    .text{
        margin: 0 16px;
        font-family: Regular;
        // vertical-align: middle;
    }
    .red{
        color: #FF401A;
        margin-right: 16px;
        font-family: Semibold;
        // vertical-align: middle;

    }
    .svgClose{
        // vertical-align: middle;
        margin-top: 8px;
    }
}
</style>