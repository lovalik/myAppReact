function changeDigitValue( {
                    setState,
                    setValueHoursDecades,
                    setValueHoursUnits,
                    setValueMinutesDecades,
                    setValueMinutesUnits,
                    setValueSecondsDecades,
                    setValueSecondsUnits
                } ){

    function increaseValueHoursDecades(){
        setState( "paused" );
        setValueHoursDecades( ( previousValue ) => {
            if ( previousValue === 9 ) {
                return 0;
            } else {
                return previousValue + 1;
            }
        } )
    }

    function decreaseValueHoursDecades(){
        setState( "paused" );
        setValueHoursDecades( ( previousValue ) => {
            if ( previousValue === 0 ) {
                return 9;
            } else {
                return previousValue - 1;
            }
        } )
    }

    function increaseValueHoursUnits(){
        setState( "paused" );
        setValueHoursUnits( ( previousValue ) => {
            if ( previousValue === 9 ) {
                return 0;
            } else {
                return previousValue + 1;
            }
        } )
    }

    function decreaseValueHoursUnits(){
        setState( "paused" );
        setValueHoursUnits( ( previousValue ) => {
            if ( previousValue === 0 ) {
                return 9;
            } else {
                return previousValue - 1;
            }
        } )
    }

    function increaseValueMinutesDecades(){
        setState( "paused" );
        setValueMinutesDecades( ( previousValue ) => {
            if ( previousValue === 5 ) {
                return 0;
            } else {
                return previousValue + 1;
            }
        } )
    }

    function decreaseValueMinutesDecades(){
        setState( "paused" );
        setValueMinutesDecades( ( previousValue ) => {
            if ( previousValue === 0 ) {
                return 5;
            } else {
                return previousValue - 1;
            }
        } )
    }

    function increaseValueMinutesUnits(){
        setState( "paused" );
        setValueMinutesUnits( ( previousValue ) => {
            if ( previousValue === 9 ) {
                return 0;
            } else {
                return previousValue + 1;
            }
        } )
    }

    function decreaseValueMinutesUnits(){
        setState( "paused" );
        setValueMinutesUnits( ( previousValue ) => {
            if ( previousValue === 0 ) {
                return 9;
            } else {
                return previousValue - 1;
            }
        } )
    }

    function increaseValueSecondsDecades(){
        setState( "paused" );
        setValueSecondsDecades( ( previousValue ) => {
            if ( previousValue === 5 ) {
                return 0;
            } else {
                return previousValue + 1;
            }
        } )
    }

    function decreaseValueSecondsDecades(){
        setState( "paused" );
        setValueSecondsDecades( ( previousValue ) => {
            if ( previousValue === 0 ) {
                return 5;
            } else {
                return previousValue - 1;
            }
        } )
    }

    function increaseValueSecondsUnits(){
        setState( "paused" );
        setValueSecondsUnits( ( previousValue ) => {
            if ( previousValue === 9 ) {
                return 0;
            } else {
                return previousValue + 1;
            }
        } )
    }

    function decreaseValueSecondsUnits(){
        setState( "paused" );
        setValueSecondsUnits( ( previousValue ) => {
            if ( previousValue === 0 ) {
                return 9;
            } else {
                return previousValue - 1;
            }
        } )
    }

    return {
            increaseValueHoursDecades,
            decreaseValueHoursDecades,
            increaseValueHoursUnits,
            decreaseValueHoursUnits,
            increaseValueMinutesDecades,
            decreaseValueMinutesDecades,
            increaseValueMinutesUnits,
            decreaseValueMinutesUnits,
            increaseValueSecondsDecades,
            decreaseValueSecondsDecades,
            increaseValueSecondsUnits,
            decreaseValueSecondsUnits
        }
} 

export default changeDigitValue;