import React from "react";

export function OddPlayers(props) {

    const [first, , third, , fifth] = props.IndianPlayers;

    return (
        <div>
            <ul>
                <li>{first}</li>
                <li>{third}</li>
                <li>{fifth}</li>
            </ul>
        </div>
    );
}

export function EvenPlayers(props) {

    const [, second, , fourth, , sixth] = props.IndianPlayers;

    return (
        <div>
            <ul>
                <li>{second}</li>
                <li>{fourth}</li>
                <li>{sixth}</li>
            </ul>
        </div>
    );
}

const T20Players = [
    "Sachin",
    "Dhoni",
    "Virat"
];

const RanjiTrophyPlayers = [
    "Raina",
    "Yuvraj",
    "Jadeja"
];

export const IndianPlayers = [
    ...T20Players,
    ...RanjiTrophyPlayers
];