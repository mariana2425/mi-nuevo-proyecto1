<script>
    const {data}= $props();

    const {profes}= data.profes
</script>




    <header class="Nav">
        <a href="#" class="Logo">Reduce, Reutiliza y Recicla </a>
        <nav class="EN">
            <a href="http://127.0.0.1:5500/Inicio.html">Inicio</a>
            <a href="http://127.0.0.1:5500/Actividades.html">Actividades</a>
            <a href="http://127.0.0.1:5500/Informacion.html">Información</a>
            <a href="http://127.0.0.1:5500/Iniciosesion.html">Iniciar Sesión</a>
            <a href="http://127.0.0.1:5500/Resgistro.html">Resgistro</a>
            <a href="http://127.0.0.1:5500/Funcionalidad.html">Mis metas</a>
        </nav>
    </header>
    <section class="Inicio">
        <div class="Inicio-contenido">
            <h1>"Hola, Bienvenido a Recicla y Crea"</h1>
            <p>Aprende y participa en nuestras actividades de reciclaje para contribuir a un planeta más limpio.</p>
        </div>
        <div class="Ingresa">
            <a href="http://127.0.0.1:5500/FROM.html/Iniciosesion.html">Inicia Sesion</a>
            <a href="http://127.0.0.1:5500/FROM.html/Resgistro.html">Registrate</a>
        </div>
        <div class="Inicio-link">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-gmail'></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
        </div>
    </section>


<style>
   body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.8);
    background-image: url(fondo2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    object-fit: cover;
}
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 10%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    

}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}
.Nav a {
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px ;
    transition: .3s;
}
.Nav a:hover { 
    color:#258d19;
}
.Inicio {
    height: 100vh;
    background: url('') ;
    background-size: cover;
    background-position: center ;
    display: flex;
    align-items: center;
    padding: 0 10%;
}
.Inicio-contenido {
    max-width: 600px;

}
.Inicio-contenido h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
    color: #005200;
}
.Inicio-contenido p {
    font-size: 16px;
    margin: 20px 0 40px;
}
.Inicio-contenido .Ingresa {
    display: flex;
    justify-content: space-between ;
    width: 345px;
    height: 50px;
    color: black;
}
.Ingresa a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    background: #6fad68;
    border: 2px solid #74bb6c;
    border-radius: 8px;
    font-size: 19px;
    color: #5d745d;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;
    overflow: hidden;
    transition: .5s;
}
.Ingresa a:hover{
    color:#87aa83;
}

.Ingresa a:nth-child(2) {
    background: transparent;
    color:#258d19;
}
.Ingresa a:nth-child(2):hover{
    color:#258d19;

}
.Ingresa a:nth-child(2)::before{
    background: #005200;

}
.Ingresa a ::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #719271;
    z-index: -1;
    transition: .5s;
}
.Ingresa a:hover ::before{
    width: 100%;

}
.Inicio-link {
    position: absolute;
    bottom: 40px;
    width: 170px;
    display: flex;
    justify-content: space-between;
}
.Inicio-link a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #258d19;
    border-radius: 50%;
    font-size: 20px;
    color: #258d19;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    transition: .5s;
}
.Inicio-link a:hover {
    color:#005200
}
.Inicio-link a::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #258d19;
    z-index: -1;
    transition: .5s;
}
.Inicio-link a:hover::before {
    width: 100%;
}
</style>

{profes}