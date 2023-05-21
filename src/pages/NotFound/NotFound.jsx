import React from 'react';
import notfound from '../../../public/image/error-404-concept-landing-page_52683-13617.avif'
const NotFound = () => {
    return (
        <div>
            <img className='w-full' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;