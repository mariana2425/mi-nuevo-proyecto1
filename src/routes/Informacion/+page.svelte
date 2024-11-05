<script>
  import contenedorb from "$lib/images/Contenedor blanco.jpg"
  import contenedorn from "$lib/images/Contenedor negro.jpg"
  import contendorv from "$lib/images/contenedor-verde.jpg"
  import contenedorg from "$lib/images/contenedor-gris.jpg"
  import contenedora from "$lib/images/contenedor-amarillo.jpg"
  import contenedorz from "$lib/images/contenedor-azul.jpg"


 let activeActivity = null;

 function showActivity(activityId) {
  activeActivity = activityId;
 }
</script>

<main class="mybody">



<section id="intro">
    <h2>¿Por qué Reciclar?</h2>
    <p>Reciclar es importante por varias razones. <br> En primer lugar, ayuda a reducir la cantidad de basura que termina en los vertederos y la incineración, lo que a su vez reduce la contaminación del medio ambiente. <br>
      Además, el reciclaje ayuda a ahorrar recursos naturales, como agua y energía, ya que se requiere menos energía para producir nuevos productos a partir de materiales reciclados que para producirlos a partir de materias primas vírgenes. <br> 
      El reciclaje también reduce la necesidad de extraer materias primas, lo que ayuda a proteger el medio ambiente y a conservar los recursos naturales. <br>
      Otro beneficio del reciclaje es que ayuda a reducir las emisiones de gases de efecto invernadero, lo que contribuye a mitigar el cambio climático.</p>
</section>

<section id="tipos">
    <h2>Tipos de Reciclaje</h2>
     
    
    <div class="cards">
      <div class="card red">
        <p class="tip">reciclaje de materiales</p>
        <p class="second-text">Consiste en la recolección y procesamiento de materiales como: <br>
             ⁠Papel y cartón <br>
             ⁠Plásticos <br>
             ⁠Vidrio <br>
             ⁠Metales <br>
            Estos materiales se transforman en nuevos productos, <br>
             reduciendo la necesidad de recursos naturales y minimizando los residuos.</p>
      </div>
      <div class="card blue">
        <p class="tip">Reciclaje orgánico</p>
        <p class="second-text">Se enfoca en la transformación de residuos orgánicos como: <br>
             ⁠Comida y restos de alimento <br>
             ⁠Residuos de jardín y parques <br>
             ⁠Excrementos animales <br>
             </p>
      </div>
      <div class="card green">
        <p class="tip">Reciclaje electrónico</p>
        <p class="second-text"> se centra en la recolección y procesamiento de: <br>
             ⁠Electrónicos obsoletos (ordenadores, teléfonos, etc.) <br>
             ⁠Componentes electrónicos <br>
             ⁠Baterías y acumuladores <br>

            </p>
      </div>
      
    </div>
</section>

