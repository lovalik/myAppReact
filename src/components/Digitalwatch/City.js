import React, { useState, useContext } from "react";
import dictionary from "./dictionary";
import languageContext from "../App/languageContext";

function City( {
            city,
            signUTC,
            valueUTC,
            onChangeCity,
            currentCity,
            onHideList
        } ){

    const[ rowBackgroundColor, setRowBackgroundColor ] =  useState( "" );
    const[ rowTextColor, setRowTextColor ] =  useState( "" );

    const [ language, setLanguage ] = useContext( languageContext );
    let rowStyle = {};
    
    if ( currentCity === city) {
        rowStyle.color = "white";
        rowStyle.textShadow = "3px 3px black"
    } else {
        rowStyle.color = rowTextColor;
        rowStyle.backgroundColor = rowBackgroundColor;
    }

    function changeCity(){
        onChangeCity( { city, signUTC, valueUTC } );
        onHideList();
    }
    function highlightRow(){
        setRowBackgroundColor( "black" );
        setRowTextColor( "white" )
    }

    function unHighlightRow(){
        setRowBackgroundColor( "" );
        setRowTextColor( "" )
    }

    return <tr onClick={ changeCity } onMouseOver={ highlightRow } onMouseOut={unHighlightRow} style={ rowStyle }>
                <td>UTC</td>
                <td className="digitalwatch__signUTC">{ signUTC }</td>
                <td className="digitalwatch__valueUTC">{ valueUTC }</td>
                <td className="digitalwatch__null-null">:00</td>
                <td className="digitalwatch__city">{ dictionary[ language ][ `time zone UTC ${ signUTC }${ valueUTC }:00` ][ city ] }</td>
            </tr>
}

export default City;