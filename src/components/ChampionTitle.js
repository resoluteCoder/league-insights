import React from 'react';


const ChampionTitle = ({name, title}) => (
    <div className='champion-title'>
        <h1 className='champion-title__name'>{name.toUpperCase()}</h1>
        <div className='champion-title__subcontainer'>
            <div className='colored-dashes'></div>
            <h2 className='champion-title__subtitle'>{title.toUpperCase()}</h2>
            <div className='colored-dashes'></div>
        </div>        
    </div>
);

export default ChampionTitle;