import { dayjs } from "dayjs";

// Selecionas as sessões (manhã, tarde e noite).
const periodMorning = document.querySelector("#period-morning")
const periodAfternoon = document.querySelector("#period-afternoon")
const periodNight = document.querySelector("#period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}