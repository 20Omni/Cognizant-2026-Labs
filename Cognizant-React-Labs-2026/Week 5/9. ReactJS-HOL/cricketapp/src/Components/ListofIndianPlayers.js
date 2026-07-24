import React from "react";

export default function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      <ul>
        {IndianPlayers.map((item, index) => (
          <li key={index}>Mr. {item}</li>
        ))}
      </ul>
    </div>
  );
}