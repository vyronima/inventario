<template>
  <LayoutMain>
    <template #slotLayout>
      <Header 
      :titulo="'Cargos'"
      >
      </Header>
    </template>

    </LayoutMain>
  </template>
    
  
  <script  setup>

  import LayoutMain from '../../components/LayoutMain.vue';
  import Header from '../../components/Header.vue';

  </script>