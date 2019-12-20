import React from 'react';
import ChampionIconListItem from './ChampionIconListItem';
import { filterByChampionName, filterByTagName } from '../utils/championFilters';

const IconList = ({championNames, text, champions, filter}) => {
    if (filter && text) {
        const filteredChampions = filterByTagName(champions, filter);        
        return (
           
            <div>
                {console.log('1')}
                {filterByChampionName(filteredChampions, text).map((champion)=>{
                                return <ChampionIconListItem
                                key={`${champion}key`}
                                name={champion} 
                                icon={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion}.png`}
                            />
                    })}
            </div>
        );
    } else if (text) {
        return (
            <div>
                {console.log('2')}
                {filterByChampionName(championNames, text).map((champion)=>{
                                return <ChampionIconListItem
                                key={`${champion}key`}
                                name={champion} 
                                icon={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion}.png`}
                            />
                    })}
            </div>
        );
    } else if (filter) {
        return (
            <div>
                {console.log('3')}
                {filterByTagName(champions, filter).map((champion)=>{
                    return <ChampionIconListItem
                                key={`${champion}key`}
                                name={champion} 
                                icon={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion}.png`}
                            />
                })}
            </div>
        );
    }
}

export default IconList;