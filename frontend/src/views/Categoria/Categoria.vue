<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
      :titulo="'Categoria'"
      :tituloBoton="'Crear Categoria'"
      >
      </Header>
      <!-- componente/ -->
      <Formulario :titulo="'titulo del formulario'">

        <template #slotForm>
          <formCategoria/>
        </template>

      </Formulario>

          
    </template>


    </LayoutMain>
  </template>
    
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import LayoutMain from '../../components/LayoutMain.vue';
  import  formPaises from './components/formCategoria.vue'
  import Formulario from '../../components/Formulario.vue';
  import Header from '../../components/Header.vue';
  import  {Delete,Edit} from "@element-plus/icons-vue"


  
  </script>