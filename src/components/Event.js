import React from 'react';
import '../css/event.css'
import '../style.css';

class Event extends React.Component {
    render() {
        return (
            <section className="event__wrapper">
                <h1 className="event__title">{this.props.eventTitle}</h1>

                <article className="event__container">
                    <p className="event__hours">{this.props.eventHours}</p>
                    <p className="event__distance">{this.props.eventDistance}</p>
                </article>

                <article className="event__container">
                    <img src={this.props.eventImage} alt="Cool Image!" className="event__image" />
                </article>

                <hr className="event__line"></hr>

            </section>
        );
    }
}

export default Event;