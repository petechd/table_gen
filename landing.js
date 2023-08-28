let counter = 1;

function generateInjury() {
    let number = drawItem([2,3,4,5,6,7,8,9,10,11,12])
    let pilotObserver = [undefined, undefined, "Pilot", "Pilot", "Pilot", "Pilot", "Pilot", "Pilot", "Observer", "Observer", "Observer", "Observer", "Observer"]
    let injuries = [undefined, "LW", "LW", "LW", "SW", "SW", "KIA"]
    console.log(number)
    let numberInjury = drawItem([1,2,3,4,5,6])
    let injury =  injuries[numberInjury]
    let person = pilotObserver[number]
    div += `<button type="button" class="btn btn-danger">${person} - ${injury}</button>`
    log += `<p>Crew Injury roll result: ${number}. Injured: ${person}. Wound Severity roll result: ${numberInjury}. Severity: ${injury}</p>`
}

function drawItem(array) {
   return array[Math.floor(Math.random() * array.length)]
}
function generateWeather() {
    let number = drawItem([1,2,3,4,5,6,7,8,9,10])
    let weatherTypes = [undefined, "Good", "Good", "Good", "Good", "Good", "Good", "Good", "Poor", "Bad", "Socked In"]
    let weather = weatherTypes[number]

    let landingNumber = drawItem([2,3,4,5,6,7,8,9,10,11,12])
    let modifiers = 0
    if (document.getElementById('skill').checked) {
        modifiers--
    }
    if (document.getElementById('not-base').checked) {
        modifiers++
    }
    if (document.getElementById('controls').checked) {
        modifiers++
    }
    if (document.getElementById('pilot-sw').checked) {
        modifiers++
    }
    if (document.getElementById('emergency-landing').checked) {
        modifiers++
    }
    if (document.getElementById('engine-out').checked) {
        modifiers++
    }
    if (document.getElementById('no-mans-land').checked) {
        modifiers += 2
    }
    if (weather === "Poor") {
        modifiers++
    }
    if (weather === "Bad") {
        modifiers += 2
    }
    if (weather === "Socked In") {
        modifiers += 3
    }
    let fatigue = document.getElementById("fatigue");
    modifiers += parseInt(fatigue.options[fatigue.selectedIndex].value)
    console.log(parseInt(fatigue.options[fatigue.selectedIndex].value))
    let landingGear = document.getElementById("landing-gear");
    modifiers += parseInt(landingGear.options[landingGear.selectedIndex].value)
    console.log(parseInt(landingGear.options[landingGear.selectedIndex].value))
    let landingNumberModified = landingNumber + modifiers
    let landingResult = ["Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Rough LW", "Rough LW", "Crash SW", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA", "DE KIA"]
    let landing =  landingResult[landingNumberModified]
    document.getElementById("modifiers").innerHTML = `Total modifier: ${modifiers}`

    let text = `${counter}. Weather: ${weather}. Roll Unmodified: ${landingNumber}, Roll Modified: ${landingNumberModified} - Result: ${landing}.`
    counter++
    return text
}