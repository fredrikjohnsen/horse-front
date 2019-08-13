import React from 'react';

const raceday = (props) => {
    return (
        <div>
            <tr>
                <td>{props.data.place}</td> 
                <td>{props.data.name}</td>
                <td>{props.data.skip}</td>
                <td>{props.data.odds}</td>
               
            </tr>
        </div>
    )
}
export default raceday;

