import React from "react";
import BlockDigitAndSetTimeButton from "./BlockDigitAndSetTimeButton";
import dictionary from "./dictionary";

function LcdDisplay( {
            language,
            time,
            onSetTime,
            animationTimeIsOutExecution,
            animationSetValueExecution,
            state,
            onSetState,
            appearanceTitleIncreaseValue,
            appearanceTitleDecreaseValue,
            onSetAppearanceTitleIncreaseValue,
            onSetAppearanceTitleDecreaseValue
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
                    value={ time.valueHoursDecades }
                    onSetValue={ onSetTime.setValueHoursDecades }
                    onSetAppearanceTitleIncreaseValue={ onSetAppearanceTitleIncreaseValue }
                    onSetAppearanceTitleDecreaseValue={ onSetAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    type={ "hours/decades" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onSetState = { onSetState }
                />
                < BlockDigitAndSetTimeButton
                    value={ time.valueHoursUnits }
                    onSetValue={ onSetTime.setValueHoursUnits }
                    onSetAppearanceTitleIncreaseValue={ onSetAppearanceTitleIncreaseValue }
                    onSetAppearanceTitleDecreaseValue={ onSetAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "hours" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onSetState = { onSetState }
                />
                <div className="timer__LCDdisplay_colon">:</div>
                < BlockDigitAndSetTimeButton
                    value={ time.valueMinutesDecades }
                    onSetValue={ onSetTime.setValueMinutesDecades }
                    onSetAppearanceTitleIncreaseValue={ onSetAppearanceTitleIncreaseValue }
                    onSetAppearanceTitleDecreaseValue={ onSetAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    type={ "minutes" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onSetState = { onSetState }
                />
                < BlockDigitAndSetTimeButton
                    value={ time.valueMinutesUnits }
                    onSetValue={ onSetTime.setValueMinutesUnits }
                    onSetAppearanceTitleIncreaseValue={ onSetAppearanceTitleIncreaseValue }
                    onSetAppearanceTitleDecreaseValue={ onSetAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "minutes" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onSetState = { onSetState }
                />
                <div className="timer__LCDdisplay_colon">:</div>
                < BlockDigitAndSetTimeButton
                    value={ time.valueSecondsDecades }
                    onSetValue={ onSetTime.setValueSecondsDecades }
                    onSetAppearanceTitleIncreaseValue={ onSetAppearanceTitleIncreaseValue }
                    onSetAppearanceTitleDecreaseValue={ onSetAppearanceTitleDecreaseValue }
                    digit={ "decades" }
                    type={ "seconds" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onSetState = { onSetState }
                />
                < BlockDigitAndSetTimeButton
                    value={ time.valueSecondsUnits }
                    onSetValue={ onSetTime.setValueSecondsUnits }
                    onSetAppearanceTitleIncreaseValue={ onSetAppearanceTitleIncreaseValue }
                    onSetAppearanceTitleDecreaseValue={ onSetAppearanceTitleDecreaseValue }
                    digit={ "units" }
                    type={ "seconds" }
                    animationTimeIsOutExecution = { animationTimeIsOutExecution }
                    animationSetValueExecution = { animationSetValueExecution }
                    state = { state }
                    onSetState = { onSetState }
                />
            </div>
}

export default LcdDisplay;