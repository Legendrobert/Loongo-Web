<template>
  <div class="login">
    <div class="left">
        <img :src="relax" width="152" height="135">
        <p class="texts">Come and check your unique itinerary!</p>
        <p class="notes">Also explore more interesting contents with the magic of AI</p>
        <!-- 自定义登陆 -->       
        <div class="signInSelf"
            v-if="showSignInSelf">
            <el-form 
                ref="ruleFormRef"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="auto"
                class="demo-ruleForm"
            >
                <el-form-item label="Username" prop="username">
                    <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Email" prop="email">
                    <el-input v-model="ruleForm.email" type="email" autocomplete="off" />
                </el-form-item>  
            </el-form>
            <div class="register" @click="toLoginClick">Register</div>
        </div>
        <!-- 第三方登录 -->
        <div v-else>
            <div class="signInGoogle" @click="toLoginClick">
                <svgGoogle class="svg"></svgGoogle>
                <span>Sign in with Google</span>
            </div>
            <div class="signInOthers">
                <div class="buttonStyle">
                    <svgTwitter class="svg"></svgTwitter>
                    <span>Sign in with X</span>
                </div>
                <div class="buttonStyle">
                    <svgApple class="svg"></svgApple>
                    <span>Sign in with Apple</span>
                </div>
            </div>
        </div>
        
    </div>
    <div class="right">
        <div class="cardItem" :style="carouselStyle" ref="carouselInner">
            <div v-for="(item, index) in cardPicList" :key="'original-' + index" class="carousel-item">
                <img :src="item.imgName"  />
                <div class="province">
                    <svgLocation class="svgStyle" :fill="'#FFF'" :width="16" :height="16"></svgLocation>
                    <span>SICHUAN</span>
                </div>           
                <span class="city">chengdu</span> 
            </div>
        
            <div v-for="(item, index) in cardPicList" :key="'copy-' + index" class=" carousel-item">
                <img :src="item.imgName" />
                <div class="province">
                    <svgLocation class="svgStyle" :fill="'#FFF'" :width="16" :height="16"></svgLocation>
                    <span>SICHUAN</span>
                </div>           
                <span class="city">chengdu</span> 
            </div> 
        </div>              
    </div>  
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, nextTick } from 'vue';
import request from '@/utils/request'
import { useRouter, useRoute } from 'vue-router'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgGoogle from "@/components/svg-icons/svg-google.vue"
import svgTwitter from "@/components/svg-icons/svg-twitter.vue"
import svgApple from "@/components/svg-icons/svg-apple.vue"
import { useStore } from 'vuex'
import { Message } from 'element-plus'
const relax = ref( require('@/assets/imgs/relax.png') );
const router = useRouter()
const route = useRoute()
const store = useStore()

// Vue 3 中的响应式数据
const showSignInSelf = ref(true)
const ruleFormRef = ref(null)
const ruleForm = reactive({
    username: '',
    email: '',
    password: ''
})

// 验证用户名
const validateUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

// 验证密码
const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

// 验证邮箱
const validateEmail = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the email address'))
  } else {
    // 邮箱格式正则表达式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(value)) {
      callback(new Error('Please input a valid email address'))
    } else {
      callback()
    }
  }
}

const rules = reactive({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
})

const requestId = ref(null)
const speed = ref(1.5); // 调整滚动速度（值越大滚动越快）
const scrollHeight = ref(205);
const isTransitioning = ref(false);
const loading = ref(false)
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

// 引用 DOM 元素
const carouselInner = ref(null);

// 计算属性来动态设置轮播容器的样式
const carouselStyle = computed(() => {
  return {
    transform: `translateY(-${scrollHeight.value}px)`, // 修改为竖向滚动
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none',
  };
});

