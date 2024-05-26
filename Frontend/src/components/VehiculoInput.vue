<template>
    <div style="display: flex; flex-direction: column; align-items: start;">
        <!-- Campos para los atributos del vehículo -->
        <Input v-model="nombre" id="nombre" name="nombre" label="Nombre*:"></Input>
        <Input v-model="marca" id="marca" name="marca" label="Marca*:"></Input>
        <ion-textarea v-model="descripcion" id="descripcion" name="descripcion" label="Descripción*:"></ion-textarea>
        <Input v-model="modelo" id="modelo" name="modelo" label="Modelo*:"></Input>
        <Input v-model="ubicacion" id="ubicacion" name="ubicacion" label="Ubicación:"></Input>
        <Input v-model="anio" type="number" id="anio" name="anio" label="Año*:"></Input>
        <ion-label>
            Condición:
            <ion-radio-group v-model="condicion" id="condicion" name="condicion">
                <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>
                <ion-radio value="Nuevo" label-placement="end">Nuevo</ion-radio>
                <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>
                <ion-radio value="Usado" label-placement="end">Usado</ion-radio>
            </ion-radio-group>
        </ion-label><br />
        <ion-label>
            Transmisión:
            <ion-radio-group v-model="transmision" id="transmision" name="transmision">
                <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>
                <ion-radio value="Manual" label-placement="end">Manual</ion-radio>
                <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>
                <ion-radio value="Automática" label-placement="end">Automática</ion-radio>
            </ion-radio-group>
        </ion-label><br />
        <ion-select v-model="tipo" id="tipo" name="tipo" label="Tipo:">
            <ion-select-option value="Automóvil">Automóvil</ion-select-option>
            <ion-select-option value="Campero">Campero</ion-select-option>
            <ion-select-option value="Pick-up">Pick-up</ion-select-option>
            <ion-select-option value="SUV">SUV</ion-select-option>
        </ion-select>
        <ion-select v-model="combustible" id="combustible" name="combustible" label="Combustible:">
            <ion-select-option value="Gasolina">Gasolina</ion-select-option>
            <ion-select-option value="Diesel">Diesel</ion-select-option>
            <ion-select-option value="Híbrido">Híbrido</ion-select-option>
            <ion-select-option value="Eléctrico">Eléctrico</ion-select-option>
        </ion-select>
        <Input v-model="ultimoDigito" type="number" id="ultimoDigito" name="ultimoDigito"
            label="Último dígito de placa:"></Input>
        <Input v-model="precio" type="number" id="precio" name="precio" label="Precio:"></Input>
        <Input v-model="kilometraje" type="number" id="kilometraje" name="kilometraje" label="Kilometraje:"></Input>
        <Input v-model="imagen" type="file" id="imagen" name="imagen" label="Imagen:"></Input>
        <!-- No guarda la imagen sino una url inválida -->
        <ion-img v-if="imagen" :src="`data:image/jpeg;base64,${imagen}`"></ion-img>
        <ion-label v-else>Imagen no disponible</ion-label><br />
        <ion-label>*Campos obligatorios</ion-label><br />
    </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import { IonRadioGroup, IonRadio, IonTextarea, IonSelect, IonSelectOption, IonLabel, IonImg } from '@ionic/vue';
import { ref } from 'vue';

const nombre = ref('');
const marca = ref('');
const descripcion = ref('');
const modelo = ref('');
const ubicacion = ref('');
const anio = ref('');
const condicion = ref('');
const transmision = ref('');
const tipo = ref('');
const combustible = ref('');
const ultimoDigito = ref('');
const precio = ref('');
const kilometraje = ref('');
const imagen = ref('');
</script>