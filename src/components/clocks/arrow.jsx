import { useEffect } from "react";

export default function ArrowClock ({date,time,timeCLass,cityLabel}) {
    useEffect(()=>{
    let fives = document.querySelector(".arrowClockFace .clock .fives") ? true : false;
    if (!fives) {
        createSecondLines();
        setClock(time.hours,time.minutes,time.seconds);
    } else {
        setClock(time.hours,time.minutes,time.seconds);
    }
    })
    return (
    <div className="arrowClockFace">
     <section className="border-clock" />
        <section className="clock">
            <ul>
            <li>
                <i>12</i>
            </li>
            <li>
                <i>1</i>
            </li>
            <li>
                <i>2</i>
            </li>
            <li>
                <i>3</i>
            </li>
            <li>
                <i>4</i>
            </li>
            <li>
                <i>5</i>
            </li>
            <li>
                <i>6</i>
            </li>
            <li>
                <i>7</i>
            </li>
            <li>
                <i>8</i>
            </li>
            <li>
                <i>9</i>
            </li>
            <li>
                <i>10</i>
            </li>
            <li>
                <i>11</i>
            </li>
            </ul>
            <output className="date" />
            <div className="minutes" />
            <div className="hours" />
            <div className="seconds" />
            <div className="cercle" />
            <div className="date"><p>{date}</p></div>
            <div className="timeClass"><p>{timeCLass}</p></div>
            <div className="location"><p>{cityLabel}</p></div>
        </section>
    </div>
    );
};

function createSecondLines(){
  var clock = document.querySelector(".arrowClockFace .clock");
  var rotate = 0;
  var byFive = function(n) {
    return (n / 5 === parseInt(n / 5, 10)) ? true : false;
  };
  
  for (let i=0; i < 30; i++) {
    var span = document.createElement("span");
   
    if (byFive(i)) {
      span.className = "fives";
    }
    
    span.style.transform = "translate(-50%,-50%) rotate("+ rotate + "deg)";
    clock.appendChild(span);
    rotate += 6;
  }
};

function setClock(h,m,s) {

  var clock = {
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds')
  };
  var deg = {
    hours: 30 * h + .5 * m,
    minutes: 6 * m + .1 * s,
    seconds: 6 * s
  }
  
  clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
  clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
  clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
  
  var runClock = function(){
    deg.hours += 360/43200;
    deg.minutes += 360/3600;
    deg.seconds += 360/60;
    
    clock.hours.style.transform = 'rotate(' + deg.hours + 'deg)';
    clock.minutes.style.transform = 'rotate(' + deg.minutes + 'deg)';
    clock.seconds.style.transform = 'rotate(' + deg.seconds + 'deg)';
  };
  
  //setInterval(runClock,1000);
  
  
};