<template>
  <LayoutMain>
    <template #slotLayout>
      <!-- Encabezado -->
      <Header :titulo="'Categoría'" />

      <!-- Botones de acción -->
      <el-row justify="center" align="middle" class="my-3">
        <el-button type="primary" @click="mostrarTabla = true; mostrarFormulario = false">Ver</el-button>
        <el-button type="primary" @click="mostrarFormulario = true; mostrarTabla = false">Añadir</el-button>
        <el-button type="primary">Buscar</el-button>
      </el-row>

      <!-- Formulario de Categoría -->
      <formcategoria v-if="mostrarFormulario" />

      <!-- Tabla de Categorías -->
      <TablaCategorias v-if="mostrarTabla" />
    </template>
  </LayoutMain>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LayoutMain from '../../components/LayoutMain.vue';
import Header from '../../components/Header.vue';
import formcategoria from './components/formCategoria.vue';
import TablaCategorias from './components/verCategorias.vue';

// Variables reactivas para manejar la visibilidad de los componentes
const mostrarFormulario = ref(false);
const mostrarTabla = ref(false);
</script>

<style scoped>
/* Estilo opcional para margen entre los botones */
.my-3 {
  margin: 1rem 0;
}
</style>
