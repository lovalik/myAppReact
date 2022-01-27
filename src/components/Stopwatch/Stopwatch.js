import React, { useState, useEffect } from "react";
import ItemCase from "../ItemCase";
import LcdDisplay from "./LcdDisplay";
import dictionary from "./dictionary";
import convertMillisecToTimeValue from "./utilities"

function Stopwatch( {
        id,
        language,
        closeItem,
        status,
        msecToDisplay,
        setCreatedItems,
        msecWhenStart,
        pauseTime
    } ){

    const [ currentTime, setCurrentTime ] = useState( msecToDisplay );
    const [ state, setState ] = useState( status );
    const [ millsecWhenStart, setMillsecWhenStart ] = useState( msecWhenStart );
    const [ pausedTime, setPausedTime ] = useState( pauseTime );

    useEffect( () => {

        setCreatedItems( ( previousState ) => {
            return previousState.map( ( item ) => {
                if ( item.id === id ){
                    return { 
                        id: id,
                        tag: "stopwatch",
                        parameters: {
                            status: state,
                            msecWhenStart: millsecWhenStart,
                            msecToDisplay: currentTime,
                            pausedTime: pausedTime
                        }
                    }
                } else {
                    return item;
                }
            } ) 
        } );
    }, [ state, currentTime, millsecWhenStart, pausedTime ] )

    useEffect( () => {

        let intervalID;
        let delta;

        if ( state === "started" ){

            let msecCurrent = Date.now();

            if( millsecWhenStart === 0 ){
                delta = currentTime;
            } else {
                delta = msecCurrent - millsecWhenStart + pausedTime;
            }
    
            intervalID = setInterval( () => {
                setCurrentTime( () => {
                    return ( Date.now() - msecCurrent ) +  delta;

                } );
            }, 50 )

        } else if ( state === "paused" ){
            setPausedTime( () => currentTime );
            setMillsecWhenStart( () => 0 );
        } else if ( state === "reseted" ){
            setCurrentTime( () => 0 );
            setMillsecWhenStart( () => 0 );
            setPausedTime( () => 0 );
        }

        return () => clearInterval( intervalID );

    }, [ state, millsecWhenStart, pausedTime, currentTime ] );

    function start(){
        if ( state === "started" ) {
            return
        } else {
            setState( () => "started" );
            setMillsecWhenStart( () => Date.now() );
        }
    }

    function pause(){
        if ( state === "started" ){
            setState( () => "paused" );
        } else {
            return
        }
    }

    function reset(){
        setState( () => "reseted" );
    }

    function closeElem(){
        closeItem( id );
    }

    const lcdDisplay = < LcdDisplay time={ convertMillisecToTimeValue( currentTime ) }/>;

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

    return <div className="application__wrapper-for-item">
                < ItemCase
                    buttons = { buttons }
                    lcdDisplay = { lcdDisplay }
                    title = { dictionary[ language ][ "main-title" ] }
                />
            </div>
}

export default Stopwatch;