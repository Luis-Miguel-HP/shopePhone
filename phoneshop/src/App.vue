<script setup lang="ts">

import { productos } from './db/db';
import Producto from './components/producto.vue';


const prod = productos;

console.log(prod) 
</script>

<template>

  <!-- NAVBAR -->
  <header class="bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">iPhone Store</h1>
      <nav class="space-x-6 hidden md:block">
        <a href="#" class="hover:text-blue-400">Inicio</a>
        <a href="#productos" class="hover:text-blue-400">Productos</a>
        <a href="#contacto" class="hover:text-blue-400">Contacto</a>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="bg-white py-20 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Texto -->
      <div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Descubre el poder del iPhone
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Últimos modelos con tecnología de punta, diseños elegantes y rendimiento superior. 
        </p>
        <a href="#productos" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300">
          Comprar ahora
        </a>
      </div>

      <!-- Imagen -->
      <div>
        <img src="../public/img/logo.png" alt="iPhone Promoción" class="w-full rounded-xl shadow-xl" />
      </div>
    </div>
  </section>


 <!-- PRODUCTOS -->
<section id="productos" class="py-20 bg-white-100">
  <h2 class="text-center mb-10 text-2xl font-bold">Nuestros teléfonos</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
    <producto
    
    v-for="producto in prod"
    :producto = "producto"
    />


  </div>
</section>





  <!-- FOOTER -->
  <footer id="contacto" class="bg-black text-white py-10 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="mb-4">Contáctanos: contacto@iphonestore.com</p>
      <p>&copy; 2025 iPhone Store. Todos los derechos reservados.</p>
    </div>
  </footer>


</template>

<style scoped>

</style>
