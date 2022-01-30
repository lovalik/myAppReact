import React from "react";
import BlockDigitAndSetTimeButton from "./BlockDigitAndSetTimeButton";
import dictionary from "./dictionary";

function LcdDisplay( {
            language,
            valueHoursDecades,
            valueHoursUnits,
            valueMinutesDecades,
            valueMinutesUnits,
            valueSecondsDecades,
            valueSecondsUnits,
            animationTimeIsOutExecution,
            animationSetValueExecution,
            state,
            appearanceTitleIncreaseValue,
            appearanceTitleDecreaseValue,
            onChangeAppearanceTitleIncreaseValue,
            onChangeAppearanceTitleDecreaseValue,
            onChangeDigitValue
        } ){

    const stylePopupTitleIncreaseValue = {
        display: appearanceTitleIncreaseValue 
    };

    const stylePopupTitleDecreaseValue = {
        display: appearanceTitleDecreaseValue
    }

    let styleAnimationTitleTimeIsOut = {};
    let classNameForTitleTimeIsOut;

    if ( animationTimeIsOutExecution ) {
        styleAnimationTitleTimeIsOut.display = "block";
        classNameForTitleTimeIsOut = "timer__title-for-animation-when-time-is-out timer__animation-when-time-is-out-for-title";
    } else {
        styleAnimationTitleTimeIsOut.display = "none";
        classNameForTitleTimeIsOut = "timer__title-for-animation-when-time-is-out";
    }

    let styleAnimationUserNotSetTime = {};
    let classNameForTitleSetTime;
    if ( animationSetValueExecution ) {
        styleAnimationUserNotSetTime.display = "block";
        classNameForTitleSetTime = "timer__title-for-animation-when-user-not-set-time timer__animation-when-user-not-set-value_for-title ";
    } else {
        styleAnimationUserNotSetTime.display = "none";
        classNameForTitleSetTime = "timer__title-for-animation-when-user-not-set-time";
    }

    const dictIonary = dictionary[ language ];

    return <div className="timer__LCDdisplay_wrapper">
                <div className="timer-popup-title-increase-value" style={ stylePopupTitleIncreaseValue }>
                    { dictIonary[ "popup-title_button-increase-value" ] }
                </div>
                <div className="timer-popup-title-decrease-value" style={ stylePopupTitleDecreaseValue }>
                    { dictIonary[ "popup-title_button-decrease-value" ] }
                </div>
                <div className = { classNameForTitleTimeIsOut } style = { styleAnimationTitleTimeIsOut }>
                    { dictIonary[ "popup-title_when-time-is-out" ]  }
                </div>
                <div className = { classNameForTitleSetTime } style = { styleAnimationUserNotSetTime }>
                    { dictIonary[ "popup-title_when-user-not-set-time" ]  }
                </div>
                < BlockDigitAndSetTimeButton
                    value={ valueHoursDecades }
                    onChangeAppearanceTitleIncreaseValue={ onChangeAppearanceTitleIncreaseValue }
                    onChangeAppearanceTitleDecreaseValue={ onChangeAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onIncreaseValue={ onChangeDigitValue.increaseValueHoursDecades }
                    onDecreaseValue={ onChangeDigitValue.decreaseValueHoursDecades }
                />
                < BlockDigitAndSetTimeButton
                    value={ valueHoursUnits }
                    onChangeAppearanceTitleIncreaseValue={ onChangeAppearanceTitleIncreaseValue }
                    onChangeAppearanceTitleDecreaseValue={ onChangeAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onIncreaseValue={ onChangeDigitValue.increaseValueHoursUnits }
                    onDecreaseValue={ onChangeDigitValue.decreaseValueHoursUnits }
                />
                <div className="timer__LCDdisplay_colon">:</div>
                < BlockDigitAndSetTimeButton
                    value={ valueMinutesDecades }
                    onChangeAppearanceTitleIncreaseValue={ onChangeAppearanceTitleIncreaseValue }
                    onChangeAppearanceTitleDecreaseValue={ onChangeAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onIncreaseValue={ onChangeDigitValue.increaseValueMinutesDecades }
                    onDecreaseValue={ onChangeDigitValue.decreaseValueMinutesDecades }
                />
                < BlockDigitAndSetTimeButton
                    value={ valueMinutesUnits }
                    onChangeAppearanceTitleIncreaseValue={ onChangeAppearanceTitleIncreaseValue }
                    onChangeAppearanceTitleDecreaseValue={ onChangeAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "minutes" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onIncreaseValue={ onChangeDigitValue.increaseValueMinutesUnits }
                    onDecreaseValue={ onChangeDigitValue.decreaseValueMinutesUnits }
                />
                <div className="timer__LCDdisplay_colon">:</div>
                < BlockDigitAndSetTimeButton
                    value={ valueSecondsDecades }
                    onChangeAppearanceTitleIncreaseValue={ onChangeAppearanceTitleIncreaseValue }
                    onChangeAppearanceTitleDecreaseValue={ onChangeAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onIncreaseValue={ onChangeDigitValue.increaseValueSecondsDecades }
                    onDecreaseValue={ onChangeDigitValue.decreaseValueSecondsDecades }
                />
                < BlockDigitAndSetTimeButton
                    value={ valueSecondsUnits }
                    onChangeAppearanceTitleIncreaseValue={ onChangeAppearanceTitleIncreaseValue }
                    onChangeAppearanceTitleDecreaseValue={ onChangeAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onIncreaseValue={ onChangeDigitValue.increaseValueSecondsUnits }
                    onDecreaseValue={ onChangeDigitValue.decreaseValueSecondsUnits }
                />
            </div>
}

export default LcdDisplay;