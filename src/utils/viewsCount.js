import React from 'react'

const viewsCount = () => {
  // Function to convert number
function convert(val) {
    // Thousands, millions, billions etc..
    let s = ["", "k", "m", "b", "t"];

    // Dividing the value by 3.
    let sNum = Math.floor(("" + val).length / 3);

    // Calculating the precised value.
    let sVal = parseFloat(
        (sNum != 0 ? val / Math.pow(1000, sNum) : val ).toPrecision(2)
    );

    if (sVal % 1 != 0) {
        sVal = sVal.toFixed(1);
    }

    // Appending the letter to precised val.
    return sVal + s[sNum];
}
}

export default viewsCount
