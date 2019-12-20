import React from 'react'
import AbilityIconListItem from './AbilityIconListItem';
import PassiveIconListItem from './PassiveIconListItem';
const keybinds = ['Q', 'W', 'E', 'R'];
const AbilityIconList = (props) => (
    <div className='ability-icon-container'>
        <PassiveIconListItem 
            passive={props.passive}
            onIconClickHandler={props.onIconClickHandler}
            iconIndex={props.iconIndex} 
        />
        {props.abilities.map((ability,index) => <AbilityIconListItem                                            
                                                key={ability.id}                                                
                                                ability={ability}
                                                keybind={keybinds[index]}
                                                onIconClickHandler={props.onIconClickHandler}
                                                iconIndex={props.iconIndex}                                
                                            />)}
    </div>
);

export default AbilityIconList;