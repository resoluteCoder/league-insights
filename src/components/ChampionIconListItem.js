import React from 'react';
import { Link } from 'react-router-dom';

const IconListItem = ({name, icon}) => {
    return (
        <span>
            <Link to={`/champion-select/${name}`}>
                <img className='champion-icon' src={icon} alt={name}/>
            </Link>       
        </span>
    );
    
};

export default IconListItem;