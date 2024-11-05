 // Aquí tu código

 const lista = document.getElementById('lista');


//Cuando se pulse en el botón debe aparecer el texto "OUYEAH!!!"
 const btnAgregar = document.getElementById('agregar');

 
 //Al pulsar el botón 'agregar elemento' aparecerá el cuadro de dialogo (`prompt`) y ahí se introducirá el elemento que después aparecerá en la lista.
 btnAgregar.addEventListener('click', function () {
   
    //prompt para indicar nuevo elemento
    const elementName = prompt('Introducir elemento').toLocaleLowerCase();
 
    console.log(elementName)
    //creamos el nuevo elemento
    const elementNew=document.createElement(elementName);

    if (elementName==='div'){
        elementNew.innerHTML = 'Este es un DIV';
    }else if(elementName==='article'){
        elementNew.insertAdjacentHTML('afterbegin', '<p>Este es un párrafo dentro de un article</p>');
    }else if(elementName==='section'){
        elementNew.insertAdjacentHTML('afterbegin', '<span>Este es un span dentro de un section</span>');
    }else if(elementName==='input'){
        elementNew.placeholder='Este es un input';
    }else if(elementName==='p'){
        elementNew.innerText='Este es un párrafo';
    } else if(elementName==='label'){
        elementNew.innerText='Este es un label';
    }else if(elementName==='button'){
        elementNew.innerText='botón';
        elementNew.style.cursor= "pointer";
    }else if(elementName==='span'){
        elementNew.innerText='Este es un span';
    }
    //creamos un elemento li
    const liElement=document.createElement('li');
    //liElement.style.backgroundColor = "yellow";  
    
 
    //añadimos el elemento nuevo en el elemento li
    liElement.appendChild(elementNew);

  
    //Por último añadimos el elemnto li en el elemento ul
    lista.appendChild(liElement);
    
    console.log(lista)
  });