const productos = [
    //KAURY
    { id: 1, nombre: "KAURY Conjunto soft de microfibra con colaless", marca: "Kaury", art:" J61", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: false}, {talle: "100", disponible: true}], 
        imagen: "fotos/conj_kaury.jpg" },
    { id: 2, nombre: "KAURY Conjunto de microfibra y puntilla taza soft con push up y colaless ", marca: "Kaury", art: "4790",precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: true}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_kaury (2).jpg" },
    { id: 3, nombre: "KAURY Conjunto de algodón y puntilla taza soft con push up y colaless", marca: "Kaury", art: "4950", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: true}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_kaury (3).jpg" },
    
        //SIGRY
    { id: 4, nombre: "SIGRY Conjunto taza soft sin push up con colaless", art: "1730",marca: "Sigry", precio: 16900, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_sigry.jpg" },
    { id: 5, nombre: "SIGRY Conjunto de algodón y lycra push up soft con colaless", art: "5950",marca: "Sigry", precio: 16900, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_sigry (2).jpg" },
    { id: 6, nombre: "SIGRY Conjunto taza soft sin push up con colaless", art: "1730",marca: "Sigry", precio: 16900, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_sigry (3).jpg" },
     { id: 7, nombre: "SIGRY Conjunto taza soft sin push up con colaless", art: "1730",marca: "Sigry", precio: 16900, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: false}, {talle: "100", disponible: true}], 
        imagen: "fotos/conj_sigry (4).jpg" },
     { id: 8, nombre: "SIGRY Conjunto de microfibra fantasía triángulo soft sin push up con tangaless regulable", art: "1738",marca: "Sigry", precio: 16900, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_sigry (5).jpg" },

    //LARA TEENS
    { id: 9, nombre: "LARA TEENS Conjunto de microfibra y puntilla soft con push up y colaless", marca: "Lara Teens", art: "4385", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_lara.jpg" },
    { id: 10, nombre: "LARA TEENS Conjunto de microfibra y puntilla soft con push up y colaless", marca: "Lara Teens", art: "4385", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: true}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_lara (2).jpg" },
    { id: 11, nombre: "LARA TEENS Conjunto de morley triángulo soft sin push up con tangaless regulable", marca: "Lara Teens",art:"4285", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_lara (3).jpg" },
    { id: 12, nombre: "LARA TEENS Conjunto NO DISPONIBLE", marca: "Lara Teens", art: "4650", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_lara (4).jpg" },
    { id: 13, nombre: "LARA TEENS Conjunto de morley triángulo soft sin push up con tangaless regulable", marca: "Lara Teens", art: "4285", precio: 18500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: true}, {talle: "95", disponible: false}, {talle: "100", disponible: true}], 
        imagen: "fotos/conj_lara (5).jpg" },
    
    //BELEN
    { id: 14, nombre: "BELEN Conjunto NO DISPONIBLE", marca: "Belen", art:"9210", precio: 17500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: false}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_belen.jpg" },
    { id: 15, nombre: "BELEN Conjunto de algodón y lycra soft sin push up con colaless", marca: "Belen", art:"9210", precio: 17500, tipo: "conjunto",
        talle: [{talle: "85", disponible: false}, {talle: "90", disponible: false}, {talle: "95", disponible: true}, {talle: "100", disponible: false}], 
        imagen: "fotos/conj_belen (2).jpg" },

    //PACK BOMBACHAS
    { id: 16, nombre: "KAURY pack x3 colaless regulable de microfibra sin costura", marca: "Kaury", art: "8239",precio: 18500, tipo: "pack bombachas",
        talle: [{talle: "S / M", disponible: false}, {talle: "L / XL", disponible: true}], 
        imagen: "fotos/bomb_kaury.jpg" },
    { id: 17, nombre: "KAURY pack x3 colaless regulable de algodón ", marca: "Kaury", art: "P143",precio: 12500, tipo: "pack bombachas",
        talle: [{talle: "Único", disponible: true}], 
        imagen: "fotos/bomb_kaury (2).jpg" },
    { id: 18, nombre: "KAURY pack x3 colaless con puntilla", marca: "Kaury", art: "P18",precio: 13000, tipo: "pack bombachas",
        talle: [{talle: "Único", disponible: true}], 
        imagen: "fotos/bomb_kaury (3).jpg" },
    { id: 19, nombre: "KAURY pack x3 colaless regulable de microfibra", marca: "Kaury", art: "P173",precio: 12500, tipo: "pack bombachas",
        talle: [{talle: "Único", disponible: true}], 
        imagen: "fotos/bomb_kaury (4).jpg" },

    { id: 20, nombre: "MERAKI pack x2 colaless regulable doble tira", marca: "Meraki", art: "4418",precio: 8700, tipo: "pack bombachas",
        talle: [{talle: "Único", disponible: true}], 
        imagen: "fotos/bomb_meraki.jpg" }

];

// --- 2. ESTADO DE LA APLICACIÓN ---
let carrito = JSON.parse(localStorage.getItem('carrito_lenceria')) || [];

// Referencias a elementos del DOM
const contenedorProductos = document.getElementById("contenedor-productos");
const listaCarritoElemento = document.getElementById("lista-carrito");
const precioTotalElemento = document.getElementById("precio-total");
const contadorCarritoElemento = document.getElementById("contador-carrito");
const panelCarrito = document.getElementById("panel-carrito");

// Referencias a los filtros
const inputBuscador = document.getElementById("input-buscador");
const selectMarca = document.getElementById("select-marca");

// --- 3. FUNCIÓN DE RENDERIZADO DEL CATÁLOGO (Con Filtros) ---
function cargarCatalogo(productosAMostrar = productos) {
    contenedorProductos.innerHTML = "";

    if (productosAMostrar.length === 0) {
        contenedorProductos.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">No se encontraron productos.</p>`;
        return;
    }
    
    productosAMostrar.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");
        
        const opcionesTalles = producto.talle.map(item => {
        if (item.disponible) {
            return `<option value="${item.talle}">${item.talle}</option>`;
        } else {
            return `<option value="${item.talle}" disabled>${item.talle} (Sin stock)</option>`;
        }
    })
    .join("");
        
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: auto;">
            <h3>${producto.nombre}</h3>
            <small style="color: #888; display: block; margin-bottom: 5px;">Marca: ${producto.marca}</small>
            <small style="color: #888; display: block; margin-bottom: 5px;">ART: ${producto.art}</small>
            <p class="precio">$${producto.precio.toLocaleString('es-AR')}</p>
            <select id="talle-${producto.id}">
                ${opcionesTalles}
            </select>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        
        contenedorProductos.appendChild(tarjeta);
    });
}

