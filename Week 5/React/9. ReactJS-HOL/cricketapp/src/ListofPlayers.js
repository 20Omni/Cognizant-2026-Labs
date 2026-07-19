import React from "react";

function ListofPlayers(props) {
    return (
        <div>
            <ul>
                {props.players.map((player, index) => (
                    <li key={index}>
                        Mr. {player.name} <span>{player.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;