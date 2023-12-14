import KasaLogoFooter from './KasaLogoFooter.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={ KasaLogoFooter } alt='KasaLogoFooter'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer