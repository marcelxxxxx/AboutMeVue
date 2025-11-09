<script setup lang="ts">
import Navbar from "@/components/navbar/Navbar.vue";
import Presentation from "@/components/Presentation.vue";
import Trennstrich from "@/components/style/Trennstrich.vue";
</script>

<template>
  <div class="relative min-w-[750px] max-w-[750px] h-full">
    <Navbar />

    <Presentation />

    <Trennstrich name="About Me" />
  </div>
</template>
