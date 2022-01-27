function convertMillisecToTimeValue( milliseconds ) {

    const secondsFromMillisec = Math.floor( milliseconds / 1000 );
    const hoursDecade = Math.floor( Math.floor( secondsFromMillisec / 3600 ) / 10 );
    const hoursUnits = Math.floor( secondsFromMillisec / 3600 ) - hoursDecade * 10;
    const minutesDecade = Math.floor( ( Math.floor( secondsFromMillisec / 60 ) % 60 ) / 10 );
    const minutesUnits = Math.floor( secondsFromMillisec / 60 ) % 60 - minutesDecade * 10;
    const secondsDecade = Math.floor( ( secondsFromMillisec % 60 ) / 10 );
    const secondsUnits = secondsFromMillisec % 60 - secondsDecade * 10;
    const millsecondsDecade = Math.floor( ( ( milliseconds / 1000 ) - secondsFromMillisec ) * 10);
    const millsecondsUnits = Math.floor( ( ( milliseconds / 1000 ) - secondsFromMillisec ) * 100 ) % 10;
  
    return {
        hoursDecade,
        hoursUnits,
        minutesDecade,
        minutesUnits,
        secondsDecade,
        secondsUnits,
        millsecondsDecade,
        millsecondsUnits
    }
}

export default convertMillisecToTimeValue;