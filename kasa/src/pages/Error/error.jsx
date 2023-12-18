import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error__container'>
            <p className='error__name'>404</p>
            <p className='error__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error