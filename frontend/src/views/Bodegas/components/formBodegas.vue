<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Formulario de Bodega</h2>
    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      <!-- Nombre de la Bodega -->
      <div class="mb-3">
        <label for="nombreBodega" class="form-label">Nombre de la Bodega:</label>
        <input 
          type="text" 
          class="form-control" 
          id="nombreBodega" 
          v-model="formData.nombreBodega" 
          placeholder="Ingrese el nombre de la bodega"
          required
        />
      </div>

      <!-- Ubicación -->
      <div class="mb-3">
        <label class="form-label">Ubicación:</label>
        <div class="row g-2">
          <div class="col-md-4">
            <select class="form-select" v-model="formData.departamento" required>
              <option value="" disabled>Departamento</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
            </select>
          </div>
          <div class="col-md-4">
            <select class="form-select" v-model="formData.ciudad" required>
              <option value="" disabled>Ciudad</option>
              <option value="Medellín">Medellín</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Cali">Cali</option>
            </select>
          </div>
          <div class="col-md-4">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Dirección" 
              v-model="formData.direccion" 
              required 
            />
          </div>
        </div>
      </div>

      <!-- Teléfono -->
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono:</label>
        <input 
          type="tel" 
          class="form-control" 
          id="telefono" 
          v-model="formData.telefono" 
          placeholder="Ingrese el número de teléfono" 
          required
        />
      </div>

      <!-- Nombre del Administrador -->
      <div class="mb-3">
        <label for="nombreAdmin" class="form-label">Nombre del Administrador:</label>
        <input 
          type="text" 
          class="form-control" 
          id="nombreAdmin" 
          v-model="formData.nombreAdmin" 
          placeholder="Ingrese el nombre del administrador" 
          required
        />
      </div>

      <!-- Botón de Envío -->
      <button type="submit" class="btn btn-primary w-100">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

// Datos del formulario
const formData = ref({
  nombreBodega: '',
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
