let body = document.body
let button = document.getElementById("btn")

let contador = parseInt(body.classList.value.slice(1))


button.addEventListener("click", (e) => {
  let colorNuevo = contador + 1

  if (contador <= 8) {
    body.classList.remove("c" + contador)
    body.classList.add("c" + colorNuevo)
    contador++
  } else {
    body.classList.remove("c" + contador)
    contador = 1
    body.classList.add("c" + contador)
  }

})
