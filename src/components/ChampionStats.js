import React from 'react';

const ChampionStats = ({ stats }) => (
    <div>
        <ul>
            {Object.entries(stats).map((stat) => <li key={stat}>{stat[0]} : {stat[1]}</li>)}
        </ul>
    </div>
);

export default ChampionStats;