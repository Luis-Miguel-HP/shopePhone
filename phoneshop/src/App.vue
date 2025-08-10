<script setup lang="ts">
import { productos } from './db/db'
import{ref} from "vue"
import Producto from './components/producto.vue'

const prod = productos
const cell = ref<any[]>([]);

const agregarCarrito = (phone: any) => {
  phone.cantidad = 1;
  cell.value.push(phone);
  console.log(phone) 

};

</script>

<template>
  <!-- NAVBAR -->
  <header class="bg-black text-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <h1 class="text-2xl font-bold">iPhone Store</h1>

      <nav class="hidden space-x-6 md:block">
        <a href="#" class="transition hover:text-blue-400">Inicio</a>
        <a href="#productos" class="transition hover:text-blue-400">Productos</a>
        <a href="#contacto" class="transition hover:text-blue-400">Contacto</a>
      </nav>

      <!-- Carrito -->
      <div class="carrito relative group">
        <img
          src="/img/carrito.png"
          alt="Carrito"
          class="block h-auto w-8 cursor-pointer select-none"
          tabindex="0"
        />

        <!-- Dropdown -->
        <div
          id="carrito"
          class="absolute right-0 top-full z-50 hidden min-w-[420px] w-max rounded-xl bg-white p-4 text-black shadow-xl group-hover:block group-focus-within:block"
        >
         

          <table class="w-full border-collapse">
            <thead>
              <tr class="text-left text-sm">
                <th class="border-b border-gray-200 px-2 py-2 font-semibold">Imagen</th>
                <th class="border-b border-gray-200 px-2 py-2 font-semibold">Nombre</th>
                <th class="border-b border-gray-200 px-2 py-2 font-semibold">Precio</th>
                <th class="border-b border-gray-200 px-2 py-2 font-semibold">Cantidad</th>
                <th class="border-b border-gray-200 px-2 py-2 font-semibold"></th>
              </tr>
            </thead>
            <tbody class="align-middle text-sm">
              <tr class="hover:bg-gray-50">
                <td class="px-2 py-2">
                  <img src="/public/img/Telefonos/telefono1.webp" alt="" class="h-20 w-20  object-cover" />
                </td>
                <td class="px-2 py-2">
                  iPhone 
                </td>
                <td class="px-2 py-2 font-semibold">
                  $999
                </td>
                <td class="px-2 py-2">
                  <div class="flex items-center gap-2">
                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-gray-800">
                      −
                    </button>
                    <span class="select-none">1</span>
                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-gray-800">
                      +
                    </button>
                  </div>
                </td>
                <td class="px-2 py-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-red-700"
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p class="mt-3 text-right text-sm">
            Total pagar: <span class="font-semibold">$0.00</span>
          </p>
          <button
            type="button"
            class="mt-3 w-full rounded-md bg-gray-900 p-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
      <!-- /Carrito -->
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="bg-white py-20 shadow-lg">
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
      <!-- Texto -->
      <div>
        <h2 class="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Descubre el poder del iPhone
        </h2>
        <p class="mb-6 text-lg text-gray-600">
          Últimos modelos con tecnología de punta, diseños elegantes y rendimiento superior.
        </p>
        <a
          href="#productos"
          class="inline-block rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow transition duration-300 hover:bg-blue-600"
        >
          Comprar ahora
        </a>
      </div>

      <!-- Imagen -->
      <div>
        <img src="/img/logo.png" alt="iPhone Promoción" class="w-full rounded-xl shadow-xl" />
      </div>
    </div>
  </section>

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
