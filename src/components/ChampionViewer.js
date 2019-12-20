import React from 'react';
import axios from 'axios';
import ChampionTitle from './ChampionTitle';
import ChampionLoadingSplash from './ChampionLoadingSplash';
import ChampionAbilities from './ChampionAbilities';
import ChampionLore from './ChampionLore';
import ReactModal from 'react-modal';
import ChampionSplashModal from './ChampionSplashModal';

export default class ChampionViewer extends React.Component {
    state = {
        champion: '',
        showModal: false
    }
    getChampion = () => {
        // get id from url string
        const id = this.props.match.params.id;

        // get data from riot dragon server -> return champion data -> set state data
        axios.get(`http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion/${id}.json`)
            .then(res => {
                this.setState(()=>({
                    champion: res.data.data[id]
                }))
            });
    }
    componentDidMount() {
        this.getChampion();
        ReactModal.setAppElement('body');
    }
    handleOpenModal = () => {
        this.setState(()=>({ showModal: true }))
    }
    handleCloseModal = () => {
        this.setState(()=>({ showModal: false }))
    }

    

    render() {
        return (
            <div>
                {this.state.champion && <div>
                    {console.log(this.state.champion)}
                    <ChampionTitle
                        name={this.state.champion.name} 
                        title={this.state.champion.title} 
                    />
                    <div className='viewer-container'>
                        <div className='loading-image-container'>
                            <ChampionLoadingSplash
                                name={this.props.match.params.id}
                            />
                            <ChampionSplashModal
                                showModal={this.state.showModal}
                                handleOpenModal={this.handleOpenModal}
                                handleCloseModal={this.handleCloseModal}
                                name={this.state.champion.id}
                                skins={this.state.champion.skins}
                            />
                        </div>
                    
                        <div>
                            <ChampionLore lore={this.state.champion.lore}/>
                            <ChampionAbilities 
                                abilities={this.state.champion.spells}
                                passive={this.state.champion.passive}
                            />
                        </div>
                    </div>
                    
                </div>}         
            </div>
        )
    }
}
