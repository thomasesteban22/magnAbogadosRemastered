addEventListener('DOMContentLoaded', () =>{
    const contadores = document.querySelectorAll('.contador');
    const velocidad = 1;


    const animarContenedores = () =>{
        for(const contador of contadores){
            parseInt(contador);
            const actualizarContador = () =>{
                let cantidadMaxima = parseInt(contador.dataset.cantidadTotal),
                    valorActual = parseInt(contador.innerText),
                    incremento = 1/velocidad;


                if(valorActual < cantidadMaxima){
                    contador.innerText = Math.ceil(valorActual + incremento);
                    setTimeout(actualizarContador, 10);
                    console.log("En el if");
                }
                else{
                    contador.innerText = cantidadMaxima;
                    console.log("En el else");
                }
            }
            actualizarContador();
        }

    }

    const mostrarContadores = elementos =>{
        elementos.forEach(elemento =>{
            if(elemento.isIntersecting){
                elemento.target.classList.add('animar');
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContenedores,300)
            }
        })
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold:0.75
    })
    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML);
    })

})
