import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.querySelector("#client")
const selectedDate = document.querySelector("#date")

// Data atual.
const todayDate = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima sendo a data atual.
selectedDate.value = todayDate
selectedDate.min = todayDate

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()

    if(!name) {
      return alert("Informe o nome do cliente!")
    }
    
    const hourSelected = document.querySelector(".hour-selected")
    
    if (!hourSelected) {
      return alert("Informe um horário")
    }
    
    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()

    // Faz o agendamento.
    await scheduleNew({
      id,
      name,
      when,
    })
    
    // Recarrega os agendamentos.
    await schedulesDay()

    // Limpa input de nome e hora selecionada.
    clientName.value = ""
    hourSelected.classList.remove("hour-selected")

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
})