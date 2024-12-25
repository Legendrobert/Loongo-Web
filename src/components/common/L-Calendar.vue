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
            <div class="calendar">
                <div class="month" v-for="(item,calendarIndex) in calendarList" :key="calendarIndex">
                    <div class="date">
                        <svgToLeft 
                            v-if="calendarIndex === 0"
                            @click="handleNextMonth('Previous')"
                        ></svgToLeft>
                        <div v-if="calendarIndex === 1"></div>
                        <span>{{item.date}}</span>
                        <div v-if="calendarIndex === 0"></div>
                        <svgToRight 
                            v-if="calendarIndex === 1"
                            @click="handleNextMonth('Next')"
                        ></svgToRight>
                    </div>
                    <div class="week">
                        <span v-for=" (i,weekIndex) in weekList " :key="weekIndex">{{ i }}</span>
                    </div>
                    <div class="days">
                        <!-- 填充空白占位符，确保第一天对齐 -->
                        <span v-for="space in item.firstDayOffset" :key="'space-' + space" class="empty"></span>
                        
                        <!-- 当前月的每一天 -->
                        <span 
                            v-for="(day,dayIndex) in item.daysInMonth" 
                            :key="'day-' + day" 
                            :style="dayStyle(day,calendarIndex)"
                            :class="activeClassFn(day,calendarIndex,dayIndex)"
                            @click="handleDateClick(day,dayIndex,calendarIndex)"
                        >{{ day }}</span>
                        <span v-for="lastSpace in item.lastDayOffset" :key="'lastSpace-' + lastSpace" class="empty"></span>
                    </div>
                </div>
            </div>
            <div class="mask-footer">
                <div class="footer-left">
                    <div 
                        v-show="rangeDate[0].date"
                        class="footer-left-Date">
                        {{'24, Dec, 2024'}}
                    </div>
                    <div 
                        v-show="rangeDate[0].date"
                        class="line">
                        -
                    </div>
                    <div 
                        v-show="rangeDate[1].date"
                        class="footer-left-Date">
                        {{'06, Jan, 2025'}}
                    </div>
                    <div 
                        v-show="rangeDate[1].date !== '' && diffInDays===13"
                        class="sumDays">14 Days (Max.)</div>
                </div>
                <div class="footer-right">
                    <div class="Cancel" @click="handleClose">Cancel</div>
                    <div class="foot-btn">OK</div>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import svgToRight from '@/components/svg-icons/svg-toRight.vue'
    import svgToLeft from '@/components/svg-icons/svg-toLeft.vue'

    // 选中的日期
    // const activeDay = ref(-1)
    // 选中月为当前月还是下月
    // const activeMonth = ref(-1)
    
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
    const diffInDays = ref(0) // 开始与结束日期的天数差
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
            firstDayOffset: (firstDay === 0 ? 6 : firstDay - 1),
            lastDayOffset: 7 - (new Date(year, month + 1, 0).getDay()),
            year: year,
            month: month + 1
        },{
            date: monthList.value[nextMonth] + ' ' + nextYear,
            daysInMonth: new Date(nextYear, nextMonth + 1, 0).getDate(),
            firstDayOffset: (nextFirstDay === 0 ? 6 : nextFirstDay - 1),
            lastDayOffset: 7 - (new Date(nextYear, nextMonth + 1, 0).getDay()),
            year: nextYear,
            month: nextMonth + 1
        }
    ])
    const weekList = ref(['Mon','Tue','Wed','Thu','Fri','Sat','Sun'])
    const rangeDate = ref([
        {
            activeDay: -1,
            activeMonth: -1,
            date: ''
        },
        {
            activeDay: -1,
            activeMonth: -1,
            date: ''
        }
    ]) // activeDay 选中的日期;activeMonth 选中月为当前月还是下月

    // 点击输入框
    const handleClick = () =>{
        isMaskVisible.value = true
    }
    // 关闭弹窗
    const handleClose = () =>{
        isMaskVisible.value = false
    }
    // 选择日期
    const handleDateClick = (day, dayIndex,i) =>{
        if(rangeDate.value[0].date === ''){ 
            rangeDate.value[0].activeDay = day-1
            rangeDate.value[0].activeMonth = i
            rangeDate.value[0].date = calendarList.value[i].year + '-' + calendarList.value[i].month + '-' + day
        }else if(rangeDate.value[0].date !== '' && rangeDate.value[1].date === ''){
            // 开始与结束的时间不能超出14天
            const start = rangeDate.value[0].date
            const end = calendarList.value[i].year + '-' + calendarList.value[i].month + '-' + day
            const d1 = new Date(start);
            const d2 = new Date(end);
            diffInDays.value = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
            if(diffInDays.value > 13){
                return false
            }

            // 开始时间有值，结束时间无值
            // 如果开始与结束都是同一月，结束时间不能小于开始时间（rangeDate.value[0].activeDay<day）
            if(rangeDate.value[0].activeMonth === i && rangeDate.value[0].activeDay < day - 1){
                rangeDate.value[1].activeDay = day - 1
                rangeDate.value[1].activeMonth = i
                rangeDate.value[1].date = calendarList.value[i].year + '-' + calendarList.value[i].month + '-' + day
            }
            // 如果开始与结束不同月，结束月要大于开始月，
            if(rangeDate.value[0].activeMonth < i){
                rangeDate.value[1].activeDay = day - 1
                rangeDate.value[1].activeMonth = i
                rangeDate.value[1].date = calendarList.value[i].year + '-' + calendarList.value[i].month + '-' + day
            }
            
        }else{
            rangeDate.value[0].activeDay = day - 1
            rangeDate.value[0].activeMonth = i
            rangeDate.value[0].date = calendarList.value[i].year + '-' + calendarList.value[i].month + '-' + day
            rangeDate.value[1].activeDay = -1
            rangeDate.value[1].activeMonth = -1
            rangeDate.value[1].date = ''
        }

        activeClassFn(day-1,i,dayIndex)
    }
    // 区分过去和未来的日期字体颜色
    const dayStyle = (day,i) =>{   
       if(calendarList.value[i].year === year & calendarList.value[i].month === month+1){
        if(day < new Date().getDate()){
            return {
                color: '#ccc'
            }
        }
       }else{
        return{
                color: '#121212'               
            }
       }      
    }
    // 动态实现选中日历样式
    const activeClassFn = (day,calendarIndex,dayIndex) =>{
        // 第一天日期为黑色
        if(rangeDate.value[0].activeMonth === calendarIndex && rangeDate.value[0].activeDay === dayIndex){
            return 'active'
        }
        // 最后一天日期为黑色
        if(rangeDate.value[1].activeMonth === calendarIndex && rangeDate.value[1].activeDay === dayIndex){
            return 'active'
        }
        // 期间日期为灰色，当结束的时间有值时
        if(rangeDate.value[1].date !== ''){
            // 开始时间与结束时间为同月
            if(rangeDate.value[0].activeMonth === calendarIndex && rangeDate.value[1].activeMonth === calendarIndex){
                
                if(rangeDate.value[0].activeDay+1 < day && day < rangeDate.value[1].activeDay+1){
                    return 'include'
                }
            }
            // 开始时间与结束时间不同月（开始时间在本月，结束时间在下月）
            if(rangeDate.value[0].activeMonth === 0 && rangeDate.value[1].activeMonth === 1){
                // 当月开始时间之后的
                if(calendarIndex === 0 && rangeDate.value[0].activeDay+1 < day){
                    return 'include'
                }
                // 下月结束时间之前的
                if(calendarIndex === 1 && rangeDate.value[1].activeDay+1 > day){
                    return 'include'
                }
               
            }
        }
    }
    // 日历切换到下一页
    const handleNextMonth = (value) =>{
        // 当前月
        let CurrentMonthFn = null
        let newYear = null
        let newMonth = null
        let newFirstDay = null
        // 下月
        let nextMonthFn = null
        let newNextYear = null
        let newNextMonth = null
        let newNextFirstDay = null

        if(value === 'Previous'){
            if(calendarList.value[0].year === year && calendarList.value[0].month === month + 1){
                return false
            }
            
            if(calendarList.value[0].month - 2 === -1){
               
                newYear = calendarList.value[0].year -1
                newMonth = 11
                newFirstDay = new Date(newYear, newMonth - 1, 1).getDay();

              
                newNextYear = calendarList.value[1].year - 1
                newNextMonth = 12
                newNextFirstDay = new Date(newNextYear, newNextMonth - 1, 1).getDay();
            }else if(calendarList.value[0].month - 2 === 0){
                newYear = calendarList.value[0].year -1
                newMonth = 12
                newFirstDay = new Date(newYear, newMonth - 1, 1).getDay();

              
                newNextYear = calendarList.value[1].year
                newNextMonth = 1
                newNextFirstDay = new Date(newNextYear, newNextMonth - 1, 1).getDay();
            }else{
                CurrentMonthFn = calendarList.value[0].month - 2
                newYear = calendarList.value[0].year
                newMonth = CurrentMonthFn
                newFirstDay = new Date(newYear, newMonth - 1, 1).getDay();

                nextMonthFn = calendarList.value[1].month - 2
                newNextYear = nextMonthFn === -1 ? calendarList.value[1].year - 1 : calendarList.value[1].year
                newNextMonth = nextMonthFn === -1 ? 11 : nextMonthFn
                newNextFirstDay = new Date(newNextYear, newNextMonth - 1, 1).getDay();
            }    
            
         
        }
        if(value === 'Next'){
            if(calendarList.value[0].year === year + 1 && calendarList.value[0].month === month + 1){
                return false
            }
            
            CurrentMonthFn = calendarList.value[0].month + 2
            newYear = CurrentMonthFn > 12 ? calendarList.value[0].year + 1 : calendarList.value[0].year
            newMonth = CurrentMonthFn > 12 ? CurrentMonthFn - 12 : CurrentMonthFn
            newFirstDay = new Date(newYear, newMonth - 1, 1).getDay();

            nextMonthFn = calendarList.value[1].month + 2
            newNextYear = nextMonthFn > 12 ? calendarList.value[1].year + 1 : calendarList.value[1].year
            newNextMonth = nextMonthFn > 12 ? nextMonthFn - 12 : nextMonthFn
            newNextFirstDay = new Date(newNextYear, newNextMonth - 1, 1).getDay();
            
        }

        calendarList.value = [
            {
                date: monthList.value[newMonth - 1 ] + ' ' + newYear,
                daysInMonth: new Date(newYear, newMonth, 0).getDate(),
                firstDayOffset: (newFirstDay === 0 ? 6 : newFirstDay - 1),
                lastDayOffset: 7 - new Date(newYear, newMonth, 0).getDay(),
                year: newYear,
                month: newMonth
            },{
                date: monthList.value[newNextMonth - 1] + ' ' + newNextYear,
                daysInMonth: new Date(newNextYear, newNextMonth, 0).getDate(),
                firstDayOffset: (newNextFirstDay === 0 ? 6 : newNextFirstDay - 1),
                lastDayOffset: 7 - new Date(newNextYear, newNextMonth, 0).getDay(),
                year: newNextYear,
                month: newNextMonth
            }
        ]
       
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
                height: 500px;
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
                        display: flex;
                        justify-content: space-between;
                        height: 27px;
                        font-size: 20px;
                        font-family: Semibold;
                        color:#121212;

                        div{
                            width: 24px;
                            height: 24px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    .week {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 32px;
                        margin-bottom: 18px;

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
                        gap: 18px;


                        span{
                            font-size: 14px;
                            width: 34px;
                            text-align: center;
                            height: 27px;
                            line-height: 27px; 
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
                // justify-content: flex-end;
                justify-content: space-between;

                .footer-left{
                    display: flex;
                    font-family: Semibold;
                    font-size: 16px;
                    color: #121212;
                    line-height: 48px;
                    
                    .footer-left-Date {
                        width: 125px;
                        height: 48px;
                        border: 2px solid #F3F3F3;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .sumDays{
                        margin-left: 28px;
                        color: #FF401A;
                        font-size: 16px;
                        
                        
                    }
                    .line {
                        margin: 0 20px;
                    }
                }
                .footer-right{
                    display: flex;
                    .foot-btn{
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
                    .Cancel{
                        font-family: Regular;
                        text-align: center;
                        font-size: 20px;
                        color: #CCCCCC;
                        line-height: 48px;
                        margin-right: 40px;
                    }
                }
                
            }
        }
    }
    // 选择框hover
    .L-Calendar:hover {
        outline: 2px solid #FF401A;  /* 使用 outline 模拟边框 */
    }
    // 日期选中样式
    .active{
        background: #121212;
        border-radius: 4px;
        color: #FFFFFF !important;
    }
    .include{
        background: #F3F3F3;
        border-radius: 4px;
        color: #121212 !important;
    }
</style>