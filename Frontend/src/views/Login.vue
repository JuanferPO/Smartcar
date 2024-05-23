<template>
  <ion-page style="background-color: white;">
    <ion-header>
      <Toolbar value="Iniciar sesión"></Toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <!-- Imagen -->
      <Logo></Logo>
      <!-- Cuadro de ingreso -->
      <Input v-model="usuario" id="usuario" name="usuario" label="Usuario:"></Input>
      <Input v-model="contrasenia" type="password" id="contrasenia" name="contrasenia" label="Contraseña:"></Input>
      <!-- Botón para ingresar (No funcional) -->
      <Button href="./admin/inicio" value="Ingresar"></Button>
      <Button @click="login" value="Ingresar F"></Button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonHeader, IonContent, IonPage } from '@ionic/vue';
import Button from '@/components/Button.vue';
import Toolbar from '@/components/Toolbar.vue';
import Logo from '@/components/Logo.vue';
import Input from '@/components/Input.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseURL = 'http://localhost:8080/smartcar/administrador';

const items = ref<Array<ItemType>>([]);
const id = ref('');
const usuario = ref('');
const contrasenia = ref('');

// Tipos
interface ItemType {
  id: string;
  usuario: string;
  contrasenia: string;
}

onMounted(() => {
  findAllRecords();
});

// Obtener todos los registros
async function findAllRecords() {
  try {
    const response = await axios.get(baseURL);
    items.value = response.data;
    return response.data;
  } catch (error) {
    console.error('Error al obtener todos los registros:', error);
    throw error;
  }
}

async function acceder() {
  const data = {
    usuario: usuario.value,
    contrasenia: contrasenia.value
  };

  try {
    permiso = false;
    items.forEach(element => {
      if ((element.usuario == data.usuario) && (element.contrasenia == data.contrasenia)) {
        permiso = true;
      }
    });
    if(permiso){
      window.location.href = "./admin/inicio";
    }else{
      Swal.fire({
        title: 'Acceso denegado',
        text: 'Revise los datos ingresados.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  } catch (error) {
    console.error("Error en la autenticación", error);
  }
 const login=()=>{
  acceder();
 }
}
</script>
