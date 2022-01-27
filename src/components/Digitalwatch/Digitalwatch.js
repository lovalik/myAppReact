import React, { useState, useEffect } from "react";
import { ItemCase } from "../ItemCase";
import LcdDisplay from "./LcdDisplay";
import DropdownListOfCities from "./DropdownListOfCities";
import "./styles.css";
import dictionary from "./dictionary";
import convertDate from "./utilities";

function Digitalwatch( {
            id,
            language,
            city,
            timeFormat,
            signUTC,
            valueUTC,
            closeItem,
            setCreatedItems
    } ){

    const [ displayingListOfCities, setDisplayingListOfCities  ] = useState( false );
    const [ time_Format, setTimeFormat  ] = useState( timeFormat );
    const [ currentCity, setCurrentCity ] = useState( city );
    const [ currentSignUTC, setSignUTC ] = useState( signUTC );
    const [ currentValueUTC, setValueUTC ] = useState( valueUTC );
    const [ currentTime, setCurrentTime  ] = useState( () => {
        let time = convertDate( { language, currentCity, currentSignUTC, currentValueUTC, time_Format } );
        return time;
    } );

    useEffect( () => {
        setCreatedItems( ( previousState ) => {
            return previousState.map( ( item ) => {
                if ( item.id === id ){
                    return { 
                        id: id,
                        tag: "digitalwatch",
                        parameters: {
                            city: currentCity,
                            valueUTC: currentValueUTC,
                            signUTC: currentSignUTC,
                            timeFormat: time_Format
                        }
                    }
                } else {
                    return item;
                }
            } )
        } );
    }, [ currentCity, currentValueUTC, currentSignUTC, time_Format ] )

    useEffect( () => {
        let intervalID = setInterval( () => {
            let time = convertDate( { language, currentCity, currentSignUTC, currentValueUTC, time_Format } );
            setCurrentTime( () => time );
        }, 50);

        return () => clearInterval( intervalID );

    }, [ currentCity, currentValueUTC, currentSignUTC, time_Format, currentTime ] )


    function changeTimeFormat(){
        if( time_Format === 24 ){
            setTimeFormat( () => 12 ) 
        } else if( time_Format === 12) {
            setTimeFormat( () => 24 ) 
        }
    }
    
    function changeCity( { city, signUTC, valueUTC } ){
        setCurrentCity( () => city );
        setSignUTC( () => signUTC );
        setValueUTC( () => valueUTC );
    }

    function showOrHideListOfCities(){
        if( displayingListOfCities ){
            setDisplayingListOfCities( () => false )
        } else {
            setDisplayingListOfCities( () => true )
        }
    }

    function closeElem(){
        closeItem( id );
    }

    let lcdDisplay = < LcdDisplay time={ currentTime } />;

    let dropDownListOfCities = < DropdownListOfCities
                                    selectCity={ changeCity }
                                    currentCity = { currentCity }
                                    displaying={ displayingListOfCities }
                                    setDisplaying={ setDisplayingListOfCities }
                                    language={ language }
                                />

    const buttonFormat = {
        title: dictionary[ language ][ "title_button-format" ],
        position: "left-top",
        handler: changeTimeFormat
    }

    const buttonCity = {
        title: dictionary[ language ][ "title_button-city" ],
        position: "left-bottom",
        handler: showOrHideListOfCities
    }

    const buttonClose = {
        title: dictionary[ language ][ "title_button-close" ],
        position: "right-top",
        handler: closeElem
    }

    const buttons = [
        buttonFormat,
        buttonCity,
        buttonClose
    ]

    return  <div className="application__wrapper-for-item">
                < ItemCase
                    buttons = { buttons }
                    lcdDisplay = { lcdDisplay }
                    title = { dictionary[ language ][ "main-title" ] }
                    dropDownListOfCities = { dropDownListOfCities }
                />
            </div>
}

export default Digitalwatch;