<script setup lang="ts">
import Navbar from "@/components/navbar/Navbar.vue";
import Introduction from "@/components/Introduction.vue";
import Worked from "@/components/Worked.vue";
import Trennstrich from "@/components/style/Trennstrich.vue";
import Presentation from "@/components/Presentation.vue";
</script>

<template>
  <div class="relative w-full md:max-w-[750px] h-full px-2 md:p-0 box-border">
    <Navbar />

    <Introduction />

    <Trennstrich name="Über mich" />

    <Presentation />

    <Trennstrich name="Beruflicher Werdegang" />

    <Worked />

    <!-- RECHTLICHES -->
    <div class="w-full h-6">
     <RouterLink to="/impressum" class="text-white text-xs hover:underline">
        Impressum
      </RouterLink>

      <RouterLink to="/datenschutz" class="text-white text-xs hover:underline">
        Datenschutz
      </RouterLink>
    </div>
  </div>
</template>
