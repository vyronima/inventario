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
          <formProductos :producto="productoEditado" />
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
              <span :class="{'text-success': row.disponible, 'text-danger': !row.disponible}">
                {{ row.disponible ? 'Disponible' : 'No disponible' }}
              </span>
            </template>
          </el-table-column>
          <!-- Columna de Acciones (Editar y Eliminar) -->
          <el-table-column label="Acciones" width="180">
            <template #default="{ row }">
              <el-button type="primary" size="small" @click="editarProducto(row)">
                Editar
              </el-button>
              <el-button type="danger" size="small" @click="eliminarProducto(row)">
                Eliminar
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </LayoutMain>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LayoutMain from '../../components/LayoutMain.vue';
import Formulario from '../../components/Formulario.vue';
import formProductos from './components/formProductos.vue';
import formAddProducto from './components/formAddProducto.vue';
import Header from '../../components/Header.vue';
import Swal from 'sweetalert2'; // Importa SweetAlert2

// Variables reactivas
const vistaActual = ref(''); // Controla qué sección se muestra: 'ver', 'añadir', o ''
const productos = ref([]); // Aquí se almacenarán los productos obtenidos desde la base de datos
const productoEditado = ref({ nombre: '', cantidad: 0, categoria: '', disponible: true }); // Producto que se va a editar

// Función para alternar la vista entre ver y añadir
const toggleFormulario = (vista: string) => {
  vistaActual.value = vistaActual.value === vista ? '' : vista;
};

// Función para buscar productos (se puede integrar con una API más adelante)
const buscarProductos = () => {
  alert('Función de búsqueda no implementada aún.');
};

// Función para obtener los productos desde el backend
const obtenerProductos = async () => {
  try {
    const response = await fetch('/productos'); // Llamamos a la API para obtener los productos
    if (response.ok) {
      productos.value = await response.json(); // Actualiza la lista de productos con la respuesta de la API
    } else {
      console.error('Error al cargar los productos');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Llamamos a obtenerProductos cuando el componente se monta
onMounted(() => {
  obtenerProductos();
});

// Función para editar un producto
const editarProducto = (producto: any) => {
  Swal.fire({
    title: 'Editar Producto',
    text: `¿Deseas editar el producto ${producto.nombre}?`,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      alert(`Editar Producto: ${producto.nombre}`);
      // Aquí puedes añadir la lógica para redirigir a un formulario de edición
    }
  });
};

// Función para eliminar un producto
const eliminarProducto = async (producto) => {
  console.log('ID del producto:', producto.id);  // Verifica que el ID esté correctamente asignado

  Swal.fire({
    title: '¿Estás seguro?',
    text: `¡No podrás revertir esta acción! ¿Deseas Eliminar el producto ${producto.nombre}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, Eliminar',
    cancelButtonText: 'Cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/eliminarProducto/${producto.id}`, {
          method: 'PUT',  // Usamos PUT porque estamos actualizando el producto
        });

        if (response.ok) {
          Swal.fire('Eliminado!', 'El producto ha sido Eliminado.', 'success');
          obtenerProductos();  // Recarga la lista de productos
        } else {
          const errorData = await response.text();  // Intentamos leer la respuesta como texto
          console.error('Error en la respuesta:', errorData);
          Swal.fire('Error!', errorData || 'Hubo un problema al Eliminar el producto.', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire('Error!', 'Hubo un problema al Eliminar el producto.', 'error');
      }
    }
  });
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
