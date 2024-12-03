<template>
  <el-row>
    <el-col :span="12" class="sidebar">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#CC6CE7"
        text-color="#fff"
        collapse-transition
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>Administrador</span>
          </template>
          <!-- Uso de router-link dentro de el-menu-item -->
          <el-menu-item :index="'1-2'">
            <router-link to="/Bodegas">Bodegas</router-link>
          </el-menu-item>
          <el-menu-item :index="'1-3'">
            <router-link to="/Productos">Productos</router-link>
          </el-menu-item>
          <el-menu-item :index="'1-4'">
            <router-link to="/Proveedores">Proveedores</router-link>
          </el-menu-item>
          <el-menu-item :index="'1-5'">
            <router-link to="/Categoria">Categoría</router-link>
          </el-menu-item>
          <el-menu-item :index="'1-6'">
            <router-link to="/Movimientos">Movimientos</router-link>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>Configuración</span>
          </template>
          <el-menu-item :index="'2-2'">
            <router-link to="/Usuarios">Usuarios</router-link>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Location } from '@element-plus/icons-vue';
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
