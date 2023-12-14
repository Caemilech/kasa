import { NavLink } from 'react-router-dom'
import KasaLogoHeader from './KasaLogoHeader.svg'

const Header = () => {
    return (
        <header className='header'>
            <img src={ KasaLogoHeader } alt='KasaLogoHeader' className='kasa-logo__header-img' />
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/APropos'>A Propos</NavLink>
            </nav> 
        </header>
    )
}

export default Header