<!-- 选择框 -->
<template>
  <div class="L-Select">
    <div class="select-up">
      <p 
        class="select-up-label"
        :style="{color: selectValue.length === 0 ? '#121212' : '#FF401A'}"
      >Cities</p>
      <div class="select-wrapper" @click="handleClick">
        <span 
          :style="{ display: spanDisplay }"
        >
        Add cities in China you like
        </span>
      </div>
    </div>
    <div v-if="isFocus" class="selectResult">
       <!-- 选择框选中结果 -->
      <div class="result-left">
        <div 
          class="result-left-text"
          v-for="(item,index) in selectValue"
          :key="index"
        >
          <span>{{item}}</span>
            <svgCancel 
              class="cancel"
              @click="handleCancel(item)"
            >
            </svgCancel>
        </div>
        <!-- 输入框 -->
     
        <input 
          v-if="inputShow && selectValue.length < 3"
          ref="inputRef" 
          type="text" 
          :style="{ display: inputDisplay}" 
          class="select-wrapper-input" 
          :placeholder="selectValue.length === 0 ? 'Add cities in China you like': ''"
          v-model="inputValue"
          @blur="handleBlur"
          @input="handleInput"
        >
      </div>
      <div v-if="selectResultShow"  class="result-right">
          <div 
            v-if="selectValue.length === 3"
            class="result-right-error"
          >
            <svgError ></svgError>
            <span>Maximum.</span>
          </div>
          <div 
            v-else 
            class="result-right-add"
          >
            <svgAdd @click="handleAdd"></svgAdd>
          </div>
          
        </div>
    </div>
    
    <!-- 下拉框 -->
    <transition name="fade">
      <div
      v-show="showOption" 
      class="select-option"
      
    >
      <ul 
        v-if="list.length || list.length > 0" 
        class="option-data"
      >
        <li 
          v-for="( item,index ) in list" 
          :key="index"
          @click="handleClickOption(item.City)"
        >
          <div class="option-left">
            <div class="option-left-main">{{item.City}}</div>
            <div class="option-left-remarks">{{item.Province}}</div>
          </div>
          <div class="option-right">{{item.feature}}</div>
        </li>
      </ul>
       <p v-else class="empty-data">无数据</p>
    </div>
    </transition>
    
    
  </div>
</template>

<script setup>
import { ref,nextTick,watch } from 'vue';
import svgAdd from '@/components/svg-icons/svg-add.vue'
import svgCancel from '@/components/svg-icons/svg-cancel.vue'
import svgError from '@/components/svg-icons/svg-error.vue'

const inputRef = ref(null);
const spanDisplay = ref('inline')
const inputDisplay = ref('none')
const isFocus = ref(false) // 用于判断状态来实现select高度切换
const showOption = ref(false) // 用于判断是否展示下拉框
const inputValue = ref('')
const inputShow = ref(true) // 是否展示输入框
const selectResultShow = ref(false)
const selectValue = ref([]) // 已选中项
const list = ref(
  [
    {
      Province:'shanghai City',
      City:'shanghai',
      feature:'Metropolitan'
    },
    {
      Province:'Jiangsu Province',
      City:'SuZhou',
      feature:'Jiangnan Landscape'
    },
    {
      Province:'Guangdong Province',
      City:'ShenZhen',
      feature:'Modern City'
    },
    {
      Province:'Liaoning Province',
      City:'ShenYang',
      feature:'Historical City'
    }
  ]
);


watch(
  () => inputValue.value,
  (newInputValue) => {
    if(newInputValue === '') {
      handleBlur()
    }
  }
)
// 点击初始化时的输入框
const handleClick = () => { 
  isFocus.value = true; 
  spanDisplay.value = 'none'
  setTimeout(() => {
    inputDisplay.value = 'block'
    nextTick(()=>{
      if(inputRef.value){
        inputRef.value.focus(); // 聚焦 input
      }
    })
  }, 300); // 延迟一点时间让点击下拉框不会立即隐藏
}
// 失去焦点
const handleBlur = () => {
    setTimeout(() => {
      selectResultShow.value = selectValue.value.length === 0 ? false : true
        showOption.value = false
        inputValue.value = '' 
  }, 300); // 延迟一点时间让点击下拉框不会立即隐藏 
}
// 输入框输入状态时
const handleInput = (event) => {
  inputValue.value = event.target.value
  showOption.value = inputValue.value ? true : false
}
// 点击下拉框选项
const handleClickOption = (event) => {
  if(event){
    inputValue.value = ''
    inputShow.value = false
    showOption.value = false
    selectResultShow.value = true
    if (!selectValue.value.includes(event) && selectValue.value.length < 3) {
      selectValue.value.push(event)
    }
  }
}
// 取消选中项
const handleCancel = (value)=> {
  inputValue.value = ''
  selectValue.value = selectValue.value.filter(item => item !== value);
  if(selectValue.value.length === 0){
    inputShow.value = true
    setTimeout(() => {
      inputDisplay.value = 'block'
      nextTick(()=>{
        if(inputRef.value){
          inputRef.value.focus(); // 聚焦 input
        }
      })
    }, 300); 
  }
}
// 添加选项
const handleAdd = () =>{
  selectResultShow.value = false
  showOption.value = false
  inputShow.value = true
  setTimeout(()=>{
    nextTick(()=>{
      
      if(inputRef.value){
        inputRef.value.focus(); // 聚焦 input
      }
      
    })
  },300)
  
}
</script>

