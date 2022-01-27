import React, { useState } from "react";
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

    const [ color, setColor ] = useState( "black" );

    let classNameDigit;
    let styleDigit = {
        color: color
    }

    if ( animTimeIsOut ){
        classNameDigit = "timer__animation-when-time-is-out-for-digits";
    } else if ( animSetValue ){
        classNameDigit = "timer__animation-when-user-not-set-value_for-digits";
    } else {
        classNameDigit = "";
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
        if( animSetValue || state === "finished" ){
            setAppearanceTitleIncreaseValue( () => "none" );
            setColor( () => "black" );
        } else {
            setAppearanceTitleIncreaseValue( () => "block" );
            setColor( () => "red" );
        }
    }

    function unhidePopupTitleDecreaseValue(){
        if( animSetValue || state === "finished" ){
            setAppearanceTitleDecreaseValue( () => "none" );
            setColor( () => "black" );
        } else {
            setAppearanceTitleDecreaseValue( () => "block" );
            setColor( () => "red" );
        }
    }

    function hidePopupTitle(){
        setAppearanceTitleIncreaseValue( () => "none" );
        setAppearanceTitleDecreaseValue( () => "none" );
        setColor( () => "black" );
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
                <div className={ classNameDigit } style={ styleDigit }>
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