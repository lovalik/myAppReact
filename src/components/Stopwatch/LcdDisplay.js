import React from "react";
import "./styles.css";

function LcdDisplay( { time } ){

    return <div className="stopwatch__LCDdisplay_wrapper">
                <span className="stopwatch__hours_decades">{ time.hoursDecade }</span>
                <span className="stopwatch__hours_units">{ time.hoursDecade }</span>
                <span className="stopwatch__colon">:</span>
                <span className="stopwatch__minutes_decades">{ time.minutesDecade }</span>
                <span className="stopwatch__minutes_units">{ time.minutesUnits }</span>
                <span className="stopwatch__colon">:</span>
                <span className="stopwatch__seconds_decades">{ time.secondsDecade }</span>
                <span className="stopwatch__seconds_units">{ time.secondsUnits }</span>
                <span className="stopwatch__milliseconds_block">
                    <span className="stopwatch__milliseconds_title">мс</span>
                    <span className="stopwatch__milliseconds_decades">{ time.millsecondsDecade }</span>
                    <span className="stopwatch__milliseconds_units">{ time.millsecondsUnits }</span>
                </span>
            </div>
}

export default LcdDisplay;