// --- LÓGICA DE FILTRADO ---
function filtrarProductos() {
    // 1. Capturamos el buscador de texto
    const textoBusqueda = inputBuscador ? inputBuscador.value.toLowerCase().trim() : "";

    // 2. Capturamos la marca elegida del <select>
    const marcaSeleccionada = selectMarca ? selectMarca.value.toLowerCase() : "todos";

    // 3. Capturamos los tipos de producto tildados (checkboxes con name="tipo")
    const tiposSeleccionados = Array.from(
        document.querySelectorAll('.sidebar-filtros input[name="tipo"]:checked')
    ).map(cb => cb.value.toLowerCase().trim());

    // 4. Filtramos evaluando las tres condiciones juntas
    const productosFiltrados = productos.filter(producto => {
        const coincideTexto = producto.nombre.toLowerCase().includes(textoBusqueda) || 
                              producto.art.toLowerCase().includes(textoBusqueda);
        
        const coincideMarca = marcaSeleccionada === "todos" || 
                              producto.marca.toLowerCase() === marcaSeleccionada;
        
        const coincideTipo = tiposSeleccionados.length === 0 || 
                             tiposSeleccionados.includes(producto.tipo.toLowerCase().trim());

        return coincideTexto && coincideMarca && coincideTipo;
    });

    // 5. Renderizamos el resultado
    cargarCatalogo(productosFiltrados);
    // Si estamos en celular, ocultamos la barra de filtros tras filtrar
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector(".sidebar-filtros");
        if (sidebar) {
            sidebar.classList.add("oculto-movil");
        }
    }
}
function toggleFiltros() {
    const sidebar = document.querySelector(".sidebar-filtros");
    if (sidebar) {
        sidebar.classList.toggle("oculto-movil");
    }
}

