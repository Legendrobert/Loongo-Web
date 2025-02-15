<template>
  <div class="Itinerary">
    <LoggedIn v-if="isUser"></LoggedIn>
    <NotLoggedIn v-else @isUserFn="isUserFn"></NotLoggedIn>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import LoggedIn from '@/views/Itinerary/loggedIn.vue'
    import NotLoggedIn from "@/views/Itinerary/notLoggedIn.vue"
    const isUser = ref(false)

    const isUserFn = (val)=>{
        isUser.value = val
    }
</script>

<style lang="less" scoped>
.Itinerary{
  
}
</style>