//Creación de class para definición de Objeto.
class Producto {
    constructor(imagen, nombre, descripcion, precio) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    toString() {
        return JSON.stringify(this);
    }

    visualizar() {
        console.log(this.toString());
    }
}

//Creación de array de objeto Bebidas.

const bebidas = [];
bebidas.push(new Producto("img/espresso.jpg", "Espresso", "Concentrado de café molido fino", 90));
bebidas.push(new Producto("img/americano.jpg", "Americano", "Café de sabor suave y ligero", 120));
bebidas.push(new Producto("img/cappuccino.jpg", "Cappuccino", "Café con una capa gruesa de leche al vapor y espuma", 140));
bebidas.push(new Producto("img/flat_white.jpg", "Flat White", "Café con una capa fina de leche caliente", 140));
bebidas.push(new Producto("img/choco_caliente.jpg", "Choco Caliente", "Cacao en polvo y leche caliente", 150));
bebidas.push(new Producto("img/con_leche.jpg", "Café con leche", "Café espresso con leche", 130));
bebidas.push(new Producto("img/latte.jpg", "Latte", "Café suave y cremoso", 140));
bebidas.push(new Producto("img/latte_machiato.jpg", "Latte Machiato", "Espuma generosa, delicioso café y cremosa leche", 160));
bebidas.push(new Producto("img/caramel_machiato.jpg", "Caramel Machiato", "Café con un toque de vainilla y un chorrito de caramelo", 170));
bebidas.push(new Producto("img/macchiato.jpg", "Machiato", "Café manchado italiano", 150));
bebidas.push(new Producto("img/vienna.jpg", "Vienna", "Café con notas malteadas y aromáticas", 160));
bebidas.push(new Producto("img/irish.jpg", "Irish", "Café con un toque de whisky irlandés y crema", 180));
bebidas.push(new Producto("img/frappe.jpg", "Frappe", "Bebida de café fría con espuma de leche", 170));
bebidas.push(new Producto("img/moka.jpg", "Moka", "Café con leche, chocolate y crema", 150));

localStorage.setItem("catalogoBebidas", JSON.stringify(bebidas));

//Creación de array de objeto Comidas.

const comidas = [];
comidas.push(new Producto("img/carrot_cake.jpg", "Carrot Cake", "Pastel dulce con zanahoria rallada y mezclada en la masa", 170));
comidas.push(new Producto("img/budin_naranja.jpg", "Budín de naranja", "Un clásico de la cocina inglesa", 140));
comidas.push(new Producto("img/brownie.jpg", "Brownie", "Bizcochuelo de chocolate con nueces", 150));
comidas.push(new Producto("img/alfajor.jpg", "Alfajor", "De chocolate relleno de dulce de leche", 110));
comidas.push(new Producto("img/alfabrownie.jfif", "Alfabrownie", "Con masa de brownie relleno de dulce de leche", 150));
comidas.push(new Producto("img/cookie_mantequilla_de_mani.jpg", "Cookie mantequilla de maní", "Galleta con masa de mantequilla de maní", 100));
comidas.push(new Producto("img/tostado_jamon_y_queso.jpg", "Tostado jamón y queso", "Cudrado de pan de miga relleno de jamón y queso", 140));
comidas.push(new Producto("img/tostado_pan_de_campo.jpg", "Tostado pan de campo", "Con tomates secos y albahaca", 160));
comidas.push(new Producto("img/medialunas_rellenas.jpeg", "Medialunas rellenas", "Rellenas de jamón y queso", 150));
comidas.push(new Producto("img/scon_parmesano.jpg", "Scon parmesano", "Scon de queso parmesano", 130));

localStorage.setItem("catalogoComidas", JSON.stringify(comidas));

