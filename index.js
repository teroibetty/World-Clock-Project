function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDateElement = parisElement.querySelector(".date");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("Do MMMM YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkDateElement = newYorkElement.querySelector(".date");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("Do MMMM YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
            <div>
              <h2>${cityTimeZone.split("/")[1]}</h2>
              <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "hh:mm:ss"
            )}<small> ${cityTime.format("A")}</small></div>
          </div>`;
}

let citySelectElement = document.querySelector("#select-city");
citySelectElement.addEventListener("change", updateCity);
