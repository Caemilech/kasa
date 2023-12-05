import { Link } from 'react-router-dom'
import { ReactComponent as KasaLogoHeader } from './KasaLogoHeader.svg'

const header = () => {
    return (

        <div className='header'>
            <KasaLogoHeader className='kasa_logo_header' />
            <nav>
                <Link to='/' className='current-page'>Accueil</Link>
                <Link to='/APropos'>A Propos</Link>
            </nav> 
        </div>

    )
}

export default header