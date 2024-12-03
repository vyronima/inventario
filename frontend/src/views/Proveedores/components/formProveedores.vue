<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">ingreso de Proveedores</h2>
      <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
        <!-- Nombre del proveedor -->
        <div class="mb-3">
          <label for="nombre_producto" class="form-label">Nombre del Proveedores:</label>
          <select class="form-select" v-model="formData.departamento" required>
              <option value="" >Jose Alvarez</option>
              <option value="Antioquia">Manuela Escobar</option>
              <option value="Cundinamarca">Luis Perez</option>
              <option value="Valle del Cauca">ramon Valadez</option>
            </select>
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
    nombre_proveedores: '',
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
  