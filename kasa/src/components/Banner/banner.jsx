import PropTypes from 'prop-types'

const Banner = (props) => {
    return (
        <div className='banner__container'>
            <img className='banner__img' src={props.picture} alt='Banner' />
            <p>{props.text}</p>
        </div>    
    )
}

Banner.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string,
}

export default Banner