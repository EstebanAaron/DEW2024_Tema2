function cambiarFondo(id, colores, intervalo) {
    let index = 0;
    return setInterval(() => {
      document.getElementById(id).style.backgroundColor = colores[index];
      index = (index + 1) % colores.length;
    }, intervalo);
  }

  
  function alternarVisibilidad(id, intervalo) {
    let visible = true;
    return setInterval(() => {
      document.getElementById(id).style.display = visible ? 'none' : 'block';
      visible = !visible;
    }, intervalo);
  }
  
  function cambiarTextoCiclicamente(id, textos, intervalo) {
    let index = 0;
    return setInterval(() => {
      document.getElementById(id).textContent = textos[index];
      index = (index + 1) % textos.length;
    }, intervalo);
  }
  

  function contadorRegresivo(id, tiempo) {
    let elemento = document.getElementById(id);
    let contador = tiempo;
    let idTemporizador = setInterval(() => {
      if (contador <= 0) {
        clearInterval(idTemporizador);
      } else {
        contador--;
        elemento.textContent = contador;
      }
    }, 1000);
  }
  

  function parpadeoTexto(id, intervalo) {
    let visible = true;
    return setInterval(() => {
      document.getElementById(id).style.visibility = visible ? 'visible' : 'hidden';
      visible = !visible;
    }, intervalo);
  }
  

  function eliminarHijoPorClases(idPadre, clases) {
    const padre = document.getElementById(idPadre);
    const hijos = Array.from(padre.children);
    hijos.forEach(hijo => {
      if (clases.every(clase => hijo.classList.contains(clase))) {
        padre.removeChild(hijo);
      }
    });
  }
  
  function ordenarHijosPorClase(idPadre, clase) {
    const padre = document.getElementById(idPadre);
    const hijos = Array.from(padre.children);
    hijos.sort((a, b) => a.classList.contains(clase) - b.classList.contains(clase));
    hijos.forEach(hijo => padre.appendChild(hijo));
  }
  
  function obtenerPorMultiplesClases(clases) {
    return document.querySelectorAll(clases.map(clase => '.' + clase).join(''));
  }
  
  function rotarTexto(id, grados) {
    document.getElementById(id).style.transform = `rotate(${grados}deg)`;
  }

  function buscarElementoPorTexto(texto) {
    return Array.from(document.body.getElementsByTagName('*')).find(el => el.textContent.includes(texto));
  }

  function parpadeoColor(id, colores, intervalo) {
    let index = 0;
    return setInterval(() => {
      document.getElementById(id).style.backgroundColor = colores[index];
      index = (index + 1) % colores.length;
    }, intervalo);
  }
  
  function moverIzquierdaDerecha(id, maxPosicion, intervalo) {
    let elemento = document.getElementById(id);
    let posicion = 0;
    let direccion = 1;
    return setInterval(() => {
      posicion += direccion;
      if (posicion >= maxPosicion || posicion <= 0) {
        direccion *= -1;
      }
      elemento.style.left = posicion + 'px';
    }, intervalo);
  }
  
  function contadorAscendente(id, inicio, fin, intervalo) {
    let elemento = document.getElementById(id);
    let contador = inicio;
    let idTemporizador = setInterval(() => {
      if (contador >= fin) {
        clearInterval(idTemporizador);
      } else {
        contador++;
        elemento.textContent = contador;
      }
    }, intervalo);
  }
  
  function borrarTodosLosHijos(idPadre) {
    const padre = document.getElementById(idPadre);
    while (padre.firstChild) {
      padre.removeChild(padre.firstChild);
    }
  }

  function clonarHijos(idPadre) {
    const padre = document.getElementById(idPadre);
    return Array.from(padre.children).map(hijo => hijo.cloneNode(true));
  }

  function ordenarHijosPorClase(idPadre, clase) {
    const padre = document.getElementById(idPadre);
    const hijos = Array.from(padre.children); // Convertimos los hijos en un array.
    hijos.sort((a, b) => a.classList.contains(clase) - b.classList.contains(clase));
    hijos.forEach(hijo => padre.appendChild(hijo)); // Añadimos los hijos ordenados al padre.
  }
  
  
  function ordenarHijosPorClase(idPadre, clase) {
    const padre = document.getElementById(idPadre);
    const hijos = Array.from(padre.children);
  
    hijos.sort((a, b) => {
      const tieneClaseA = a.classList.contains(clase);
      const tieneClaseB = b.classList.contains(clase);
  
      // Primero, coloca los elementos sin la clase al inicio
      if (!tieneClaseA && tieneClaseB) return -1;
      if (tieneClaseA && !tieneClaseB) return 1;
  
      // Si ambos tienen la clase, ordena alfabéticamente por el nombre de la clase
      if (tieneClaseA && tieneClaseB) {
        return a.className.localeCompare(b.className);
      }
  
      // Si ambos no tienen la clase, mantienen su orden relativo
      return 0;
    });
  
    hijos.forEach(hijo => padre.appendChild(hijo));
  }
  
  