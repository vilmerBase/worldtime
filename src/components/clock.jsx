import { useEffect, useState } from 'react';
import {localTime} from './timer.js';
import DigitalClock from './clocks/digital.jsx';
import ArrowClock from './clocks/arrow.jsx';
import InteractiveClock from './clocks/interactive.jsx';

export default function  Clock ({children,selected,cityLabel,clockFace}) {
  const [time,setTime] = useState(localTime(selected));
    useEffect(()=>{
        if (time.timeZone!=selected) {
           upTime();
        }
        const timeUp = setTimeout(upTime,1000);
        return () => clearTimeout(timeUp);
    })
    function upTime() {
        setTime(localTime(selected));
    }

    return (
        <div className="clock">
            <div className="clock-container">       
           {clockFace === 'digital' ? <DigitalClock date={time.curDate} time={time} cityLabel={cityLabel} timeCLass={time.timeCLass}/> : clockFace === 'arrow' ? <ArrowClock date={time.curDate} time={time} cityLabel={cityLabel}  timeCLass={time.timeCLass}/> : clockFace === 'interactive' ? <InteractiveClock date={time.curDate} time={time} cityLabel={cityLabel}  timeCLass={time.timeCLass}/> :'false'} 
            </div>
        </div>
    );

}