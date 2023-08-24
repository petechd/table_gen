let log = ""
let div = ""


function generateHits(number) {
    log = ""
    div = ""
    if (document.getElementById('c-result').checked) {
        generateInjury()
    }
    for (let i=0; i < number; i++) {
        console.log("gen damage")
        generateDamage()
    }
    return document.getElementById('result').innerHTML = `${div}<br><br>${log}`

}

function generateInjury() {
    let number = drawItem([2,3,4,5,6,7,8,9,10,11,12])
    let pilotObserver = [undefined, undefined, "Pilot", "Pilot", "Pilot", "Pilot", "Pilot", "Pilot", "Observer", "Observer", "Observer", "Observer", "Observer"]
    let injuries = [undefined, "LW", "LW", "LW", "SW", "SW", "KIA"]
    console.log(number)
    let numberInjury = drawItem([1,2,3,4,5,6])
    console.log(numberInjury)
    let injury =  injuries[numberInjury]
    let person = pilotObserver[number]
    console.log(person)
    console.log(injury)
    div += `<button type="button" class="btn btn-danger">${person} - ${injury}</button>`
    log += `<p>Crew Injury roll result: ${number}. Injured: ${person}. Wound Severity roll result: ${numberInjury}. Severity: ${injury}</p>`
}

function generateDamage() {
    let ones  = drawItem(["1","2","3","4","5","6"])
    let tens = drawItem(["1","2","3","4","5","6"])
    let index = parseInt(ones+tens)
    let table = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Crew Injury", "Port Strut", "Stbd. Strut", "Canvas", "Lndg. Gear", "Fuel Tank",  undefined, undefined, undefined, undefined, "Lndg. Gear", "Canvas", "Engine", "Port Strut", "Engine", "Canvas", undefined, undefined, undefined, undefined, "Tail", "Canvas", "Port Strut", "Canvas", "Port Strut", "Controls", undefined, undefined, undefined, undefined, "Canvas", "Port Strut", "Rear Guns", "Canvas", "Stbd. Strut", "Fwd. Wpns.", undefined, undefined, undefined, undefined, "Stbd. Strut", "Canvas", "Stbd. Strut", "Lndg. Gear", "Canvas", "Rear Guns", undefined, undefined, undefined, undefined, "Tail", "Stbd. Strut", "Canvas", "Fwd. Wpns.", "Canvas", "Fuel Tank"]
    let damageResult = table[index]
    if (damageResult === "Stbd. Strut" || damageResult === "Port Strut" || damageResult === "Tail") {
        div += `<button type="button" class="btn btn-warning" style="background-color: moccasin">${table[index]}</button>`
        log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}.</p>`
    }
    else if (damageResult === "Crew Injury") {
        generateInjury()
    }
    else if (damageResult === "Fwd. Wpns." || damageResult === "Rear Guns") {
        div += `<button type="button" class="btn btn-dark" style="background-color: darkslategrey">${table[index]}</button>`
        log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}.</p>`
    }
    else if (damageResult === "Lndg. Gear") {
        div += `<button type="button" class="btn btn-secondary" style="background-color: dimgray">${table[index]}</button>`
        log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}.</p>`
    }
    else if (damageResult === "Fuel Tank") {
        if (document.getElementById('incendiary').checked) {
            div += `<button type="button" class="btn btn-danger">${table[index]} + Engine Fire</button>`
            log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}. Incendiary ammo: Engine Fire</p>`
        }
        else {
            let number = drawItem([2,3,4,5,6,7,8,9,10,11,12])
            let hit = [undefined, undefined, "Fire (if engine hit)", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Fire (either)"]
            if (hit[number] === "Fire (either)") {
                div += `<button type="button" class="btn btn-danger">${table[index]} + Engine Fire</button>`
            log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}. Fuel Tank roll (for engine): ${number}. Resulting damage: ${hit[number]}.</p>`
            }
            else {
               div += `<button type="button" class="btn btn-info" style="background-color: cadetblue">${table[index]} + Leaking</button>`
            log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}. Fuel Tank roll: ${number}. Resulting damage: ${hit[number]}.</p>`
            }

        }

    }
    else if (damageResult === "Controls") {
        div += `<button type="button" class="btn btn-warning" style="background-color: darkorange">${table[index]}</button>`
        log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}.</p>`
    }
    else if (damageResult === "Engine") {
        let number = drawItem([2,3,4,5,6,7,8,9,10,11,12])
        let hit = [undefined, undefined, "Fire (if engine hit)", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Leaking", "Fire (either)"]
        if (hit[number] === "Fire (if engine hit)" || hit[number] === "Fire (either)") {
            div += `<button type="button" class="btn btn-danger">${table[index]} + Engine Fire</button>`
        log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}. Fuel Tank roll: ${number}. Resulting damage: ${hit[number]}.</p>`
        }
        else {
           div += `<button type="button" class="btn btn-info">${table[index]}</button>`
            log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}. Fuel Tank roll: ${number}. Resulting damage: ${hit[number]}.</p>`
        }
    }
    else {
        div += `<button type="button" class="btn btn-warning" style="background-color: lightgoldenrodyellow">${table[index]}</button>`
        log += `<p>First roll result: ${ones}. Second roll result: ${tens}. Final roll result: ${index}. Resulting damage: ${table[index]}.</p>`
    }

}

function drawItem(array) {
   return array[Math.floor(Math.random() * array.length)]
}
