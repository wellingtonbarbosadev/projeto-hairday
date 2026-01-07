import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição para enviar os agendamentos.
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado")
  }
}