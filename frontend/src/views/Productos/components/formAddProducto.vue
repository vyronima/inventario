<template>
    <el-form :model="producto" label-width="120px">
      <el-form-item label="Nombre">
        <el-input v-model="producto.nombre" :disabled="!!producto.id" placeholder="Nombre del Producto" />
      </el-form-item>
  
      <el-form-item label="Cantidad">
        <el-input type="number" v-model="producto.cantidad" placeholder="Cantidad" />
      </el-form-item>
  
      <el-form-item label="Categoría">
        <el-select v-model="producto.categoria" placeholder="Seleccionar categoría">
          <el-option v-for="cat in categorias" :key="cat.id" :label="cat.nombre" :value="cat.id" />
        </el-select>
      </el-form-item>
  
      <el-form-item label="Disponibilidad">
        <el-switch v-model="producto.disponible" :active-text="'Disponible'" :inactive-text="'No Disponible'" />
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="guardarProducto">Guardar Producto</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'formAddProducto',
    props: {
      producto: {
        type: Object as PropType<{ id?: string, nombre: string, cantidad: number, categoria: string, disponible: boolean }>,
        required: true
      },
      categorias: {
        type: Array as PropType<Array<{ id: string, nombre: string }>>,
        required: true
      }
    },
    methods: {
      guardarProducto() {
        // Emitir evento para guardar el producto (añadir o editar)
        this.$emit('guardar', this.producto);
      }
    }
  });
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  .el-form {
    max-width: 600px;
    margin: auto;
  }
  </style>
  