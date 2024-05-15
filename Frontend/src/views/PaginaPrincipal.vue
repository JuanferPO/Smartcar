<template>
  <ion-page style="background-color: white;">
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col size="auto" class="ion-justify-content-center">
              <ion-title class="text-center">Inicio</ion-title>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Buscar" @ionInput="search"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Imagen -->
      <div style="display: flex; justify-content: center; margin-bottom: 20px;">
        <img src="/Logo-App-Carro.png" style="width: 200px; height: auto;" alt="Descripción de la imagen">
      </div>

      <!-- Botones -->
      <div style="display: flex; flex-direction: column; align-items: center;">
        <ion-button @click="verTodosLosVehiculos()" style="margin-bottom: 20px;">Ver todos los vehículos disponibles</ion-button>
        <ion-button @click="buscarVehiculos()">Buscar vehículos</ion-button>
      </div>

      <ExploreContainer name="" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import { IonSearchbar } from '@ionic/vue';
import { ref } from 'vue';

const searchText = ref('');

const search = () => {
  // Acceder al valor del input
  const searchTextValue = searchText.value;
  // Lógica para la búsqueda
};

const verTodosLosVehiculos = () => {
  console.log("Ver todos los vehículos disponibles");
  // Lógica para ver todos los vehículos disponibles
};

const buscarVehiculos = () => {
  console.log("Buscar vehículos");
  // Lógica para buscar vehículos
};
</script>











