<template>
    <div class="tabla-categorias">
      <el-table :data="categorias" border style="width: 100%">
        <!-- Columna Número -->
        <el-table-column label="#" align="center" width="50">
          <template #default="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
  
        <!-- Columna Nombre Categoría -->
        <el-table-column prop="nombre" label="Nombre Categoría" align="center" />
  
        <!-- Columna Productos -->
        <el-table-column label="Productos" align="center" width="150">
          <template #default="scope">
            <el-button 
              type="text" 
              @click="verProductos(scope.row.id)">
              <i class="el-icon-view"></i> Ver Productos
            </el-button>
          </template>
        </el-table-column>
  
        <!-- Columna Cantidad -->
        <el-table-column prop="cantidad" label="Cantidad" align="center" width="100" />
      </el-table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Datos de ejemplo
  const categorias = ref([
    { id: 1, nombre: 'Electrodomésticos', cantidad: 10 },
    { id: 2, nombre: 'Muebles', cantidad: 15 },
    { id: 3, nombre: 'Juguetes', cantidad: 8 },
  ]);
  
  // Instancia del router para navegación
  const router = useRouter();
  
  // Función para navegar al componente de productos
  const verProductos = (categoriaId: number) => {
    router.push(`/productos/${categoriaId}`);
  };
  </script>
  
  <style scoped>
  .tabla-categorias {
    margin-top: 20px;
  }
  </style>
  