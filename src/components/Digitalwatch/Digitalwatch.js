import React, { useState, useEffect, useContext } from "react";
import ItemCase from "../ItemCase";
import DropdownListOfCities from "./DropdownListOfCities";
import "./styles.css";
import dictionary from "./dictionary";
import convertDate from "./convertDate";
import languageContext from "../App/languageContext";

function Digitalwatch( {
            id,
            parameters,
            onCloseItem,
            onChangeAppState
        } ){

    let paramEters;
    const [ language, setLanguage ] = useContext( languageContext );
    const dictIonary = dictionary[ language ];
    
    if ( parameters ){
        paramEters = parameters;
    } else {
        paramEters = {
            city: "Minsk",
            valueUTC: 3,
            signUTC: "+",
            timeFormat: 24
        }
    }

    const [ appearanceListOfCities, setAppearanceListOfCities  ] = useState( false );
    const [ time_Format, setTimeFormat  ] = useState( paramEters.timeFormat );
    const [ currentCity, setCurrentCity ] = useState( paramEters.city );
    const [ currentSignUTC, setSignUTC ] = useState( paramEters.signUTC );
    const [ currentValueUTC, setValueUTC ] = useState( paramEters.valueUTC );
    const [ currentTime, setCurrentTime  ] = useState( () => {
        let time = convertDate( { language, currentCity, currentSignUTC, currentValueUTC, time_Format } );
        return time;
    } );

    let digitalwatch = {
        id: id,
        tag: "digitalwatch",
        parameters: {
            city: currentCity,
            valueUTC: currentValueUTC,
            signUTC: currentSignUTC,
            timeFormat: time_Format
        }
    }
        
    useEffect( () => {
        let intervalID = setInterval( () => {
            let time = convertDate( { language, currentCity, currentSignUTC, currentValueUTC, time_Format } );
            setCurrentTime( time );
        }, 50);

        return () => clearInterval( intervalID );

    }, [ currentCity, currentValueUTC, currentSignUTC, time_Format, language ] )

    useEffect( () => {
        onChangeAppState( digitalwatch )
    }, [ currentCity, currentValueUTC, currentSignUTC, time_Format ] );

    function changeTimeFormat(){
        if( time_Format === 24 ){
            setTimeFormat( 12 ) 
        } else if( time_Format === 12) {
            setTimeFormat( 24 ) 
        }
    }
    
    function changeCity( { city, signUTC, valueUTC } ){
        setCurrentCity( city );
        setSignUTC( signUTC );
        setValueUTC( valueUTC );
    }

    function showOrHideListOfCities(){
        if( appearanceListOfCities ){
            setAppearanceListOfCities( false )
        } else {
            setAppearanceListOfCities( true )
        }
    }

    function closeItem(){
        onCloseItem( id );
    }

    function hideList() {
        setAppearanceListOfCities( false )
    }

    function unhideList() {
        setAppearanceListOfCities( true )
    }

    let lcdDisplay = <div className="digitalwatch__LCDdisplay_wrapper">
                        <div className="digitalwatch__LCDdisplay-top-part_wrapper">
                            <div className="digitalwatch__LCDdisplay-top-part-format12-24_wrapper">
                                <span className="digitalwatch__LCDdisplay-format-number">
                                    { currentTime.timeFormat }
                                </span>
                                <span className="digitalwatch__LCDdisplay-format-letter">
                                    { currentTime.letter }</span>
                            </div>
                            <div className="digitalwatch__LCDdisplay-top-part-currentdate_wrapper">
                                <span className="digitalwatch__LCDdisplay-top-part_month">
                                    { currentTime.month }</span>
                                <span className="digitalwatch__LCDdisplay-top-part_date">
                                    { currentTime.date }</span>
                                <span className="digitalwatch__LCDdisplay-top-part_dayofweek">
                                    { currentTime.dayOfWeek }
                                </span>
                        </div> 
                        </div>
                        <div className="digitalwatch__LCDdisplay-middle-part_wrapper">
                            <span className="digitalwatch__LCDdisplay-middle-part_prefix">
                                { currentTime.prefix_AM_PM }
                            </span>
                            <span className="digitalwatch__LCDdisplay-middle-part_hours_decades">
                                { currentTime.hoursDecades }
                            </span>
                            <span className="digitalwatch__LCDdisplay-middle-part_hours_units">
                                { currentTime.hoursUnits }
                            </span>
                            <span className="digitalwatch__LCDdisplay-middle-part_colon">:</span>
                            <span className="digitalwatch__LCDdisplay-middle-part_minutes_decades">
                                { currentTime.minutesDecades }
                            </span>
                            <span className="digitalwatch__LCDdisplay-middle-part_minutes_units">
                                { currentTime.minutesUnits }
                            </span>
                            <span className="digitalwatch__LCDdisplay-middle-part_seconds_decades">
                                { currentTime.secondsDecades }
                            </span>
                            <span className="digitalwatch__LCDdisplay-middle-part_seconds_units">
                                { currentTime.secondsUnits }
                            </span>
                        </div>
                        <div className="digitalwatch__LCDdisplay-bottom-part_wrapper">
                            <span className="digitalwatch__LCDdisplay-bottom-part_UTC">UTC</span>
                            <span className="digitalwatch__LCDdisplay-bottom-part_prefixUTC">
                                { currentTime.signUTC }
                            </span>
                            <span className="digitalwatch__LCDdisplay-bottom-part_valueUTC">
                                { currentTime.valueUTC }
                            </span>
                            <span className="digitalwatch__LCDdisplay-bottom-part_colon">:</span>
                            <span className="digitalwatch__LCDdisplay-bottom-part_nullnull">00</span>
                            <span className="digitalwatch__LCDdisplay-bottom-part_city">
                                { currentTime.city }
                            </span>
                        </div>
                    </div>;

    let dropDownListOfCities = < DropdownListOfCities
                                    onChangeCity={ changeCity }
                                    currentCity = { currentCity }
                                    appearance={ appearanceListOfCities }
                                    onSetAppearance={ setAppearanceListOfCities }
                                    onHideList={ hideList }
                                    onUnhideList={ unhideList }
                                />

    const buttonFormat = {
        title: dictIonary[ "title_button-format" ],
        position: "left-top",
        handler: changeTimeFormat
    }

    const buttonCity = {
        title: dictIonary[ "title_button-city" ],
        position: "left-bottom",
        handler: showOrHideListOfCities
    }

    const buttonClose = {
        title: dictIonary[ "title_button-close" ],
        position: "right-top",
        handler: closeItem
    }

    return  <div className="toolbar__wrapper-for-item">
                < ItemCase
                    buttons = { [ buttonFormat, buttonCity, buttonClose ] }
                    lcdDisplay = { lcdDisplay }
                    title = { dictIonary[ "main-title" ] }
                    dropDownListOfCities = { dropDownListOfCities }
                />
            </div>
}

export default Digitalwatch;