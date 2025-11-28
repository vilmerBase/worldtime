import './App.css';

import SelectFields from './components/select-fields';
import Clock from './components/clock';
import SetColor from './components/setColor';
import Footer from './components/footer';
import { useState } from 'react';


function App() {
  const [selected,setSelected] = useState('local');
  const [cityLabel,setCityLabel] = useState('Местное');
  const [clockFace,setClockFace] = useState('digital');

  function selectedChangeTime(e) {
    let index = e.target.selectedIndex;
    setSelected(e.target.value);
    setCityLabel(e.target[index].text);
};
  function selectedChangeClockFace(e) {
    setClockFace(e.target.value);
};
  function setColor (e) {
    let body = document.querySelector('body'),
    color = e.target.dataset.color;
    body.style.background = color;
    body.style.transition = 'background 1s ease-in 0.1s';
};
  return (
    <div className="App">
      <h4>Мировое время</h4>
      <SelectFields selectedVal={selected} onChangeTime={selectedChangeTime} onChangeClockFace={selectedChangeClockFace}/>
      <Clock selected ={selected} cityLabel={cityLabel} clockFace={clockFace}  />
      <SetColor onClick={setColor}/>
    <Footer/>
    </div>
  );
}


export default App;


