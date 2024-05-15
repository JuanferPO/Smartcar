<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title class="ion-text-center">Detalles del Vehículo</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="image-container">
          <ion-img src="./public/Mazda Cx50.jpg" alt="Descripción de la imagen" class="vehicle-image"></ion-img>
        </div>
        <div class="vehicle-details">
          <div class="section">
            <div class="label">Descripción general:</div>
            <div class="content">Ppf interior y exterior
              Pernos de seguridad
              Quinta puerta automática
              Cojineria terracota
              Excelente estado
  
              Cámara 360
              Llantas nuevas
              Levas de cambios en el timón
              Mandos de radio en el timón
              Película de seguridad
              Regulación altura del volante
              Retrovisores eléctricos
              Repuesto sin usar
              Rines de lujo
              Spoiler
              Silla de conductor eléctrica
              Volante deportivo
            </div>
          </div>
          <div class="section">
            <div class="label">Nombre:</div>
            <div class="content">Mazda cx-50 2.5 Grand Touring Lx</div>
          </div>
          <div class="section">
            <div class="label">Marca:</div>
            <div class="content">Mazda</div>
          </div>
          <div class="section">
            <div class="label">Modelo:</div>
            <div class="content">cx-50</div>
          </div>
          <div class="section">
            <div class="label">Año:</div>
            <div class="content">2024</div>
          </div>
          <div class="section">
            <div class="label">Ubicación:</div>
            <div class="content">Neiva-Huila</div>
          </div>
          <div class="section">
            <div class="label">Condición:</div>
            <div class="content">Nuevo</div>
          </div>
          <div class="section">
            <div class="label">Transmisión:</div>
            <div class="content">Automática</div>
          </div>
          <div class="section">
            <div class="label">Tipo:</div>
            <div class="content">Automivl</div>
          </div>
          <div class="section">
            <div class="label">Combustible:</div>
            <div class="content">Gasolina</div>
          </div>
          <div class="section">
            <div class="label">Último dígito de la placa:</div>
            <div class="content">6</div>
          </div>
          <div class="section">
            <div class="label">Precio:</div>
            <div class="content">$173.000.000</div>
          </div>
          <div class="section">
            <div class="label">Kilometraje:</div>
            <div class="content">5950 km</div>
          </div>
          <ion-button expand="block" color="primary" @click="comprar">Comprar</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg } from '@ionic/vue';
  
  const comprar = () => {
  // Lógica para comprar el vehículo
};
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.vehicle-image {
  max-width: 300px; /* Ajustar el tamaño máximo de la imagen */
  height: auto; /* Ajustar la altura automáticamente */
}

.vehicle-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.section {
  margin-bottom: 16px;
}

.label {
  font-weight: bold;
}

.content {
  font-size: 16px;
}

ion-button {
  margin-top: 20px;
}
</style>
  
  
  
  
  
  