import { useEffect } from "react";

export default function InteractiveClock ({date,time,timeCLass,cityLabel}) {
  useEffect(()=>{
  let c = document.getElementById('canv');
  let $ = c.getContext('2d',{alpha:false}); 
  let ang = 0;
  let secondsColor = 'hsla(180, 85%, 5%, .7)',
  minutesColor = 'hsla(180, 95%, 15%, 1)',
  hoursColor = 'hsla(180, 75%, 25%, 1)';
  let currentHr,currentMin,currentSec,currentMillisec;

  updateTime();

  function updateTime(){
  var g = $.createRadialGradient(250,250,.5,250,250,250);  
  g.addColorStop(0, 'hsla(180, 55%, 8%, 1)');  
  g.addColorStop(1, 'hsla(180, 95%, 15%, 1)');  
  $.fillStyle = g;
  $.fillRect( 0, 0, c.width, c.height );
  currentSec = time.seconds;
  currentMillisec = time.milliSeconds;
  currentMin = time.minutes;
  currentHr = time.hours;

  drawSeconds();
  drawMinutes();
  drawHours();
  var realTime = currentHr + ':' + numPad0( currentMin ) + ':' + numPad0( currentSec );
  

  
  var textPosX = 150 - ( $.measureText(realTime).width / 2 );
  $.shadowColor = 'hsla(180, 100%, 5%, 1)';
  $.shadowBlur = 100;
  $.shadowOffsetX = 12;
  $.shadowOffsetY = 0;
  $.fillStyle =  'hsla(255,255%,255%,.7)';
  $.font = "bold 1.6em 'Noto Serif', serif";
  $.fillText( realTime, textPosX, c.height/2+25);

}

function drawSeconds(){  
  ang = 0.006 * ( ( currentSec * 1000 ) + currentMillisec );
  $.fillStyle = secondsColor;
  $.beginPath();
  $.moveTo( 100, 100 ); 
  $.lineTo( 200, 200 );
  $.arc( 150, 150, 150, calcDeg( 0 ),calcDeg(ang), false );
  $.lineTo( 200, 200 );
  $.shadowColor = 'hsla(180, 45%, 5%, .4)';
  $.shadowBlur =15;
  $.shadowOffsetX = 15;
  $.shadowOffsetY = 15;
  $.fill();
} 

function drawMinutes(){  
  ang = 0.0001 * ( ( currentMin * 60 * 1000 ) + ( currentSec * 1000 ) + currentMillisec );
  $.fillStyle = minutesColor;
  $.beginPath();
  $.moveTo( 150, 150 ); 
  $.lineTo( 150, 100 );
  $.arc( 150, 150, 100, calcDeg( 0 ), calcDeg( ang ), false );
  $.lineTo( 150, 150 );
  $.shadowColor = 'hsla(180, 25%, 5%, .4)';
  $.shadowBlur =15;
  $.shadowOffsetX = 15;
  $.shadowOffsetY = 15;
  $.fill();
}  

function drawHours(){  
  ang = 0.000008333 * ( ( currentHr * 60 * 60 * 1000 ) + ( currentMin * 60 * 1000 ) + ( currentSec * 1000 ) + currentMillisec );
  if( ang > 360 ){
    ang -= 360;
  }
  $.fillStyle = hoursColor;
  $.beginPath();
  $.moveTo( 150, 150 ); 
  $.lineTo( 150, 150 );
  $.arc( 150, 150, 50, calcDeg( 0 ), calcDeg( ang ), false );
  $.lineTo( 150, 150 );
  $.shadowColor = 'hsla(180, 45%, 5%, .4)';
  $.shadowBlur =15;
  $.shadowOffsetX = 15;
  $.shadowOffsetY = 15;
  $.fill();
}  


function calcDeg( deg ){
  return (Math.PI/180) * (deg - 90);
}

function numPad0( str ){
  var cStr = str.toString();
  if( cStr.length < 2 ){
     str = 0 + cStr;
  }
  return str;
}
window.addEventListener('resize', function(){
  c.width = 300;
  c.height = 300;
});
    });
    return (
      <div className='interactiveClock'>
        <canvas id="canv" width={300} height={300} />
            <div className="date">{date}</div>
            <div className="timeClass">{timeCLass}</div>
            <div className="location">{cityLabel}</div>
      </div>
    );
}