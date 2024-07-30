export function countRegNumber(regNo) {
    var regNoArray = regNo.split(',');
    return regNoArray.length;
}

var regCount1 = countRegNumber("CA 182736, CY 523519 , CJ 812328");
var regCount2 = countRegNumber("CA 182736");
