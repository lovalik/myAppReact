import React, { useState, useEffect } from "react";
import Application from "./Application";
import Stopwatch from "../Stopwatch";
import Timer from "../Timer";
import Digitalwatch from "../Digitalwatch";

function App() {

    let appState;

    if ( localStorage.getItem( "appState" ) ){
        appState = JSON.parse( localStorage.getItem( "appState" ) );
    } else { 
        appState = {
            language: "eng",
            createdItems: []
        }
    }

    const [ language, setLanguage ] = useState( appState.language );
    const [ createdItems, setCreatedItems ] = useState( appState.createdItems );
    
    let appearanceCloseButton;
    if ( createdItems.length === 0 ){
        appearanceCloseButton = false;
    } else {
        appearanceCloseButton = true;
    }

    const [ buttonCloseAppearance, setBbuttonCloseAppearance ] = useState( appearanceCloseButton )

    appState.language = language;
    appState.createdItems = createdItems;

    useEffect( () => {
        function writeLocalStorage() {
            if ( document.visibilityState === 'hidden' ) {
                localStorage.setItem( `appState`, JSON.stringify( appState ) );
            }
        } 

        document.addEventListener( "visibilitychange", writeLocalStorage )
        return () => document.removeEventListener( "visibilitychange", writeLocalStorage );
    }, [ appState ] );

    function closeAllItems(){
        setBbuttonCloseAppearance( () => false );
        setCreatedItems( () => [] );
    }

    function addDigitalwatch(){
        let uniqueNumber = `dw_${ Math.floor(Math.random() * 1000000 ) }`;

        let digitalwatch = {
            id: uniqueNumber, 
            tag: "digitalwatch",
            parameters: {
                city: "Minsk",
                valueUTC: 3,
                signUTC: "+",
                timeFormat: 24
            }
        }

        setBbuttonCloseAppearance( () => true );
        setCreatedItems( () => createdItems.concat( digitalwatch ) );
    }

    function addStopwatch(){
        let uniqueNumber = `sw_${ Math.floor(Math.random() * 1000000 ) }`;

        let stopwatch = {
            id: uniqueNumber,
            tag: "stopwatch",
            parameters: {
                status: "reseted",
                msecToDisplay: 0,
                msecWhenStart: 0,
                pausedTime: 0
            }
        }

        setBbuttonCloseAppearance( () => true );
        setCreatedItems( () => createdItems.concat( stopwatch ) );
    }

    function addTimer(){

        let uniqueNumber = `tmr_${ Math.floor(Math.random() * 1000000 ) }`;

        let timer = {
            id: uniqueNumber,
            tag: "timer",
            parameters: {   
                status: "reseted",
                secToDisplay: 0,
                timeBeginningCountdown: 0,
                msecWhenStart: 0,
                animationStatus: {
                    "is animation `time is out` execute?": false,
                    "duration animation `time is out` (msec)": 60000,
                    "msecUNIX when animation `time is out` start": 0,
                    "how much time is left for execution animation `time is out` ": 0
                }
            }
        }

        setBbuttonCloseAppearance( () => true );
        setCreatedItems( () => createdItems.concat( timer ) );

    }

    function closeItem( id ) {
        let items = createdItems.filter( ( item ) => item.id !== id );

        if ( items.length === 0 ){
            setBbuttonCloseAppearance( ( ) => false );
        }

        setCreatedItems( () => items )
    }

    let items = createdItems.map( function( item ){

        function createItem( item ){

            if ( item.tag === "timer" ) {
                let uniqueNumber = item.id;

                return < Timer
                            key = { uniqueNumber }
                            id = { uniqueNumber }
                            closeItem={ closeItem }
                            language={ language }
                            secToDisplay={ item.parameters.secToDisplay }
                            msecWhenStart={ item.parameters.msecWhenStart }
                            timeBeginningCountdown = { item.parameters.timeBeginningCountdown }
                            status={ item.parameters.status }
                            setCreatedItems= { setCreatedItems }
                            animTimeIsOut = { item.parameters.animationStatus[ "is animation `time is out` execute?" ] }
                            durationAnimation = { item.parameters.animationStatus[ "duration animation `time is out` (msec)" ] }
                            msecWhenAnimStart = { item.parameters.animationStatus[ "msecUNIX when animation `time is out` start" ] }
                            timeAnimationLeft = { item.parameters.animationStatus[ "how much time is left for execution animation `time is out` " ] }
                        />
            } else if ( item.tag === "stopwatch" ){
                let uniqueNumber = item.id;

                return <Stopwatch
                            key = { uniqueNumber }
                            id = { uniqueNumber }
                            closeItem = { closeItem }
                            status = { item.parameters.status }
                            language = { language }
                            msecToDisplay = { item.parameters.msecToDisplay }
                            msecWhenStart={ item.parameters.msecWhenStart }
                            pauseTime={ item.parameters.pausedTime }
                            setCreatedItems= { setCreatedItems }
                        />
            } else if ( item.tag === "digitalwatch" ){

                let uniqueNumber = item.id;

                return <Digitalwatch
                            key = { uniqueNumber }
                            id = { uniqueNumber }
                            closeItem={ closeItem }
                            language={ language }
                            city={ item.parameters.city }
                            timeFormat={ item.parameters.timeFormat }
                            signUTC={ item.parameters.signUTC }
                            valueUTC={ item.parameters.valueUTC }
                            setCreatedItems= { setCreatedItems }
                        />
            }
        }
        return createItem( item );
    } );

    return <div className="App">
                <Application 
                    language = { language }
                    setLanguage = { setLanguage }
                    addDigitalwatch = { addDigitalwatch }
                    addStopwatch = { addStopwatch }
                    addTimer = { addTimer }
                    closeAll = { closeAllItems }
                    createdItems = { items }
                    buttonCloseAppearance = { buttonCloseAppearance }
                />
            </div>
}

export default App;
