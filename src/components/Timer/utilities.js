function convertSecondsToTimeValueForDigits( seconds ) {

    const hoursDecades = Math.floor( Math.floor( seconds / 3600 ) / 10 );
    const hoursUnits = Math.floor( seconds / 3600 ) - hoursDecades * 10;
    const minutesDecades = Math.floor( ( Math.floor( seconds / 60 ) % 60 ) / 10 );
    const minutesUnits = Math.floor( seconds / 60 ) % 60 - minutesDecades * 10;
    const secondsDecades = Math.floor( ( seconds % 60 ) / 10 );
    const secondsUnits = seconds % 60 - secondsDecades * 10;
  
    return {
        hoursDecades,
        hoursUnits,
        minutesDecades,
        minutesUnits,
        secondsDecades,
        secondsUnits,
    }
}

function convertTimeFromScoreboardToSeconds(  {
    valueHoursDecades,
    valueHoursUnits,
    valueMinutesDecades,
    valueMinutesUnits,
    valueSecondsDecades,
    valueSecondsUnits
} ) {
                       
    const hoursDecade = valueHoursDecades * 10 * 3600;
    const hoursUnits = valueHoursUnits * 3600;
    const minDecade = valueMinutesDecades * 10 * 60;
    const minUnits = valueMinutesUnits * 60;
    const secDecade = valueSecondsDecades * 10;
    const secUnits = valueSecondsUnits;
    const seconds = hoursDecade + hoursUnits + minDecade + minUnits + secDecade + secUnits;
   
    return seconds;
}

export { convertTimeFromScoreboardToSeconds, convertSecondsToTimeValueForDigits };