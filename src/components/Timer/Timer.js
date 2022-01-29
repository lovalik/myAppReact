import React, { useState, useEffect } from "react";
import { ItemCase } from "../ItemCase";
import LcdDisplay from "./LcdDisplay";
import dictionary from "./dictionary";
import { convertSecondsToTimeValueForDigits, convertTimeFromScoreboardToSeconds } from "./utilities";
import "./styles.css";

function Timer( {
            id,
            language,
            onCloseItem,
            parameters,
            onSetCreatedItems
        } ){

    const dictIonary = dictionary[ language ];
    let paramEters;

    if ( parameters ){
        paramEters = parameters
    } else {
        paramEters = {
            state: "reseted",
            secToDisplay: 0,
            timeBeginningCountdown: 0,
            millisecWhenStart: 0,
            animationTimeIsOut: {
                execute: false,
                duration: 60000,
                "msecUNIX when animation start": 0,
                timeAnimationHasPassed: 60000
            }
        }
    }

    let time;      
    const convertedTime = convertSecondsToTimeValueForDigits( paramEters.secToDisplay );

    const [ state, setState ] = useState( paramEters.state );

    const [ valueHoursDecades, setValueHoursDecades ] = useState( convertedTime.hoursDecades );
    const [ valueHoursUnits, setValueHoursUnits ] = useState( convertedTime.hoursUnits );
    const [ valueMinutesDecades, setValueMinutesDecades ] = useState( convertedTime.minutesDecades );
    const [ valueMinutesUnits, setValueMinutesUnits ] = useState( convertedTime.minutesUnits );
    const [ valueSecondsDecades, setValueSecondsDecades ] = useState( convertedTime.secondsDecades );
    const [ valueSecondsUnits, setValueSecondsUnits ] = useState( convertedTime.secondsUnits );

    const [ milsecWhenStart, setMilsecWhenStart ] = useState( paramEters.millisecWhenStart );
    const [ initialTimeCountdown, setInitialTimeCountdown ] = useState( paramEters.timeBeginningCountdown );

    const [ animationTimeIsOutExecution, setAnimationTimeIsOutExecution ] = useState( paramEters.animationTimeIsOut.execute );
    const [ milsecWhenAnimTimeIsOutStart, setMilsecWhenAnimTimeIsOutStart ] = useState( paramEters.animationTimeIsOut[ "msecUNIX when animation start" ] );
    const [ animationTimeHasPassed, setAnimationTimeHasPassed ] = useState( paramEters.animationTimeIsOut.timeAnimationHasPassed );

    const [ animationSetValueExecution, setAnimationSetValueExecution ] = useState( false );
    const [ appearanceTitleIncreaseValue, setAppearanceTitleIncreaseValue ] = useState( "none" );
    const [ appearanceTitleDecreaseValue, setAppearanceTitleDecreaseValue ] = useState( "none" );

    useEffect( () => {
        onSetCreatedItems( ( previousState ) => {
            return previousState.map( ( item ) => {
                if ( item.id === id ){
                    return {
                        id: id,
                        tag: "timer",
                        parameters: {
                            state: state,
                            secToDisplay: time,
                            timeBeginningCountdown: initialTimeCountdown,
                            millisecWhenStart: milsecWhenStart,
                            animationTimeIsOut: {
                                execute: animationTimeIsOutExecution,
                                duration: 60000,
                                "msecUNIX when animation start": milsecWhenAnimTimeIsOutStart,
                                timeAnimationHasPassed: animationTimeHasPassed
                            }
                        }
                    }
                } else {
                    return item;
                }
            } );
        } )
    }, [ state, valueHoursDecades, valueHoursUnits, valueMinutesDecades, valueMinutesUnits, valueSecondsUnits, valueSecondsDecades, animationTimeIsOutExecution, animationTimeHasPassed, milsecWhenAnimTimeIsOutStart, initialTimeCountdown ] )

    useEffect( () => {

        let timeoutID;
        if ( animationSetValueExecution === true ){
            setAppearanceTitleIncreaseValue( "none" );
            setAppearanceTitleDecreaseValue( "none" );
            setAnimationTimeIsOutExecution( false );
            timeoutID = setTimeout( () => {
                setAnimationSetValueExecution( false )
            }, 3000 )
        }
        return () => clearTimeout( timeoutID );
    }, [ animationSetValueExecution ] );

    useEffect( () => {

        let intervalID;
        
        if ( state === "finished" ){

            setAppearanceTitleIncreaseValue( "none" );

            let msec = Date.now();
            let timeUnload;

            if ( milsecWhenAnimTimeIsOutStart === 0 ){
                setMilsecWhenAnimTimeIsOutStart( msec );
            }
            
            timeUnload = msec - milsecWhenAnimTimeIsOutStart;

            intervalID = setInterval( () => {

                let delta = Date.now() - msec;
                let animationTimeHasPassed = delta + timeUnload;

                if ( animationTimeHasPassed < paramEters.animationTimeIsOut.duration ) {
                    setAnimationTimeHasPassed( animationTimeHasPassed );
                } else {
                    setAnimationTimeHasPassed( 0 );
                    setAnimationTimeIsOutExecution( false );
                    setState( "reseted" );
                    setMilsecWhenAnimTimeIsOutStart( 0 );
                }
            }, 1000 )
        }

        return () => clearInterval( intervalID );

    }, [ state, animationTimeHasPassed, milsecWhenAnimTimeIsOutStart, initialTimeCountdown, appearanceTitleIncreaseValue ] );

    
    useEffect( () => {

        let intervalID;

        if ( state === "started" ){

            if ( initialTimeCountdown === 0 ){
                setAnimationSetValueExecution( true );
                setState( "reseted" );
                return;
            } else {
                let timeUnload;
                let msecWhenStart = Date.now();

                if ( milsecWhenStart === 0 ){
                    setMilsecWhenStart( msecWhenStart );
                }
                
                timeUnload = Math.floor( ( msecWhenStart - milsecWhenStart ) / 1000 );

                intervalID = setInterval( () => {

                    let delta = Math.floor( ( Date.now() - msecWhenStart ) / 1000 );
                    let secToDisplay = initialTimeCountdown - delta - timeUnload; 

                    if ( secToDisplay > timeUnload ){
                        let convertedTime = convertSecondsToTimeValueForDigits( secToDisplay );

                        setValueHoursDecades( convertedTime.hoursDecades );
                        setValueHoursUnits( convertedTime.hoursUnits );
                        setValueMinutesDecades( convertedTime.minutesDecades );
                        setValueMinutesUnits( convertedTime.minutesUnits );
                        setValueSecondsDecades( convertedTime.secondsDecades );
                        setValueSecondsUnits( convertedTime.secondsUnits );
                    } else {
                        setState( "finished" );

                        setValueHoursDecades( 0 );
                        setValueHoursUnits( 0 );
                        setValueMinutesDecades( 0 );
                        setValueMinutesUnits( 0 );
                        setValueSecondsDecades( 0 );
                        setValueSecondsUnits( 0 );

                        setInitialTimeCountdown( 0 );

                        setAnimationTimeIsOutExecution( true );
                        setMilsecWhenAnimTimeIsOutStart( 0 );
                        setMilsecWhenStart( 0 );
                    }
                }, 50 )
            }
        }

        return () => clearInterval( intervalID );

    }, [ state, milsecWhenStart, time, initialTimeCountdown ] );
        
    useEffect( () => {
        if ( state === "reseted" ){
            setValueHoursDecades( 0 );
            setValueHoursUnits( 0 );
            setValueMinutesDecades( 0 );
            setValueMinutesUnits( 0 );
            setValueSecondsDecades( 0 );
            setValueSecondsUnits( 0 );
            setAnimationTimeIsOutExecution( false );
            setAnimationTimeHasPassed( 0 );
            setMilsecWhenAnimTimeIsOutStart( 0 )
            setMilsecWhenStart( 0 );
            setInitialTimeCountdown( 0 );
        }
    }, [ state ] );
        
    useEffect( () => {    
        if ( state === "paused" ){
            setAnimationTimeIsOutExecution( false );
            setAnimationTimeHasPassed( 0 );
            setMilsecWhenAnimTimeIsOutStart( 0 );
            setMilsecWhenStart( 0 );
            setInitialTimeCountdown( 0 );
        }
    }, [ state ] );

    const timeToDisplay = {
        valueHoursDecades,
        valueHoursUnits,
        valueMinutesDecades,
        valueMinutesUnits,
        valueSecondsDecades,
        valueSecondsUnits
    }

    time = convertTimeFromScoreboardToSeconds( timeToDisplay );

    const setTimeToDisplay = {
        setValueHoursDecades,
        setValueHoursUnits,
        setValueMinutesDecades,
        setValueMinutesUnits,
        setValueSecondsDecades,
        setValueSecondsUnits,
    }

    function start(){
        if ( state === "started" || animationSetValueExecution ){
            return;
        } else {
            setInitialTimeCountdown( () => time );
            setState( "started" );
        }
    }

    function pause(){
        setState( "paused" );
    }

    function reset(){
        time = convertTimeFromScoreboardToSeconds( 0 );
        setState( "reseted" );
    }

    function closeItem(){
        onCloseItem( id );
    }

    let lcdDisplay = < LcdDisplay
                        language={ language }
                        time={ timeToDisplay }
                        onSetTime={ setTimeToDisplay }
                        animationTimeIsOutExecution={ animationTimeIsOutExecution }
                        animationSetValueExecution={ animationSetValueExecution }
                        state = { state }
                        onSetState = { setState }
                        appearanceTitleIncreaseValue={ appearanceTitleIncreaseValue }
                        appearanceTitleDecreaseValue={ appearanceTitleDecreaseValue }
                        onSetAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                        onSetAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    />;

    const buttonStart = {
        title: dictIonary[ "title_button-start" ],
        position: "left-top",
        handler: start
    }

    const buttonPause = {
        title: dictIonary[ "title_button-pause" ],
        position: "left-bottom",
        handler: pause
    }

    const buttonReset = {
        title: dictIonary[ "title_button-reset" ],
        position: "right-bottom",
        handler: reset
    }

    const buttonClose = {
        title: dictIonary[ "title_button-close" ],
        position: "right-top",
        handler: closeItem
    }

    return  <div className="toolbar__wrapper-for-item">
                < ItemCase
                    buttons = { [ buttonStart, buttonPause, buttonReset, buttonClose ] }
                    lcdDisplay = { lcdDisplay }
                    title = { dictIonary[ "main-title" ] }
                />
            </div>
}

export default Timer;