<section id="informacion">

  <h2>¿COMO USAR CADA CANECA DE BASURA SEGUN SU COLOR?</h2>
  <button on:click={() => showActivity('CanecaAmarilla')}>CANECA AMARILLA</button>
  <button on:click={() => showActivity('CanecaAzul')}>CANECA AZUL</button>
  <button on:click={() => showActivity('CanecaVerde')}>CANECA VERDE</button>
  <button on:click={() => showActivity('CanecaRoja')}>CANECA ROJA</button>
  <button on:click={() => showActivity('CanecaGris')}>CANECA GRIS</button>
  <button on:click={() => showActivity('CanecaNaranja')}>CANECA NARANJA</button>
  <button on:click={() => showActivity('CanecaNegra')}>CANECA NEGRA</button>
  <button on:click={() => showActivity('CanecaBlanca')}>CANECA BLANCA</button>

  <div id="CanecaAmarilla" class="actividad">
    <h3>El contenedor AMARILLO está destinado a los envases de plástico, latas o envases tipo brik.</h3>
      <ul>
          <li>ENVASES DE PLÁSTICO: botellas y garrafas de agua, de refrescos, de aceite; aros que sujetan los packs de latas; envases de yogur, de mantequilla; bandejas de “corcho blanco”; botes de productos de limpieza, detergentes líquidos; envases de cosméticos, gel, champú, cremas,: tapas y tapones de plástico; etc.
          <li>BOLSAS DE PLÁSTICO: bolsas de comercios y envoltorios, papel film (aluminio), envases tipo blister,  etc.</li>
          <li>ENVASES TIPO BRIK: de leche, zumo, vino, aceite, etc.</li>
          <li>ENVASES METÁLICOS: latas de bebidas, botes de conserva, aerosoles, bandejas y papel de aluminio, chapas y tapas metálicas, etc.</li>
      </ul>
   <img src="contenedor-amarillo.jpg" width="200" alt="">
  </div>
  <div id="CanecaAzul" class="actividad">
      <h3>El contenedor AZUL está destinado a los envases de papel y cartón.</h3>
      <li>Folios, libretas, periódicos, revistas, papel de regalo y de envolver, sobres (sin ventanilla), folletos de publicidad.
      <li>Cajas, piezas de cartón y envases (de cereales, galletas, comidas pre-cocinadas y congeladas, comida rápida, zapatos, etc.).</li>
      <li>Hueveras de cartón, tubos de cartón del papel higiénico o de las servilletas de cocina.</li>
      <img src="contenedor-azul.jpg" width="200" alt="">
  </div>
  <div id="CanecaVerde" class="actividad">
      <h3>caneca VERDE <br>
        para depositar residuos orgánicos aprovechables como los restos de comida, desechos agrícolas etc.</h3>
      <img src="contenedor-verde.jpg" width="200" alt="">
      
  </div>
  <div id="CanecaRoja" class="actividad">
      <h3>En la caneca roja. <br>
         Se deben depositar únicamente para residuos hospitalarios y similares que contengan bacterias, parásitos, virus, hongos e infecciosos como: guantes quirúrgicos, agujas, jeringas, gasas, e</h3>
      <img src="Contenedor rojo" width="200" alt="">
      
  </div>
  <div id="CanecaGris" class="actividad">
      <h3>Caneca gris: <br>
         Aquí se deben depositar todo tipo de papeles y cartones, sin importar su procedencia, siempre y cuando sean limpios y secos; las revistas, periódicos, folletos o papeles para envolver son algunos ejemplos de residuos que puede desechar en estos recipientes</h3>
      <img src="contenedor-gris.jpg" width="200" alt="">
      
  </div>
  <div id="CanecaNaranja" class="actividad">
      <h3>en el contenedor naranja/marrón <br>
        los restos de alimentos (cáscaras de fruta, espinas de pescado, etc.).</h3>
      <img src="Contenedor naranja.avif" width="200" alt="">
      <img src="contenedor-marron.jpg" alt="">
      
  </div>
  <div id="CanecaNegra" class="actividad">
      <h3>Color negro: <br>
         Para depositar residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros.</h3>
      <img src="Contenedor negro.jpg" width="200" alt="">
      
  </div>
  <div id="CanecaBlanca" class="actividad">
      <h3> Caneca Blanca: <br>
        allí deben ir los residuos aprovechables como plástico, metales, cartón, papel, vidrio, PET. </h3>
      <img src="Contenedor blanco.jpg" width="200" alt="">
      
  </div>
</section>
</main>
<style>

 .mybody{
  font-family: Arial, sans-serif;
    background-image: url(FONDO\ ACTIVIDADES);
    line-height: 1.6;
    margin: 10px;
    padding: 20px;
  }
 
 section {
    padding: 30px;
    margin-top: 20px;
    background-color: white;
    
    border-radius: 8px;
  }

 h2 {
    color: #4CAF50;
    text-align: center;
  }

 ul {
    list-style-type: square;
  }


 .cards {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  
  .cards .red {
    background-color: #007e9e;
  }
  
  .cards .blue {
    background-color: #0062ff;
  }
  
  .cards .green {
    background-color: #18cd5e;
  }
  
  .cards {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center; 
  }
  
  .cards .red {
    background-color: #007e9e;
    width: 150px; 
  }
  
 
</style>
