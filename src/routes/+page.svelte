<script>
    import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
    import Modal from './Modal.svelte';
    import GotoTop from './GotoTop.svelte';
	import Carousel from './Carrusel.svelte';

    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;

    function openModal(imagen, altText) {
        selectedImage = imagen;
        alternativeText = altText;
        isOverlayOpen = true;
    };

    function closeModal() {
        selectedImage = null;
        alternativeText = null;
        isOverlayOpen = false;
    };

    let galeria = [
        {imagen:"/img/galeria01.jpg"},
        {imagen:"/img/galeria02.jpg"},
        {imagen:"/img/galeria03.jpg"},
        {imagen:"/img/galeria04.jpg"},
        {imagen:"/img/galeria05.jpg"},
        {imagen:"/img/galeria06.jpg"},
        {imagen:"/img/galeria07.jpg"},
        {imagen:"/img/galeria08.jpg"},
        {imagen:"/img/galeria09.jpg"},
        {imagen:"/img/galeria10.jpg"},
    ];

    let seccion = [
        {id: "empezar", nombre: "para empezar"},
        {id: "clasicos", nombre: "los clásicos"},
        {id: "estrellas", nombre: "Las estrellas de cow"},
        {id: "carreta", nombre: "de la carreta"},
        {id: "especiales", nombre: "especiales"},
        {id: "cervezas", nombre: "Cervezas"},
        {id: "bebidas", nombre: "bebidas"},
        {id: "licoreria", nombre: "licorería"},
    ];

    let subseccion = [
        {id: "tostadas", seccion: "empezar", nombre: "tostadas"},
        {id: "taquitos", seccion: "empezar", nombre: "taquitos muy cow"},
        {id: "centro", seccion: "empezar", nombre: "para el centro"},
        {id: "aguachiles", seccion: "carreta", nombre: "aguachiles"},
        {id: "ceviches", seccion: "carreta", nombre: "ceviches"},
        {id: "tiraditos", seccion: "carreta", nombre: "tiraditos de atún"},
        {id: "robalo", seccion: "carreta", nombre: "callos de róbalo"},
        {id: "cocteles", seccion: "carreta", nombre: "cocteles tradicionales"},
        {id: "tacos", seccion: "carreta", nombre: "tacos y quesadillas"},
        {id: "postres", seccion: "especiles", nombre: "postres"},
    ];

    let items = [
        {category: "empezar", subcategory: "tostadas", nombre: "La Mechuda", descripcion: "Atún fresco en cubos mezclado con mango, coronado con aguacate y cebollín frito, con un toque de anguila sobre tostada Won Ton frita", descripcion2: "¡La perfecta combinación!", precio: "79", imagen: "/img/mechuda.jpg"},
        {category: "empezar", subcategory: "tostadas", nombre: "La Cocotera", descripcion: "Camarones cocidos y coco natural bañados en nuestra salsa ácida y dulce a la vez, sobre tostada Won Ton frita y un toque de chamoy", descripcion2: "¡Exquisita!", precio: "79", imagen: "/img/cocotera.jpg"},
        {category: "empezar", subcategory: "tostadas", nombre: "La del Feis", descripcion: "Callos de róbalo con pepino y cebolla morada bañados con nuestra riquísima salsa verde de serrano montado en tostada Won Ton frita", descripcion2: "¡Te va a encantar!", precio: "79", imagen: "/img/feis.jpg"},
        {category: "empezar", subcategory: "tostadas", nombre: "La Coqueta", descripcion: "Camarones cocidos bañados con aderezo de cilantro de la casa montados en tostada Won Ton frita untada con aguacate", descripcion2: "nan", precio: "79", imagen: "/img/coqueta.jpg"},
        {category: "empezar", subcategory: "tostadas", nombre: "La del Chachito", descripcion: "Mix de camarón crudo y pulpo picante, topping de aguacate sobre tostada Won Ton frita", descripcion2: "¡Espectacular!", precio: "79", imagen: "/img/chachito.jpg"},
        {category: "empezar", subcategory: "taquitos", nombre: "La del Gober", descripcion: "Quesadilla de maíz doradita a la plancha con riquísima machaca de camarón ó marlin", descripcion2: "¡Tienes que probarlas!", precio: "50", imagen: "/img/gober.jpg"},
        {category: "empezar", subcategory: "taquitos", nombre: "La del Licenciado", descripcion: "Quesadilla de harina con camarón y pulpo sancochados en la plancha con sabor agridulce", descripcion2: "¡Te encantará!", precio: "80", imagen: "/img/licenciado.jpg"},
        {category: "empezar", subcategory: "taquitos", nombre: "La Costrita", descripcion: "Costra de queso dorado relleno de camarones con cebolla guisados a la mantequilla, láminas de aguacate y aderezo de cilantro de la casa montada sobre una tortilla de maíz", descripcion2: "nan", precio: "80", imagen: "/img/costrita.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Shot's de Ostión", descripcion: "Órden de 3 shots con 2 piezas de ostión cada uno, con nuestro auténtico sabor", descripcion2: "¡Levanta Muertos!", precio: "100", imagen: "/img/shot-ostion.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Camarones p/Pelar", descripcion: "Riquísimos camarones con cabeza cocidos para pelar acompañados con salsa de la casa aparte para bañarlos", descripcion2: "", precio :"350", precio2: "220", imagen: "/img/camaron-pelar.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Camarones Cow", descripcion: "Camarones empanizados bien crunch, bañados en salsa agridulce picosita de la casa con trocitos de piña", descripcion2: "¡Atrévete a probarlos!", precio: "200", imagen: "/img/camaron-cow.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Los Cucaramacara", descripcion: "Los camarones más tronadores, fritos con cáscara acompañados con salsita para bañarlos", descripcion2: "¡Ideal para botanear!", precio: "150", imagen: "/img/cucaramacara.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Hemisferio", descripcion: "Auténtica mariscada de atún, camarón crudo, camarón cocido y pulpo, decorada con cilantro y serrano bañada en exquisita salsa", descripcion2: "¡Muy recomendada, perfecta para compartir!", precio: "400", imagen: "/img/hemisferio.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Camarones al Coco", descripcion: "Camarones empanizados de coco acompañados de arroz a la jardinera, ensalada de col con zanahoria y rico aderezo de mango", descripcion2: "¡Exquisitos!", precio: "200", imagen: "/img/camaron-coco.jpg"},
        {category: "empezar", subcategory: "centro", nombre: "Los Rellenitos", descripcion: "Chilitos caribe empanizados rellonos de Marlin y queso gratinado acompañados con aderezo de chipotle", descripcion2: "¡Al estilo Cow Fish!", precio: "90", imagen: "/img/rellenitos.jpg"},
        {category: "clasicos", subcategory: "", nombre: "Camarones Empanizados", descripcion: "Los Tradicionales Camarones empanizados", descripcion2: "¡Buenísimos!", precio: "160", imagen: "/img/camaron-empanizado.jpg"},
        {category: "clasicos", subcategory: "", nombre: "Chicharrón de Botete", descripcion: "Sabrosos trozos de botete empanizados", descripcion2: "¡Garantía de sabor!", precio: "160", imagen: "/img/chicharron-botete.jpg"},
        {category: "clasicos", subcategory: "", nombre: "Filete Empanizado", descripcion: "Filetes frescos de pescado empanizados", descripcion2: "¡Suculentos!", precio: "150", imagen: ""},
        {category: "estrellas", subcategory: "", nombre: "Aguachile Verde", descripcion: "El inigualable aguachile de camarón crudo bañado en salsa verde de chile serrano con pepino y cebolla morada", descripcion2: "¡Buenísimo!", precio: "170", imagen: "/img/aguachile-verde.jpg"},
        {category: "estrellas", subcategory: "", nombre: "Camarones Chirrisquis", descripcion: "Camarones guisados bañados en salsa de tomate picosita y gratinados con queso doradito al Horno", descripcion2: "¡Muy buenos!", precio: "210", imagen: "/img/chirrisquis.jpg"},
        {category: "estrellas", subcategory: "", nombre: "Sopa Marinera", descripcion: "La Clásica: Pulpo, pescado, camarón, ostión y chocolate; Acompañada de arroz a la jardinera", descripcion2: "¡Riquísima y muy sustanciosa!", precio: "200", imagen: "marinera.jpg"},
        {category: "estrellas", subcategory: "", nombre: "Filete \"La Comadre\"", descripcion: "Filete de pescado zarandeado sazonado con nuestro inigualable aderezo de la casa, queso gratinado y dorado al horno", descripcion2: "¡El mejor que probarás!", precio: "220", imagen: ""},
        {category: "estrellas", subcategory: "", nombre: "Filete \"El Capule\"", descripcion: "Preparado con aderezo de chile poblano, gratinado al horno con arroz de guarnición y pico de gallo", descripcion2: "¡Algo diferente!", precio: "250", imagen: "/img/capule.jpg"},
        {category: "estrellas", subcategory: "", nombre: "Ceviche Mitotero", descripcion: "El tradicional ceviche de camarón mixto y pulpo con el sabor inigualable de Cow Fish", descripcion2: "¡Incomparable!", precio: "180", imagen: "/img/ceviche-mitotero.jpg"},
        {category: "estrellas", subcategory: "", nombre: "Molcajete", descripcion: "Camarón mixto, róbalo y pulpo, acompañado de tostitos con salsa especial de la casa", descripcion2: "¡Te va a encantar!", precio: "250", imagen: "/img/molcajete.jpg"},
        {category: "estrellas", subcategory: "", nombre: "El Soruyo", descripcion: "Aguachile de camarón crudo bañado con salsas negras con toque oriental", descripcion2: "¡Espectacular!", precio: "170", imagen: "/img/soruyo.jpg"},
        {category: "carreta", subcategory: "aguachiles", nombre: "Aguachile de Camarón", descripcion: "Crudo, cocido ó mixto con pepino y cebolla morada, pídelo con tu salsa preferida", descripcion2: "¡Los más famosos!", precio: "160", imagen: "/img/aguachile-mixto.jpg"},
        {category: "carreta", subcategory: "aguachiles", nombre: "Aguachile de Pulpo", descripcion: "Con pepino y cebolla morada", descripcion2: "¡Riquísimo!", precio: "220", imagen: "/img/aguachile-pulpo.jpg"},
        {category: "carreta", subcategory: "aguachiles", nombre: "Aguachile de Camarón y Pulpo", descripcion: "", descripcion2: "¡La combinación perfecta!", precio: "180", imagen: "/img/aguachile-mixto-pulpo.jpg"},
        {category: "carreta", subcategory: "ceviches", nombre: "Ceviche de Camarón", descripcion: "Pídelo cómo más te guste: Crudo, cocido ó mixto con pepino, cebolla morada y tomate", descripcion2: "¡Sabor garantizado!", precio: "150", imagen: "/img/ceviche-camaron.jpg"},
        {category: "carreta", subcategory: "ceviches", nombre: "Ceviche de Pescado", descripcion: "", descripcion2: "¡El clásico con sazón de casa!", precio: "130", imagen: ""},
        {category: "carreta", subcategory: "tiraditos", nombre: "Atún", descripcion: "", descripcion2: "", precio: "145", imagen: "/img/tiradito-atun.jpg"},
        {category: "carreta", subcategory: "tiraditos", nombre: "Atún con Camarón", descripcion: "", descripcion2: "", precio: "170", imagen: "/img/tiradito-atun-camaron.jpg"},
        {category: "carreta", subcategory: "tiraditos", nombre: "Atún con Pulpo", descripcion: "", descripcion2: "", precio: "210", imagen: "/img/tiradito-atun-pulpo.jpg"},
        {category: "carreta", subcategory: "tiraditos", nombre: "Atún con Camarón y Pulpo", descripcion: "", descripcion2: "", precio: "210", imagen: ""},
        {category: "carreta", subcategory: "robalo", nombre: "Callo Róbalo (Órden)", descripcion: "", descripcion2: "", precio: "180", imagen: ""},
        {category: "carreta", subcategory: "robalo", nombre: "Róbalo con Camarón", descripcion: "", descripcion2: "", precio: "210", imagen: ""},
        {category: "carreta", subcategory: "robalo", nombre: "Róbalo con Pulpo", descripcion: "", descripcion2: "", precio: "210", imagen: "/img/robalo-pulpo.jpg"},
        {category: "carreta", subcategory: "robalo", nombre: "Róbalo con Camarón y Pulpo", descripcion: "", descripcion2: "", precio: "210", imagen: ""},
        {category: "carreta", subcategory: "cocteles", nombre: "Camarón", descripcion: "", descripcion2: "", precio: "150", imagen: "/img/coctel-camaron.jpg"},
        {category: "carreta", subcategory: "cocteles", nombre: "Camarón con Pulpo", descripcion: "", descripcion2: "", precio: "170", imagen: "/img/coctel-camaron-pulpo.jpg"},
        {category: "carreta", subcategory: "cocteles", nombre: "Campechana", descripcion: "", descripcion2: "", precio: "180", imagen: "/img/campechana.jpg"},
        {category: "carreta", subcategory: "tacos", nombre: "Taco de Camarón", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "carreta", subcategory: "tacos", nombre: "Taco de Pulpo", descripcion: "", descripcion2: "", precio: "50", imagen: "/img/taco-pulpo.jpg"},
        {category: "carreta", subcategory: "tacos", nombre: "Taco de Botete", descripcion: "", descripcion2: "", precio: "40", imagen: ""},
        {category: "carreta", subcategory: "tacos", nombre: "Quesdilla de Camarón", descripcion: "", descripcion2: "", precio: "50", imagen: ""},
        {category: "carreta", subcategory: "tacos", nombre: "Quesdilla de Pulpo", descripcion: "", descripcion2: "", precio: "75", imagen: ""},
        {category: "carreta", subcategory: "tacos", nombre: "Quesadilla de Botete", descripcion: "", descripcion2: "", precio: "60", imagen: ""},
        {category: "carreta", subcategory: "tacos", nombre: "Quesadilla de Marlin", descripcion: "", descripcion2: "", precio: "70", imagen: "/img/quesadilla-marlin.jpg"},
        {category: "especiales", subcategory: "", nombre: "Ostión (1 pza)", descripcion: "", descripcion2: "", precio: "20", imagen: "/img/ostiones-naturales.jpg"},
        {category: "especiales", subcategory: "", nombre: "Ostión Especial (3 pzas)", descripcion: "", descripcion2: "", precio: "150", imagen: "/img/ostiones-especiales.jpg"},
        {category: "especiales", subcategory: "", nombre: "Ostiones Gratinados (6 pzas)", descripcion: "", descripcion2: "", precio: "200", imagen: "/img/ostiones-gratinados.jpg"},
        {category: "especiales", subcategory: "", nombre: "Ostiones Gratinados (12 pzas)", descripcion: "", descripcion2: "", precio: "300", imagen: "/img/ostiones-gratinados.jpg"},
        {category: "especiales", subcategory: "", nombre: "Chocolata (1 pza)", descripcion: "", descripcion2: "", precio: "20", imagen: "/img/chocolatas.jpg"},
        {category: "especiales", subcategory: "", nombre: "Chocolata Especial (3 pzas)", descripcion: "", descripcion2: "", precio: "150", imagen: "chocolatas-especiales.jpg"},
        {category: "especiales", subcategory: "", nombre: "Chocolatas Gratinadas (6 pzas)", descripcion: "", descripcion2: "", precio: "200", imagen: "/img/chocolatas-gratinadas.jpg"},
        {category: "especiales", subcategory: "", nombre: "Chocolatas Gratinadas (12 pzas)", descripcion: "", descripcion2: "", precio: "300", imagen: "/img/chocolatas-gratinadas.jpg"},
        {category: "especiales", subcategory: "", nombre: "Pescado Zarandeado", descripcion: "", descripcion2: "", precio: "", imagen: ""},
        {category: "especiales", subcategory: "postre", nombre: "Flan Casero", descripcion: "", descripcion2: "", precio: "50", imagen: "/img/flan.jpg"},
        {category: "especiales", subcategory: "postre", nombre: "Pay de Queso", descripcion: "", descripcion2: "", precio: "50", imagen: "/img/pay-queso.jpg"},
        {category: "cervezas", subcategory: "", nombre: "Modelo Especial", descripcion: "", descripcion2: "", precio: "40", imagen: "/img/modelo.jpg"},
        {category: "cervezas", subcategory: "", nombre: "Modelo Negra", descripcion: "", descripcion2: "", precio: "40", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Pacífico Suave", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Pacífico Clara", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Pacífico Light", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Corona", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Stella Artois", descripcion: "", descripcion2: "", precio: "60", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Indio", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Michelob Ultra", descripcion: "", descripcion2: "", precio: "40", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Michelob y Coronitas de Sabor", descripcion: "", descripcion2: "", precio: "35", imagen: "/img/coronita.jpg"},
        {category: "cervezas", subcategory: "", nombre: "Cerveza sin Alcohol", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Tecate Light ¼", descripcion: "", descripcion2: "", precio: "17", imagen: ""},
        {category: "cervezas", subcategory: "", nombre: "Tecate Rojo Bote", descripcion: "", descripcion2: "", precio: "30", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Refrescos", descripcion: "", descripcion2: "", precio: "30", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Limonada Mineral ó Natural", descripcion: "", descripcion2: "", precio: "35", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Agua Fresca (500 ml)", descripcion: "", descripcion2: "", precio: "25", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Agua Fresca (1 Lt)", descripcion: "", descripcion2: "", precio: "45", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Agua Mineral", descripcion: "", descripcion2: "", precio: "30", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Agua Natural Embotellada", descripcion: "", descripcion2: "", precio: "30", imagen: ""},
        {category: "bebidas", subcategory: "", nombre: "Chabelita (Michelada)", descripcion: "", descripcion2: "", precio: "30", imagen: "/img/chabelita.jpg"},
        {category: "licoreria", subcategory: "", nombre: "Etiqueta Negra", descripcion: "", descripcion2: "", precio: "130", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Maestro Dobel", descripcion: "", descripcion2: "", precio: "130", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Mezcal 400 Conejos", descripcion: "", descripcion2: "", precio: "130", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Captain Morgan", descripcion: "", descripcion2: "", precio: "110", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Matusalem", descripcion: "", descripcion2: "", precio: "110", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "José Cuervo Tradicional", descripcion: "", descripcion2: "", precio: "100", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Carajillo", descripcion: "", descripcion2: "", precio: "100", imagen: "/img/carajillo.jpg"},
        {category: "licoreria", subcategory: "", nombre: "Bacardí", descripcion: "", descripcion2: "", precio: "90", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Vodka Smirnoff", descripcion: "", descripcion2: "", precio: "90", imagen: ""},
        {category: "licoreria", subcategory: "", nombre: "Smirnoff Tamarindo", descripcion: "", descripcion2: "", precio: "40", imagen: ""},
    ];

    let openSections = {};
    
    onMount(() => {
        seccion.forEach(sec => {
            openSections[sec.id] = false;
        });
    });

    function toggleSection(id) {
        openSections[id] = !openSections[id];
        openSections = { ...openSections };
    }

    function getFilteredItems(categoria, subcategoria = null) {
    if (subcategoria) {
      return items.filter(item => item.category === categoria && item.subcategory === subcategoria);
    } else {
      return items.filter(item => item.category === categoria && !item.subcategory);
    }
  }
</script>

<div class="text-center font-notulen text-white uppercase m-4">
    <p class="text-4xl">Nuestro Menú</p>
</div>
<img class="mx-auto my-5" src="/img/logo-cowfish-2.png" alt="Menú CowFish">
<Carousel/>
{#each seccion as seccionItem}
<div class="bg-[#c3bcb2]">
    <button class="w-full text-center text-[#0b3261] text-6xl font-deliver p-3 bg-gradient-to-b from-[#c3bcb2] to-[#0b3261b0]" on:click={() => toggleSection(seccionItem.id)}>{seccionItem.nombre}</button>
    {#if openSections[seccionItem.id]}
    <div class="mx-2 my-4" transition:slide>
    {#each subseccion.filter(sub => sub.seccion === seccionItem.id) as subItem}
        <p class="text-[#bc268f] uppercase text-center font-notulen text-3xl pt-8">{subItem.nombre}</p>
        <div class="flex justify-center items-center gap-6 -mt-4">
            <div class="bg-[#bc268f] w-1/5 h-0.5"></div>
            <div class="text-[#bc268f] text-4xl mb-2">•</div>
            <div class="bg-[#bc268f] w-1/5 h-0.5"></div>
        </div>
        {#each getFilteredItems(seccionItem.id, subItem.id) as item}
            {#if item.nombre === "Camarones p/Pelar"}
            <div class="flex items-center gap-2 mt-4 mx-1">
                <button on:click={() => openModal(item.imagen, '')} class="[text-shadow:_2px_2px_1px_rgb(0_0_0_/_60%)] text-start font-giliams text-3xl text-[#0b3261]">{item.nombre}&thinsp;<i class="fa-regular fa-image"></i></button>
                <span class="text-3xl font-sans font-black mr-3"><span class="text-sm align-middle">$</span>{item.precio}<p class="text-sm text-center align-middle">1 kg</p></span>
                <span class="text-3xl font-sans font-black mr-3"><span class="text-sm align-middle">$</span>{item.precio2}<p class="text-sm text-center align-middle">½ kg</p></span>
            </div>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 leading-5 mx-1">{item.descripcion}</span>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 italic leading-5 mx-1">{item.descripcion2}</span>
            {:else if item.imagen === ""}
            <div class="flex items-center gap-10 mt-4 mx-1">
                <span class="[text-shadow:_2px_2px_1px_rgb(0_0_0_/_60%)] font-giliams text-3xl text-[#0b3261]">{item.nombre}</span>
                <span class="grow"></span>
                <span class="text-3xl font-sans font-black mr-3"><span class="text-sm align-middle">$</span>{item.precio}</span>
            </div>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 leading-5 mx-1">{item.descripcion}</span>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 italic leading-5 mx-1">{item.descripcion2}</span>
            {:else}
            <div class="flex items-center gap-10 mt-4 mx-1">
                <button on:click={() => openModal(item.imagen, '')} class="[text-shadow:_2px_2px_1px_rgb(0_0_0_/_60%)] text-start font-giliams text-3xl text-[#0b3261]">{item.nombre}&thinsp;<i class="fa-regular fa-image"></i></button>
                <span class="grow"></span>
                <span class="text-3xl font-sans font-black mr-3"><span class="text-sm align-middle">$</span>{item.precio}</span>
            </div>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 leading-5 mx-1">{item.descripcion}</span>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 italic leading-5 mx-1">{item.descripcion2}</span>
            {/if}
        {/each}
        {/each}
    </div>
    {#each getFilteredItems(seccionItem.id) as item}
    {#if !item.subcategory}
        {#if item.imagen === ""}
        <div class="mx-2 my-4">
            <div class="flex items-center gap-10 mt-4 mx-1">
                <span class="[text-shadow:_2px_2px_1px_rgb(0_0_0_/_60%)] font-giliams text-3xl text-[#0b3261]">{item.nombre}</span>
                <span class="grow"></span>
                <span class="text-3xl font-sans font-black mr-3"><span class="text-sm align-middle">$</span>{item.precio}</span>
            </div>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 leading-5 mx-1">{item.descripcion}</span>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 italic leading-5 mx-1">{item.descripcion2}</span>
        </div>
        {:else}
        <div class="mx-2 my-4">
            <div class="flex items-center gap-10 mt-4 mx-1">
                <button on:click={() => openModal(item.imagen, '')} class="[text-shadow:_2px_2px_1px_rgb(0_0_0_/_60%)] text-start font-giliams text-3xl text-[#0b3261]">{item.nombre}&thinsp;<i class="fa-regular fa-image"></i></button>
                <span class="grow"></span>
                <span class="text-3xl font-sans font-black mr-3"><span class="text-sm align-middle">$</span>{item.precio}</span>
            </div>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 leading-5 mx-1">{item.descripcion}</span>
            <span class="w-5/6 text-justify font-museosans pt-1 ml-1 italic leading-5 mx-1">{item.descripcion2}</span>
        </div>
        {/if}
    {/if}
    {/each}
    {/if}
</div>
{/each}
<div class="bg-[#c3bcb2] pb-5">
    <button 
        class="w-full text-center text-[#0b3261] text-6xl font-deliver p-3 bg-gradient-to-b from-[#c3bcb2] to-[#0b3261b0]" 
        on:click={() => toggleSection("experiencias")}>
        Experiencias
    </button>
    {#if openSections["experiencias"]}
    <div class="mx-2 my-4" transition:slide>
        <div class="flex flex-wrap gap-0.5 justify-center">
            {#each galeria as galeriaImagen}
            <button on:click={() => openModal(galeriaImagen.imagen, '')} class="w-1/5">
                <img src="{galeriaImagen.imagen}" alt="" class="object-contain">
            </button>
            {/each}
        </div>
    </div>
    {/if}
</div>
<div class="h-28 text-[#0b3261]">.</div>
<GotoTop showAtPixel={500} />
<footer class="fixed bottom-0 w-full py-2 bg-[#c3bcb2] flex flex-col items-center">
    <div class="flex items-center justify-around gap-10">
        <a href="https://www.facebook.com/Cowfishmariscos/" target="_top"><i class="text-3xl text-blue-800 fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/cowfishmariscosymas/" target="_blank"><i class="text-4xl fa-brands fa-square fa-instagram bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"></i></a>
        <a href="tel:+526674221577"><i class="text-3xl fa fa-phone"></i></a>
    </div>
    <div class="">
        <a href="https://maps.app.goo.gl/YpLXDqqjQ6cegvSu9" class="flex px-2 items-center" target="_blank"><i class="fa fa-location-dot text-3xl text-red-600"></i><p class="text-center">&thinsp;Fco. Villa #320 Centro. Culiacán, Sinaloa</p></a>
    </div>
</footer>
<a href="https://wa.me/5216674221577" class="fixed fill-white bg-green-500 h-10 w-10 top-16 right-4 rounded-full">
    <svg viewBox="0 0 32 32" class="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>
</a>
{#if isOverlayOpen}
<Modal imageUrl={selectedImage} altText={alternativeText} closeModal={closeModal}/>
{/if}