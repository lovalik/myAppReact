function engine(){

    function changeDigitValue( { setState, howToChangeValue, digit, setValue, type } ){
        setState( () => "paused" );
        if ( ( howToChangeValue === "increase" && digit === "units" ) || ( howToChangeValue === "increase" && digit === "decades" && type === "hours/decades" ) ){
            setValue( ( previousValue ) => {
                if ( previousValue === 9 ) {
                    return 0;
                } else {
                    return previousValue + 1;
                }
            } )
        } else if ( ( howToChangeValue === "decrease" && digit === "units" ) || ( howToChangeValue === "decrease" && digit === "decades" && type === "hours/decades" ) ) {
            setValue( ( previousValue ) => {
                if ( previousValue === 0 ) {
                    return 9;
                } else {
                    return previousValue - 1;
                }
            } )
        } else if ( howToChangeValue === "increase" && digit === "decades"){
            setValue( ( previousValue ) => {
                if ( previousValue === 5 ) {
                    return 0;
                } else {
                    return previousValue + 1;
                }
            } )
        } else if ( howToChangeValue === "decrease" && digit === "decades" ){
            setValue( ( previousValue ) => {
                if ( previousValue === 0 ) {
                    return 5;
                } else {
                    return previousValue - 1;
                }
            } )
        }
    } 

    return {
        changeDigitValue
    }
}

export default engine;