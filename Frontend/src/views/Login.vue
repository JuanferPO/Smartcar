<template>
    <div class="container">
      <!-- Imagen centrada -->
      <div class="image-container">
        <img src="/Logo-App-Carro.png" alt="Descripción de la imagen" class="centered-image">
      </div>
      
      <!-- Cuadro de ingreso -->
      <div class="login-box">
        <h2>Iniciar sesión</h2>
        <form>
          <div class="form-group">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" class="input-field" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" class="input-field" required>
          </div>
          <button type="submit" class="login-button">Ingresar</button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Contenedor principal */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Toma toda la altura de la pantalla */
  }
  
  /* Estilos para la imagen */
  .image-container {
    text-align: center; /* Centrado horizontal */
  }
  
  .centered-image {
    max-width: 100%;
    max-height: 200px;
  }
  
  /* Estilos para el cuadro de ingreso */
  .login-box {
    max-width: 400px;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .login-box h2 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .label {
    font-weight: bold;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  /* Estilos para dispositivos pequeños */
  @media screen and (max-width: 600px) {
    .login-box {
      max-width: 300px;
      padding: 30px;
    }
  }
  </style>
  