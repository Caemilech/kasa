import Dropdown from '../../components/Dropdown/dropdown'
import Banner from '../../components/Banner/banner'
import BannerAProposImg from './BannerAProposImg.jpg'
import DropdownElements from '../../data/dropdownElements.json'

const APropos = () => {   
    return (
        <div className='aPropos'>
            <div className='background__aPropos-container'>
                <Banner picture={BannerAProposImg} />
            </div>
            <div className='dropdown__aPropos-container'>
                {DropdownElements.map((data) =>
                <article key={data.title}>
                    <Dropdown title={data.title} text={data.text}/>
                </article>
                )}
            </div>
        </div>
    )
}

export default APropos