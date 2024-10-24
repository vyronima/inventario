<template>
    <el-row >
      <el-col :span="12" class="sidebar">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#242629"
          text-color="#fff"
          collapse-transition
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Administrador</span>
            </template>
  
            <el-menu-item index="1-2">Personas</el-menu-item>
            <el-menu-item index="1-3">Cargos</el-menu-item>
            <el-menu-item index="1-4">Paises</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Configuracion</span>
            </template>
  
            <el-menu-item index="1-2">Personas</el-menu-item>
            <el-menu-item index="1-3">Cargos</el-menu-item>
            <el-menu-item index="1-4">Paises</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import {Location} from '@element-plus/icons-vue';
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    /* height: 100%; */
  }
  
  .sidebar {
    height: 100vh;
    overflow-y: auto; 
  }
  
  .el-menu-vertical-demo {
    height: 100%; 
  }
  </style>
  