<style lang="less" scope>
.L-Select{
  box-sizing: border-box;
  width: 667px;
  border: 1px solid transparent; /* 先设置为透明边框 */
  outline: 1px solid #BFBFBF;  /* 使用 outline 模拟边框 */
  border-radius: 16px;
  padding:24px;
  position: relative;

  .select-up{
    // height: 75px;
    display: flex;
    align-items: center;

    .select-up-label {
      width: 128px;
      font-size: 20px;
      color: #121212;
      margin-right: 15px;
      cursor: default;
      font-family: Semibold;
      margin: 0;
      padding: 0;
    }
  }

  
  .select-wrapper {
    width: 100%;
    font-size: 20px;
    color: #BFBFBF;
    font-family: Regular;
  }
  .select-wrapper-input {
    width: 100%;
    height: 27px;
    // margin-bottom: 24px;
    color: #BFBFBF;
    font-size: 20px;
    font-family: Regular;
    border: none;

    &::placeholder {
      color: #BFBFBF;
      font-size: 20px;
      font-family: Regular;
      text-indent: 8px;
    }
    &:focus {
      outline: none; 
    }

  }
  .selectResult {
    margin-top: 22px;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;

      .result-left{
        display: flex;
        align-items: center;

        .result-left-text{
          height: 43px;
          border: 1px solid #CCC;
          border-radius: 8px;
          text-align: center;
          color: #121212;
          display: flex;
          justify-content: center;
          font-size: 20px;
          font-family: Semibold;
          margin-right: 15px !important;
          box-sizing: border-box;
          padding: 8px 12px;

          span{
            margin-right: 7px;
            vertical-align: middle; 
          }
          svg{
            vertical-align: middle; 
          }
          .cancel{
            cursor: pointer;

          }
        }
      }
      .result-right{

        .result-right-error{
          display: flex;
          width: auto;
          height: 40px;
          line-height: 40px;

          svg{
            vertical-align: middle;
          }
          span{
            vertical-align: middle;
            margin-left: 5px;
          }
        }
        .result-right-add{
           width: 40px;
          height: 40px;
        background: #FFEEE6;
        border-radius: 8px;
        text-align: center;
        line-height: 40px;
        }
        
      }
    }
  .select-option {
    min-width: 668px;
    max-height: 352px;
    border: 1px solid #F3F3F3;
    border-radius: 16px;
    box-shadow: 0px 16px 32px rgba(189, 189, 189, 0.2);
    background:#fff;
    position: absolute;
    top: 144px;
    left: 0px;
    transform-origin: center top;
    z-index: 2001;
    overflow-y: auto;

    .empty-data{
      height: 88px;
      line-height: 88px;
      color: #BFBFBF;
      font-size: 16px;
      font-family: Regular;
      box-sizing: border-box;
      text-align: center;
      padding: 0 24px;
    }
    .option-data{

      li{
        height: 88px;
        box-sizing: border-box;
        padding: 16px !important;
        display: flex;
        justify-content: space-between;
        background: #fff;

        &:hover{
          background: #F3F3F3;
        }

        .option-left{

          .option-left-main{
            height: 27px;
            line-height: 27px;
            color: #121212;
            font-size: 20px;
            font-family: Semibold;
          }
          .option-left-remarks{
            height: 22px;
            line-height: 22px;
            color: #CCCCCC;
            font-size: 16px;
            font-family: Regular;
            margin-top: 4px;
          }

        }
        .option-right{
          width: auto;
          height: 30px;
          padding: 0 8px;
          line-height: 30px;
          text-align: center;
          background: #F9F9F9;
          border-radius: 8px;
          color: #121212;
          font-size: 16px;
          font-family: Semibold;
        }
      }
    }
  }
 
}

// .L-Select--expanded {
//   height: 126px;     
// }
// 下拉框过渡动画
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease; 
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
// 选择框hover
.L-Select:hover {
  outline: 2px solid #FF401A;  /* 使用 outline 模拟边框 */
}

</style>
