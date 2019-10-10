import React from 'react';

const raceday = ( props ) => {
    return (
        <tr>
            <td>{ props.data.place }</td> 
            <td style={{ textAlign : "left" }}>{ props.data.name }</td>
            <td style={{ textAlign : "left" }}>{ props.data.skip }</td>
            <td style={{ textAlign : "right" }}>{ props.data.odds }</td>
        </tr>
    )
}
export default raceday;

