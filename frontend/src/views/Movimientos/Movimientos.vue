<template>
  <LayoutMain>
    <template #slotLayout>
      <Header :titulo="'Movimientos'" />

      <!-- Botones de acción -->
      <el-row justify="center" align="middle" class="my-3">
        <el-button type="primary" @click="mostrarFormulario('ver')">Ver</el-button>
        <el-button type="primary" @click="mostrarFormulario('buscar')">Buscar</el-button>
      </el-row>

      <!-- Componente Formulario -->
      <Formulario>
        <template #slotForm>
          <!-- Mostrar el formulario solo cuando 'mostrarFormularioFlag' sea verdadero -->
          <formMovimientos v-if="mostrarFormularioFlag" />
        </template>
      </Formulario>

      <!-- Tabla de movimientos de productos -->
      <div v-if="mostrarTabla" class="mt-5">
        <h3 class="text-center mb-4">Movimientos del Producto</h3>
        <el-table :data="movimientos" style="width: 100%">
          <el-table-column label="#" prop="id" width="180" />
          <el-table-column label="Nombre del Producto" prop="nombre_producto" />
          <el-table-column label="Tipo de Movimiento" prop="tipo" />
          <el-table-column label="Fecha de Ingreso" prop="fecha_ingreso" />
          <el-table-column label="Fecha de Retiro" prop="fecha_retiro" />
          <el-table-column label="Detalle" prop="detalle" />
        </el-table>
      </div>
    </template>
  </LayoutMain>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LayoutMain from '../../components/LayoutMain.vue';
import Formulario from '../../components/Formulario.vue';
import Header from '../../components/Header.vue';
import formMovimientos from './components/formMovimientos.vue'; // Importación correcta del formulario
import { ElTable, ElTableColumn } from 'element-plus'; // Asegúrate de tener el componente de tabla de Element Plus

// Variable reactiva para controlar la visibilidad del formulario
const mostrarFormularioFlag = ref(false);
const mostrarTabla = ref(false);

// Datos de ejemplo para los movimientos de productos con fechas de ingreso y retiro
const movimientos = ref([
  {
    id: 1,
    nombre_producto: 'Samsung s24 ultra',
    tipo: 'Venta',
    fecha_ingreso: '2024-11-01',
    fecha_retiro: '2024-11-15',
    detalle: 'Producto vendido a cliente X',
  },
  {
    id: 2,
    nombre_producto: 'Iphone 11 red',
    tipo: 'Proveedor',
    fecha_ingreso: '2024-11-05',
    fecha_retiro: '2024-11-10',
    detalle: 'Producto enviado al proveedor Y',
  },
  {
    id: 3,
    nombre_producto: 'Televisor kalley 50',
    tipo: 'Bodega',
    fecha_ingreso: '2024-11-02',
    fecha_retiro: '2024-11-12',
    detalle: 'Producto movido a bodega Z',
  },
  {
    id: 4,
    nombre_producto: 'Diadema sony',
    tipo: 'Daño',
    fecha_ingreso: '2024-11-07',
    fecha_retiro: '2024-11-14',
    detalle: 'Producto retirado por estar dañado',
  },
]);

// Función para manejar la visibilidad del formulario y la tabla
const mostrarFormulario = (tipo: string) => {
  if (tipo === 'ver') {
    mostrarFormularioFlag.value = false; // Ocultar el formulario
    mostrarTabla.value = true; // Mostrar la tabla
  } else if (tipo === 'buscar') {
    mostrarFormularioFlag.value = true; // Mostrar el formulario de búsqueda
    mostrarTabla.value = false; // Ocultar la tabla
  }
};
</script>

<style scoped>
.my-3 {
  margin: 1rem 0;
}
</style>
