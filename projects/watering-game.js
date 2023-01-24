function init() {
    // initialize the charging level
    let chargingLevel = 100;

    // get the charging bar elements
    let chargingBars = document.getElementsByClassName("chargingBar");

    // get all the plant elements
    let plants = document.getElementsByClassName("plant");

    // add event listener for watering the plant
    for (let i = 0; i < plants.length; i++) {
        plants[i].addEventListener("click", waterPlant);
    }

    // decrease the charging level
    setInterval(function () {
        if (chargingLevel > 0) {
            chargingLevel -= 1;
            updateChargingLevel();
        }
    }, 1000);

    // update the charging level bar
    function updateChargingLevel() {
        for (let i = 0; i < chargingBars.length; i++) {
            chargingBars[i].style.height = chargingLevel + "%";
            if (chargingLevel <= 20) {
                chargingBars[i].style.backgroundColor = "red";
            } else if (chargingLevel <= 50) {
                chargingBars[i].style.backgroundColor = "orange";
            } else {
                chargingBars[i].style.backgroundColor = "#0f0";
            }
        }
    }

    // function to water a plant
    function waterPlant() {
        if (chargingLevel <= 90) {
            chargingLevel += 10;
            updateChargingLevel();
        }
    }
}

window.onload = init;