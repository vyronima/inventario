<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Ingreso de Producto</h2>
    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      <!-- Nombre del producto -->
      <div class="mb-3">
        <label for="nombre_producto" class="form-label">Nombre del producto:</label>
        <input 
          type="text" 
          class="form-control" 
          id="nombre_producto" 
          v-model="formData.nombre_producto" 
          placeholder="Ingrese el nombre del producto"
          required
        />
      </div>

      <!-- Cantidad -->
      <div class="mb-3">
        <label for="cantidad" class="form-label">Cantidad:</label>
        <input 
          type="number" 
          class="form-control" 
          id="cantidad" 
          v-model="formData.cantidad" 
          placeholder="Ingrese la cantidad"
          required
        />
      </div>

      <!-- Categoría -->
      <div class="mb-3">
        <label for="categoria" class="form-label">Categoría:</label>
        <select 
          class="form-select" 
          id="categoria" 
          v-model="formData.categoria" 
          required
        >
          <option value="" disabled>Seleccione una categoría</option>
          <option v-for="categoria in categorias" :key="categoria" :value="categoria">
            {{ categoria }}
          </option>
        </select>
      </div>

      <!-- Botón de Envío -->
      <button type="submit" class="btn btn-primary w-100">Guardar</button>
    </form>

    <!-- Lista de productos -->
    <div v-if="productos.length" class="mt-5">
      <h3 class="text-center mb-3">Productos Ingresados</h3>
      <ul class="list-group">
        <li 
          v-for="(producto, index) in productos" 
          :key="index" 
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            <strong>{{ producto.nombre_producto }}</strong> - 
            Cantidad: {{ producto.cantidad }} - 
            Categoría: {{ producto.categoria }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

// Datos del formulario
const formData = ref({
  nombre_producto: '',
  cantidad: '',
  categoria: '', // Nuevo campo para la categoría
});

// Lista de categorías (puedes sustituir con una API en el futuro)
const categorias = ref(['Electrodomésticos', 'Muebles', 'Juguetes', 'Ropa']);

// Lista de productos
const productos = ref([]);

// Función para manejar el envío del formulario
const handleSubmit = () => {
  // Validar datos del formulario
  if (!formData.value.nombre_producto || !formData.value.cantidad || !formData.value.categoria) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor complete todos los campos.',
      confirmButtonText: 'Aceptar',
    });
    return;
  }

  // Guardar el producto en la lista
  productos.value.push({ ...formData.value });

  // Limpiar formulario
  formData.value.nombre_producto = '';
  formData.value.cantidad = '';
  formData.value.categoria = '';

  // Mostrar SweetAlert de éxito
  Swal.fire({
    icon: 'success',
    title: 'Producto Guardado',
    text: 'El producto se guardó correctamente.',
    confirmButtonText: 'Aceptar',
  });
};
</script>
