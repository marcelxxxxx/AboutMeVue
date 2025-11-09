<script setup lang="ts">
import Navbar from "@/components/navbar/Navbar.vue";
import Introduction from "@/components/Introduction.vue";
import Worked from "@/components/Worked.vue";
import Trennstrich from "@/components/style/Trennstrich.vue";
import Presentation from "@/components/Presentation.vue";
</script>

<template>
  <div class="min-w-[750px] max-w-[750px] h-full box-border">
    <Navbar />

    <Introduction />

    <Trennstrich name="About Me" />

    <Presentation />

    <Trennstrich name="Where I have worked" />

    <Worked />
  </div>
</template>
