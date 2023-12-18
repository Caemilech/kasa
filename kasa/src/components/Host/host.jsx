import React from 'react';
import PropTypes from 'prop-types'

const Host = (props) => {
    return (
      <>
        <span className='proprietaire_name'>{props.name}</span>
        <img className='proprietaire__picture' src={props.picture} alt='Propriétaire' />
      </>
    );
}

Host.propTypes = {
    name : PropTypes.string,
    picture: PropTypes.string,
}

export default Host;