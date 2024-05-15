<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Resultado De la Busqueda</ion-title>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-text-center">
      <div class="image-container">
        <ion-img src="public\CLA-45S-AMG-2.png" alt="Descripción de la imagen" class="image"></ion-img>
      </div>
  
      <div class="custom-box">
        <div class="section">
          <div class="label">Nombre:</div>
          <div class="content">Mercedes-Benz AMG 2.0 A 45 4MATIC</div>
        </div>
        <div class="section">
          <div class="label">Descripción General:</div>
          <div class="content">
            - Accesorios en carbono <br>
            - Dowpipe <br>
            - Filtro Mishimoto de alto flujo <br>
            - Cut Out con control<br>
            -  Rines 19 AMG con Llantas nuevas<br>
            -  Caja de 7 velocidades DSG con cambios en el timon
          </div>
        </div>
        <div class="section">
          <div class="label">Precio:</div>
          <div class="content">$119.000.000</div>
        </div>
      </div>
  
      <div class="image-container">
        <ion-img src="public\2021_Toyota_Land_Cruiser_300_3.4_ZX_(Colombia)_front_view_01.png" alt="Descripción de la segunda imagen" class="image"></ion-img>
      </div>
  
      <div class="custom-box">
        <div class="section">
          <div class="label">Nombre:</div>
          <div class="content">Toyota Lc 300 Zx</div>
        </div>
        <div class="section">
          <div class="label">Descripción General:</div>
          <div class="content">Toyota modelo 2023 lc300 zx con garantia comprada en distoyota con poliza de todo riesgo sacada desde el concesionario 850 km, unico dueno, tapetes weathertech full, 3 bancas mas baul. incluye tiro easyhitch y polarizado</div>
        </div>
        <div class="section">
          <div class="label">Precio:</div>
          <div class="content">$581.000.000</div>
        </div>
      </div>
  
      <div class="image-container">
        <ion-img src="public\2018_Audi_TT_RS_Coupe.png" alt="Descripción de la segunda imagen" class="image"></ion-img>
      </div>
  
      <div class="custom-box">
        <div class="section">
          <div class="label">Nombre:</div>
          <div class="content">Audi Tt Rs</div>
        </div>
        <div class="section">
          <div class="label">Descripción General:</div>
          <div class="content">Audi TT RS excelente estado, solo 3 unidades en el país, motor 5 cilindros turbo cargado 400 caballos de fuerza de fábrica, 0 a 100 km en 3.7segundos, escape deportivo, sistema de tracción Audi Quattro, completamente stock en su mecánica, capo en fibra de carbono, ESTE VEHICULO tubo un choque frontal fue reparado de la mejor manera con repuestos Audi Alemania, el motor no sufrió daño en el choque, actualmente este vehículo solo es asegurable por daños a terceros</div>
        </div>
        <div class="section">
          <div class="label">Precio:</div>
          <div class="content">$259.000.000</div>
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