<template>
  <div class="Itinerary">
    <div class="header">Plan a New China Trip </div>
    <div class="selectionArea">
      <LSearch></LSearch>
      <LCalendar style="margin-top: 40px"></LCalendar>
      <div class="confirm">Confirm</div>
    </div>
    <div class="footer">
      <span>No idea? Scroll up to explore</span>
      <svgOff class="avgOff"></svgOff>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import LSearch from '@/components/common/L-Select.vue'
import LCalendar from '@/components/common/L-Calendar.vue'
import svgOff from '@/components/svg-icons/svg-off.vue'

</script>

<style lang="less" scope>
.Itinerary {
  height: calc(100vh - 144px);
  overflow: scroll;
  box-sizing: border-box;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    height: 87px;
    line-height: 87px;
    font-family: Bold;
    font-size: 64px;
    color: #121212;
    margin-bottom: 80px;
  }
  .selectionArea{
    
    .confirm{
      display: flex;
      justify-content: center;
      width:667px;
      height: 73px;
      line-height: 73px;
      background-color: #FFEEE6;
      border-radius: 16px;
      font-size: 24px;
      color: #FFFFFF;
      margin-top: 80px;
    }
  }
  .footer{
    margin-top: 80px;  
    margin-bottom: 30px;
    width: auto;
    height: 97px;
    color: #FF401A;
    font-size: 24px;
    text-align: center;
    font-family: Regular;

    .avgOff{
      margin-top: 42px;
    }
  }
}
</style>
