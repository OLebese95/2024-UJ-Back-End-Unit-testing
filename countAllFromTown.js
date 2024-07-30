export function countAllFromTown(regNumberString, townCode) {
    var regNumbersArray = regNumberString.split(',');
  let count = 0
    var regNumbersForTown = [];
    for (var i = 0; i < regNumbersArray.length; i++) {
        var currentRegNumber = regNumbersArray[i].trim();
        if (currentRegNumber.startsWith(townCode)) {
            count++;
        }
    }
    return count;
}

