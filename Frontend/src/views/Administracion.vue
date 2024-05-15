<template>
    <div class="container">
      <!-- Título -->
      <h1 class="title">Inicio de Administración</h1>
  
      <!-- Imagen centralizada -->
      <div class="image-container">
        <img src="/Logo-App-Carro.png" alt="Descripción de la imagen" class="centered-image">
      </div>
      
      <!-- Botones -->
      <div class="button-container">
        <button class="action-button">Agregar Vehículo</button>
        <button class="action-button">Modificar Datos de Vehículo</button>
        <button class="action-button">Eliminar Vehículo</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Contenedor principal */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Ocupa toda la altura de la pantalla */
  }
  
  /* Estilos para la imagen */
  .image-container {
    text-align: center; /* Centrado horizontal */
    margin-bottom: 20px;
  }
  
  .centered-image {
    max-width: 100%;
    max-height: 300px; /* Altura máxima de la imagen */
  }
  
  /* Estilos para los botones */
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .action-button {
    width: 240px;
    padding: 12px;
    margin-bottom: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .action-button:hover {
    background-color: #0056b3;
  }
  </style>
  