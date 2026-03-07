<script setup lang="ts">
import {onMounted} from "vue";
</script>

<template>
  <div class="relative w-full md:max-w-[750px] h-full px-2 md:p-0 box-border text-white">
    <RouterLink to="/">
      zurück
    </RouterLink>

    <h2 class="font-bold text-3xl my-2"> Impressum </h2>

    <div>Marcel Blankschein</div>
    <div>Uhlandstr. 3</div>
    <div>42549 Velbert</div>
    <div>Deutschland</div>

    <div>Tel.: +4916098015272</div>
    <div>E-Mail: info@marcelblankschein.de</div>
  </div>
</template>