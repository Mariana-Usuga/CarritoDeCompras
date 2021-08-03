//---------------SHOW CART AND HIDDEN CART-----------------
let carrito=document.querySelector('.subMenu-carrito')
let imgCarrito=document.querySelector('.carrito-img')

imgCarrito.addEventListener("mouseout",()=>carrito.classList.remove('show'))
imgCarrito.addEventListener("mouseenter",()=>carrito.classList.add('show'))

//-------------- ADD ELEMENT TO THE CART-----------------------
let arrayAdd=[];

let addButton=document.querySelectorAll('.btn')

    for(i=0;i<addButton.length; i++){
        let indexClass=addButton[i].classList[2]
        addButton[i].addEventListener("click",function(){
            addToCart(indexClass)
        })
    }
    function addToCart(index){//.add,.add1,.add2.....
        //crear fila para agregar un curso al carrito
        console.log("workin")
        let trCourse=document.createElement('tr'),
            td=document.createElement('td'),
            newImg=document.createElement('img'),
            newName=document.createElement('td'),
            newPrice=document.createElement('td'),
            newAmount=document.createElement('td')
        //--------Posicionarlos como hijos-------
            td.appendChild(newImg)
            trCourse.appendChild(td)
            trCourse.appendChild(newName)
            trCourse.appendChild(newPrice)
            trCourse.appendChild(newAmount)
        //---------obtener imagen,nombre,precio,cantidad de HTML
        let clickCourse=document.querySelector("."+index);
        let courseImg=clickCourse.parentElement.parentElement.querySelector('img').src;
        let courseName=clickCourse.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        let coursePrice=clickCourse.previousElementSibling.textContent;
        //----------Insertar en el HTML------
        newImg.src=courseImg;
        newName.textContent=courseName
        newPrice.textContent=coursePrice
            let table=document.querySelector("table")
            table.insertBefore(trCourse, table.children[2])
        //---------Crear un objeto curso
        let course={
            name: courseName,
            precio:coursePrice
        }
        arrayAdd.push(course)
    }


