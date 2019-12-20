import React from 'react';
import ChampionIconList from './ChampionIconList';
import ChampionSelectFilter from './ChampionSelectFilter';
import axios from 'axios';

export default class ChampionSelect extends React.Component {
    state = {
            text: '',
            champions: [],
            championNames: [],
            filter: ''
    }
    onTextChange = (e) => {
       const text = e.target.value.toUpperCase();
       this.setState(()=>({
           text
       }))
    }
    onFilterChange = (filter) => {
        this.setState(()=>({ filter }))
    }
    getChampions = () => {

        // get data from riot dragon server -> return champion data -> set state data
        axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
            .then(res => {
                this.setState(()=>({
                    champions: Object.entries(res.data.data),
                    championNames: Object.keys(res.data.data)                    
                }))                
            });
    }
    componentDidMount() {
        this.getChampions();        
    }

    render() {       
        return (
            <div className='champion-select'>
                <h1 className='champion-select__heading'>CHAMPION SELECT</h1>
                <ChampionSelectFilter onFilterChange={this.onFilterChange} />
                <input className='champion-select__search' placeholder = 'NAME' type='text' value={this.state.text} onChange={this.onTextChange}/>
                {(this.state.text || this.state.filter )&& <ChampionIconList
                                        champions={this.state.champions}
                                        championNames={this.state.championNames} 
                                        text={this.state.text.toLowerCase()}
                                        filter={this.state.filter}
                                    />}
            </div>
        );
    }
}
    
