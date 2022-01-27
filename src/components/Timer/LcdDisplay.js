import React from "react";
import BlockDigitAndSetTimeButton from "./BlockDigitAndSetTimeButton";
import dictionary from "./dictionary";

function LcdDisplay( {
            language,
            time,
            setTime,
            animTimeIsOut,
            animSetValue,
            state,
            setState,
            appearanceTitleIncreaseValue,
            appearanceTitleDecreaseValue,
            setAppearanceTitleIncreaseValue,
            setAppearanceTitleDecreaseValue
        } ){

    const stylePopupTitleIncreaseValue = {
        display: appearanceTitleIncreaseValue 
    };

    const stylePopupTitleDecreaseValue = {
        display: appearanceTitleDecreaseValue
    }

    let styleAnimationTitleTimeIsOut = {};
    let classNameForTitleTimeIsOut;
    if ( animTimeIsOut ) {
        styleAnimationTitleTimeIsOut.display = "block";
        classNameForTitleTimeIsOut = "timer__title-for-animation-when-time-is-out timer__animation-when-time-is-out-for-title";
    } else {
        styleAnimationTitleTimeIsOut.display = "none";
        classNameForTitleTimeIsOut = "timer__title-for-animation-when-time-is-out";
    }

    let styleAnimationUserNotSetTime = {};
    let classNameForTitleSetTime;
    if ( animSetValue ) {
        styleAnimationUserNotSetTime.display = "block";
        classNameForTitleSetTime = "timer__title-for-animation-when-user-not-set-time timer__animation-when-user-not-set-value_for-title ";
    } else {
        styleAnimationUserNotSetTime.display = "none";
        classNameForTitleSetTime = "timer__title-for-animation-when-user-not-set-time";
    }

    return <div className="timer__LCDdisplay_wrapper">
                <div className="timer-popup-title-increase-value" style={ stylePopupTitleIncreaseValue }>
                    { dictionary[ language ][ "popup-title_button-increase-value" ] }
                </div>
                <div className="timer-popup-title-decrease-value" style={ stylePopupTitleDecreaseValue }>
                    { dictionary[ language ][ "popup-title_button-decrease-value" ] }
                </div>
                <div className = { classNameForTitleTimeIsOut } style = { styleAnimationTitleTimeIsOut }>
                    { dictionary[ language ][ "popup-title_when-time-is-out" ]  }
                </div>
                <div className = { classNameForTitleSetTime } style = { styleAnimationUserNotSetTime }>
                    { dictionary[ language ][ "popup-title_when-user-not-set-time" ]  }
                </div>
                < BlockDigitAndSetTimeButton
                    value={ time.valueHoursDecades }
                    setValue={ setTime.setValueHoursDecades }
                    setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                    setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    type={ "hours/decades" }
                    animTimeIsOut = { animTimeIsOut }
                    animSetValue = { animSetValue }
                    state = { state }
                    setState = { setState }
                />
                < BlockDigitAndSetTimeButton
                    value={ time.valueHoursUnits }
                    setValue={ setTime.setValueHoursUnits }
                    setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                    setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "hours" }
                    animTimeIsOut = { animTimeIsOut }
                    animSetValue = { animSetValue }
                    state = { state }
                    setState = { setState }
                />
                <div className="timer__LCDdisplay_colon">:</div>
                < BlockDigitAndSetTimeButton
                    value={ time.valueMinutesDecades }
                    setValue={ setTime.setValueMinutesDecades }
                    setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                    setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    type={ "minutes" }
                    animTimeIsOut = { animTimeIsOut }
                    animSetValue = { animSetValue }
                    state = { state }
                    setState = { setState }
                />
                < BlockDigitAndSetTimeButton
                    value={ time.valueMinutesUnits }
                    setValue={ setTime.setValueMinutesUnits }
                    setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                    setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "minutes" }
                    animTimeIsOut = { animTimeIsOut }
                    animSetValue = { animSetValue }
                    state = { state }
                    setState = { setState }
                />
                <div className="timer__LCDdisplay_colon">:</div>
                < BlockDigitAndSetTimeButton
                    value={ time.valueSecondsDecades }
                    setValue={ setTime.setValueSecondsDecades }
                    setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                    setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    type={ "seconds" }
                    animTimeIsOut = { animTimeIsOut }
                    animSetValue = { animSetValue }
                    state = { state }
                    setState = { setState }
                />
                < BlockDigitAndSetTimeButton
                    value={ time.valueSecondsUnits }
                    setValue={ setTime.setValueSecondsUnits }
                    setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                    setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "seconds" }
                    animTimeIsOut = { animTimeIsOut }
                    animSetValue = { animSetValue }
                    state = { state }
                    setState = { setState }
                />
            </div>
}

export default LcdDisplay;