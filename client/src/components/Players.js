import React from 'react';

const Players = (props) => {
    console.log(props)
    return (
        <div>
            {props.players.map(player => {
                return (
                    <div>
                        <h2>{player.name}</h2>
                        <p>{player.country}</p>
                        <p>{player.searches}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Players;