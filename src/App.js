import React from 'react';
import Header from './components/Header';
import Event from './components/Event';
import './style.css';
import newtnbug from './img/newtnbug.jpg';
import aqua from './img/aqua.jpg';
import arbo from './img/arbo.jpg';
import chinatown from './img/chinatown.jpg';
import mtrainer from './img/mtrainer.jpg';
import psound from './img/psound.jpg';
import science from './img/science.jpg';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          headerTitle="Newt and Bug's 2018 Seattle Trip!"
          picture={newtnbug}
        />
        <Event
          eventTitle="Puget Sound"
          eventHours="Hours:  24/7/365"
          eventDistance="Location Distance"
          eventImage={psound}
        />
        <Event
          eventTitle="Seattle Aquarium"
          eventHours="Hours:  930a - 5p"
          eventDistance="Location Distance"
          eventImage={aqua}
        />
        <Event
          eventTitle="Washington Park Arboretum"
          eventHours="Hours: 9a - 5p"
          eventDistance="Location Distance"
          eventImage={arbo}
        />
        <Event
          eventTitle="Pacific Science Center"
          eventHours="Hours: 10a - 5p"
          eventDistance="Location Distance"
          eventImage={science}
        />
        <Event
          eventTitle="Seattle Chinatown-International District"
          eventHours="Hours:  930a - 5p"
          eventDistance="Location Distance"
          eventImage={chinatown}
        />
        <Event
          eventTitle="Mount Rainer National Park"
          eventHours="Hours: 9a - 430p"
          eventDistance="Location Distance"
          eventImage={mtrainer}
        />
      </div>
    );
  }
}

export default App;
