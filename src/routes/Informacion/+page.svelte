<script>
    let amarilla = $state(false)
</script>

<header class="Nav">
    <a href="/" class="Logo">Reduce, Reutiliza y Recicla </a>
    <nav class="EN">
        <a href="http://127.0.0.1:5500/Inicio.html">Inicio</a>
        <a href="http://127.0.0.1:5500/Actividades.html">Actividades</a>
        <a href="http://127.0.0.1:5500/Informacion.html">Información</a>
        <a href="http://127.0.0.1:5500/Iniciosesion.html">Iniciar Sesión</a>
        <a href="http://127.0.0.1:5500/Resgistro.html">Resgistro</a>
        <a href="http://127.0.0.1:5500/Funcionalidad.html">Mis metas</a>
    </nav>
</header>
<br>
<br>
<br>
<br>
<br>
<br><br><br>
<section id="inicio" class="ini">
    <h2>Bienvenido</h2>
    <p>Bienvenidos a recicla y crea, tu fuente de información y recursos sobre el apasionante mundo del reciclaje.
    <br> En un momento en el que la preocupación por el medio ambiente y la sostenibilidad está en constante crecimiento,
    <br> el reciclaje se ha convertido en una herramienta esencial para conservar nuestros recursos naturales y proteger el planeta para las generaciones futuras. <br>
    Acompáñanos en este viaje hacia un futuro más verde y sostenible. <br>
     Juntos, podemos marcar la diferencia. ¡Comencemos a reciclar hoy mismo!  </p>
