<script setup lang="ts">
import { RouterView } from 'vue-router'
import Github from "@/components/icons/Github.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
</script>

<template>
  <div class="min-h-screen w-full font-mont bg-slate-900 flex justify-center box-border">
    <RouterView />

    <!-- Label links -->
    <div class="animate-slideleftoutside animate-slideleft fixed left-6 bottom-0 hidden md:flex justify-between items-center flex-col select-none">
      <Github />
      <LinkedIn />
      <div class="bg-slate-400 rounded w-1 h-28"></div>
    </div>

    <!-- Label rechts -->
    <div class="animate-sliderightoutside animate-slideright fixed right-6 bottom-0 hidden md:flex justify-between items-center flex-col select-none ">
      <div class="[writing-mode:vertical-lr] text-slate-400 mb-2"> Marcel Blankschein</div>
      <div class="bg-slate-400 rounded w-1 h-28"></div>
    </div>
  </div>
</template>
