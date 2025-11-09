<script setup lang="ts">

</script>

<template>
  <div class="relative animate-aboutmeslide flex justify-between w-full h-min pb-10 px-4 box-border transition-all duration-500">

    <!-- Lorem Impsum Text -->
    <div class="w-[70%] transition-all duration-500">
      <span class="text-emerald-400 tracking-tight text-nowrap"> &#60; p &#62; </span>
      <p class="inline text-white">
        Hello, my name is Marcel, I am 28 years old.
        I successfully completed my first apprenticeship as a retail salesperson in 2021 and am currently training to become an IT specialist for application development in Bochum.
        I learned programming a few years ago out of interest and now spend a lot of my free time taking part in programming challenges or developing my own projects.
        I also enjoy familiarizing myself with new technologies, programming languages and frameworks and using them in my own projects.
        I started with Java until I started working with HTML, CSS and JavaScript about 3 years ago and learned other languages like Kotlin and Python.
        In my own projects I now mainly use the backend framework Ktor and in the frontend I use Vue.js
      </p>

      <span class="text-emerald-400 tracking-tight text-nowrap"> &#60;&#47; p &#62;</span>

      <p class="text-white mt-3.5" id="technologies"> I currently use the following technologies: </p>

      <ul class="w-[80%] grid grid-cols-2 gap-y-1 text-white mt-2">
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Java </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Kotlin (Ktor) </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Rust </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> JavaScript</li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Tailwind CSS </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> SQL </li>
      </ul>
    </div>

    <!-- Bild mit Hoverffekt -->
    <div class="relative group w-[30%] flex justify-center h-[250px] min-w-[150px] mt-3">
      <div class="-z-6 w-[250px] h-[250px] border-4 border-emerald-400 rounded-xl translate-x-4 translate-y-4 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
      <img src="../assets/marcel.jpg" width="200px" height="250px" class="absolute top-0 left-auto rounded-xl w-[250px] h-[250px] object-cover object-top" alt="Bild von einem jungen Softwareentwickler">
    </div>
  </div>
</template>