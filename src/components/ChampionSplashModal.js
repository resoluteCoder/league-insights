import React from 'react';
import ReactModal from 'react-modal';
import ChampionSplashList from './ChampionSplashList';
ReactModal.defaultStyles.overlay.backgroundColor = '';

export default class ChampionSplashModal extends React.Component {
    state = {
        index: 0,
        skinsArr: []
    }
    componentDidMount() {
        this.setState(({ skinsArr: this.props.skins.map((skin) => skin.num) }))
    }

    handleRightArrowClick = () => {
        if (this.state.index < this.state.skinsArr.length - 1) {
            this.setState((prevState)=>{
                return { 
                    index: prevState.index + 1
                }
            });
        }        
    }

    handleLeftArrowClick = () => {
        if (this.state.index > 0) {
            this.setState((prevState)=>{
                return { 
                    index: prevState.index - 1
                }
            });
        }
        
    }

    render() {
        return (
            <div>
                <button className='splash-modal__open' onClick={this.props.handleOpenModal}>View Splash Art</button>
                <ReactModal
                    isOpen={this.props.showModal}
                    contentLabel='Minimal Modal Example'
                    className='splash-modal'
                    overlayClassName=''
                    onRequestClose={this.props.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                >
                    <div className='splash-modal__container'>
                        <div className='splash-modal__arrows'>
                            <div onClick={this.handleLeftArrowClick}>&#8918;</div>
                            <div onClick={this.handleRightArrowClick}>&#8919;</div>
                        </div>             
                        
                        <ChampionSplashList                    
                            name={this.props.name}
                            num={this.state.skinsArr[this.state.index]}
                        />
                        
                        
                        <button className='splash-modal__close' onClick={this.props.handleCloseModal}>X</button>
                    </div>
                    
                </ReactModal>
            </div>
                );
    }
}
