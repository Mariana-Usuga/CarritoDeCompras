let carrito=document.querySelector('.subMenu-carrito')
let imgCarrito=document.querySelector('.carrito-img')


imgCarrito.addEventListener("mouseout",()=>{
    carrito.classList.remove('show')
    })
imgCarrito.addEventListener("mouseenter",()=>{
    carrito.classList.add('show')
    })

