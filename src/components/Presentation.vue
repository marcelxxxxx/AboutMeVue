<script setup lang="ts">

</script>

<template>
  <div class="relative animate-aboutmeslide w-full h-min min-h-full pb-10 px-4 box-border transition-all duration-500 grid grid-cols-1 md:grid-cols-4 gap-x-2">

    <!-- Bild mit Hoverffekt -->
    <div class="relative group flex justify-center h-[250px] min-w-[150px] mt-3 md:col-span-1">
      <div class="-z-6 w-[250px] h-[250px] border-4 border-emerald-400 rounded-xl translate-x-4 translate-y-4 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
      <img src="../assets/marcel.jpg" width="200px" height="250px" class="absolute top-0 left-auto rounded-xl w-[250px] h-[250px] object-cover object-top" alt="Bild von einem jungen Softwareentwickler">
    </div>

    <div class="transition-all duration-500 ml-0 mt-5 md:mt-0 md:ml-5 md:col-span-3">
      <span class="text-emerald-400 tracking-tight text-nowrap"> &#60; p &#62; </span>
      <p class="inline text-white">
        Mein Name ist Marcel, ich bin 30 Jahre alt und befinde mich derzeit in der
        Ausbildung zum Fachinformatiker für Anwendungsentwicklung in Bochum.
        Zuvor habe ich im Jahr 2021 erfolgreich meine Ausbildung zum Kaufmann im Einzelhandel abgeschlossen.
        Der Schritt in die Softwareentwicklung entstand aus einer langjährigen Begeisterung für Technologie und dem Wunsch,
        komplexe Probleme mit durchdachten digitalen Lösungen zu beheben.

        Programmieren ist für mich weit mehr als nur ein beruflicher Weg.
        Seit mehreren Jahren beschäftige ich mich intensiv mit Softwareentwicklung,
        entwickle eigene Projekte und nehme regelmäßig an Programmierwettbewerben teil.
        Dabei steht für mich nicht nur das Schreiben von Code im Mittelpunkt, sondern vor allem das Verständnis für saubere Architektur,
        effiziente Lösungen und nachhaltige Software.
        Mein besonderes Interesse gilt modernen Technologien, Programmiersprachen und Frameworks.
        Ich verfolge aktuelle Entwicklungen in der Softwarebranche aufmerksam und nutze neue Werkzeuge gezielt,
        um meine Projekte technisch und konzeptionell weiterzuentwickeln.
        Meine ersten Erfahrungen sammelte ich mit Java.
        In den letzten Jahren habe ich meinen Schwerpunkt zunehmend auf moderne Webentwicklung mit Vue.js
        gelegt und meine Kenntnisse in diesem Bereich kontinuierlich vertieft.
        Darüber hinaus habe ich Erfahrung mit weiteren Sprachen wie Kotlin und Python gesammelt.
        In meinen eigenen Projekten setze ich überwiegend auf das Backend-Framework Ktor und
        arbeite im Frontend mit Vue.js. Mein Anspruch ist es, performante, skalierbare und klar strukturierte Anwendungen zu entwickeln,
        die sowohl technisch überzeugen als auch eine intuitive und durchdachte Nutzererfahrung bieten.
      </p>

      <span class="text-emerald-400 tracking-tight text-nowrap"> &#60;&#47; p &#62;</span>

      <p class="text-white mt-3.5" id="technologies"> Aktuell benutze ich folgende Technologien: </p>

      <ul class="w-[80%] grid grid-cols-2 gap-y-1 text-white mt-2">
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Java </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Kotlin (Ktor) </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Rust </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> JavaScript</li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> Tailwind CSS </li>
        <li class="text-nowrap pr-0.5 before:content-['▹'] before:text-emerald-400"> SQL </li>
      </ul>
    </div>
  </div>
</template>