<template>
  <div class="container">
    <h1 class="title">Detalles del Vehículo</h1>
    <div class="image-container">
      <ion-img src="\FordShelby.png" alt="Descripción de la imagen" class="vehicle-image"></ion-img>
    </div>
    <div class="table-container">
      <table class="table">
        <tbody>
          <tr>
            <th>Nombre:</th>
            <td>{{ nombre }}</td>
          </tr>
          <tr>
            <th>Marca:</th>
            <td>{{ marca }}</td>
          </tr>
          <tr>
            <th>Modelo:</th>
            <td>{{ modelo }}</td>
          </tr>
          <tr>
            <th>Año:</th>
            <td>{{ año }}</td>
          </tr>
          <tr>
            <th>Ubicación:</th>
            <td>{{ ubicacion }}</td>
          </tr>
          <tr>
            <th>Condición:</th>
            <td>{{ condicion }}</td>
          </tr>
          <tr>
            <th>Transmisión:</th>
            <td>{{ transmision }}</td>
          </tr>
          <tr>
            <th>Tipo:</th>
            <td>{{ tipo }}</td>
          </tr>
          <tr>
            <th>Combustible:</th>
            <td>{{ combustible }}</td>
          </tr>
          <tr>
            <th>Último dígito de placa:</th>
            <td>{{ ultimoDigitoPlaca }}</td>
          </tr>
          <tr>
            <th>Precio:</th>
            <td>{{ precio }}</td>
          </tr>
          <tr>
            <th>Kilometraje:</th>
            <td>{{ kilometraje }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="save-button">Guardar Datos</button>
  </div>
  <ion-page style="background-color: white;">
    <ion-header>
      <Toolbar value="Inicio" buscar="true"></Toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <!-- Imagen -->
      <Logo></Logo>
      <!-- Botones -->
      <div style="display: flex; flex-direction: column; align-items: center;">
        <Button href="./todos" value="Ver todos los vehículos disponibles"></Button>
        <Button href="./buscar" value="Buscar vehículos">Buscar vehículos</Button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonHeader, IonContent, IonPage } from '@ionic/vue';
import Button from '@/components/Button.vue';
import Toolbar from '@/components/Toolbar.vue';
import Logo from '@/components/Logo.vue';

const nombre = "Ford Mustang Shelby Gt500 2021";
const marca = "Ford";
const modelo = "Mustang Shelby";
const año = 2021;
const ubicacion = "Neiva-Huila";
const condicion = "Nuevo";
const transmision = "Automática";
const tipo = "Automóvil";
const combustible = "Gasolina";
const ultimoDigitoPlaca = 7;
const precio = "$690.000.000";
const kilometraje = "100 km";
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
}

.image-container {
  text-align: center;
}

.vehicle-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.table-container {
  overflow-x: auto;
}

.table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.save-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #0056b3;
}
</style>