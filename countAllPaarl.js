export function countAllPaarl(regNumbersString) {
    var regNumbersArray = regNumbersString.split(', ');  
    let count = 0;  
  
    for (var i = 0; i < regNumbersArray.length; i++) {
        var regNumberForPaarl = regNumbersArray[i];
        if (regNumberForPaarl.startsWith('CJ')) {
    		count++;
   		}
    }
    return count;
}