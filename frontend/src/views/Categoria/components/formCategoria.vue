<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Ingreso de categoría</h2>
    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      <!-- Nombre de la categoría -->
      <div class="mb-3">
        <label for="nombre_categoria" class="form-label">Nombre de la categoría:</label>
        <!-- Input de texto para ingresar el nombre de la categoría -->
        <input
          type="text"
          id="nombre_categoria"
          v-model="formData.nombre_categoria"
          class="form-control"
          placeholder="Ingrese el nombre de la categoría"
          required
        />
      </div>

      <!-- Botón de Envío -->
      <button type="submit" class="btn btn-primary w-100">Añadir</button>
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

  // Aquí puedes manejar el envío o almacenamiento de los datos
  console.log('Datos enviados:', formData.value);
};
</script>
