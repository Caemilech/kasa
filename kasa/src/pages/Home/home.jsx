import Data from '../../data/logements.json'
import { Link } from 'react-router-dom'
import CardApartment from '../../components/CardApartment/cardApartment'
import Banner from '../../components/Banner/banner'
import BannerHomeImg from './BannerHomeImg.jpg'

const Home = () => {
    return (
        <div className='home'>
            <Banner picture={BannerHomeImg} text={'Chez vous, partout et ailleurs'}/>
            <div className='card__apartment-background'>
                {Data.map((data) =>
                    <article key={data.id}>
                        <Link to={`/FicheLogement/${data.id}`}>
                            <CardApartment cover={data.cover} title={data.title} />
                        </Link>
                    </article>
                )}
            </div>
        </div>
    )
}

export default Home