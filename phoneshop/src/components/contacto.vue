<script setup>
</script>

<template>
  <h1 class="text-center mb-10 text-4xl font-bold leading-tight md:text-5xl">
    ¡PONTE EN CONTACTO CON NOSOTROS!
  </h1>

  <div class="shadow-md flex flex-col md:flex-row justify-center md:space-x-8 bg-gray-100 px-6 py-8">
    <!-- Formulario -->
    <div class="w-full max-w-[600px] shadow-xl h-auto bg-white mt-6 mb-5 rounded-xl p-6">
      <h1 class="text-center mt-4 text-2xl font-bold">Contáctanos</h1>
      <form class="space-y-4 mt-6">
        <div>
          <label class="block font-medium mb-2">Nombre:</label>
          <input 
            type="text" 
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Ingresa tu nombre"
          >
        </div>

        <div>
          <label class="block font-medium mb-2">Correo:</label>
          <input 
            type="email" 
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Ingresa tu correo"
          >
        </div>

        <div>
          <label class="block font-medium mb-2">Mensaje:</label>
          <textarea 
            rows="4"
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Enviar
        </button>
      </form>
    </div>

    <!-- Mapa -->
    <div class="w-full max-w-[500px] rounded-md mt-6 mb-20 overflow-hidden shadow-lg bg-white">
      <iframe 
        class="w-full h-[350px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799077778!2d-74.25987368707483!3d40.69767006480838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzM5LjYiTiA3NMKwMTUnNTkuOCJX!5e0!3m2!1ses!2sus!4v1614648492370!5m2!1ses!2sus" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
      <p class="text-center py-3 font-medium text-gray-700">Dónde nos ubicamos</p>
    </div>
  </div>
</template>

<style scoped>
</style>
