<script setup lang="ts">
</script>

<template>
  <div class="animate-jobslide relative flex h-130 min-h-130 md:h-115 md:min-h-115 box-border" id="worked">
    <!-- Navbar-->
    <div class="relative grid grid-cols-2 md:flex md:justify-start md:flex-col gap-y-1 mb-3 w-full md:w-1/4 mt-2 transition-all duration-500 box-border">
      <!-- SOCOTEC INGENIEURE AG -->
      <label class="w-full min-h-max h-12 block cursor-pointer">
        <input type="radio" name="company" class="peer hidden" value="SOCOTEC INGENIEURE AG" checked/>

        <div class="flex justify-center items-center h-full w-full bg-slate-900 font-mono font-bold text-sm text-white"> SOCOTEC INGENIEURE AG </div>

        <!-- Border effekt -->
        <div class="absolute left-0 top-[30px] w-1/2 md:w-full h-4 border-b-4 border-emerald-400 opacity-0 peer-checked:opacity-100 transition-all duration-1000 ease-in"></div>

        <!-- Aufgabenbeschreibung und detaillierte Informationen -->
        <div class="absolute top-12 md:top-2 left-0 md:left-full pl-4 md:pl-3.5 pr-3.5 mt-3 md:mt-0 min-h-min text-white box-border opacity-0 peer-checked:opacity-100 z-0 peer-checked:z-10 transition-all duration-1000 ease-in">
          <a href="https://www.socotec.de/socotec-ingenieure" target="_blank" class="text-emerald-400 font-bold py-0.5 text-xl">
            SOCOTEC INGENIEURE AG
          </a>

          <div class="w-full h-4"></div>

          <div class="text-lg font-bold pointer-events-none" > Ausbildung zum Fachinformatiker für Anwendungsentwicklung </div>
          <div class="text-white text-xs" id="zpp_date"> August 2023 - Juli 2026 </div>

          <div class=" w-full h-4"></div>

          <div class="text-white py-2 text-lg" >
            Meine Aufgaben sind:
          </div>

          <ul class="grid grid-cols-1 gap-y-1 text-white w-full md:w-[350px]">
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="task_one_zpp"> Planung, Entwicklung und Fehlerbehebung in HCL Notes </li>
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="task_two_zpp"> Dokumentation erstellen </li>
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="task_three_zpp"> Frontend und Backendentwicklung mit JSF und JavaScript </li>
          </ul>
        </div>
      </label>

      <!-- JYSK SE -->
      <label class="w-full min-h-max h-12 block cursor-pointer">
        <input type="radio" name="company" id="jysk" class="peer hidden" value="jysk"/>
        <div class="flex justify-center items-center h-full w-full bg-slate-900 font-mono font-bold text-sm text-white">
          JYSK SE
        </div>

        <!-- Border effekt -->
        <div class="absolute left-1/2 md:left-0 top-[30px] md:top-[81px] w-1/2 md:w-full h-4 border-b-4 border-emerald-400 opacity-0 peer-checked:opacity-100 transition-all duration-1000 ease-in"></div>

        <!-- Aufgabenbeschreibung und detaillierte Informationen -->
        <div class="absolute top-12 md:top-2 left-0 md:left-full pl-4 md:pl-3.5 pr-3.5 mt-3 md:mt-0 min-h-min text-white box-border opacity-0 peer-checked:opacity-100 z-0 peer-checked:z-10 transition-all duration-1000 ease-in">
          <a href="https://jysk.de/" target="_blank" class="relative text-emerald-400 font-bold py-0.5 text-xl">
            JYSK SE
          </a>

          <div class=" w-full h-4"></div>

          <div class="pointer-events-none text-lg font-bold" id="jysk_headline_one"> Ausbildung zum Kaufmann im Einzelhandel </div>
          <div class="text-white text-xs" id="jysk_date_one"> August 2018 - Juli 2021 </div>

          <div class=" w-full h-4"></div>

          <div class="pointer-events-none text-lg font-bold" id="jysk_headline_two"> Verkäufer </div>
          <div class="text-white text-xs" id="jysk_date_two"> August 2021 - Juli 2023 </div>

          <div class=" w-full h-4"></div>

          <div class="text-white py-2 text-lg" id="jysk_task">
            Meine Aufgaben waren:
          </div>

          <ul class="grid grid-cols-1 gap-y-1 text-white w-full md:w-[350px]">
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="jysk_task_one"> Lagerhaltung </li>
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="jysk_task_two"> Waren- und Regalpflege </li>
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="jysk_task_three"> Bearbeitung von Kundenanfragen (telefonisch und persönlich) </li>
          </ul>

          <div class="text-white py-2 text-lg" id="jysk_special_task">
            Zusatzaufgaben:
          </div>

          <ul class="grid grid-cols-1 gap-y-1 text-white w-full md:w-[350px]">
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="jysk_special_task_one"> Vertretung der Filialleitung </li>
            <li class="pr-0.5 before:content-['▹'] before:text-emerald-400" id="jysk_special_task_two"> Fachberater für Liegeergonomie </li>
          </ul>
        </div>
      </label>
    </div>
    <!-- Ende Job div -->
  </div>
</template>