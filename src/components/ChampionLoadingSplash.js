import React from 'react';

const ChampionLoadingSplash = ({ name }) => (
    <div>
        <img
            className='champion-image' 
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`} 
            alt={`Pic of ${name}`}
            onError={(e)=>{console.log(e)}}
        />
    </div>
);

export default ChampionLoadingSplash;