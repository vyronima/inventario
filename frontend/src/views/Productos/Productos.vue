<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
      :titulo="'Productos'"
      :tituloBoton="'Crear Productos'"
      >
      </Header>
      <!-- componente/ -->
      <Formulario :titulo="'titulo del formulario'">

        <template #slotForm>
          <formProductos/>
        </template>

      </Formulario>

        
         
    </template>


    </LayoutMain>
  </template>
    
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import LayoutMain from '../../components/LayoutMain.vue';
  import  formPaises from './components/formProductos.vue'
  import Formulario from '../../components/Formulario.vue';
  import Header from '../../components/Header.vue';
  import  {Delete,Edit} from "@element-plus/icons-vue"


  
  </script>