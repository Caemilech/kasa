import BackgroundAPropos from './BackgroundAPropos.jpg'
import Dropdown from '../../components/Dropdown/dropdown'

const name = ['Fiabilité']

const aPropos = () => {
    return (
        <div className='aPropos'>
            <div className='background__aPropos-container'>
                <img className='background__aPropos-img' src={BackgroundAPropos} alt='BackgroundAPropos' />
            </div>
            <div>
                <Dropdown />
                <p className='dropdown__text'>Fiabilité</p>
            </div>
        </div>
    )
}

export default aPropos