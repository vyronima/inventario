<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
      :titulo="'Paises'"
      :tituloBoton="'Crear Pais'"
      >
      </Header>
      <!-- componente/ -->
      <Formulario :titulo="'titulo del dformulario'">

        <template #slotForm>
          <formPaises/>
        </template>

      </Formulario>

          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="Nombre" width="180" />
            <el-table-column prop="address" label="Direccion" width="180" />
            <el-table-column prop="phone" label="Telefono" />
            <el-table-column fixed="right" label="Acciones" min-width="120">
              <template #default>
                <el-button link type="primary" size="large" :icon="Edit" >                  
                </el-button>
                <el-button link type="danger" :icon="Delete" ></el-button>
              </template>
            </el-table-column>
          </el-table>
         
    </template>


    </LayoutMain>
  </template>
    
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import LayoutMain from '../../components/LayoutMain.vue';
  import  formPaises from './components/formPaises.vue'
  import Formulario from '../../components/Formulario.vue';
  import Header from '../../components/Header.vue';
  import  {Delete,Edit} from "@element-plus/icons-vue"


  const tableData = [
  {
    name: '2Oscar',
    address: 'No. 189, Grove St, Los Angeles',
    phone: '311555',
  }
]
  </script>