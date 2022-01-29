import React, { useState } from "react";
import dictionary from "./dictionary";
import rusflag from "./images/rusflag.png";
import engflag from "./images/engflag.png";
import "./styles/main.css"

function Toolbar( {
            language,
            onChangeLanguage,
            onAddDigitalwatch,
            onAddStopwatch,
            onAddTimer,
            onCloseAll,
            createdItems,
        } ){

    const dictIonary = dictionary[ language ];
    
    const [ languageMenuAppearance, setLanguageMenuAppearance  ] = useState( "none" )

    let buttoCloseStyle = {};

    if ( createdItems.length !== 0 ){
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

    function onShowLanguageMenu(){
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

    return <div className="toolbar">
                <div className='toolbar_wrapper'>
                    <div className="toolbar__wrapper-for-secondary-buttons-left-side">
                        <button type="button" onClick={ onShowLanguageMenu } className="toolbar__button-select-language">
                                
                            <div className="toolbar__language-flag" style={ styleFlag }/>

                            <div className="toolbar__language-menu" style={ styleLangugeMenu }>
                                <div onClick={ () => onChangeLanguage( "eng" ) } className="toolbar__language-menu-row-for-english">
                                    <span className="toolbar__language-menu-english_word">
                                        { dictIonary[ "language menu" ].eng }
                                    </span>
                                    <span className="toolbar__language-menu-english_symbol">
                                        { dotSymbolENG }
                                    </span>
                                </div>
                                
                                <div onClick={ () => onChangeLanguage( "rus" ) } className="toolbar__language-menu-row-for-russian">
                                    <span className="toolbar__language-menu-russian_word">
                                        { dictIonary[ "language menu" ].rus }
                                    </span>
                                    <span className="toolbar__language-menu-russian_symbol">
                                        { dotSymbolRUS }
                                    </span>
                                </div>
                            </div>

                        </button>
                    </div>

                    <div className="toolbar__wrapper-for-all-add-buttons">
                        <div className='toolbar__button-add-digitalwatch_wrapper'>
                            <button type="button" onClick={ onAddDigitalwatch } className="toolbar__button-add-digitalwatch">
                                <div className="toolbar__button-text toolbar__button-add-digitalwatch-text">
                                    { dictIonary[ "button add digitalwatch" ] }
                                </div>                        
                            </button>
                        </div>
                        <div className="toolbar__button-add-stopwatch_wrapper">
                            <button type="button" onClick={ onAddStopwatch }  className="toolbar__button-add-stopwatch">
                                <div className="toolbar__button-text toolbar__button-add-stopwatch-text">
                                    { dictIonary[ "button add stopwatch" ] }
                                </div>
                            </button>
                        </div>
                        <div className="toolbar__button-add-timer_wrapper">
                            <button type="button" onClick={ onAddTimer } className="toolbar__button-add-timer">
                                <div className="toolbar__button-text toolbar__button-add-timer-text">
                                    { dictIonary[ "button add timer" ] }
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="toolbar__wrapper-for-secondary-buttons-right-side">
                        <button type="button" onClick={ onCloseAll } style={ buttoCloseStyle } className="toolbar__button-close-all-items">
                            <p className="toolbar__symbol-for-button-close-all-items"/>
                        </button>
                    </div>
                </div>
                <div className="toolbar__app-itembar_wrapper">
                    <div className="toolbar__section-for-items">
                        { createdItems }
                    </div>
                </div>
            </div>

}

export default Toolbar;       
