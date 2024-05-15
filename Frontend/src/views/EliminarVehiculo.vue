<template>
    <div class="container">
      <h1 class="title">Modificación De Datos</h1>
      <div class="image-container">
        <ion-img src="/public/FordShelby.png" alt="Descripción de la imagen" class="vehicle-image"></ion-img>
      </div>
      <div class="data-form">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre">
        </div>
        <div class="form-group">
          <label for="marca">Marca:</label>
          <input type="text" id="marca">
        </div>
        <div class="form-group">
          <label for="modelo">Modelo:</label>
          <input type="text" id="modelo">
        </div>
        <div class="form-group">
          <label for="ano">Año:</label>
          <input type="text" id="ano">
        </div>
        <div class="form-group">
          <label for="ubicacion">Ubicación:</label>
          <input type="text" id="ubicacion">
        </div>
        <div class="form-group">
          <label for="condicion">Condición:</label>
          <select id="condicion">
            <option value="Nuevo">Nuevo</option>
            <option value="Usado">Usado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="transmision">Transmisión:</label>
          <input type="text" id="transmision">
        </div>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <input type="text" id="tipo">
        </div>
        <div class="form-group">
          <label for="combustible">Combustible:</label>
          <input type="text" id="combustible">
        </div>
        <div class="form-group">
          <label for="placa">Último dígito de la placa:</label>
          <input type="text" id="placa">
        </div>
        <div class="form-group">
          <label for="precio">Precio:</label>
          <input type="text" id="precio">
        </div>
        <div class="form-group">
          <label for="kilometraje">Kilometraje:</label>
          <input type="text" id="kilometraje">
        </div>
        <div class="form-group">
          <label for="imagen">Imagen:</label>
          <input type="file" id="imagen">
          <button @click="verImagen">Ver o Examinar</button>
        </div>
        <button @click="guardarDatos" class="save-button">Guardar Datos</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      verImagen() {
        // Agrega tu lógica para mostrar o examinar la imagen aquí
      },
      guardarDatos() {
        // Agrega tu lógica para guardar los datos aquí
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .image-container {
    text-align: center;
  }
  
  .vehicle-image {
    max-width: 300px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .data-form {
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  select,
  button {
    width: calc(100% - 20px); /* Tomar el ancho máximo menos el espacio para el borde */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
  }
  
  select {
    width: 100%;
  }
  
  button {
    width: auto;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .save-button {
    margin-top: 20px;
  }
  </style>
  