import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHero } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class HeroList extends Component {
    render() {
        return (
            <ul className="list-group list">{this.props.heroes.map
                (hero =>
                    <li onClick={() => {this.props.selectHero(hero);}} className="list-group-item" key={hero.name}>
                        <div className="item">
                            <div><img className="list-img" src={hero.img} /></div>
                            <div className="about">
                                <h1>{hero.name}</h1>
                                <h2 className="text-uppercase">{hero.class}</h2>
                            </div>
                        </div>
                    </li>)}
            </ul>)
    }
}

function mapStatetoProps(state) {
    return {
        heroes: state.heroes,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectHero: selectHero }, dispatch);}
    

export default connect(mapStatetoProps, mapDispatchToProps)(HeroList);