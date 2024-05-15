<template>
  <div class="container">
    <h1 class="title">Resultado De Búsqueda</h1>
    <div class="result">
      <img src="/Used-2014-Land-Rover-Range-Rover-Sport-50L-V8-Supercharged-1604563894.jpg" alt="Imagen" class="centered-image" width="200" height="150">
      <div class="info-box">
        <div class="info">
          <label for="nombre">Nombre:</label>
          <span id="nombre">Land Rover Range Rover 5.0 Sport 2014</span>
        </div>
        <div class="info">
          <label for="descripcion">Descripción General:</label>
          <span id="descripcion">Llantas en buen estado
    Papeles al día
    Segundo dueño
    Recién comprado el seguro
    En óptimas condiciones</span>
        </div>
        <button class="review-button">Revisar</button>
      </div>
    </div>
    <div class="result">
      <img src="/q16j14441burvydn36du2u0x5.jpg" alt="Otra Imagen" class="centered-image" width="200" height="150">
      <div class="info-box">
        <div class="info">
          <label for="nombre">Nombre:</label>
          <span id="nombre">BMW X6 M60i 4.4 XDRIVE</span>
        </div>
        <div class="info">
          <label for="descripcion">Descripción General:</label>
          <span id="descripcion"> Marca:BMW
Línea y versión: X6 X drive 40i
Modelo: 2023
Motor: 3.000
Turbo: Sí
Tipo de caja: Automática Secuencial (Cuando tiene opción de + / - para hacer cambio manuales)
Tracción: AWD: O All Wheel Drive (Tracción de las cuatro ruedas permanente)
Airbag: Sí
</span>
        </div>
        <button class="review-button">Revisar</button>
      </div>
    </div>
  </div>
</template>

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

.result {
  margin-bottom: 30px;
}

.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.info-box {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  color: #333; /* Cambio del color del texto para mejorar la visibilidad */
}

.info {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

.review-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.review-button:hover {
  background-color: #0056b3;
}
</style>

