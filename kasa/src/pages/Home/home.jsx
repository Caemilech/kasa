import BackgroundHome from './BackgroundHome.jpg'
import CardApartment from '../../components/CardApartment/cardApartment'

const home = () => {
    return (
        <div className='home'>
            <div className='background__home-container'>
                <img className='background__home-img' src={BackgroundHome} alt='BackgroundHome' />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className='background__apartment-card'>
                <CardApartment />
            </div>
        </div>
    )
}

export default home