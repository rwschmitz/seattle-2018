import React from 'react';
import '../css/header.css'
import '../style.css';

class Header extends React.Component {
    render() {
        return (
            <section className="header__wrapper">
                <h1 className="header__title">{this.props.headerTitle}</h1>
                <img className="header__image" src={this.props.picture} alt="Newt and Bug!" />
            </section>
        );
    }
}

export default Header;