<template>
  <LayoutMain>
    <template #slotLayout>
      <!-- Encabezado -->
      <Header :titulo="'Proveedores'" />

      <!-- Botones de acción -->
      <el-row justify="center" align="middle" class="my-3">
        <el-button type="primary" @click="mostrarVista('ver')">Ver</el-button>
        <el-button type="primary" @click="mostrarVista('añadir')">Añadir</el-button>
        <el-button type="primary" @click="buscarProveedores">Buscar</el-button>
      </el-row>

      <!-- Vista de Formulario -->
      <Formulario v-if="vistaActual === 'añadir'">
        <template #slotForm>
          <form @submit.prevent="guardarProveedor">
            <el-form :model="nuevoProveedor" :rules="rules" ref="formProveedor">
              <!-- Campo Nombre -->
              <el-form-item label="Nombre y Apellido" prop="nombre">
                <el-input v-model="nuevoProveedor.nombre" placeholder="Ingrese nombre y apellido"></el-input>
              </el-form-item>

              <!-- Campo Cédula -->
              <el-form-item label="Cédula" prop="cedula">
                <el-input v-model="nuevoProveedor.cedula" placeholder="Ingrese la cédula"></el-input>
              </el-form-item>

              <!-- Campo Teléfono -->
              <el-form-item label="Teléfono" prop="telefono">
                <el-input v-model="nuevoProveedor.telefono" placeholder="Ingrese el teléfono"></el-input>
              </el-form-item>

              <!-- Campo Correo -->
              <el-form-item label="Correo" prop="correo">
                <el-input v-model="nuevoProveedor.correo" placeholder="Ingrese el correo"></el-input>
              </el-form-item>

              <!-- Campo Departamento (Desplegable) -->
              <el-form-item label="Departamento" prop="departamento">
                <el-select v-model="nuevoProveedor.departamento" placeholder="Seleccione el departamento" @change="cambiarDepartamento">
                  <el-option v-for="dept in departamentos" :key="dept" :label="dept" :value="dept" />
                </el-select>
              </el-form-item>

              <!-- Campo Ciudad (Desplegable) -->
              <el-form-item label="Ciudad" prop="ciudad">
                <el-select v-model="nuevoProveedor.ciudad" placeholder="Seleccione la ciudad">
                  <el-option v-for="city in ciudadesDisponibles" :key="city" :label="city" :value="city" />
                </el-select>
              </el-form-item>

              <!-- Campo Dirección -->
              <el-form-item label="Dirección" prop="direccion">
                <el-input v-model="nuevoProveedor.direccion" placeholder="Ingrese la dirección"></el-input>
              </el-form-item>

              <!-- Botones para guardar o cancelar -->
              <el-form-item>
                <el-button type="primary" native-type="submit">Guardar</el-button>
                <el-button type="default" @click="cancelarFormulario">Cancelar</el-button>
              </el-form-item>
            </el-form>
          </form>
        </template>
      </Formulario>

      <!-- Vista de Tabla -->
      <div v-if="vistaActual === 'ver'" class="mt-4">
        <el-table :data="proveedores" style="width: 100%">
          <el-table-column type="index" label="#" width="50"></el-table-column>
          <el-table-column prop="nombre" label="Nombre"></el-table-column>
          <el-table-column prop="cedula" label="Cédula"></el-table-column>
          <el-table-column prop="telefono" label="Teléfono"></el-table-column>
          <el-table-column prop="correo" label="Correo"></el-table-column>
          <el-table-column prop="departamento" label="Departamento"></el-table-column>
          <el-table-column prop="ciudad" label="Ciudad"></el-table-column>
          <el-table-column prop="direccion" label="Dirección"></el-table-column>
          <el-table-column label="Productos">
            <template #default="{ row }">
              <el-button @click="verProductos(row)" type="primary">Productos</el-button>
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
import Header from '../../components/Header.vue';

// Variables reactivas
const vistaActual = ref(''); // Controla la vista actual: 'ver', 'añadir', ''
const proveedores = ref([  // Datos de ejemplo
  {
    nombre: 'Anderson pulgarin',
    cedula: '123456789',
    telefono: '123456789',
    correo: 'proveedor1@correo.com',
    departamento: 'Cundinamarca',
    ciudad: 'Bogotá',
    direccion: 'Calle 1',
  },
  {
    nombre: 'Ramon Valadez',
    cedula: '987654321',
    telefono: '987654321',
    correo: 'proveedor2@correo.com',
    departamento: 'Antioquia',
    ciudad: 'Medellín',
    direccion: 'Calle 2',
  },
]);

// Opciones de departamentos y ciudades
const departamentos = ['Cundinamarca', 'Antioquia', 'Valle del Cauca'];
const ciudades = {
  Cundinamarca: ['Bogotá', 'Soacha', 'Chía'],
  Antioquia: ['Medellín', 'Rionegro', 'Itagüí'],
  'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura'],
};

const nuevoProveedor = ref({
  nombre: '',
  cedula: '',
  telefono: '',
  correo: '',
  departamento: '',
  ciudad: '',
  direccion: '',
});

// Establecer las ciudades disponibles según el departamento seleccionado
const ciudadesDisponibles = ref([]);

const cambiarDepartamento = (departamento: string) => {
  ciudadesDisponibles.value = ciudades[departamento] || [];
};

const rules = {
  nombre: [{ required: true, message: 'El nombre es obligatorio', trigger: 'blur' }],
  cedula: [{ required: true, message: 'La cédula es obligatoria', trigger: 'blur' }],
  telefono: [{ required: true, message: 'El teléfono es obligatorio', trigger: 'blur' }],
  correo: [
    { required: true, message: 'El correo es obligatorio', trigger: 'blur' },
    { type: 'email', message: 'Ingrese un correo válido', trigger: 'blur' },
  ],
  departamento: [{ required: true, message: 'El departamento es obligatorio', trigger: 'blur' }],
  ciudad: [{ required: true, message: 'La ciudad es obligatoria', trigger: 'blur' }],
  direccion: [{ required: true, message: 'La dirección es obligatoria', trigger: 'blur' }],
};

const formProveedor = ref(null);

// Alterna entre las vistas
const mostrarVista = (vista: string) => {
  vistaActual.value = vistaActual.value === vista ? '' : vista;
};

// Función para guardar un nuevo proveedor
const guardarProveedor = () => {
  formProveedor.value.validate((valid: boolean) => {
    if (valid) {
      proveedores.value.push({ ...nuevoProveedor.value });
      resetFormulario();
      mostrarVista('ver');
    }
  });
};

// Función para cancelar el formulario
const cancelarFormulario = () => {
  resetFormulario();
  mostrarVista('');
};

// Resetear los campos del formulario
const resetFormulario = () => {
  nuevoProveedor.value.nombre = '';
  nuevoProveedor.value.cedula = '';
  nuevoProveedor.value.telefono = '';
  nuevoProveedor.value.correo = '';
  nuevoProveedor.value.departamento = '';
  nuevoProveedor.value.ciudad = '';
  nuevoProveedor.value.direccion = '';
};

// Función para manejar el clic en el botón "Productos"
const verProductos = (proveedor) => {
  // Aquí puedes agregar la lógica para redirigir o mostrar productos del proveedor
  console.log(`Ver productos de ${proveedor.nombre}`);
};
</script>

<style scoped>
.my-3 {
  margin: 1rem 0;
}
</style>
