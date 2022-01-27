import React, { useState, useEffect } from 'react';

function ControlButton( { title, position, handler } ) {

    const [ classNameButtonPart2, setClassNameButtonPart2 ] = useState( `control-button_part2_${ position }` );

    useEffect( () => {

        let timeoutID = setTimeout( () => {
            setClassNameButtonPart2( ( ) => `control-button_part2_${ position }` );
        }, 300)

        return () => clearTimeout( timeoutID );

    }, [ classNameButtonPart2 ] );

    const classNameControlButton = `block-control-button_${ position }`;
    const classNameForTitle = `title-for-control-button_${ position }`;
    const classNameForButton = `control-button_${ position }`;
    const classNameButtonPart1 = `control-button_part1_${ position }`;
    const classNameButtonPart3 = `control-button_part3_${ position }`;

    let styleControlButtonPart2 = {};

    if ( title === "close" || title === "закрыть" ) {
        styleControlButtonPart2.backgroundImage = "radial-gradient(at 35% 25%, rgb(248, 166, 166),  rgb(255, 67, 67), rgb(226, 0, 0),  rgb(226, 0, 0), rgb(226, 0, 0) )"
    }

    let styleBlock = {};
    if ( title === "absent" ) {
        styleBlock.display = "none";
    }
    
    function eventHandler(){
        if( classNameButtonPart2 === `control-button_part2_${ position }` ){
            setClassNameButtonPart2( () => `control-button_part2_${ position } animation-for-control-buttons` );
            handler()
        } else {
            return
        }
    }

    return <div className={ classNameControlButton } style={ styleBlock }>
                <div className={ classNameForTitle }>
                    <div className="title-for-control-button_text">
                        { title }
                    </div>
                </div>
                <div className={ classNameForButton }>
                    <div className={ classNameButtonPart1 }/>
                        <button type="button" onClick={ eventHandler } className={ classNameButtonPart2 }/>
                    <div className= {  classNameButtonPart3 } style={ styleControlButtonPart2 }/>
                </div>
            </div>

}

export default ControlButton;
