let element1 = document.getElementById("elemento1")
let element2 = document.getElementById("elemento2")
let element3 = document.getElementById("elemento3")
let element4 = document.getElementById("elemento4")
let element5 = document.getElementById("elemento5")
let element6 = document.getElementById("elemento6")
let element7 = document.getElementById("elemento7")
let element8 = document.getElementById("elemento8")
let save = document.getElementById("save")
element1.addEventListener("click", clickeaste1)
element2.addEventListener("click", clickeaste2)
element3.addEventListener("click", clickeaste3)
element4.addEventListener("click", clickeaste4)
element5.addEventListener("click", clickeaste5)
element6.addEventListener("click", clickeaste6)
element7.addEventListener("click", clickeaste7)
element8.addEventListener("click", clickeaste8)
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

function clickeaste1() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    nombreModal[0].textContent = primerElemento.nombre;
    precioModal[0].textContent = primerElemento.precio;
    ImagenModal[0].src = primerElemento.source;
}

function clickeaste2() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = segundoElemento.nombre;
    precioModal[0].textContent = segundoElemento.precio;
    ImagenModal[0].src = segundoElemento.source;
}

function clickeaste3() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = tercerElemento.nombre;
    precioModal[0].textContent = tercerElemento.precio;
    ImagenModal[0].src = tercerElemento.source;
}

function clickeaste4() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = cuartoElemento.nombre;
    precioModal[0].textContent = cuartoElemento.precio;
    ImagenModal[0].src = cuartoElemento.source;
}

function clickeaste5() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = quintoElemento.nombre;
    precioModal[0].textContent = quintoElemento.precio;
    ImagenModal[0].src = quintoElemento.source;
}

function clickeaste6() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = sextoElemento.nombre;
    precioModal[0].textContent = sextoElemento.precio;
    ImagenModal[0].src = sextoElemento.source;
}

function clickeaste7() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = septimoElemento.nombre;
    precioModal[0].textContent = septimoElemento.precio;
    ImagenModal[0].src = septimoElemento.source;
}

function clickeaste8() {
    let nombreModal = document.getElementsByClassName("Descripcion");
    let precioModal = document.getElementsByClassName("precio");
    let ImagenModal = document.getElementsByClassName("imagenModal");
    let save = document.getElementsByClassName("save")
    nombreModal[0].textContent = octavoElemento.nombre;
    precioModal[0].textContent = octavoElemento.precio;
    ImagenModal[0].src = octavoElemento.source;
}

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