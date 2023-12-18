import PropTypes from 'prop-types'

const Banner = ({picture, text}) => {
    if (text !== undefined){
        return(
            <div className='banner__container'>
                <img className='banner__img' src={picture} alt='Banner' />
                <p className='banner__text'>{text}</p>
            </div>    
        )
    }
    if(text === undefined){
        return(
            <div className='banner__container'>
                <img className='banner__img' src={picture} alt='Banner' />
            </div>    
        )
    }
}

Banner.propTypes = {
    picture: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default Banner