// Asocio los eventos click y mouseover en ready luego del DOM generado.
$(document).ready(function () {
    $(`.btnAgregar`).click(function (e) {
        let hijos = $(e.target).parent().children();
        console.log("Elegiste: " + hijos[1].innerText + " - Cantidad: " + hijos[5].value);
        agregarCarrito((e.target.parentNode.children[1].innerText + " : " + e.target.parentNode.children[5].value));
    })

    $(`.btnAgregar`).on("mouseover", (e) => {
        let boton = $(e.target).parent().children();
        boton[6].style.backgroundColor = "rgb(210, 179, 82)";
        boton[6].style.borderRadius = "4px";
    });

    $(`.btnAgregar`).on("mouseout", (e) => {
        let boton = $(e.target).parent().children();
        boton[6].style.backgroundColor = "lightgray";
        boton[6].style.borderRadius = "4px";
    });

    $("#btnShow1").click(() => $(".productoBebidas").slideToggle("slow"));

    $("#btnShow1").on("mouseover", (e) => {
        let boton = $(e.target).parent().children();
        boton[0].style.backgroundColor = "rgb(156, 124, 27)";
        boton[0].style.color = "white";
    });

    $("#btnShow1").on("mouseout", (e) => {
        let boton = $(e.target).parent().children();
        boton[0].style.backgroundColor = "black";
        boton[0].style.color = "rgb(210, 179, 82)";
    });

    $("#btnShow2").click(() => $(".productoComidas").slideToggle("slow"));

    $("#btnShow2").on("mouseover", (e) => {
        let boton = $(e.target).parent().children();
        boton[0].style.backgroundColor = "rgb(156, 124, 27)";
        boton[0].style.color = "white";
    });

    $("#btnShow2").on("mouseout", (e) => {
        let boton = $(e.target).parent().children();
        boton[0].style.backgroundColor = "black";
        boton[0].style.color = "rgb(210, 179, 82)";
    });

    $(".btnInfo").click(() => $(".info").slideToggle("slow"));

    $(".btnInfo").on("mouseover", (e) => {
        let boton = $(e.target).parent().children();
        boton[3].style.backgroundColor = "rgb(210, 179, 82)";
        boton[3].style.borderRadius = "4px";
    });

    $(".btnInfo").on("mouseout", (e) => {
        let boton = $(e.target).parent().children();
        boton[3].style.backgroundColor = "lightgray";
        boton[3].style.borderRadius = "4px";
    });

    $("#btnTop").click(() => {
        $("html, body").animate({
            scrollTop: $("body").offset().top
        }, 2000);
    });

    $("#btnTop").on("mouseover", (e) => {
        let boton = $(e.target).parent().children();
        boton[0].style.backgroundColor = "rgb(156, 124, 27)";
        boton[0].style.color = "white";
    });

    $("#btnTop").on("mouseout", (e) => {
        let boton = $(e.target).parent().children();
        boton[0].style.backgroundColor = "black";
        boton[0].style.color = "rgb(210, 179, 82)";
    });

    $(".btnCheckout").click(() => $("#checkout").toggle());

    $("#saludo").delay(1000)
                .fadeIn(1000)
                .fadeOut(1000)
                .fadeIn(1000)
                .fadeOut(1000);

    $("#mensajeBienvenida").delay(5000)
                           .fadeOut();

    $("#cartel1").delay(6000)
                 .fadeIn("slow");

    $("#cartel2").delay(7000)
                 .fadeIn("slow");

});

//Creo las card para las bebidas.
for (const producto of bebidas) {
    $("#catalogoBebidas").append(`<div class="productoBebidas">
                        <img src=${producto.imagen} >
                        <h3 class="nombre"> ${producto.nombre} </h4>
                        <p class="info">${producto.descripcion}</p>
                        <button class="btnInfo">Info</button>
                        <p class="precio">$ ${producto.precio}</p>
                        <input class="cantidad" type=number></input>
                        <button class="btnAgregar">Agregar</button>
                        </div>`);
}

//Creo las card para las comidas.
for (const producto of comidas) {
    $("#catalogoComidas").append(`<div class="productoComidas">
                    <img src=${producto.imagen} >
                    <h3 class="nombre"> ${producto.nombre} </h4>
                    <p class="info">${producto.descripcion}</p>
                    <button class="btnInfo">Info</button>
                    <p class="precio">$ ${producto.precio}</p>
                    <input class="cantidad" type=number></input>
                    <button class="btnAgregar">Agregar</button>
                    </div>`);
}

//Creo el carrito para los productos.
function agregarCarrito(producto) {

    $('#carrito').append(`<div class="itemCarrito">
                        <p> ${producto}</p>
                        <button class="btnEliminar">Eliminar</button>  
        </div>`);

    $(`.btnEliminar`).click(function (e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });

}