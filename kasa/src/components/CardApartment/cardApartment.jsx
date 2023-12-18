import PropTypes from 'prop-types'


const Card = ({cover, title}) => {    
    return (
        <>
            <div className='card__apartment'>
                <img className='card__apartment-img' src={cover} alt={title} />
                <p>{title}</p>
            </div>
        </>
    )
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title : PropTypes.string,
}

export default Card