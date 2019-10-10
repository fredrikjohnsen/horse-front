import React, { Component } from 'react';
import Raceday from './../Components/raceday';

class Race extends Component {
    state = {
        races :[{name : 'Rex Rodney'}],
        dataLoaded : false
    };
    races = [];

    componentDidMount() {
        fetch('http://localhost:5000/race/1?track=Biri-Travbane&day=20180323')
        .then(res => res.json())
        .then(data => { 
            this.races = data;
            this.setState({dataLoaded : true});
        });
    }

    clickHandler = () => {
        var z = Math.floor(Math.random()*this.races.length)
        this.setState({dataLoaded : !this.state.dataLoaded });
    }
     
    render () {
        let myRaces = null;
        if (this.state.dataLoaded) {
            myRaces = this.races.map( race => <Raceday data ={race} ></Raceday> )
        }
        return  
            <div>
                <button onClick={ this.clickHandler }>Show/Hide</button>
                <div>
                    <table>
                        <thead>
                            <th>Place</th>
                            <th>Name</th>
                            <th>Skip</th>
                            <th>Odds</th>
                        </thead>
                        <tbody>
                            {myRaces}
                        </tbody>
                    </table>
                </div>
            </div>
    }
   
}

export default Race;