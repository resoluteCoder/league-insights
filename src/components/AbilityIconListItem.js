import React from 'react';

const styles = {
    height: '50px',
    width: '50px'
}

const AbilityIconListItem = ({ ability, onIconClickHandler, keybind, iconIndex }) => (
    <div>
        {console.log(iconIndex,keybind)}
        <img
            className={iconIndex === keybind ? 'ability-icon-container__icon ability-icon-active': 'ability-icon-container__icon'}
            style={styles} 
            src={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/spell/${ability.image.full}`} 
            alt={ability.image.full}
            onClick={()=> onIconClickHandler(ability.description, keybind)}
        />
        <h3 className='ability-icon-container__text'>{keybind}</h3>
    </div>
);

export default AbilityIconListItem;