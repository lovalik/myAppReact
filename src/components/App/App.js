import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import Stopwatch from "../Stopwatch";
import Timer from "../Timer";
import Digitalwatch from "../Digitalwatch";
// localStorage.clear()
function App() {

    let language;
    let items;

    if ( localStorage.getItem( "language" ) ){
        language = JSON.parse( localStorage.getItem( "language" ) );
    } else { 
        language = "eng";
    }

    if ( localStorage.getItem( "items" ) ){
        items = JSON.parse( localStorage.getItem( "items" ) );
    } else { 
        items = [];
    }

    const [ appLanguage, setAppLanguage ] = useState( language );
    const [ createdItems, setCreatedItems ] = useState( items );
    
    useEffect( () => {
        function writeLocalStorage() {
            if ( document.visibilityState === 'hidden' ) {
                localStorage.setItem( `language`, JSON.stringify( appLanguage ) );
                localStorage.setItem( `items`, JSON.stringify( createdItems ) );
            }
        } 

        document.addEventListener( "visibilitychange", writeLocalStorage )
        return () => document.removeEventListener( "visibilitychange", writeLocalStorage );
    }, [ appLanguage, createdItems ] );

    function closeAllItems(){
        setCreatedItems( [] );
    }

    function changeLanguage( language ){
        setAppLanguage( language );
    }

    function addDigitalwatch(){
        let identifier = `dw_${ Math.floor(Math.random() * 1000000 ) }`;

        let digitalwatch = {
            id: identifier, 
            tag: "digitalwatch",
            parameters: false
        }

        setCreatedItems( ( previousState ) => previousState.concat( digitalwatch ) );
    }

    function addStopwatch(){
        let identifier = `sw_${ Math.floor(Math.random() * 1000000 ) }`;

        let stopwatch = {
            id: identifier,
            tag: "stopwatch",
            parameters: false
        }

        setCreatedItems( ( previousState ) => previousState.concat( stopwatch ) );
    }

    function addTimer(){
        let identifier = `timer_${ Math.floor(Math.random() * 1000000 ) }`;

        let timer = {
            id: identifier,
            tag: "timer",
            parameters: false
        }

        setCreatedItems( ( previousState ) => previousState.concat( timer ) );
    }

    function closeItem( id ) {
        setCreatedItems( ( previousState ) => previousState.filter( ( item ) => item.id !== id ) );
    }

    function changeAppState( element ) {
        setCreatedItems( ( previousState ) => {
            return previousState.map( ( item ) => {
                if( item.id === element.id ){
                    return element;
                } else {
                    return item;
                }
            } )
        } );
    }

    let itemsToDisplay = createdItems.map( function( item ){

        switch( item.tag ){
            case "digitalwatch":
                return <Digitalwatch
                            key = { item.id }
                            id = { item.id }
                            language={ appLanguage }
                            onCloseItem={ closeItem }
                            parameters={ item.parameters }
                            onChangeAppState={ changeAppState }
                        />
            case "stopwatch":
                return <Stopwatch
                            key={ item.id }
                            id={ item.id }
                            language={ appLanguage }
                            onCloseItem={ closeItem }
                            parameters={ item.parameters }
                            onChangeAppState={ changeAppState }
                        />;
            case "timer":
                return <Timer
                            key={ item.id }
                            id={ item.id }
                            language={ appLanguage }
                            onCloseItem={ closeItem }
                            parameters={ item.parameters }
                            onChangeAppState={ changeAppState }
                        />;
          
        }
    } );

    return <div className="App">
                <Toolbar 
                    language = { appLanguage }
                    onChangeLanguage = { changeLanguage }
                    onAddDigitalwatch = { addDigitalwatch }
                    onAddStopwatch = { addStopwatch }
                    onAddTimer = { addTimer }
                    onCloseAll = { closeAllItems }
                    createdItems = { itemsToDisplay }
                />
            </div>
}

export default App;
            