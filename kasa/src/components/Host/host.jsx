import React from 'react';
import PropTypes from 'prop-types'

const Host = ({name, picture}) => {
    return (
      <>
        <span className='proprietaire_name'>{name}</span>
        <img className='proprietaire__picture' src={picture} alt='Propriétaire' />
      </>
    );
}

Host.propTypes = {
    name : PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default Host;