<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Ver todos los vehiculos</ion-title>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-text-center">
    <div class="image-container">
      <ion-img src="public/Bmw-m4.png" alt="Descripción de la imagen" class="image"></ion-img>
    </div>

    <div class="custom-box">
      <div class="section">
        <div class="label">Nombre:</div>
        <div class="content">BMW M4 2016</div>
      </div>
      <div class="section">
        <div class="label">Descripción General:</div>
        <div class="content">
          - SE VENDE BMW M4 COUPE <br>
          - MODELO 2015 <br>
          - MOTOR 3000CC TURBO INTERCOOLER <br>
          - 431 HP DE POTENCIA <br>
          - CAJA TRIPTONICA <br>
          - PAPELES AL DIA Y LISTO PARA TRASPASO INMEDIATO
        </div>
      </div>
      <div class="section">
        <div class="label">Precio:</div>
        <div class="content">$195.000.000</div>
      </div>
    </div>

    <div class="image-container">
      <ion-img src="public\1200px-2019_Chevrolet_Camaro_base__front_11.9.19.png" alt="Descripción de la segunda imagen" class="image"></ion-img>
    </div>

    <div class="custom-box">
      <div class="section">
        <div class="label">Nombre:</div>
        <div class="content">Chevrolet Camaro 6.2 Ss</div>
      </div>
      <div class="section">
        <div class="label">Descripción General:</div>
        <div class="content">Con 465 caballos de fuerza bajo el capó. Su motor V8 de 6.2 litros es sinónimo de potencia pura. ¿Listo para sentir la emoción de la velocidad? La transmisión automática de 8 velocidades con Active Select te permite tomar el control y cambiar las marchas a tu gusto</div>
      </div>
      <div class="section">
        <div class="label">Precio:</div>
        <div class="content">$150.000.000</div>
      </div>
    </div>

    <div class="image-container">
      <ion-img src="public\Portada-13.png" alt="Descripción de la segunda imagen" class="image"></ion-img>
    </div>

    <div class="custom-box">
      <div class="section">
        <div class="label">Nombre:</div>
        <div class="content">Mercedes Benz G63 Amg</div>
      </div>
      <div class="section">
        <div class="label">Descripción General:</div>
        <div class="content">Mercedes Benz G63 amg
Modelo: 2023
Motor: V8 4.0 biturbo Gasolina
Kilometraje: 0 KM
Lista para matricular!!
Garantía con Concesionario
Importada por Alemana Automotriz</div>
      </div>
      <div class="section">
        <div class="label">Precio:</div>
        <div class="content">$1.440.000.000</div>
      </div>
    </div>
  </ion-content>
</template>

<script>
export default {
  name: 'CustomBox',
  props: {
    // Puedes dejar este bloque como está si no necesitas propiedades adicionales para las nuevas secciones.
  },
};
</script>

<style scoped>
.custom-box {
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
  min-width: 120px;
}

.content {
  font-size: 16px;
}

.image-container {
  margin: 20px auto;
  display: flex;
  justify-content: center;
}

/* Estilo para la imagen */
.image {
  max-width: 300px; /* Ajustar el tamaño máximo de la imagen */
  border-radius: 8px;
}
</style>












