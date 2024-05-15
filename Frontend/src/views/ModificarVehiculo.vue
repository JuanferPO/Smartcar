<template>
    <div class="container">
      <h1 class="title">Búsqueda</h1>
      <div class="search-fields">
        <div class="field">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre">
        </div>
        <div class="field">
          <label for="marca">Marca:</label>
          <input type="text" id="marca">
        </div>
        <div class="field">
          <label for="modelo">Modelo:</label>
          <input type="text" id="modelo">
        </div>
        <div class="field">
          <label for="anio">Año:</label>
          <input type="number" id="anio">
        </div>
        <div class="field">
          <label for="ubicacion">Ubicación:</label>
          <input type="text" id="ubicacion">
        </div>
        <div class="field">
          <label for="condicion">Condición:</label>
          <input type="text" id="condicion">
        </div>
        <div class="field">
          <label for="transmision">Transmisión:</label>
          <input type="text" id="transmision">
        </div>
        <div class="field">
          <label for="tipo">Tipo:</label>
          <input type="text" id="tipo">
        </div>
        <div class="field">
          <label for="combustible">Combustible:</label>
          <input type="text" id="combustible">
        </div>
        <div class="field">
          <label for="placa">Último dígito de placa:</label>
          <input type="text" id="placa">
        </div>
        <div class="field">
          <label for="precioMin">Precio mínimo:</label>
          <input type="number" id="precioMin">
        </div>
        <div class="field">
          <label for="precioMax">Precio máximo:</label>
          <input type="number" id="precioMax">
        </div>
        <div class="field">
          <label for="kmMin">Kilometraje mínimo:</label>
          <input type="number" id="kmMin">
        </div>
        <div class="field">
          <label for="kmMax">Kilometraje máximo:</label>
          <input type="number" id="kmMax">
        </div>
      </div>
      <button class="search-button" @click="buscar">Buscar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      buscar() {
        const nombre = document.getElementById("nombre").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const anio = document.getElementById("anio").value;
        const ubicacion = document.getElementById("ubicacion").value;
        const condicion = document.getElementById("condicion").value;
        const transmision = document.getElementById("transmision").value;
        const tipo = document.getElementById("tipo").value;
        const combustible = document.getElementById("combustible").value;
        const placa = document.getElementById("placa").value;
        const precioMin = document.getElementById("precioMin").value;
        const precioMax = document.getElementById("precioMax").value;
        const kmMin = document.getElementById("kmMin").value;
        const kmMax = document.getElementById("kmMax").value;
  
        // Aquí puedes realizar la lógica de búsqueda con los datos recopilados
  
        console.log("Búsqueda realizada:");
        console.log("Nombre:", nombre);
        console.log("Marca:", marca);
        console.log("Modelo:", modelo);
        console.log("Año:", anio);
        console.log("Ubicación:", ubicacion);
        console.log("Condición:", condicion);
        console.log("Transmisión:", transmision);
        console.log("Tipo:", tipo);
        console.log("Combustible:", combustible);
        console.log("Último dígito de placa:", placa);
        console.log("Precio mínimo:", precioMin);
        console.log("Precio máximo:", precioMax);
        console.log("Kilometraje mínimo:", kmMin);
        console.log("Kilometraje máximo:", kmMax);
      }
    }
  };
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
    text-align: center;
    margin-bottom: 20px;
  }
  
  .search-fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .field {
    width: calc(50% - 10px);
    margin-bottom: 10px;
  }
  
  .field label {
    display: block;
    margin-bottom: 5px;
  }
  
  .field input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .search-button {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  </style>
  
  
  