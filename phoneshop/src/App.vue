<script setup lang="ts">
import { productos } from './db/db'
import{ref} from "vue"
import Producto from './components/producto.vue'
import Header from './components/header.vue'

const prod = productos
const cell = ref<object[]>([]);

const agregarCarrito = (phone: any) => {
  phone.cantidad = 1;
  cell.value.push(phone);
  console.log(phone) 

};

function eliminar(){
  
}

</script>

<template>


<!-- Componente de cabecera -->
 <Header
 :cell = "cell"

@eliminar="cell.splice($event, 1)"
 
 />

  <!-- PRODUCTOS -->
  <section id="productos" class="bg-white-100 py-20">
    <h2 class="mb-10 text-center text-2xl font-bold">Nuestros teléfonos</h2>
    <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

      <!-- componente que contiene como se renderizan los productos -->
      <Producto
        v-for="producto in prod"
        :key="producto.id ?? producto.nombre"
        :producto="producto"
        @enviar="agregarCarrito"
      />
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="contacto" class="mt-12 bg-black py-10 text-white">
    <div class="mx-auto max-w-7xl px-4 text-center">
      <p class="mb-4">Contáctanos: contacto@iphonestore.com</p>
      <p>&copy; 2025 iPhone Store. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style>


</style>
