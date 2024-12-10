<template>
  <el-form :model="producto" label-width="120px" @submit.native.prevent="submitForm">
    <el-form-item label="Nombre" :label-width="formLabelWidth">
      <el-input v-model="producto.nombre" placeholder="Nombre del Producto"></el-input>
    </el-form-item>
    
    <el-form-item label="Cantidad" :label-width="formLabelWidth">
      <el-input type="number" v-model="producto.cantidad" placeholder="Cantidad" min="0"></el-input>
    </el-form-item>
    
    <!-- Cambiar de input a select para Categoría -->
    <el-form-item label="Categoría" :label-width="formLabelWidth">
      <el-select v-model="producto.categoria" placeholder="Selecciona una categoría">
        <el-option v-for="categoria in categorias" :key="categoria.id" :label="categoria.nombre" :value="categoria.id"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item label="Disponibilidad" :label-width="formLabelWidth">
      <el-switch v-model="producto.disponible" :active-text="'Disponible'" :inactive-text="'No Disponible'"></el-switch>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="submitForm">Enviar</el-button>
    </el-form-item>
  </el-form>
  
  <!-- Mostrar la lista de productos -->
  <el-table :data="productos">
    <el-table-column prop="nombre" label="Producto" />
    <el-table-column prop="categoria" label="Categoría" />
    <el-table-column prop="cantidad" label="Cantidad" />
    <el-table-column prop="disponible" label="Disponible" />
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'formProductos',
  setup() {
    const producto = ref({
      nombre: '',
      cantidad: 0,
      categoria: '', // Esta categoría ahora será un ID seleccionado desde el select
      disponible: true
    });

    const categorias = ref([]); // Aquí almacenamos las categorías que obtenemos desde la base de datos
    const productos = ref([]);  // Aquí almacenamos la lista de productos

    // Función para obtener las categorías del backend
    const obtenerCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3000/categorias'); // Cambia a la URL correcta si es necesario
        if (response.ok) {
          categorias.value = await response.json(); // Guardamos las categorías en la variable reactiva
          console.log(categorias.value); // Verifica en la consola que las categorías se han cargado correctamente
        } else {
          console.error('Error al cargar las categorías');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Función para obtener los productos
    const obtenerProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/productos');
        if (response.ok) {
          productos.value = await response.json(); // Actualiza la lista de productos
        } else {
          console.error('Error al obtener los productos');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Llamamos a obtenerCategorias cuando el componente se monta
    onMounted(() => {
      obtenerCategorias();
      obtenerProductos(); // Llamamos a obtener productos al montar el componente
    });

    // Función para enviar el formulario
    const submitForm = async () => {
      try {
        const response = await fetch('http://localhost:3000/productos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(producto.value)
        });

        if (response.ok) {
          const data = await response.json();
          Swal.fire({
            title: 'Éxito!',
            text: 'Producto insertado exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          obtenerProductos();  // Recarga la lista de productos después de insertar
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Error al insertar el producto',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema con el envío del formulario',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    };

    return {
      producto,
      categorias,
      productos,  // Lista de productos
      submitForm
    };
  }
});
</script>
