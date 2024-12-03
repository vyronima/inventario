<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">ingreso de Movimientos</h2>
      <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
        <!-- Nombre del categoria -->
        <div class="mb-3">
          <label for="nombre_movimientos" class="form-label">Nombre del producto:</label>
          <input 
            type="text" 
            class="form-control" 
            id="nombre_movimientos" 
            v-model="formData.nombre_movimientos" 
            placeholder="Ingrese el nombre del producto"
            required
          />
        </div>
  
       
        <!-- Botón de Envío -->
        <button type="submit" class="btn btn-primary w-100">Buscar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Swal from 'sweetalert2';
  
  // Datos del formulario
  const formData = ref({
    nombre_categoria: '',
    departamento: '',
    ciudad: '',
    direccion: '',
    telefono: '',
    nombreAdmin: '',
  });
  
  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Mostrar SweetAlert de éxito
    Swal.fire({
      icon: 'success',
      title: 'Formulario Enviado',
      text: 'Los datos se enviaron correctamente.',
      confirmButtonText: 'Aceptar',
    });
  
    console.log('Datos enviados:', formData.value);
  };
  </script>
  