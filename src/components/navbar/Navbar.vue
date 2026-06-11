<script setup lang="ts">
import Github from "@/components/icons/Github.vue";
</script>

<template>
  <div class="flex w-full justify-between items-center h-12 box-border z-10 top-0 p-1 bg-slate-900 scroll-smooth">
    <h1 class="font-extra-bold text-xl text-emerald-400"> &#60; MARCEL &#47;&#62;</h1>
    <div class="h-full hidden md:block">
      <ul class="relative m-0 p-0 h-full flex items-center justify-center pr-7">
        <li class="animate-slide1 mx-0.5 text-emerald-400 text-sm p-1 cursor-pointer transition duration-300"> &#60; <a class="hover:text-white visited:text-white"><span class="text-white">Hi</span></a> &#47;&#62; </li>
        <li class="animate-slide2 mx-0.5 text-emerald-400 text-sm p-1 cursor-pointer transition duration-300"> &#60; <a class="hover:text-white visited:text-white" href="#aboutme"><span class="text-white" id="aboutmenav">Über mich</span></a> &#47;&#62; </li>
        <li class="animate-slide3 mx-0.5 text-emerald-400 text-sm p-1 cursor-pointer transition duration-300"> &#60; <a class="hover:text-white visited:text-white" href="#worked"><span class="text-white">Jobs</span></a> &#47;&#62; </li>
      </ul>
    </div>
    <Github class="inline-block md:hidden"/>
  </div>
</template>