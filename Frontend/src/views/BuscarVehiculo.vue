<template>
<    <div class="search-box">
      <div class="section">
        <div class="label">Nombre:</div>
        <input type="text" v-model="nombre" placeholder="Nombre del vehículo">
      </div>
      <div class="section">
        <div class="label">Marca:</div>
        <input type="text" v-model="marca" placeholder="Marca del vehículo">
      </div>
      <div class="section">
        <div class="label">Modelo:</div>
        <input type="text" v-model="modelo" placeholder="Modelo del vehículo">
      </div>
      <div class="section">
        <div class="label">Año:</div>
        <input type="number" v-model="anoMinimo" placeholder="Mínimo">
        <input type="number" v-model="anoMaximo" placeholder="Máximo">
      </div>
      <div class="section">
        <div class="label">Ubicación:</div>
        <input type="text" v-model="ubicacion" placeholder="Ubicación del vehículo">
      </div>
      <div class="section">
        <div class="label">Condición:</div>
        <select v-model="condicion">
          <option value="">Seleccione una opción</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Usado">Usado</option>
        </select>
      </div>
      <div class="section">
        <div class="label">Transmisión:</div>
        <select v-model="transmision">
          <option value="">Seleccione una opción</option>
          <option value="Automática">Automática</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <div class="section">
        <div class="label">Tipo:</div>
        <select v-model="tipo">
          <option value="">Seleccione una opción</option>
          <option value="Sedán">Sedán</option>
          <option value="Camioneta">Camioneta</option>
        </select>
      </div>
      <div class="section">
        <div class="label">Combustible:</div>
        <select v-model="combustible">
          <option value="">Seleccione una opción</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Diésel">Diésel</option>
        </select>
      </div>
      <div class="section">
        <div class="label">Último dígito de la placa:</div>
        <input type="number" v-model="placaUltimoDigito" placeholder="Último dígito">
      </div>
      <div class="section">
        <div class="label">Precio:</div>
        <input type="number" v-model="precioMinimo" placeholder="Mínimo">
        <input type="number" v-model="precioMaximo" placeholder="Máximo">
      </div>
      <div class="section">
        <div class="label">Kilometraje:</div>
        <input type="number" v-model="kilometrajeMinimo" placeholder="Mínimo">
        <input type="number" v-model="kilometrajeMaximo" placeholder="Máximo">
      </div>
      <button @click="guardar" class="guardar-button">Guardar</button>
    </div>
>  </template>
  
  <script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

  export default {
    data() {
      return {
        nombre: '',
        marca: '',
        modelo: '',
        anoMinimo: '',
        anoMaximo: '',
        ubicacion: '',
        condicion: '',
        transmision: '',
        tipo: '',
        combustible: '',
        placaUltimoDigito: '',
        precioMinimo: '',
        precioMaximo: '',
        kilometrajeMinimo: '',
        kilometrajeMaximo: ''
      };
    },
    methods: {
      guardar() {
        // Lógica para guardar la búsqueda
        console.log('Búsqueda guardada:', this.$data);
      }
    }
  };
  </script>
  
  <style scoped>
  .search-box {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .section {
    margin-bottom: 16px;
    display: flex;
  }
  
  .label {
    font-weight: bold;
    min-width: 150px;
  }
  
  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button.guardar-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.guardar-button:hover {
    background-color: #0056b3;
  }
  </style>
  
  
  <style scoped>
  /* Estilos CSS */
  </style>
  
  