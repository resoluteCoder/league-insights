import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h1>404 - Page Not Found</h1>
        <Link to='/'><img src='' alt='arrow-icon' />RETURN HOME</Link>

    </div>
);

export default PageNotFound;