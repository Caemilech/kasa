import CardApartment from '../../components/CardApartment/cardApartment'
import Banner from '../../components/Banner/banner'
import BannerHomeImg from './BannerHomeImg.jpg'

const Home = () => {
    return (
        <div className='home'>
            <Banner picture={BannerHomeImg} text={'Chez vous, partout et ailleurs'}/>
            <div className='background__apartment-card'>
                <CardApartment />
            </div>
        </div>
    )
}

export default Home