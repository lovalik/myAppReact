import React, { useState, useEffect } from "react";
import { ItemCase } from "../ItemCase";
import LcdDisplay from "./LcdDisplay";
import dictionary from "./dictionary";
import { convertSecondsToTimeValueForDigits, convertTimeFromScoreboardToSeconds } from "./utilities";
import "./styles.css";

function Timer( {
            id,
            language,
            closeItem,
            status,
            secToDisplay,
            msecWhenStart,
            timeBeginningCountdown,
            animTimeIsOut,
            setCreatedItems,
            durationAnimation,
            msecWhenAnimStart,
            timeAnimationLeft
        } ){

    let time;      
    const convertedTime = convertSecondsToTimeValueForDigits( secToDisplay );

    const [ state, setState ] = useState( status );
    const [ valueHoursDecades, setValueHoursDecades ] = useState( convertedTime.hoursDecades );
    const [ valueHoursUnits, setValueHoursUnits ] = useState( convertedTime.hoursUnits );
    const [ valueMinutesDecades, setValueMinutesDecades ] = useState( convertedTime.minutesDecades );
    const [ valueMinutesUnits, setValueMinutesUnits ] = useState( convertedTime.minutesUnits );
    const [ valueSecondsDecades, setValueSecondsDecades ] = useState( convertedTime.secondsDecades );
    const [ valueSecondsUnits, setValueSecondsUnits ] = useState( convertedTime.secondsUnits );
    const [ animationTimeIsOut, setAnimationTimeIsOut ] = useState( animTimeIsOut );
    const [ animationSetValue, setAnimationSetValue ] = useState( false );
    const [ milsecAnimStart, setMilsecAnimStart ] = useState( msecWhenAnimStart );
    const [ milsecWhenStart, setMilsecWhenStart ] = useState( msecWhenStart );
    const [ animLeft, setAnimLeft ] = useState( timeAnimationLeft );
    const [ initialTimeCountdown, setInitialTimeCountdown ] = useState( timeBeginningCountdown );
    const [ appearanceTitleIncreaseValue, setAppearanceTitleIncreaseValue ] = useState( "none" );
    const [ appearanceTitleDecreaseValue, setAppearanceTitleDecreaseValue ] = useState( "none" );

    useEffect( () => {
        setCreatedItems( ( previousState ) => {
            return previousState.map( ( item ) => {
                if ( item.id === id ){
                    return {
                        id: id,
                        tag: "timer",
                        parameters: {   
                            status: state,
                            secToDisplay: time,
                            msecWhenStart: milsecWhenStart,
                            timeBeginningCountdown: initialTimeCountdown,
                            animationStatus: {
                                "is animation `time is out` execute?": animationTimeIsOut,
                                "duration animation `time is out` (msec)": 60000,
                                "msecUNIX when animation `time is out` start": milsecAnimStart,
                                "how much time is left for execution animation `time is out` ": animLeft
                            }
                        }
                    }
                } else {
                    return item;
                }
            } );
        } )
    }, [ state, valueHoursDecades, valueHoursUnits, valueMinutesDecades, valueMinutesUnits, valueSecondsUnits, valueSecondsDecades, animationTimeIsOut, animLeft, milsecWhenStart, initialTimeCountdown ] )

    useEffect( () => {

        let timeoutID;
        if ( animationSetValue === true ){
            setAppearanceTitleIncreaseValue( () => "none" );
            setAppearanceTitleDecreaseValue( () => "none" );
            setAnimationTimeIsOut( () => false );
            timeoutID = setTimeout( () => {
                setAnimationSetValue( () => false )
            }, 3000 )
        }
        return () => clearTimeout( timeoutID );
    }, [ animationSetValue ] );

    useEffect( () => {

        let intervalID;
        
        if ( state === "finished" ){

            setAppearanceTitleIncreaseValue( () => "none")

            let msec = Date.now();
            let timeUnload;

            if ( milsecAnimStart === 0 ){
                setMilsecAnimStart( () => msec );
            }
            
            timeUnload = msec - milsecAnimStart;

            intervalID = setInterval( () => {

                let delta = Date.now() - msec;
                let animationTimeLeft = delta + timeUnload;

                if ( animationTimeLeft < durationAnimation ) {
                    setAnimLeft( () => animationTimeLeft );
                } else {
                    setAnimLeft( () => 0 );
                    setAnimationTimeIsOut( () => false );
                    setState( () => "reseted" );
                    setMilsecAnimStart( () => 0 );
                }
            }, 1000 )
        }

        return () => clearInterval( intervalID );

    }, [ state, animLeft, milsecAnimStart, initialTimeCountdown, appearanceTitleIncreaseValue ] );

    
    useEffect( () => {

        let intervalID;

        if ( state === "started" ){

            if ( initialTimeCountdown === 0 ){
                setAnimationSetValue( () => true );
                setState( () => "reseted" );
                return;
            } else {
                let timeUnload;
                let msecWhenStart = Date.now();

                if ( milsecWhenStart === 0 ){
                    setMilsecWhenStart( () => msecWhenStart );
                }
                
                timeUnload = Math.floor( ( msecWhenStart - milsecWhenStart ) / 1000 );

                intervalID = setInterval( () => {

                    let delta = Math.floor( ( Date.now() - msecWhenStart ) / 1000 );
                    let secToDisplay = initialTimeCountdown - delta - timeUnload; 

                    if ( secToDisplay > timeUnload ){
                        let convertedTime = convertSecondsToTimeValueForDigits( secToDisplay );

                        setValueHoursDecades( () => convertedTime.hoursDecades );
                        setValueHoursUnits( () => convertedTime.hoursUnits );
                        setValueMinutesDecades( () => convertedTime.minutesDecades );
                        setValueMinutesUnits( () => convertedTime.minutesUnits );
                        setValueSecondsDecades( () => convertedTime.secondsDecades );
                        setValueSecondsUnits( () => convertedTime.secondsUnits );
                    } else {
                        setState( () => "finished" );
                        setValueHoursDecades( () => 0 );
                        setValueHoursUnits( () => 0 );
                        setValueMinutesDecades( () => 0 );
                        setValueMinutesUnits( () => 0 );
                        setValueSecondsDecades( () => 0 );
                        setValueSecondsUnits( () => 0 );
                        setAnimationTimeIsOut( () => true );
                        setMilsecAnimStart( () => 0 );
                        setMilsecWhenStart( () => 0 );
                    }
                }, 50 )
            }
        }

        return () => clearInterval( intervalID );

    }, [ state, milsecWhenStart, time, initialTimeCountdown ] );
        
    useEffect( () => {
        if ( state === "reseted" ){
            setValueHoursDecades( () => 0 );
            setValueHoursUnits( () => 0 );
            setValueMinutesDecades( () => 0 );
            setValueMinutesUnits( () => 0 );
            setValueSecondsDecades( () => 0 );
            setValueSecondsUnits( () => 0 );
            setAnimationTimeIsOut( () => false );
            setAnimLeft( () => 0 );
            setMilsecAnimStart( () => 0 )
            setMilsecWhenStart( () => 0 );
        }
    }, [ state ] );
        
    useEffect( () => {    
        if ( state === "paused" ){
            setAnimationTimeIsOut( () => false );
            setAnimLeft( () => 0 );
            setMilsecAnimStart( () => 0 );
            setMilsecWhenStart( () => 0 );
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
        if ( state === "started" || animationSetValue ){
            return;
        } else {
            setInitialTimeCountdown( () => time );
            setState( () => "started" );
        }
    }

    function pause(){
        setState( () => "paused" );
    }

    function reset(){
        setState( () => "reseted" );
    }

    function closeElem(){
        closeItem( id );
    }

    let lcdDisplay = < LcdDisplay
                        language={ language }
                        time={ timeToDisplay }
                        setTime={ setTimeToDisplay }
                        animTimeIsOut={ animationTimeIsOut }
                        animSetValue={ animationSetValue }
                        state = { state }
                        setState = { setState }
                        appearanceTitleIncreaseValue={ appearanceTitleIncreaseValue }
                        appearanceTitleDecreaseValue={ appearanceTitleDecreaseValue }
                        setAppearanceTitleIncreaseValue={ setAppearanceTitleIncreaseValue }
                        setAppearanceTitleDecreaseValue={ setAppearanceTitleDecreaseValue }
                    />;

    const buttonStart = {
        title: dictionary[ language ][ "title_button-start" ],
        position: "left-top",
        handler: start
    }

    const buttonPause = {
        title: dictionary[ language ][ "title_button-pause" ],
        position: "left-bottom",
        handler: pause
    }

    const buttonReset = {
        title: dictionary[ language ][ "title_button-reset" ],
        position: "right-bottom",
        handler: reset
    }

    const buttonClose = {
        title: dictionary[ language ][ "title_button-close" ],
        position: "right-top",
        handler: closeElem
    }

    const buttons = [
        buttonStart,
        buttonPause,
        buttonReset,
        buttonClose
    ]

    return  <div className="application__wrapper-for-item">
                < ItemCase
                    buttons = { buttons }
                    lcdDisplay = { lcdDisplay }
                    title = { dictionary[ language ][ "main-title" ] }
                />
            </div>
}

export default Timer;