// 启动平滑滚动
const startAutoScroll = () => {
  const step = () => {
    scrollHeight.value += speed.value;

    // 获取单个 item 的高度 + 间隔
    const itemHeight = carouselInner.value?.children[0]?.offsetHeight || 0;
    const itemMargin = 28;
    const totalHeight = (itemHeight + itemMargin) * cardPicList.length;

    // 滚动到底部时，立即回到顶部，形成无缝循环
    if (scrollHeight.value >= totalHeight) {
      scrollHeight.value = 0;
    }

    requestId.value = requestAnimationFrame(step);
  };
  requestId.value = requestAnimationFrame(step);
};

// 点击登录
const toLoginClick = async () => {
    if (loading.value) return
    
    loading.value = true
    try {
        const response = await request.post('/auth/register', {
            // 这里需要根据后端 API 文档补充具体的登录参数
            username: 'shyan',
            email: 'shyan@gmail.com',
            password: '123456'
            
        });
        
        if (response.data.code === 200) {
            // 登录成功，保存 token 和用户信息
            store.commit('all/SET_TOKEN', response.data.data.token);
            store.commit('all/SET_USER_INFO', response.data.data.userInfo);
            store.commit('all/SET_LOGIN_STATUS', true);
            
            Message.success('登录成功');
            // 跳转到已登录页面
            router.push({ name: 'LoggedIn' });
        } else {
            Message.error(response.data.message || '登录失败');
        }
    } catch (error) {
        console.error('登录错误:', error);
        Message.error(error.response?.data?.message || '登录失败，请稍后重试');
    } finally {
        loading.value = false;
    }
}

// 组件挂载后启动滚动
onMounted(() => {
  nextTick(() => {
    startAutoScroll();
    // const res = request.get('/your/api')
    console.log('/your/api')
  });
});


</script>

<style lang="less" scoped>
.login{
    height: calc(100vh - 88px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
    box-sizing: border-box;
    .left{
        width: 560px;
        height: 652px;
        margin-right: 80px;


        img{
            margin-left: 4px;
            margin-top: 12px; 
        }
        .texts{
            font-size: 40px;
            line-height: 60px;
            color: #121212;
            margin-top: 24px;
        }
        .notes{
            font-size: 20px;
            line-height: 27px;
            font-family: Regular;
            color: #B1B0B0;
            margin-top: 24px;
            padding: 0;
        }
        .signInSelf{
            margin-top: 48px;
            ::v-deep .el-input__wrapper{
                border-radius: 16px;
                border: 1px solid #CCCCCC;
                height: 40px;
                
            }
            ::v-deep .el-form-item__label {
                line-height: 40px;
                font-size: 16px;
            }
            .register{
                width: 100%;
                height: 50px;
                border-radius: 16px;
                background: #FF401A;
                color: #fff;
                line-height: 50px;
                text-align: center;
                font-size: 20px;
                font-family: Bold;
                margin-top: 24px;
            }
        }
        .signInGoogle{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
            border-radius: 16px;
            background: #FF401A;
            color: #fff;
            font-family: Bold;
            font-size: 24px;
            line-height: 80px;
            text-align: center;
            margin-top: 75px;

            span{
                margin-left: 16px;
            }
            .svg{
                margin-top: 20px;
            }
        }
        .signInOthers{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 40px;

            .buttonStyle{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 64px;
                border: 2px solid #CCCCCC;
                border-radius: 16px;
                line-height: 62px;
                text-align: center;
                background: #FFFFFF;
                font-size: 20px;
                font-family: Regular;
                color: #595959;

                span{
                    margin-left: 16px;
                }
                .svg{
                    margin-top: 10px;
                }
            }
        }
    }
    .right{
        width: 640px;
        height: 652px;
        background: #FFEEE6;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 28px;
        overflow: hidden;
        position: relative;
       
        .cardItem{
            width: 240px;
            height: 240px !important;          
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 28px;

            img{
                border-radius: 16px;
                width: 240px;
                height: 240px;
            }

            .province{
                position: absolute;
                left: 16px;
                top: 16px;
                display: flex;
                color: #F3F3F3;
                font-size: 14px;

                .svgStyle{
                    margin-top: 2px;
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
        }
    }
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.carousel-item {
  position: relative;
}


}
</style>