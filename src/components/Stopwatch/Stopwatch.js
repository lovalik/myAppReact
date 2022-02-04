import React, { useState, useEffect, useContext } from "react";
import ItemCase from "../ItemCase";
import dictionary from "./dictionary";
import convertMillisecToTimeValue from "./convertMillisecToTimeValue";
import "./styles.css";
import languageContext from "../App/languageContext";

function Stopwatch( {
        id,
        onCloseItem,
        parameters,
        onChangeAppState
    } ){

    let paramEters;
    const [ language, setLanguage ] = useContext( languageContext );
    const dictIonary = dictionary[ language ];

    if ( parameters ){
        paramEters = parameters
    } else {
        paramEters = {
            ticking: false,
            millisecToDisplay: 0,
            millisecWhenStart: 0,
            millisecWhenPaused: 0
        }
    }

    const [ currentTime, setCurrentTime ] = useState( paramEters.millisecToDisplay );
    const [ ticking, setTicking ] = useState( paramEters.ticking );
    const [ millsecWhenStart, setMillsecWhenStart ] = useState( paramEters.millisecWhenStart );
    const [ millsecWhenPaused, setMillsecWhenPaused ] = useState( paramEters.millisecWhenPaused );

    const stopwatch = {
        id: id,
        tag: "stopwatch",
        parameters: {
            ticking: ticking,
            millisecWhenStart: millsecWhenStart,
            millisecToDisplay: currentTime,
            millisecWhenPaused: millsecWhenPaused
        }
    }

    useEffect( () => { 
        onChangeAppState( stopwatch )
    }, [ ticking, millsecWhenStart, currentTime, millsecWhenPaused ] );

    useEffect( () => {

        let intervalID;

        if ( ticking ){
            intervalID = setInterval( () => {
                setCurrentTime( () => {
                    return Date.now() - millsecWhenStart + millsecWhenPaused;
                } );
            }, 50 )
        } else {
            setCurrentTime( currentTime );
            setMillsecWhenStart( 0 );
        }

        return () => clearInterval( intervalID );
    }, [ ticking, millsecWhenStart, currentTime, millsecWhenPaused ] );

    function start(){
        if ( !ticking ) {
            setMillsecWhenStart( Date.now() );
            setTicking( true );
        } else {
           return
        }
    }

    function pause(){
        setTicking( false );
        setMillsecWhenPaused( currentTime );
    }

    function reset(){
        setTicking( false );
        setCurrentTime( 0 );
        setMillsecWhenPaused( 0 );
    }

    function closeItem(){
        onCloseItem( id );
    }

    let time = convertMillisecToTimeValue( currentTime );

    const lcdDisplay = <div className="stopwatch__LCDdisplay_wrapper">
                            <span className="stopwatch__hours_decades">{ time.hoursDecade }</span>
                            <span className="stopwatch__hours_units">{ time.hoursDecade }</span>
                            <span className="stopwatch__colon">:</span>
                            <span className="stopwatch__minutes_decades">{ time.minutesDecade }</span>
                            <span className="stopwatch__minutes_units">{ time.minutesUnits }</span>
                            <span className="stopwatch__colon">:</span>
                            <span className="stopwatch__seconds_decades">{ time.secondsDecade }</span>
                            <span className="stopwatch__seconds_units">{ time.secondsUnits }</span>
                            <span className="stopwatch__milliseconds_block">
                                <span className="stopwatch__milliseconds_title">{ dictIonary[ "title_msec-on-LCDDislay" ] }</span>
                                <span className="stopwatch__milliseconds_decades">{ time.millsecondsDecade }</span>
                                <span className="stopwatch__milliseconds_units">{ time.millsecondsUnits }</span>
                            </span>
                        </div>

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

    return <div className="toolbar__wrapper-for-item">
                < ItemCase
                    buttons = { [ buttonStart, buttonPause, buttonReset, buttonClose ] }
                    lcdDisplay={ lcdDisplay }
                    title = { dictIonary[ "main-title" ] }
                />
            </div>
}

export default Stopwatch;