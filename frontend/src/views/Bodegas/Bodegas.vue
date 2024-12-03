<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
        :titulo="'Bodegas'"/>
      <!-- Componente Formulario -->
      <Formulario >
        <template #slotForm>
          <formBodegas />
        </template>
      </Formulario>
    </template>
  </LayoutMain>
</template>

<script lang="ts" setup>
import LayoutMain from '../../components/LayoutMain.vue';
import Formulario from '../../components/Formulario.vue';
import Header from '../../components/Header.vue';
import formBodegas from './components/formBodegas.vue'; // Importación correcta del formulario
import { Delete, Edit } from '@element-plus/icons-vue';
</script>
