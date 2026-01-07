import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.querySelector("#client")
const selectedDate = document.querySelector("#date")

// Data atual.
const todayDate = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima sendo a data atual.
selectedDate.value = todayDate
selectedDate.min = todayDate

form.addEventListener("submit", (event) => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()
    console.log(name)

    if(!name) {
      return alert("Informe o nome do cliente!")
    }
    
    const hourSelected = document.querySelector(".hour-selected")
    console.log(hourSelected)
    
    if (!hourSelected) {
      return alert("Informe um horário")
    }
    
    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")
    console.log(when)

    const id = new Date().getTime()

    console.log({
      id,
      name,
      when,
    })
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
})