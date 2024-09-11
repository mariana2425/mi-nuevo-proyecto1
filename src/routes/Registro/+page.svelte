
    <div class="Form"> 
        <h1>REGISTRATE</h1>
        <input type="text" name="texto" placeholder="Nombre completo">
        <br>
        <br>
        <input type="number" name="edad" placeholder="Edad" min="16" max="100"> 
        <br>
        <br>
        <input type="date" name="date" placeholder="Fecha de nacimiento" >
        <br>
        <br>
        <input type="tel" name="telefono" placeholder="N&uacute;mero telefonico">
        <br>
        <br>
        <input type="email" name="email" placeholder="Correo electronico">
        <br>
        <br>
        <input type="password" name="clave" placeholder="Contraseña">
        <br>
        <br>
        <button type="submit" class="Ingresar">INGRESA</button>
    </div>

<style>
.Form{
                background-color: rgb(255, 255, 255);
                border-style: outset;
                border-radius: 5px;
                border-color: rgb(255, 255, 255);
                text-align: center;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                margin-left: 220px;
                margin-right: 220px;
                margin-top: 15px;
            }
body{
  background-image: url(FONDO\ ACTIVIDADES);
  font-family: Arial, Helvetica, sans-serif;
}
.bg-image {
  background-image: url('carretera.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Form {
  width: 500px;
  padding: 70px;
  background-color: #ffffff;
  border-radius: 10px;
  font-family: 'Abril Fatface', cursive; /* Cambio de la fuente */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.Form h2 {
  text-align: center;
  color: #000000;
  font-style: normal; /* Eliminar la inclinación */
  font-family: 'Abril Fatface', cursive; /* Fuente */
}

.Form label {
  color: #555;
}

.Form input[type="text"],
.Form input[type="password"] {
  width: calc(100% - 22px); /* Ajuste para el borde */
  padding: 10px;
  margin: 5px 0 15px 0;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: 'Abril Fatface', cursive; /* Fuente */
}

.Ingresar button.In {
  width: 100%;
  padding: 10px;
  background-color: #79977a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Abril Fatface', cursive; /* Fuente */
}

.Ingresar.In:hover {
  background-color: #4d0909;
}

.Ingresar a {
  color: #777;
}

.Ingresar a:hover {
  color: #333;
}
.Nav a {
  font-size: 18px;
  color: #ededed;
  text-decoration: none;
  font-weight: 500;
  margin-left: 35px ;
  transition: .3s;
}
.Nav a:hover { 
  color:#005200;
}
header{
  background-color: #258d19;
  margin: 0px;
  height: 70px;
}
</style>
       