import React from 'react';

const ChampionSelectFilter = ({ onFilterChange }) => (
    <div className='champion-filter'>
        <div className='champion-filter__title'>
            <div className='colored-dashes'></div> 
            <h3>FILTER</h3>
            <div className='colored-dashes'></div>            
        </div>
        <div className='champion-filter__filters'>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='none' name='filter' value=''/>
                <label className='champion-filter__label' htmlFor='none'>NONE</label>
            </div>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='fighter' name='filter' value='Fighter'/>
                <label className='champion-filter__label' htmlFor='fighter'>FIGHTER</label>
            </div>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='tank' name='filter' value='Tank'/>
                <label className='champion-filter__label' htmlFor='tank'>TANK</label>
            </div>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='mage' name='filter' value='Mage'/>
                <label className='champion-filter__label' htmlFor='mage'>MAGE</label>
            </div>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='assassin' name='filter' value='Assassin'/>
                <label className='champion-filter__label' htmlFor='assassin'>ASSASSIN</label>
            </div>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='marksman' name='filter' value='Marksman'/>
                <label className='champion-filter__label' htmlFor='marksman'>MARKSMAN</label>
            </div>
            <div className='champion-filter__item'>
                <input className='champion-filter__input' onClick={(e) => onFilterChange(e.target.value)} type='radio' id='support' name='filter' value='Support'/>
                <label className='champion-filter__label' htmlFor='support'>SUPPORT</label>
            </div>
        </div>        
    </div>
);

export default ChampionSelectFilter;
