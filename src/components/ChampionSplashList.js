import React from 'react';

const ChampionSplashList = ({ name, num }) => (
    <div className='image-container'>
         <img 
                    className='splash-modal__image'
                    src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${num}.jpg`}
                    alt= {`${name} splash art`}
                />
    </div>
);

export default ChampionSplashList;