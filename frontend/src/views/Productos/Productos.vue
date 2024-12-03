<template>
  <LayoutMain>
    <template #slotLayout>
      <!-- Encabezado -->
      <Header :titulo="'Productos'" />

      <!-- Botones de acción -->
      <el-row justify="center" align="middle" class="my-3">
        <el-button type="primary" @click="toggleFormulario('ver')">
          Ver
        </el-button>
        <el-button type="primary" @click="toggleFormulario('añadir')">
          Añadir
        </el-button>
        <el-button type="primary" @click="buscarProductos">
          Buscar
        </el-button>
      </el-row>

      <!-- Sección de Formulario de Productos -->
      <Formulario v-if="vistaActual === 'añadir'" :titulo="'Productos'">
        <template #slotForm>
          <formProductos />
        </template>
      </Formulario>

      <!-- Tabla de Productos -->
      <div v-if="vistaActual === 'ver'" class="mt-4">
        <el-table :data="productos" style="width: 100%">
          <el-table-column type="index" label="#" width="50"></el-table-column>
          <el-table-column prop="nombre" label="Nombre del Producto"></el-table-column>
          <el-table-column prop="cantidad" label="Cantidad"></el-table-column>
          <el-table-column prop="categoria" label="Categoría"></el-table-column>
          <el-table-column label="Disponibilidad">
            <template #default="{ row }">
              <span 
                :class="{'text-success': row.disponible, 'text-danger': !row.disponible}">
                {{ row.disponible ? 'Disponible' : 'No disponible' }}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </LayoutMain>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LayoutMain from '../../components/LayoutMain.vue';
import Formulario from '../../components/Formulario.vue';
import formProductos from './components/formProductos.vue';
import Header from '../../components/Header.vue';

// Variables reactivas
const vistaActual = ref(''); // Controla qué sección se muestra: 'ver', 'añadir', o ''
const productos = ref([
  { nombre: 'iphone 13 promax', cantidad: 10, categoria: 'Celulares', disponible: true },
  { nombre: 'audifonos xpz', cantidad: 0, categoria: 'Accesorios', disponible: false },
]); // Datos de ejemplo de productos

// Función para alternar la vista
const toggleFormulario = (vista: string) => {
  vistaActual.value = vistaActual.value === vista ? '' : vista;
};

// Función para buscar productos (se puede integrar con una API más adelante)
const buscarProductos = () => {
  alert('Función de búsqueda no implementada aún.');
};
</script>

<style scoped>
/* Estilo opcional para margen entre los botones */
.my-3 {
  margin: 1rem 0;
}

.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>
