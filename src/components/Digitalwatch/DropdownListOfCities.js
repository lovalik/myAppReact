import React from "react";
import City from "./City"

function DropdownListOfCities( {
            language,
            displaying,
            setDisplaying,
            selectCity,
            currentCity
        } ){

    let listStyle = {
        display: null
    };

    if ( displaying ){
        listStyle.display = "block";
    } else {
        listStyle.display = "none";
    }

    function hideList() {
        setDisplaying( () => false )
    }

    function unHideList() {
        setDisplaying( () => true )
    }

    return <div onMouseOver={ unHideList } onMouseOut={ hideList } style={ listStyle } className="digitalwatch__dropdown-list_wrapper">
                <div className="digitalwatch__list-cities-for-time-zones_wrapper">
                    <div className="digitalwatch__list-cities-for-time-zones_overflow">
                        <table className="digitalwatch__list-cities-for-time-zones">
                            <tbody>
                                <City hideList = { hideList }
                                    selectCity = { selectCity }
                                    currentCity = { currentCity }
                                    language = { language }
                                    city = { "Hawaii" }
                                    signUTC ={ "-" }
                                    valueUTC = { 10 }
                                />
                                < City hideList = { hideList }
                                    selectCity = { selectCity }
                                    currentCity = { currentCity }
                                    language = { language }
                                    city={ "Anchorage" }
                                    signUTC = { "-" }
                                    valueUTC = { 9 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Los-Angeles" }
                                    signUTC={ "-" }
                                    valueUTC={ 8 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Sn Francisco" }
                                    signUTC={ "-" }
                                    valueUTC={ 8 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Vancouver" }
                                    signUTC={ "-" }
                                    valueUTC={ 8 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Calgary" }
                                    signUTC={ "-" }
                                    valueUTC={ 7 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Chicago" }
                                    signUTC={ "-" }
                                    valueUTC={ 6 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Mexico City" }
                                    signUTC={ "-" }
                                    valueUTC={ 6 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Havana" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Montreal" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "New York" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Washington" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Caracas" }
                                    signUTC={ "-" }
                                    valueUTC={ 4 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Buenos-Aires" }
                                    signUTC={ "-" }
                                    valueUTC={ 3 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Rio-De-Janeiro" }
                                    signUTC={ "-" }
                                    valueUTC={ 3 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Santiago" }
                                    signUTC={ "-" }
                                    valueUTC={ 3 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Dakar" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City  hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Dublin" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Lisbon" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "London" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Berlin" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City  hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Brussels" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Madrid" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Oslo" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Paris" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Rome" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Warsaw" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Athens" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Jerusalem" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Kyiv" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Riga" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Sofia" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Tallinn" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Vilnius" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Ankara" }
                                    signUTC={ "+" }
                                    valueUTC={ 3 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Minsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 3 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Moscow" }
                                    signUTC={ "+" }
                                    valueUTC={ 3 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Baku" }
                                    signUTC={ "+" }
                                    valueUTC={ 4 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Yerevan" }
                                    signUTC={ "+" }
                                    valueUTC={ 4 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Tbilisi" }
                                    signUTC={ "+" }
                                    valueUTC={ 4 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Dushanbe" }
                                    signUTC={ "+" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Tashkent" }
                                    signUTC={ "+" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Novosibirsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 5 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Bishkek" }
                                    signUTC={ "+" }
                                    valueUTC={ 6 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Almaty" }
                                    signUTC={ "+" }
                                    valueUTC={ 6 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Omsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 6 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Hanoi" }
                                    signUTC={ "+" }
                                    valueUTC={ 7 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Krasnoyarsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 7 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language } 
                                    city={ "Beijing" }
                                    signUTC={ "+" }
                                    valueUTC={ 8 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Singapore" }
                                    signUTC={ "+" }
                                    valueUTC={ 8 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Taiwan" }
                                    signUTC={ "+" }
                                    valueUTC={ 8 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Seoul" }
                                    signUTC={ "+" }
                                    valueUTC={ 9 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Tokyo" }
                                    signUTC={ "+" }
                                    valueUTC={ 9 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Vladivostok" }
                                    signUTC={ "+" }
                                    valueUTC={ 10 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Sydney" }
                                    signUTC={ "+" }
                                    valueUTC={ 11 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Kingston" }
                                    signUTC={ "+" }
                                    valueUTC={ 12 }
                                />
                                < City hideList={ hideList }
                                    selectCity={ selectCity }
                                    currentCity = { currentCity }
                                    language={ language }
                                    city={ "Auckland" }
                                    signUTC={ "+" }
                                    valueUTC={ 13 }
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
}

export default DropdownListOfCities;