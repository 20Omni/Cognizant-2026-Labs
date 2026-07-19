import React from "react";

function Scorebelow70(props) {

    const players70 = props.players.filter(player => player.score <= 70);

    return (
        <div>
            <ul>
                {players70.map((player, index) => (
                    <li key={index}>
                        Mr. {player.name} <span>{player.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Scorebelow70;