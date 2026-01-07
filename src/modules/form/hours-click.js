export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")
  
  hours.forEach((selected) => {
    selected.addEventListener("click", (event) => {
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      event.target.classList.add("hour-selected")
    })
  })
}