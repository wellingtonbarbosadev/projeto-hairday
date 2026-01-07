import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date")

export async function schedulesDay() {
  const date = selectedDate.value

  // Busca na API os agendamentos.
  const dailySchedules = await scheduleFetchByDay({date})

  // Exibe os agendamentos.

  // Renderiza as horas disponíveis.
  hoursLoad({date})
}