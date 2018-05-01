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
          eventHours="Hours &rarr; 24/7/365"
          eventTimeToLocation="Time &rarr; 1h 37m"
          eventDistanceToLocation="Distance &rarr; 28.1 mi"
          eventImage={psound}
          eventRoute="https://goo.gl/AT3kSw"
        />
        <Event
          eventTitle="Seattle Aquarium"
          eventHours="Hours:  930a - 5p"
          eventTimeToLocation="Time &rarr; 0h 9m"
          eventDistanceToLocation="Distance &rarr; 1.5 mi"
          eventImage={aqua}
          eventRoute="https://goo.gl/ftjTvf"
        />
        <Event
          eventTitle="Washington Park Arboretum"
          eventHours="Hours: 9a - 5p"
          eventTimeToLocation="Time &rarr; 0h 15m"
          eventDistanceToLocation="Distance &rarr; 3.8 mi"
          eventImage={arbo}
          eventRoute="https://goo.gl/9zCMiS"
        />
        <Event
          eventTitle="Pacific Science Center"
          eventHours="Hours: 10a - 5p"
          eventTimeToLocation="Time &rarr; 0h 15m (walk)"
          eventDistanceToLocation="Distance &rarr; 0.7 mi"
          eventImage={science}
          eventRoute="https://goo.gl/7yN9na"
        />
        <Event
          eventTitle="Seattle Chinatown-International District"
          eventHours="Hours:  930a - 5p"
          eventTimeToLocation="Time &rarr; 0h 11m"
          eventDistanceToLocation="Distance &rarr; 2.9 mi"
          eventImage={chinatown}
          eventRoute="https://goo.gl/2yX5hg"
        />
        <Event
          eventTitle="Mount Rainer National Park"
          eventHours="Hours: 9a - 430p"
          eventTimeToLocation="Time &rarr; 1h 53m"
          eventDistanceToLocation="Distance &rarr; 66.8 mi"
          eventImage={mtrainer}
          eventRoute="https://goo.gl/gWVErg"
        />
      </div>
    );
  }
}

export default App;
