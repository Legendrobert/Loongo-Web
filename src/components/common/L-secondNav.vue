<!-- 二级导航 -->
<template>
  <div class="secondNav">
        <ul class="header-nav-left">
            <li v-if="showMap" class="toLeft">
            <toLeft @click="handleClickMap"></toLeft>
            </li>
            <li 
                v-for="(item,index) in parentRoute.children"
                :key="index"
                :class="{'activeNav': isActive(item.name)}"
                @click="updateActive(item.name)"
            >{{item.name}}</li>
      </ul>
      <ul class="header-nav-right">
        <li>
          <svgSearch 
            v-show="showSearchSvg"
            @click="handleClickSearch()"
          ></svgSearch>
          <el-input
            ref="inputRef"
            v-show="!showSearchSvg"
            
            v-model="searchInput"
            placeholder="Search city, region, province.."
            @blur="inputBlur"
          >
            <template #prefix>
              <svgSearch class="el-input__icon" :width="16" :height="16"></svgSearch>
            </template>
          </el-input>
        </li>
        <li 
          v-if="!showMap"
          @click="handleClickMap()"
 
        >
          <svgMap :showMap="showMap"></svgMap>
        </li>
        <!-- <li>
          <svgAI></svgAI>
        </li> -->
      </ul>
  </div>
</template>

<script setup>
// import { ref } from 'vue';

</script>

<style lang="less" scoped>
.secondNav{

}
</style>