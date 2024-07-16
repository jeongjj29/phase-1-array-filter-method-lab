// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (names) {
        return names.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers, letters) {
    const lowercaseLetters = letters.toLowerCase();
    return drivers.filter(function (driver) {
        const lowercaseDriver = driver.toLowerCase();
        return lowercaseDriver.startsWith(lowercaseLetters);
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name;
    })
}