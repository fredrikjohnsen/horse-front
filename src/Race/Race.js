import React, { Component } from 'react';
import Raceday from './../Components/raceday';

class Race extends Component {
    state = {
        races :[{name : 'Rex Rodney'}],
    };
    races = [];

    componentDidMount() {
        fetch('http://localhost:5000/race/1?track=Biri-Travbane&day=20180323')
        .then(res => res.json())
        .then(data => { 
            this.races = data
        });
    }


    clickHandler = () => {
        var z = Math.floor(Math.random()*this.races.length)
        console.log(z, this.races);
        this.setState({races : [{name : this.races[z].name}]});
    }
    render () {
        return  <div>
            <button onClick={this.clickHandler}>Click me</button>
            <Raceday name ={this.state.races[0].name} />
            </div>
    }
   
}

export default Race;