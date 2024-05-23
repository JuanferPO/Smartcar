<template>
  <ion-page style="background-color: white;">
    <ion-header>
      <Toolbar value="Inicio de Administración"></Toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <!-- Imagen -->
      <Logo></Logo>
      <!-- Botones -->
      <Button href="./admin/ingresar" value="Agregar Vehículo"></Button>
      <Button href="./admin/modificar/buscar" value="Modificar Datos"></Button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonHeader, IonContent, IonPage } from '@ionic/vue';
import Button from '@/components/Button.vue';
import Toolbar from '@/components/Toolbar.vue';
import Logo from '@/components/Logo.vue';
import Input from '@/components/Input.vue';
</script>