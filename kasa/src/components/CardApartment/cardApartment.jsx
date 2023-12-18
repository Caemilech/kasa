import PropTypes from 'prop-types'


const Card = (props) => {    
    return (
        <>
            <div className='card__apartment'>
                <img className='card__apartment-img' src={props.cover} alt={props.title} />
                <p>{props.title}</p>
            </div>
        </>
    )
}

Card.propTypes = {
    cover: PropTypes.string,
    title : PropTypes.string,
}

export default Card