<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full font-mont bg-slate-900 flex justify-center items-center box-border">
    <RouterView />

    <!-- Label links -->
    <div class="animate-slideleftoutside animate-slideleft fixed left-6 bottom-0 flex justify-between items-center flex-col select-none">
      <a href="https://github.com/wwwmarcx" target="_blank" class="visited:text-slate-400"><i class="fa-brands fa-github text-slate-400 text-xl hover:text-emerald-400 cursor-pointer mb-2.5"></i></a>
      <!--<a href="https://www.xing.com/profile/Marcel_Blankschein2/web_profiles" target="_blank" class="visited:text-slate-400"><i class="fa-brands fa-xing text-slate-400 text-xl hover:text-emerald-400 cursor-pointer mb-2.5"></i></a>-->
      <div class="bg-slate-400 rounded w-1 h-28"></div>
    </div>

    <!-- Label rechts -->
    <div class="animate-sliderightoutside animate-slideright fixed right-6 bottom-0 flex justify-between items-center flex-col select-none">
      <div class="[writing-mode:vertical-lr] text-slate-400 mb-2"> Marcel Blankschein</div>
      <div class="bg-slate-400 rounded w-1 h-28"></div>
    </div>
  </div>
</template>
