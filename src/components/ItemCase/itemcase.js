import React from "react";
import ControlButton from "./ControlButton";
import "./styles.css";

function ItemCase( {
            buttons,
            lcdDisplay,
            title,
            dropDownListOfCities
        } ) {

    function createButton( button, index ) {
        return <ControlButton
                    key={`button_${ index }` }
                    title={ button.title }
                    position = { button.position }
                    handler = { button.handler }
                />
    }    
    
    let controlButtons = buttons.map( ( button, index )  => {
        return createButton( button, index );
    } );      

    return <div className="item-case">
                <div className="case">
                    { controlButtons }
                    <div className="decorative-element">
                        <div className="main-area">
                            { dropDownListOfCities }
                            <div className="main-area-upper-part">
                                <div className="main-title">
                                    { title }
                                </div>
                            </div>
                            <div className="LCDdisplay_wrapper">
                                { lcdDisplay }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default ItemCase ;