import dictionary from "./dictionary";

function currentUTCtime() {

    const currentTime = new Date();

    let hours = currentTime.getUTCHours();
    let minutes = currentTime.getUTCMinutes();
    let seconds = currentTime.getUTCSeconds();
    let date = currentTime.getUTCDate();
    let day = currentTime.getUTCDay();
    let month = currentTime.getUTCMonth();
    let year = currentTime.getUTCFullYear();

    return {
        hours,
        minutes,
        seconds,
        date,
        day,
        month,
        year,
    }
}

function convertTimeUnderUTC24( signUTC, valueUTC ) {

    const time = currentUTCtime();

    let hours = time.hours;
    let minutes = time.minutes;
    let seconds = time.seconds;
        
    if ( signUTC === "-" ) {
        hours = hours - valueUTC;
    } else if ( signUTC === "+" ) {
        hours = hours + valueUTC;
    }

    if ( hours < 0 ) {
        hours = hours + 24;
    } else if ( hours === 0 ) {
        hours = 0;
    } else if ( hours >= 24 ) {
        hours = hours - 24;
    }
    
    return {
        hours,
        minutes,
        seconds
    }
}

function convertTimeUnderUTC12( signUTC, valueUTC ) {

    const time = currentUTCtime();

    let prefix_AM_PM;
    let hours = time.hours;
    let minutes = time.minutes;
    let seconds = time.seconds;

    if ( signUTC === "-" ) {
        hours = hours - valueUTC;
    } else if ( signUTC === "+" ) {
        hours = hours + valueUTC;
    }

    if ( hours >=1 && hours < 12 ) {
        prefix_AM_PM = "AM";
    } else if ( hours === 12 ) {
        prefix_AM_PM = "PM";
    } else if ( hours >= 13 && hours < 24 ) {
        prefix_AM_PM = "PM";
        hours = hours - 12;
    } else if ( hours === 0 || hours === 24) {
        prefix_AM_PM = "AM";
        hours = 12;
    } else if ( hours > ( -12 ) && hours < 0 ) {
        prefix_AM_PM = "PM";
        hours = hours + 12;
    } else if ( hours < -12 ) {
        prefix_AM_PM = "AM";
        hours = 24 + hours;
    } else if ( hours === ( -12 ) ) {
        prefix_AM_PM = "PM";
        hours = 12;
    } else if ( hours > 24 ) {
        prefix_AM_PM = "AM";
        hours = hours - 24;
    }

    return {
        hours,
        minutes,
        seconds,
        prefix_AM_PM,
    }
}

function getDayDateMonthForCurrentCity( signUTC, valueUTC, language ) {

    const dictIonary = dictionary[ language ];
    const time = currentUTCtime();

    let currentHoursForSelectedCity;
    let currentDayForSelectedCity;
    let currentDateForSelectedCity;
    let currentMonthForSelectedCity;
    let currentUTChours = time.hours;
    let currentUTCdate = time.date;
    let currentUTCday = time.day;
    let currentUTCmonth = time.month;
    let currentUTCyear = time.year;

    let amountDaysInMonthForCurrentUTCtime = Number( new Date( currentUTCyear, ( currentUTCmonth + 1 ), 1 ).getUTCDate() );

    if ( signUTC === "+" ) {
        currentHoursForSelectedCity = currentUTChours + valueUTC;
    } else if ( signUTC === "-" ) {
        currentHoursForSelectedCity = currentUTChours - valueUTC;
    }

    if ( currentHoursForSelectedCity >= 0 &&  currentHoursForSelectedCity < 24 ) {
        currentDayForSelectedCity = currentUTCday;
        currentDateForSelectedCity = currentUTCdate;
        currentMonthForSelectedCity = currentUTCmonth;
    } else if ( currentHoursForSelectedCity >= 24 ) {
        currentDayForSelectedCity = currentUTCday + 1;
        currentDateForSelectedCity = currentUTCdate + 1;
            if ( currentDayForSelectedCity > 6 ) {
                currentDayForSelectedCity = 0;
            }
    } else if ( currentHoursForSelectedCity < 0 ) {

        currentDayForSelectedCity = currentUTCday - 1;
        currentDateForSelectedCity = currentUTCdate - 1;
            if ( currentDayForSelectedCity < 0 ) {
                currentDayForSelectedCity = 6;
            }
    }

    if ( currentDateForSelectedCity > amountDaysInMonthForCurrentUTCtime ) {
        currentDateForSelectedCity = 1;
        currentMonthForSelectedCity = currentUTCmonth + 1;
    } else if ( currentDateForSelectedCity === 0 ) {
        currentDateForSelectedCity = Number( new Date( currentUTCyear, currentUTCmonth, 1 ).getUTCDate() );
        currentMonthForSelectedCity = currentUTCmonth - 1;
    } else {
        currentMonthForSelectedCity = currentUTCmonth;
    }

    if ( currentMonthForSelectedCity > 11 ) {
        currentMonthForSelectedCity = 0;
    } else if ( currentMonthForSelectedCity < 0 ) {
        currentMonthForSelectedCity = 11;
    }

    currentDayForSelectedCity = convertIndexDayOfWeekToWord( currentDayForSelectedCity );
    currentMonthForSelectedCity = convertIndexMonthToWord( currentMonthForSelectedCity );
    
    function convertIndexDayOfWeekToWord( index ) {
        let day = dictIonary[ 'day of week' ][ index ];
        return day;
    }

    function convertIndexMonthToWord( index ) {
        let month = dictIonary[ 'month' ][ index ];
        return month;
    }

    return {
        currentDateForSelectedCity,
        currentDayForSelectedCity,
        currentMonthForSelectedCity,
    }
}

function convertDate( {
            language,
            currentCity,
            currentSignUTC,
            currentValueUTC,
            time_Format
        } ) {

    let time;
    let prefix_AM_PM;
    const dictIonary = dictionary[ language ];

    const cityName = dictIonary[ `time zone UTC ${ currentSignUTC }${ currentValueUTC }:00` ][ currentCity ];
    const litera = dictIonary[ "time-format_letter" ];

    let currentDate = getDayDateMonthForCurrentCity( currentSignUTC, currentValueUTC, language );

    const date = currentDate.currentDateForSelectedCity;
    const dayOfWeek = currentDate.currentDayForSelectedCity;
    const month = currentDate.currentMonthForSelectedCity;

    if ( time_Format === 24 ){
        time = convertTimeUnderUTC24( currentSignUTC, currentValueUTC );
        prefix_AM_PM = "";
    } else if( time_Format === 12 ){
        time = convertTimeUnderUTC12( currentSignUTC, currentValueUTC );
        prefix_AM_PM = time.prefix_AM_PM;
    }

    const hoursDecades = Math.floor( time.hours / 10 );
    const hoursUnits = Math.floor( time.hours  % 10 );
    const minutesDecades = Math.floor( time.minutes / 10 );
    const minutesUnits = Math.floor( time.minutes % 10 );
    const secondsDecades = Math.floor( time.seconds / 10 );
    const secondsUnits = Math.floor( time.seconds % 10 );

    return {
        city: cityName,
        letter: litera,
        date,
        dayOfWeek,
        month,
        prefix_AM_PM,
        timeFormat: time_Format,
        signUTC: currentSignUTC,
        valueUTC: currentValueUTC,
        hoursDecades,
        hoursUnits,
        minutesDecades,
        minutesUnits,
        secondsDecades,
        secondsUnits
    }
}

export default convertDate;