</section>
<br>
<br>
<hr>



    <section id="informacion">
        <h2>Información</h2>
        <p>¿Sabias que al separar los reciduos como el carton, el vidrio, el papel, el plastico y el metaL, LE ESTAS HACIENDO UN GRAN FAVOR a los recicladores ?</p>
        <hr>
        <ul>
            <li>El papel y el carton se reciclan para hacer papel reciclado y productos de carton.</li>
            <li>El vidrio se funde para crear nuevos envases y objetos de vidrio</li>
            <li>Los plasticos se reciclan para producir una variedad de productos, desde botellas hasta ropa</li>
            <li>Los metales se funden y se utilizan para fabricar nuevos productos metalicos.</li>
        </ul>


    
        
        <h2>¿COMO USAR CADA CANECA DE BASURA SEGUN SU COLOR?</h2>
        <button onclick={()=> !amarilla}>CANECA AMARILLosa</button>
        <button >CANECA AZUL</button>
        <button >CANECA VERDE</button>
        <button >CANECA ROJA</button>
        <button >CANECA GRIS</button>
        <button >CANECA NARANJA</button>
        <button >CANECA NEGRA</button>
        <button >CANECA BLANCA</button>
        
        {#if amarilla}
            
            <div id="CanecaAmarilla" class="actividad">
            <h3>El contenedor AMARILLO está destinado a los envases de plástico, latas o envases tipo brik.</h3>
                <ul>
                    <li>ENVASES DE PLÁSTICO: botellas y garrafas de agua, de refrescos, de aceite; aros que sujetan los packs de latas; envases de yogur, de mantequilla; bandejas de “corcho blanco”; botes de productos de limpieza, detergentes líquidos; envases de cosméticos, gel, champú, cremas,: tapas y tapones de plástico; etc.
                    <li>BOLSAS DE PLÁSTICO: bolsas de comercios y envoltorios, papel film (aluminio), envases tipo blister,  etc.</li>
                    <li>ENVASES TIPO BRIK: de leche, zumo, vino, aceite, etc.</li>
                    <li>ENVASES METÁLICOS: latas de bebidas, botes de conserva, aerosoles, bandejas y papel de aluminio, chapas y tapas metálicas, etc.</li>
                </ul>
            <img src="contenedor-amarillo.jpg" width="200" alt="caneca amarilla" >
            </div>
        {/if}
        <div id="CanecaAzul" class="actividad">
            <h3>El contenedor AZUL está destinado a los envases de papel y cartón.</h3>
            <li>Folios, libretas, periódicos, revistas, papel de regalo y de envolver, sobres (sin ventanilla), folletos de publicidad.
            <li>Cajas, piezas de cartón y envases (de cereales, galletas, comidas pre-cocinadas y congeladas, comida rápida, zapatos, etc.).</li>
            <li>Hueveras de cartón, tubos de cartón del papel higiénico o de las servilletas de cocina.</li>
            <img src="contenedor-azul.jpg" width="200">
        </div>
        <div id="CanecaVerde" class="actividad">
            <h3>caneca VERDE para depositar residuos orgánicos aprovechables como los restos de comida, desechos agrícolas etc.</h3>
            <img src="contenedor-verde.jpg" width="200">
            
        </div>
        <div id="CanecaRoja" class="actividad">
            <h3>En la bolsa roja se deben depositar únicamente para residuos hospitalarios y similares que contengan bacterias, parásitos, virus, hongos e infecciosos como: guantes quirúrgicos, agujas, jeringas, gasas, e</h3>
            <img src="Contenedor rojo" width="200">
            
        </div>
        <div id="CanecaGris" class="actividad">
            <h3>Caneca gris: Aquí se deben depositar todo tipo de papeles y cartones, sin importar su procedencia, siempre y cuando sean limpios y secos; las revistas, periódicos, folletos o papeles para envolver son algunos ejemplos de residuos que puede desechar en estos recipientes</h3>
            <img src="contenedor-gris.jpg" width="200">
            
        </div>
        <div id="CanecaNaranja" class="actividad">
            <h3>los restos de alimentos (cáscaras de fruta, espinas de pescado, etc.) irán en el contenedor naranja/marrón.</h3>
            <img src="Contenedor naranja.avif" width="200">
            <img src="contenedor-marron.jpg" alt="">
            
        </div>
        <div id="CanecaNegra" class="actividad">
            <h3>Color negro: Para depositar residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros.</h3>
            <img src="Contenedor negro.jpg" width="200">
            
        </div>
        <div id="CanecaBlanca" class="actividad">
            <h3> Blanco: allí deben ir los residuos aprovechables como plástico, metales, cartón, papel, vidrio, PET. </h3>
            <img src="Contenedor blanco.jpg" width="200">
            
        </div>
    </section>
    <br>
    <br><br>
    <hr>

    <section id="sugerencias" class="sugerencias">
        
        <h2>sugerencias </h2>
        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="sugerencias">sugerencias:</label>
            <input type="sugerencias" id="sugerencias" name="sugerencias" required>
            <button type="submit">Enviar</button>
        </form>
    </section>

<br>
<br>
<br>
    <footer>
        <p>&copy; proyecto de grado 2024</p>
    </footer>

    <style>
        body {
    font-family: 'Arial', sans-serif;
    background-image: url(FONDO\ ACTIVIDADES);
    color: #0e0d0d;
}

header {
    background-color:#005200;
    padding: 5px;
    text-align: center;
    position:fixed ;
    right:0 ;
    left: 0;
    text-align: center;
}

image {
    float: left; 
    margin-right: 20px; 
}
        

header h1 {
    font-size: 36px;
    margin: 0;
    text-align: center;
    padding: 10px;
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #080808;
    text-decoration: none;
    font-size: 18px;
}

section {
    padding: 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
}

h2 {
    font-size: 28px;
    color:#0f0f0f;
}

p {
    font-size: 16px;
    line-height: 1.6;
    color:#080808
}

button {
    background-color:#005200;
    border: none;
    color: rgb(255, 255, 255);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
}

footer {
    background-color: #333;
    color: #0f0f0f;
    text-align: center;
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

footer p {
    margin: 0;
}

.actividad {
    display: none;

    border-radius: 20px;
    color: #000000;
}

.ini{
    text-align: center;
    background-color: aliceblue;
    border-radius: 20px;
}
.sugerencias{
    text-align: center;
    background-color: rgb(135, 152, 167);
    border-radius: 20px;
    font-family: '', cursive;
    text-decoration: none;
}
.main{
    width:73% ;
    height: 700px;
    background-color: rgb(255, 255, 255);
    float: right;
    text-align: center;
    position: static;
    margin-right: 3px;
}
.Nav a {
    font-size: 18px;
    color: #ebebeb;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px ;
}
    </style>