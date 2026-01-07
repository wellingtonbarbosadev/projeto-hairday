import { dayjs } from "dayjs";

// Selecionas as sessões (manhã, tarde e noite).
const periodMorning = document.querySelector("#period-morning")
const periodAfternoon = document.querySelector("#period-afternoon")
const periodNight = document.querySelector("#period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as listas.
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")
      const image = document.createElement("img")

      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      image.setAttribute("src", "./assets/cancel.svg")
      image.setAttribute("alt", "Cancelar")
      image.classList.add("cancel-icon")

      item.append(time, name, image)

      const hour = dayjs(schedule.when).hour()
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour >= 13 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }

    })

  } catch (error) {
    // alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}