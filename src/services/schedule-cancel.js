import { schedulesDay } from "../modules/schedules/load.js";
import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento cancelado com sucesso!")
    
    // Recarrega com os novos horários.
    await schedulesDay()
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível cancelar o cancelamento")
  }
}