// --- 4. LÓGICA DEL CARRITO ---
function agregarAlCarrito(idProducto) {
    const selectTalle = document.getElementById(`talle-${idProducto}`);
    const talleElegido = selectTalle.value;
    const productoEncontrado = productos.find(p => p.id === idProducto);
    
    // Buscamos si ya existe el mismo producto con el mismo talle exacto
    const itemExistente = carrito.find(item => item.id === idProducto && item.talle === talleElegido);

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            ...productoEncontrado,
            talle: talleElegido,
            cantidad: 1
        });
    }

    sincronizarYActualizar();
}

// CORREGIDO: Recibe directamente el ID y el talle del ítem del carrito
function eliminarDelCarrito(idProducto, talleElegido) {
    carrito = carrito.filter(item => !(item.id === idProducto && item.talle === talleElegido));
    sincronizarYActualizar();
}

function calcularTotal() {
    return carrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);
}

function sincronizarYActualizar() {
    localStorage.setItem('carrito_lenceria', JSON.stringify(carrito));
    renderizarCarrito();
}

function renderizarCarrito() {
    listaCarritoElemento.innerHTML = "";

    if (carrito.length === 0) {
        listaCarritoElemento.innerHTML = `<p class="carrito-vacio">El carrito está vacío</p>`;
        precioTotalElemento.innerText = "$0";
        contadorCarritoElemento.innerText = "0";
        return;
    }

    let cantidadTotalItems = 0;

    carrito.forEach(item => {
        cantidadTotalItems += item.cantidad;
        const subtotal = item.precio * item.cantidad;

        const divItem = document.createElement("div");
        divItem.classList.add("item-carrito");
        divItem.innerHTML = `
            <div>
                <strong>${item.nombre}</strong> <small>(Talle: ${item.talle})</small><br>
                <small>$${item.precio.toLocaleString('es-AR')} x ${item.cantidad}</small>
            </div>
            <div>
                <span>$${subtotal.toLocaleString('es-AR')}</span>
                <button onclick="eliminarDelCarrito(${item.id}, '${item.talle}')">🗑️</button>
            </div>
        `;
        listaCarritoElemento.appendChild(divItem);
    });

    precioTotalElemento.innerText = `$${calcularTotal().toLocaleString('es-AR')}`;
    contadorCarritoElemento.innerText = cantidadTotalItems;
}

// --- 5. INTERACCIÓN UI ---
function toggleCarrito() {
    panelCarrito.classList.toggle("activo");
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! Quiero realizar el siguiente pedido de lencería:%0A%0A";
    
    carrito.forEach(item => {
        const subtotalItem = item.precio * item.cantidad;
        mensaje += `- ${item.nombre} (Talle: ${item.talle}) - Cant: ${item.cantidad} - Subtotal: $${subtotalItem.toLocaleString('es-AR')}%0A`;
    });

    const totalFinal = calcularTotal();
    mensaje += `%0A*Total a pagar: $${totalFinal.toLocaleString('es-AR')}*`;

    const numeroWhatsApp = "2617106585"; 
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
}



// Inicialización
cargarCatalogo();
renderizarCarrito();