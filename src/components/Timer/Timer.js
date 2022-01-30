import React, { useState, useEffect } from "react";
import ItemCase from "../ItemCase";
import LcdDisplay from "./LcdDisplay";
import dictionary from "./dictionary";
import { convertSecondsToTimeValueForDigits, convertTimeFromScoreboardToSeconds } from "./utilities";
import changeDigitValue from "./changeDigitValue";
import "./styles.css";

function Timer( {
            id,
            language,
            onCloseItem,
            parameters,
            onChangeAppState
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
            millisecFromUnixWhenStart: 0,
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

    const [ millsecFromUnixWhenStart, setMillsecFromUnixWhenStart ] = useState( paramEters.millisecFromUnixWhenStart );
    const [ initialTimeCountdown, setInitialTimeCountdown ] = useState( paramEters.timeBeginningCountdown );

    const [ animationTimeIsOutExecution, setAnimationTimeIsOutExecution ] = useState( paramEters.animationTimeIsOut.execute );
    const [ millisecFromUnixWhenAnimationStart, setMillisecFromUnixWhenAnimationStart ] = useState( paramEters.animationTimeIsOut[ "msecUNIX when animation start" ] );
    const [ animationTimeHasPassed, setAnimationTimeHasPassed ] = useState( paramEters.animationTimeIsOut.timeAnimationHasPassed );

    const [ animationSetValueExecution, setAnimationSetValueExecution ] = useState( false );
    const [ appearanceTitleIncreaseValue, setAppearanceTitleIncreaseValue ] = useState( "none" );
    const [ appearanceTitleDecreaseValue, setAppearanceTitleDecreaseValue ] = useState( "none" );

    time = convertTimeFromScoreboardToSeconds( {
        valueHoursDecades,
        valueHoursUnits,
        valueMinutesDecades,
        valueMinutesUnits,
        valueSecondsDecades,
        valueSecondsUnits
    } );

    let timer = {
        id: id,
        tag: "timer",
        parameters: {
            state: state,
            secToDisplay: time,
            timeBeginningCountdown: initialTimeCountdown,
            millisecFromUnixWhenStart: millsecFromUnixWhenStart,
            animationTimeIsOut: {
                execute: animationTimeIsOutExecution,
                duration: 60000,
                "msecUNIX when animation start": millisecFromUnixWhenAnimationStart,
                timeAnimationHasPassed: animationTimeHasPassed
            }
        }
    }

    useEffect( () => {
        onChangeAppState( timer )
    }, [ state, time, initialTimeCountdown, millsecFromUnixWhenStart, animationTimeIsOutExecution, millisecFromUnixWhenAnimationStart, animationTimeHasPassed ] );

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

            if ( millisecFromUnixWhenAnimationStart === 0 ){
                setMillisecFromUnixWhenAnimationStart( msec );
            }
            
            timeUnload = msec - millisecFromUnixWhenAnimationStart;

            intervalID = setInterval( () => {

                let delta = Date.now() - msec;
                let animationTimeHasPassed = delta + timeUnload;

                if ( animationTimeHasPassed < paramEters.animationTimeIsOut.duration ) {
                    setAnimationTimeHasPassed( animationTimeHasPassed );
                } else {
                    setAnimationTimeHasPassed( 0 );
                    setAnimationTimeIsOutExecution( false );
                    setState( "reseted" );
                    setMillisecFromUnixWhenAnimationStart( 0 );
                }
            }, 1000 )
        }

        return () => clearInterval( intervalID );
    }, [ state, animationTimeHasPassed, millisecFromUnixWhenAnimationStart, initialTimeCountdown, appearanceTitleIncreaseValue ] );

    useEffect( () => {

        let intervalID;

        if ( state === "started" ){

            if ( initialTimeCountdown === 0 ){
                setAnimationSetValueExecution( true );
                setState( "reseted" );
                return;
            } else {
                let msecBeforeTick = Date.now();

                if ( millsecFromUnixWhenStart === 0 ){
                    setMillsecFromUnixWhenStart( msecBeforeTick );
                }
                
                console.log( `UNIX ${ millsecFromUnixWhenStart }`)


                let timeHavePassed = msecBeforeTick - millsecFromUnixWhenStart;

                console.log( `времени прошло ${ Math.floor( timeHavePassed/1000 ) }`)

                intervalID = setInterval( () => {

                    let delta = Date.now() - msecBeforeTick;
                    let secToDisplay = initialTimeCountdown - Math.floor( ( delta + timeHavePassed ) / 1000 ) ; 

                    if ( secToDisplay > 0 ){
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
                        setMillisecFromUnixWhenAnimationStart( 0 );
                        setMillsecFromUnixWhenStart( 0 );
                    }
                }, 50 )
            }
        }
        return () => clearInterval( intervalID );
    }, [ state, millsecFromUnixWhenStart, time, initialTimeCountdown ] );
        
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
            setMillisecFromUnixWhenAnimationStart( 0 )
            setMillsecFromUnixWhenStart( 0 );
            setInitialTimeCountdown( 0 );
        }
    }, [ state ] );
        
    useEffect( () => {    
        if ( state === "paused" ){
            setAnimationTimeIsOutExecution( false );
            setAnimationTimeHasPassed( 0 );
            setMillisecFromUnixWhenAnimationStart( 0 );
            setMillsecFromUnixWhenStart( 0 );
        }
    }, [ state ] );

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
        setState( "reseted" );
    }

    function closeItem(){
        onCloseItem( id );
    }

    function changeAppearanceTitleIncreaseValue( value ){
        setAppearanceTitleIncreaseValue( value );
    }

    function changeAppearanceTitleDecreaseValue( value ){
        setAppearanceTitleIncreaseValue( value );
    }

    const changeValueDigit = changeDigitValue( {
                                        setState,
                                        setValueHoursDecades,
                                        setValueHoursUnits,
                                        setValueMinutesDecades,
                                        setValueMinutesUnits,
                                        setValueSecondsDecades,
                                        setValueSecondsUnits
                                    } );

    let lcdDisplay = < LcdDisplay
                        language={ language }
                        valueHoursDecades={ valueHoursDecades }
                        valueHoursUnits={ valueHoursUnits }
                        valueMinutesDecades={ valueMinutesDecades }
                        valueMinutesUnits={ valueMinutesUnits }
                        valueSecondsDecades={ valueSecondsDecades }
                        valueSecondsUnits={ valueSecondsUnits }
                        animationTimeIsOutExecution={ animationTimeIsOutExecution }
                        animationSetValueExecution={ animationSetValueExecution }
                        state = { state }
                        appearanceTitleIncreaseValue={ appearanceTitleIncreaseValue }
                        appearanceTitleDecreaseValue={ appearanceTitleDecreaseValue }
                        onChangeAppearanceTitleIncreaseValue={ changeAppearanceTitleIncreaseValue }
                        onChangeAppearanceTitleDecreaseValue={ changeAppearanceTitleDecreaseValue }
                        onChangeDigitValue={ changeValueDigit }
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
                    buttons={ [ buttonStart, buttonPause, buttonReset, buttonClose ] }
                    lcdDisplay={ lcdDisplay }
                    title={ dictIonary[ "main-title" ] }
                />
            </div>
}

export default Timer;
