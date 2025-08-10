
<script setup>




const {producto} = defineProps({
  producto: Object

  
})

defineEmits(["enviar"])



</script>
<template> 

       <div class="ml-10 flex gap-3 mb-10">
      <div>
        <img class="w-48 h-[200px] rounded-lg" :src="'/img/Telefonos/'+producto.imagen+'.webp'" :alt="'imagen ' +  producto.imagen">

      </div>
      <div class="flex flex-col gap-5 w-[200px]">
        <h2 class="text-xl font-bold">{{ producto.nombre }}</h2>
        <p>{{ producto.descripcion }}</p>
        <p class="text-2xl text-blue-700 font-bold">${{ producto.precio }}</p>
        <button 
        class="inline-block text-white font-bold bg-blue-500 font-semibold 
         text-sm  px-5 py-3  rounded-lg"
         @click="$emit ('enviar', producto) "
         >AGREGAR AL CARRITO</button>
      </div>
    </div>

</template>



<style scoped>
</style>