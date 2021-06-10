const elementos =[{id:"element1", src:"http://placehold.it/350x280/444?text=1"},
{id:"element2", src:"http://placehold.it/350x280/444?text=2"},
{id:"element3", src:"http://placehold.it/350x280/444?text=3"},
{id:"element4", src:"http://placehold.it/350x280/444?text=4"}
];
const elementosSegundaUnidad = [{id:"element5", src:"http://placehold.it/350x280/444?text=5"},
{id:"element6", src:"http://placehold.it/350x280/444?text=6"},
{id:"element7", src:"http://placehold.it/350x280/444?text=7"},
{id:"element8", src:"http://placehold.it/350x280/444?text=8"}];

let primerContenedor = document.getElementById("primerCarrousel");
let segundoContenedor = document.getElementById("segundoCarrousel");

for(let elemento of elementos)
{
    let container = document.createElement("div")
    container.className = "col-3 float-left"
    container.innerHTML = `<button id="${elemento.id}" data-bs-toggle="modal"
    data-bs-target="#exampleModal"><img class="img-fluid"
        src="${elemento.src}"></button>`
    primerContenedor.appendChild(container);
}

for(let elementoAd of elementosSegundaUnidad)
{
    let container = document.createElement("div")
    container.className = "col-3 float-left"
    container.innerHTML = `<button id="${elementoAd.id}" data-bs-toggle="modal"
    data-bs-target="#exampleModal"><img class="img-fluid"
        src="${elementoAd.src}"></button>`
        segundoContenedor.appendChild(container);
}

let save = document.getElementById("save")
element1.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    nombreModal[0].textContent = primerElemento.nombre;
    precioModal[0].textContent = primerElemento.precio;
    ImagenModal[0].src = primerElemento.source;
})
element2.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = segundoElemento.nombre;
    precioModal[0].textContent = segundoElemento.precio;
    ImagenModal[0].src = segundoElemento.source;
})
element3.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = tercerElemento.nombre;
    precioModal[0].textContent = tercerElemento.precio;
    ImagenModal[0].src = tercerElemento.source;
})
element4.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = cuartoElemento.nombre;
    precioModal[0].textContent = cuartoElemento.precio;
    ImagenModal[0].src = cuartoElemento.source;
})
element5.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = quintoElemento.nombre;
    precioModal[0].textContent = quintoElemento.precio;
    ImagenModal[0].src = quintoElemento.source;
})
element6.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = sextoElemento.nombre;
    precioModal[0].textContent = sextoElemento.precio;
    ImagenModal[0].src = sextoElemento.source;
})
element7.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = septimoElemento.nombre;
    precioModal[0].textContent = septimoElemento.precio;
    ImagenModal[0].src = septimoElemento.source;
}
)
element8.addEventListener("click", ()=> {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = octavoElemento.nombre;
    precioModal[0].textContent = octavoElemento.precio;
    ImagenModal[0].src = octavoElemento.source;
})
save.addEventListener("click", guardarStorage)
const primerElemento = {
    nombre: "Buzo", 
    precio:1500,
    source:"http://placehold.it/350x280/222/fff?text=1"
};
const segundoElemento = {
    nombre: "Remera", 
    precio:1000,
    source:"http://placehold.it/350x280/222/fff?text=2"
};
const tercerElemento = {
    nombre: "pantalon", 
    precio:3000,
    source:"http://placehold.it/350x280/222/fff?text=3"
};
const cuartoElemento = {
    nombre: "zapatillas", 
    precio:20000,
    source:"http://placehold.it/350x280/222/fff?text=4"
};
const quintoElemento = {
    nombre: "medias", 
    precio:149,
    source:"http://placehold.it/350x280/222/fff?text=5"
};
const sextoElemento = {
    nombre: "campera", 
    precio:5000,
    source:"http://placehold.it/350x280/222/fff?text=6"
};
const septimoElemento = {
    nombre: "buzoSegundo", 
    precio:300,
    source:"http://placehold.it/350x280/222/fff?text=7"
};
const octavoElemento = {
    nombre: "camperaSegundo", 
    precio:2300,
    source:"http://placehold.it/350x280/222/fff?text=8"
};

function guardarStorage()
{
    
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let precioLista = parseInt(precioModal[0].textContent);
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let dato = localStorage.getItem(nombreModal[0].textContent);
    console.log(dato)
    if (dato === null)
    {
        let safeDatos = {
            nombre:nombreModal[0].textContent,
            precio:precioLista,
            cantidad:1
        }
        localStorage.setItem(nombreModal[0].textContent, JSON.stringify(safeDatos))
    }
    else{
        let objeto = JSON.parse(dato)
        objeto.cantidad += 1;
        objeto.precio = precioLista * objeto.cantidad;
        localStorage.setItem(nombreModal[0].textContent, JSON.stringify(objeto))
    }

}