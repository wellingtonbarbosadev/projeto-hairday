import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

// Data atual.
const todayDate = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima sendo a data atual.
selectedDate.value = todayDate
selectedDate.min = todayDate

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log("enviado")
})