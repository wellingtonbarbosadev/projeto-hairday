import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date")

export async function schedulesDay() {
  const date = selectedDate.value

  // Busca na API os agendamentos.
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos.
  schedulesShow({ dailySchedules })

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules })
}