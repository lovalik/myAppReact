import React, { useState } from "react";

function BlockDigitAndSetTimeButton( {
            value,
            onChangeAppearanceTitleIncreaseValue,
            onChangeAppearanceTitleDecreaseValue,
            digit,
            animationTimeIsOutExecution,
            animationSetValueExecution,
            state,
            onIncreaseValue,
            onDecreaseValue
        }){

    const [ color, setColor ] = useState( "black" );

    let classNameDigit;
    let styleDigit = {
        color: color
    }

    if ( animationTimeIsOutExecution ){
        classNameDigit = "timer__animation-when-time-is-out-for-digits";
    } else if ( animationSetValueExecution ){
        classNameDigit = "timer__animation-when-user-not-set-value_for-digits";
    } else {
        classNameDigit = "";
    }

    let classNameButtonIncrease;
    let classNameButtonDecrease;
    let disabled;

    if ( animationSetValueExecution ){
        disabled = true;
        classNameButtonIncrease = `timer__button-increase-value-${ digit } timer__animation-when-user-not-set-value_for-buttons`;
        classNameButtonDecrease = `timer__button-decrease-value-${ digit } timer__animation-when-user-not-set-value_for-buttons`;
    } else {
        disabled = false;
        classNameButtonIncrease = `timer__button-increase-value-${ digit }`;
        classNameButtonDecrease = `timer__button-decrease-value-${ digit }`;
    }
    
    
    function unhidePopupTitleIncreaseValue(){
        if( animationSetValueExecution || state === "finished" ){
            onChangeAppearanceTitleIncreaseValue( "none" );
            setColor( "black" );
        } else {
            onChangeAppearanceTitleDecreaseValue( "block" );
            setColor( "red" );
        }
    }

    function unhidePopupTitleDecreaseValue(){
        if( animationSetValueExecution || state === "finished" ){
            onChangeAppearanceTitleIncreaseValue( "none" );
            setColor( "black" );
        } else {
            onChangeAppearanceTitleDecreaseValue( "block" );
            setColor( "red" );
        }
    }

    function hidePopupTitle(){
        onChangeAppearanceTitleIncreaseValue( "none" );
        onChangeAppearanceTitleDecreaseValue( "none" );
        setColor( "black" );
    }

    return <div className="timer__LCDdisplay_digit-with-button">
                <div className={ classNameDigit } style={ styleDigit }>
                    { value }
                </div>
                <div className={ `timer__button-increase-value_wrapper` } >
                    <button type="button"
                        disabled={ disabled }
                        onClick={ onIncreaseValue }
                        onMouseOver={ unhidePopupTitleIncreaseValue }
                        onMouseOut={ hidePopupTitle }
                        className={ classNameButtonIncrease }
                    />
                </div>
                <div className={ `timer__button-decrease-value_wrapper` } >
                    <button type="button"
                        disabled={ disabled }
                        onClick={ onDecreaseValue }
                        onMouseOver={ unhidePopupTitleDecreaseValue }
                        onMouseOut={ hidePopupTitle }
                        className={ classNameButtonDecrease }
                    />
                </div>
            </div>
}

export default BlockDigitAndSetTimeButton;