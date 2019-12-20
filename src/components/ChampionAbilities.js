import React from 'react';
import AbilityIconList from './AbilityIconList';
import AbilityDescription from './AbilityDescription';

export default class ChampionAbilities extends React.Component {
    state = {
        description: '',
        iconIndex: ''        
    }
    // handler when user clicks icon ability in list set state description for that ability 
    onIconClickHandler = (description, keybind) => {
        var parsedDescription = description.replace(/(<([^>]+)>)/ig, '');
        this.setState(()=>({ 
            description: parsedDescription,
            iconIndex: keybind
        }))
    }
    componentDidMount() {
        this.setState(()=>({ description: this.props.passive.description }))
    }
    render(){
        return (
            <div className='champion-ability-container'>
                <AbilityIconList 
                    abilities={this.props.abilities}
                    passive={this.props.passive}
                    onIconClickHandler={this.onIconClickHandler}
                    iconIndex={this.state.iconIndex}
                />
                <AbilityDescription description={this.state.description} />
            </div>
        );
    }
}