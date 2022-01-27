import React from "react";
import engine from "./engine";

function BlockDigitAndSetTimeButton( {
            value,
            setValue,
            setAppearanceTitleDecreaseValue,
            setAppearanceTitleIncreaseValue,
            digit,
            type,
            animTimeIsOut,
            animSetValue,
            state,
            setState
        }){

    const methodsEngine = engine();

    let styleDigit;

    if ( animTimeIsOut ){
        styleDigit = "timer__animation-when-time-is-out-for-digits";
    } else if ( animSetValue ){
        styleDigit = "timer__animation-when-user-not-set-value_for-digits";
    } else {
        styleDigit = "";
    }

    let classNameButtonIncrease;
    let classNameButtonDecrease;
    let disabled;

    if ( animSetValue ){
        disabled = true;
        classNameButtonIncrease = `timer__button-increase-value-${ digit } timer__animation-when-user-not-set-value_for-buttons`;
        classNameButtonDecrease = `timer__button-decrease-value-${ digit } timer__animation-when-user-not-set-value_for-buttons`;
    } else {
        disabled = false;
        classNameButtonIncrease = `timer__button-increase-value-${ digit }`;
        classNameButtonDecrease = `timer__button-decrease-value-${ digit }`;
    }
    
    

    function unhidePopupTitleIncreaseValue(){
        if( !animSetValue ){
            setAppearanceTitleIncreaseValue( () => "block" );
        } else if ( state === "finished" ) {
            setAppearanceTitleIncreaseValue( () => "none" );
        }
    }

    function unhidePopupTitleDecreaseValue(){
        if( !animSetValue ){
            setAppearanceTitleDecreaseValue( () => "block" );
        } else if ( state === "finished" ) {
            setAppearanceTitleDecreaseValue( () => "none" );
        }
    }

    function hidePopupTitle(){
        setAppearanceTitleIncreaseValue( () => "none" );
        setAppearanceTitleDecreaseValue( () => "none" );
    }

    function increaseValue(){
        const howToChangeValue = "increase";
        methodsEngine.changeDigitValue( { setState, howToChangeValue, digit, setValue, type } )
    }

    function decreaseValue(){
        const howToChangeValue = "decrease";
        methodsEngine.changeDigitValue( { setState, howToChangeValue, digit, setValue, type } )
    }

    return <div className="timer__LCDdisplay_digit-with-button">
                <div className={ styleDigit } >
                    { value }
                </div>
                <div className={ `timer__button-increase-value_wrapper` } >
                    <button type="button"
                        disabled={ disabled }
                        onClick={ increaseValue }
                        onMouseOver={ unhidePopupTitleIncreaseValue }
                        onMouseOut={ hidePopupTitle }
                        className={ classNameButtonIncrease }
                    />
                </div>
                <div className={ `timer__button-decrease-value_wrapper` } >
                    <button type="button"
                        disabled={ disabled }
                        onClick={ decreaseValue }
                        onMouseOver={ unhidePopupTitleDecreaseValue }
                        onMouseOut={ hidePopupTitle }
                        className={ classNameButtonDecrease }
                    />
                </div>
            </div>
}

export default BlockDigitAndSetTimeButton;