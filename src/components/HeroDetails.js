import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroDetails extends Component {
    render() {
        if (!this.props.currentHero) {
            return (
                <div className="intro detail">Our brave party is going to an adventure...Meet them by clicking on their portraits.</div>
            )
        }
        return (
            <div className="detail">
                <header>
                    <h1> Biography</h1>
                    <img className="details-img" src={this.props.currentHero.img} />
                    <h2> {this.props.currentHero.name}</h2>
                </header>
                <p className="biography">{this.props.currentHero.bio}</p>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        currentHero: state.selectedHero,
    }
}

export default connect(mapStatetoProps)(HeroDetails);