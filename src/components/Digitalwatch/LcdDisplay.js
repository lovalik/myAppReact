import React from "react";

function LcdDisplay( { time } ){

    return <div className="digitalwatch__LCDdisplay_wrapper">
                <div className="digitalwatch__LCDdisplay-top-part_wrapper">
                    <div className="digitalwatch__LCDdisplay-top-part-format12-24_wrapper">
                        <span className="digitalwatch__LCDdisplay-format-number">
                            { time.timeFormat }
                        </span>
                        <span className="digitalwatch__LCDdisplay-format-letter">
                            { time.letter }</span>
                    </div>
                    <div className="digitalwatch__LCDdisplay-top-part-currentdate_wrapper">
                        <span className="digitalwatch__LCDdisplay-top-part_month">
                            { time.month }</span>
                        <span className="digitalwatch__LCDdisplay-top-part_date">
                            { time.date }</span>
                        <span className="digitalwatch__LCDdisplay-top-part_dayofweek">
                            { time.dayOfWeek }
                            </span>
                </div> 
                </div>
                <div className="digitalwatch__LCDdisplay-middle-part_wrapper">
                    <span className="digitalwatch__LCDdisplay-middle-part_prefix">
                        { time.prefix_AM_PM }
                    </span>
                    <span className="digitalwatch__LCDdisplay-middle-part_hours_decades">
                        { time.hoursDecades }
                    </span>
                    <span className="digitalwatch__LCDdisplay-middle-part_hours_units">
                        { time.hoursUnits }
                    </span>
                    <span className="digitalwatch__LCDdisplay-middle-part_colon">:</span>
                    <span className="digitalwatch__LCDdisplay-middle-part_minutes_decades">
                        { time.minutesDecades }
                    </span>
                    <span className="digitalwatch__LCDdisplay-middle-part_minutes_units">
                        { time.minutesUnits }
                    </span>
                    <span className="digitalwatch__LCDdisplay-middle-part_seconds_decades">
                        { time.secondsDecades }
                    </span>
                    <span className="digitalwatch__LCDdisplay-middle-part_seconds_units">
                        { time.secondsUnits }
                    </span>
                </div>
                <div className="digitalwatch__LCDdisplay-bottom-part_wrapper">
                    <span className="digitalwatch__LCDdisplay-bottom-part_UTC">UTC</span>
                    <span className="digitalwatch__LCDdisplay-bottom-part_prefixUTC">
                        { time.signUTC }
                    </span>
                    <span className="digitalwatch__LCDdisplay-bottom-part_valueUTC">
                        { time.valueUTC }
                    </span>
                    <span className="digitalwatch__LCDdisplay-bottom-part_colon">:</span>
                    <span className="digitalwatch__LCDdisplay-bottom-part_nullnull">00</span>
                    <span className="digitalwatch__LCDdisplay-bottom-part_city">
                        { time.city }
                    </span>
                </div>
            </div>
}

export default LcdDisplay;