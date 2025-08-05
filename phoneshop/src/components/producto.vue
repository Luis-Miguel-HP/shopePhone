import { productos } from '../db/db';
<script setup>



const {producto} = defineProps({
  producto: Object
})

</script>
<template>

       <div class="flex gap-6">
      <div>
        <img class="w-48 h-auto rounded-lg" src="" :alt="' imagen' +  producto.imagen">
      </div>
      <div class="flex flex-col gap-5 w-[200px]">
        <h2 class="text-xl font-bold">{{ producto.nombre }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p class="text-2xl text-blue-700 font-bold">$300</p>
        <button class="inline-block text-white font-bold bg-black font-semibold  text-sm  px-5 py-3  rounded-lg">AGREGAR AL CARRITO</button>
      </div>
    </div>

</template>




<style scoped>
</style>