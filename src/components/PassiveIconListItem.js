import React from 'react';

const styles = {
    height: '50px',
    width: '50px'
}


const PassiveIconListItem = ({ passive, onIconClickHandler, iconIndex }) => (
    <div>
        <img
            className={iconIndex === '' ? 'ability-icon-container__icon ability-icon-active': 'ability-icon-container__icon'}
            style={styles} 
            src={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/passive/${passive.image.full}`} 
            alt={passive.image.full}
            onClick={()=> onIconClickHandler(passive.description, '')}
        />
        <h3 className='ability-icon-container__text'>[ P ]</h3>
    </div>
);

export default PassiveIconListItem;