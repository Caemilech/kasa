import React from 'react';

const Tag = ({nom}) => {
    return (
        <div className='tag__container'>
            <p className='tag__text'>{nom}</p>
        </div>
    );
}

export default Tag;