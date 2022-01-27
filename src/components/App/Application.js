import React, { useState } from "react";
import dictionary from "./dictionary";
import rusflag from "./images/rusflag.png";
import engflag from "./images/engflag.png";
import "./styles/main.css"

function Application( {
            language,
            setLanguage,
            addDigitalwatch,
            addStopwatch,
            addTimer,
            closeAll,
            createdItems,
            buttonCloseAppearance
        } ){
    
    const [ languageMenuAppearance, setLanguageMenuAppearance  ] = useState( "none" )

    let buttoCloseStyle = {};

    if ( buttonCloseAppearance ){
        buttoCloseStyle.display = "inline-block";
    } else {
        buttoCloseStyle.display = "none";
    }

    let styleFlag = {};

    if ( language === "eng" ){
        styleFlag.backgroundImage = `url( ${ engflag } )`;
    } else if ( language === "rus" ){
        styleFlag.backgroundImage = `url( ${ rusflag } )`;
    }

    function showLanguageMenu(){
        if ( languageMenuAppearance === "none" ){
            setLanguageMenuAppearance( () => "block" );
        } else if ( languageMenuAppearance === "block" ){
            setLanguageMenuAppearance( () => "none" );
        }
    }

    let styleLangugeMenu = {
        display: languageMenuAppearance,
    };

    let dotSymbolENG;
    let dotSymbolRUS;

    if ( language === "rus" ){
        dotSymbolENG = "";
        dotSymbolRUS = "*"
    } else if ( language === "eng" ){
        dotSymbolENG = "*";
        dotSymbolRUS = ""
    }

    function setEng(){
        setLanguage( () => "eng" );
    }

    function setRus(){
        setLanguage( () => "rus" );
    }

    return <div className="Application">
                <div className='application__toolbar_wrapper'>
                    <div className="application__wrapper-for-secondary-buttons-left-side">
                        <button type="button" onClick={ showLanguageMenu } className="application__button-select-language">
                                
                            <div className="application__language-flag" style={ styleFlag }/>

                            <div className="application__language-menu" style={ styleLangugeMenu }>
                                <div onClick={ setEng } className="application__language-menu-row-for-english">
                                    <span className="application__language-menu-english_word">
                                        { dictionary[ language ][ "language menu" ].eng }
                                    </span>
                                    <span className="application__language-menu-english_symbol">
                                        { dotSymbolENG }
                                    </span>
                                </div>
                                
                                <div onClick={ setRus } className="application__language-menu-row-for-russian">
                                    <span className="application__language-menu-russian_word">
                                        { dictionary[ language ][ "language menu" ].rus }
                                    </span>
                                    <span className="application__language-menu-russian_symbol">
                                        { dotSymbolRUS }
                                    </span>
                                </div>
                            </div>

                        </button>
                    </div>

                    <div className="application__wrapper-for-all-add-buttons">
                        <div className='application__button-add-digitalwatch_wrapper'>
                            <button type="button" onClick={ addDigitalwatch } className="application__button-add-digitalwatch">
                                <div className="application__button-text application__button-add-digitalwatch-text">
                                    { dictionary[ language ][ "button add digitalwatch" ] }
                                </div>                        
                            </button>
                        </div>
                        <div className="application__button-add-stopwatch_wrapper">
                            <button type="button" onClick={ addStopwatch }  className="application__button-add-stopwatch">
                                <div className="application__button-text application__button-add-stopwatch-text">
                                    { dictionary[ language ][ "button add stopwatch" ] }
                                </div>
                            </button>
                        </div>
                        <div className="application__button-add-timer_wrapper">
                            <button type="button" onClick={ addTimer } className="application__button-add-timer">
                                <div className="application__button-text application__button-add-timer-text">
                                    { dictionary[ language ][ "button add timer" ] }
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="application__wrapper-for-secondary-buttons-right-side">
                        <button type="button" onClick={ closeAll } style={ buttoCloseStyle } className="application__button-close-all-items">
                            <p className="application__symbol-for-button-close-all-items"/>
                        </button>
                    </div>
                </div>
                <div className="application__app-itembar_wrapper">
                    <div className="application__section-for-items">
                        { createdItems }
                    </div>
                </div>
            </div>

}

export default Application;       
