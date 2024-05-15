<template>
    <div class="container">
      <h1 class="title">Resultado De Búsqueda</h1>
      <img src="/Used-2022-Chevrolet-Corvette-Stingray-3LT-Z51-Convertible-C8R-EDITION.jpg" alt="Descripción de la imagen" class="centered-image">
      <table class="search-results">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción general</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chevrolet Corvette Stingray R 3lt</td>
            <td>Chevrolet corvette stingray R 3LT 2022 Racing performance 5000 km unico en colombia 
              con paquete R racing convertible electronico acabados en carbono asientos e interior rojos gt2 en piel napa sonido bose performance series profesional de 18 parlantes rines de lujo aleron trasero profesional mandos y cambios en el timon motor 6.2 v8 de 466 caballos hace cuerto de milla en 11 segundos y de 0 a 100 en 2.9 segundos! Suspension neumatica graduable en altura! Perfecto estado! Recibo vehiculo menor o mayor valor! Precio 790.000.000$</td>
            <td><button @click="revisar" class="btn-revisar">Revisar</button></td>
          </tr>
          <!-- Puedes agregar más filas de datos aquí -->
        </tbody>
      </table>
      <img src="/AMG-GTS.png" alt="Descripción de la segunda imagen" class="centered-image">
      <table class="search-results">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción general</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mercedes-benz Gt S 2019</td>
            <td>AD 3992 Mercedes-Benz GT S Modelo 2019 Kilometraje: 2.900 Km Color: Plata Iridio Metalizado (Original) Motor: 3.982 CC V8 Combustible: Gasolina Potencia: 522 CV a 6.250 Rpm Torque: 670 Nm a 1.900 – 5.000 Rpm Tracción: Trasera Transmisión: Automática de 7 velocidades Prenda: No Blindaje: Nivel 2 plus Placa terminada en 7 de Bogotá</td>
            <td><button @click="revisar" class="btn-revisar">Revisar</button></td>
          </tr>
          <!-- Puedes agregar más filas de datos aquí -->
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      revisar() {
        // Lógica para revisar el vehículo
        console.log("Revisando vehículo...");
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .centered-image {
    display: block;
    margin: 0 auto;
    max-width: 50%; /* Ajustar el tamaño máximo de la imagen */
    height: auto;
  }
  
  .search-results {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  .btn-revisar {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .btn-revisar:hover {
    background-color: #0056b3;
  }
  </style>
  
  
  