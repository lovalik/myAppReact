import React, { useState } from "react";
import dictionary from "./dictionary";

function City( {
            language,
            city,
            signUTC,
            valueUTC,
            selectCity,
            currentCity,
            hideList
        } ){

    const[ rowBackgroundColor, setRowBackgroundColor ] =  useState( "" );
    const[ rowTextColor, setRowTextColor ] =  useState( "" );

    let rowStyle = {};
    
    if ( currentCity === city) {
        rowStyle.color = "white";
        rowStyle.textShadow = "3px 3px black"
    } else {
        rowStyle.color = rowTextColor;
        rowStyle.backgroundColor = rowBackgroundColor;
    }

    function changeCity(){
        selectCity( { city, signUTC, valueUTC } );
        hideList();
    }
    function highlightRow(){
        setRowBackgroundColor( () => "black" );
        setRowTextColor( () => "white" )
    }

    function unHighlightRow(){
        setRowBackgroundColor( () => "" );
        setRowTextColor( () => "" )
    }

    return <tr onClick={ changeCity } onMouseOver={ highlightRow } onMouseOut={unHighlightRow} style={ rowStyle }>
                <td>UTC</td>
                <td className="digitalwatch__signUTC">{ signUTC }</td>
                <td className="digitalwatch__valueUTC">{ valueUTC }</td>
                <td className="digitalwatch__null-null">:00</td>
                <td className="digitalwatch__city">{ dictionary[ language ][ "time zone UTC " + `${signUTC}${valueUTC}` + ":00" ][ city ] }</td>
            </tr>
}

export default City;