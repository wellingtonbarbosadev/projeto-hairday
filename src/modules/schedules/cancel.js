const periods = document.querySelectorAll('.period')

// Gerar evento de click para cada lista.
periods.forEach((period) => {
  period.addEventListener("click", (event) => {
    const removeButton = event.target.closest("img")
    if (!removeButton) return

    const item = event.target.closest("li")
    item.remove()

    console.log("Removido")
  })
})