import { hoursLoad } from "../form/hours-load";

const selectedDate = document.querySelector("#date")

export function schedulesDay() {
  const date = selectedDate.value
  hoursLoad({date})
}