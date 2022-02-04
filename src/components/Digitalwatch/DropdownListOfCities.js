import React from "react";
import City from "./City";

function DropdownListOfCities( {
            appearance,
            onChangeCity,
            currentCity,
            onHideList,
            onUnhideList
        } ){

    let listStyle={
        display: null
    };

    if ( appearance ){
        listStyle.display="block";
    } else {
        listStyle.display="none";
    }

    return <div onMouseOver={ onUnhideList } onMouseOut={ onHideList } style={ listStyle } className="digitalwatch__dropdown-list_wrapper">
                <div className="digitalwatch__list-cities-for-time-zones_wrapper">
                    <div className="digitalwatch__list-cities-for-time-zones_overflow">
                        <table className="digitalwatch__list-cities-for-time-zones">
                            <tbody>
                                <City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Hawaii" }
                                    signUTC ={ "-" }
                                    valueUTC={ 10 }
                                />
                                < City onHideList= { onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Anchorage" }
                                    signUTC={ "-" }
                                    valueUTC={ 9 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Los-Angeles" }
                                    signUTC={ "-" }
                                    valueUTC={ 8 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Sn Francisco" }
                                    signUTC={ "-" }
                                    valueUTC={ 8 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Vancouver" }
                                    signUTC={ "-" }
                                    valueUTC={ 8 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Calgary" }
                                    signUTC={ "-" }
                                    valueUTC={ 7 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Chicago" }
                                    signUTC={ "-" }
                                    valueUTC={ 6 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Mexico City" }
                                    signUTC={ "-" }
                                    valueUTC={ 6 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Havana" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Montreal" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "New York" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Washington" }
                                    signUTC={ "-" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Caracas" }
                                    signUTC={ "-" }
                                    valueUTC={ 4 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Buenos-Aires" }
                                    signUTC={ "-" }
                                    valueUTC={ 3 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Rio-De-Janeiro" }
                                    signUTC={ "-" }
                                    valueUTC={ 3 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Santiago" }
                                    signUTC={ "-" }
                                    valueUTC={ 3 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Dakar" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Dublin" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Lisbon" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "London" }
                                    signUTC={ "+" }
                                    valueUTC={ 0 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Berlin" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Brussels" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Madrid" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Oslo" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Paris" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Rome" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Warsaw" }
                                    signUTC={ "+" }
                                    valueUTC={ 1 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Athens" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Jerusalem" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Kyiv" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Riga" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Sofia" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Tallinn" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Vilnius" }
                                    signUTC={ "+" }
                                    valueUTC={ 2 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Ankara" }
                                    signUTC={ "+" }
                                    valueUTC={ 3 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Minsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 3 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Moscow" }
                                    signUTC={ "+" }
                                    valueUTC={ 3 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Baku" }
                                    signUTC={ "+" }
                                    valueUTC={ 4 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Yerevan" }
                                    signUTC={ "+" }
                                    valueUTC={ 4 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Tbilisi" }
                                    signUTC={ "+" }
                                    valueUTC={ 4 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Dushanbe" }
                                    signUTC={ "+" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Tashkent" }
                                    signUTC={ "+" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Novosibirsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 5 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Bishkek" }
                                    signUTC={ "+" }
                                    valueUTC={ 6 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Almaty" }
                                    signUTC={ "+" }
                                    valueUTC={ 6 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Omsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 6 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Hanoi" }
                                    signUTC={ "+" }
                                    valueUTC={ 7 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Krasnoyarsk" }
                                    signUTC={ "+" }
                                    valueUTC={ 7 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Beijing" }
                                    signUTC={ "+" }
                                    valueUTC={ 8 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Singapore" }
                                    signUTC={ "+" }
                                    valueUTC={ 8 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Taiwan" }
                                    signUTC={ "+" }
                                    valueUTC={ 8 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Seoul" }
                                    signUTC={ "+" }
                                    valueUTC={ 9 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Tokyo" }
                                    signUTC={ "+" }
                                    valueUTC={ 9 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Vladivostok" }
                                    signUTC={ "+" }
                                    valueUTC={ 10 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Sydney" }
                                    signUTC={ "+" }
                                    valueUTC={ 11 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
                                    city={ "Kingston" }
                                    signUTC={ "+" }
                                    valueUTC={ 12 }
                                />
                                < City onHideList={ onHideList }
                                    onChangeCity={ onChangeCity }
                                    currentCity={ currentCity }
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