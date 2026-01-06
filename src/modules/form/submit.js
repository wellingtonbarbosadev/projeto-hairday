import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

// Carrega a data atual.
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima sendo a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log("enviado")
})