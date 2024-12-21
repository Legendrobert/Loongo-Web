<template>
  <div class="L-Calendar">
    <div class="select-up">
      <div 
        class="select-up-label"
      >Timeline</div>
      <div class="select-wrapper" @click="handleClick">
        <span v-if="dateResult">
            <span>17 Nov - 1 Dec (</span>
            <span class="red-color">15 </span> 
            <span>days in total)</span>
        </span>
        <span v-else>
        Add start date and end date
        </span>
        
      </div>
    </div>
    <!-- 弹窗 -->
    <div v-if="isMaskVisible" class="mask">
        <div class="mask-area">
            <svgCancel 
                :width="32" 
                :height="32"
                class="svgCancel"
                @click="handleClose"
            >
            </svgCancel>
            <div class="calendar">
                <div class="month" v-for="(item,calendarIndex) in calendarList" :key="calendarIndex">
                    <div class="date">{{item.date}}</div>
                    <div class="week">
                        <span v-for=" (item,weekIndex) in weekList " :key="weekIndex">{{ item }}</span>
                    </div>
                    <div class="days">
                        <!-- 填充空白占位符，确保第一天对齐 -->
                        <span v-for="space in item.firstDayOffset" :key="'space-' + space" class="empty"></span>
                        
                        <!-- 当前月的每一天 -->
                        <span v-for="day in item.daysInMonth" :key="'day-' + day" :style="dayStyle(day,calendarIndex)">{{ day }}</span>

                        <span v-for="space in item.firstDayOffset" :key="'space-' + space" class="empty"></span>
                    </div>
                </div>
            </div>
            <div class="mask-footer">
                <div class="ok">OK</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import svgCancel from '@/components/svg-icons/svg-cancel.vue'
    
    // 获取当前月的天数
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // 当前月第一天是星期几 (0: Sunday, 1: Monday, ...)
    const firstDay = new Date(year, month, 1).getDay();
    // 创建一个新日期对象并设置为下个月
    const nextMonthDate = new Date(now.getFullYear(), now.getMonth() + 1);
    // 获取下个月的年和月
    const nextYear = nextMonthDate.getFullYear(); // 年份
    const nextMonth = nextMonthDate.getMonth();  // 月份索引 (0-11)
    const nextFirstDay = new Date(nextYear,nextMonth,1).getDay();
    const isMaskVisible = ref(false)
    const dateResult = ref(false)
    const monthList = ref([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ])
    const calendarList = ref([
        {
            date: monthList.value[month] + ' ' + year,
            daysInMonth: new Date(year, month + 1, 0).getDate(),
            firstDayOffset: (firstDay === 0 ? 6 : firstDay - 1)
            
        },{
            date: monthList.value[nextMonth] + ' ' + nextYear,
            daysInMonth: new Date(nextYear, nextMonth + 1, 0).getDate(),
            firstDayOffset: (nextFirstDay === 0 ? 6 : nextFirstDay - 1)
        }
    ])
    const weekList = ref(['Mon','Tue','Wed','Thu','Fri','Sat','Sun'])
  

    // 点击输入框
    const handleClick = () =>{
        isMaskVisible.value = true
    }
    // 关闭弹窗
    const handleClose = () =>{
        isMaskVisible.value = false
    }
    // 区分过去和未来的日期字体颜色
    const dayStyle = (day,i) =>{
        if(i === 0 && day < new Date().getDate()){
            return {
                color: '#ccc'
            }
        }else{
            return{
                color: '#121212'
            }
        }
    }

</script>

<style lang="less" scope>
    .L-Calendar {
        box-sizing: border-box;
        width: 667px;
        border: 1px solid transparent; /* 先设置为透明边框 */
        outline: 1px solid #BFBFBF;  /* 使用 outline 模拟边框 */
        border-radius: 16px;
        padding:24px;
        position: relative;

        .select-up {
            display: flex;
            align-items: center;

            .select-up-label {
                width: 128px;
                font-size: 20px;
                color: #121212;
                margin-right: 15px;
                cursor: default;
                font-family: Semibold;
             
            }
            .select-wrapper {
                font-size: 20px;
                color: #BFBFBF;
                font-family: Regular;

                .red-color{
                    color: #FF401A;
                    font-family: Bold;
                }
            }
        }
        .mask {
            display: flex;
            justify-content: center;
            align-items: center;           
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(18, 18, 18, 0.7); /* 半透明背景 */
            box-shadow: 0px 10px 20px rgba(18, 18, 18, 0.7); /* 可选的阴影效果 */

            .mask-area {
                width: 876px;
                height: 547px;
                border-radius: 16px;
                padding: 32px;
                box-sizing: border-box;
                background: #fff;

                .svgCancel {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 35px;
                }
            }
            .calendar {
                display: flex;
                justify-content: space-between;
                height: 339px;
                margin-bottom: 35px;

                .month{
                    width: 382px;

                    .date{
                        height: 27px;
                        font-size: 20px;
                        font-family: Semibold;
                        color:#121212;
                    }
                    .week {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 32px;
                        margin-bottom: 24px;

                        span {
                            font-family: Regular;
                            color: #595959;
                            width: 34px;
                            text-align: center;
                        }

                    }
                    .days {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        gap: 24px;


                        span{
                            font-size: 14px;
                            width: 34px;
                            text-align: center;
                            height: 19px;
                            line-height: 19px; 
                            font-family: SemiBold;
                            color: #121212;
                        }
                        .empty {
                            background: transparent;
                        }

                    }
                }
            }
            .mask-footer {
                display: flex;
                justify-content: flex-end;

                .ok{
                    width: 80px;
                    height: 48px;
                    border-radius: 8px;
                    background: #BFBFBF;
                    line-height: 48px;
                    text-align: center;
                    font-size: 20px;
                    font-family: Semibold;
                    color: #fff;
                }
            }
        }
    }
    // 选择框hover
    .L-Calendar:hover {
        outline: 2px solid #FF401A;  /* 使用 outline 模拟边框 */
    }
</style>