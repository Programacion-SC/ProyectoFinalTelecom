let productos = [
    {
        image: "../img/productos/trepadorGatos.jpg",
        title: "Trepador de gatos",
        description: "$2000",
    }, 
    {
        image: "../img/productos/uchaGatos1.jpg",
        title: "Cucha para gatos",
        description:"$3000",
    },
    {
        image: "../img/productos/rascadadorGatos.jpg",
        title: "Rascador para gatos",
        description:"$2500",
    },
    {
        image: "../img/productos/trepadorGatos.jpg",
        title: "Trepador de gatos",
        description: "$2000"
    }, 
    {
        image: "../img/productos/trajePostOperacionGato.jpg",
        title: "Traje post-operacion para gatos",
        description:"$5000",
    },
    {
        image: "../img/productos/rascadadorGatos.jpg",
        title: "Rascador para gatos",
        description:"$2500"
    }

    ]   

    productos.forEach (element => {
        let container = document.querySelector (".container") 
        container.innerHTML += `
        <div class="card">
        <img class="img-tarjeta estiloCardsProdGatos" src=${element.image} alt="Imagen de gatitos"/>
        <h5 class="titulo-tarjeta">${element.title}</h5>
        <p class="descripcion-tarjeta">${element.description}</p>
        </div>` 
    })
 
  