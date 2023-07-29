let missionCounter = 0
let counter = 0

function generateMission(year) {
    let index = Math.floor(Math.random() * 11);
    missionCounter += 1
    if (year === "1916") {
        let missions = ['Balloon Busting', 'Recon Escort (Enemy Lines)', 'Line Patrol', 'Offensive Patrol', 'Line Patrol', 'Defensive Patrol (Ground Attack if MGO)', 'Line Patrol', 'Line Patrol', 'Bomber Escort (Enemy Lines)',  'Bomber Escort (Enemy Lines)', 'Balloon Busting']
        return missionCounter + '. ' + missions[index]
    }
    if (year === "1917") {
        let missions = ['Balloon Busting', 'Recon Escort (Enemy Lines)', 'Line Patrol', 'Line Patrol', 'Defensive Patrol', 'Line Patrol (Ground Attack if MGO)', 'Line Patrol', 'Offensive Patrol', 'Bomber Escort (Enemy Lines)',  'Defensive Patrol', 'Balloon Busting']
        return missionCounter + '. ' + missions[index]
    }
}
let randomEventSpent = false;

function generateEncounter(year, location) {
    let encounterIndex = Math.floor(Math.random() * 11);
    let orientationIndex = Math.floor(Math.random() * 11);
    let randomEventsIndex = Math.floor(Math.random() * 11);
    let typeIndex = Math.floor(Math.random() * 11);
    let random = ''
    let orientations = ["Player is Out of the Sun", "Player starts Advantaged", "Player starts Advantaged", "Player starts Advantaged", "Head-on", "Head-on", "Head-on", "Enemy starts Advantaged", "Enemy starts Advantaged", "Enemy starts Advantaged", "Enemy is Out of the Sun"]
    let randomEvents = ["Out of the Sun!", "Lost Bomber", "Recon", "Pick Any Skill", "Superior Octane Fuel Batch", "Good Luck Charm", "Eyewitness Corroboration of Kill", "Ace Encounter", "Engine Failure", "Recognition by High Command", "Large Formation Encounter"]
    if (encounterIndex === 10 && randomEventSpent === false) {
        randomEventSpent = true
        random += "Random event (" + randomEvents[randomEventsIndex] + ") or "
    }
    let types;
    if (location === 'NML') {
        types = ['2 seater', '2 seater', 'No contact', 'fighter', 'fighter', 'No contact', 'fighter', 'No contact', 'No contact', '2 seater', '3+ fighters']
    }
    else if (location === 'ELFL') {
        types = ['2 seater', '2 seater', 'No contact', 'fighter', 'No contact', 'No contact', 'No contact', 'fighter', 'No contact', 'fighter', '3+ fighters']
    }
    let type = types[typeIndex]
    counter += 1
    if (year === "1916") {
        if (type === "2 seater") {
            let twoSeaters = ['Re-roll', 'B.E.2c', 'F.E.2b', 'Sopwith Strutter (as 2 seater)', 'R.E.8 Twin MG', 'R.E.8 Single MG', 'R.E.8 Twin MG', 'Sopwith Strutter (as 2 seater)', 'B.E.2c',  'F.E.2d from November or re-roll', 'Re-roll']

            return counter + ". " + random + orientations[orientationIndex] + ", " + twoSeaters[encounterIndex]
        }
        if (type === "fighter" || type === "3+ fighters" ) {
            let fighters = ['Sopwith Pup', 'Airco D.H.2', 'F.E.8', 'B.E.12', 'Sopwith Strutter', 'Airco D.H.2', 'Sopwith Strutter', 'B.E.12', 'Sopwith Strutter',  'F.E.8', 'Sopwith Pup']

            return counter + ". " + random + orientations[orientationIndex] + ", " + fighters[encounterIndex]
        }
        if (type === "3+ fighters") {
            let fighters = ['Sopwith Pup', 'Airco D.H.2', 'F.E.8', 'B.E.12', 'Sopwith Strutter', 'Airco D.H.2', 'Sopwith Strutter', 'B.E.12', 'Sopwith Strutter',  'F.E.8', 'Sopwith Pup']

            return counter + ". " + random + orientations[orientationIndex] + ", " + fighters[encounterIndex] + ' (group)'
        }

        return counter + ". " + "No contact"
    }

}