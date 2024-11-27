<template>
    <div class="form-container">
      <h2>Formulario de Ejemplo</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Campo de Texto -->
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            v-model="formData.nombre" 
            placeholder="Ingresa tu nombre"
            required 
          />
        </div>
  
        <!-- Campo de Email -->
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            placeholder="Ingresa tu correo"
            required 
          />
        </div>
  
        <!-- Campo de Selección -->
        <div class="form-group">
          <label for="categoria">Categoría:</label>
          <select id="categoria" v-model="formData.categoria">
            <option value="" disabled>Selecciona una opción</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
  
        <!-- Botón de Envío -->
        <button type="submit" class="submit-button">Enviar</button>
      </form>
  
      <!-- Mostrar los datos ingresados (para pruebas) -->
      <div v-if="formSubmitted" class="results">
        <h3>Datos Enviados:</h3>
        <p><strong>Nombre:</strong> {{ formData.nombre }}</p>
        <p><strong>Correo:</strong> {{ formData.email }}</p>
        <p><strong>Categoría:</strong> {{ formData.categoria }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Datos del formulario
  const formData = ref({
    nombre: '',
    email: '',
    categoria: '',
  });
  
  const formSubmitted = ref(false);
  
  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    formSubmitted.value = true;
    console.log('Datos enviados:', formData.value);
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .results {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  