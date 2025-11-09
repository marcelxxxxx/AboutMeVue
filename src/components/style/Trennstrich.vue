<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="animate-aboutmeslide flex items-center justify-center text-nowrap mt-10 transition-all duration-500 box-border">
    <span class="text-xl text-emerald-400 mx-1"> &#60; </span>
    <div class="h-0.5 w-full bg-emerald-400 m-1"></div>
    <span class="text-xl text-white font-mono mx-1"> {{ name }} </span>
    <div class="h-0.5 w-full bg-emerald-400 m-1"></div>
    <span class="text-xl text-emerald-400 mx-1">&#47;&#62;</span>
  </div>
</template>