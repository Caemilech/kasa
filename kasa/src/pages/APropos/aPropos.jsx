import { useState } from 'react'
import BackgroundAPropos from './BackgroundAPropos.jpg'
import Dropdown from '../../components/Dropdown/dropdown'

const APropos = () => {
    const [dropdownElements1] = useState([
        { 
            title: 'Fiabilité', 
            text: 'Les annonces postées sur Kasa garantissant une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifièes par nos équipes.',
            id: 1
        }
    ])
    const [dropdownElements2] = useState([
        { 
            title: 'Respect', 
            text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.', 
            id: 2
        }
    ])
    const [dropdownElements3] = useState([
        { 
            title: 'Service', 
            text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
            id: 3
        }
    ])
    const [dropdownElements4] = useState([
        { 
            title: 'Sécurité', 
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour  nos hôtes.",
            id: 4
        }
    ])
    return (
        <div className='aPropos'>
            <div className='background__aPropos-container'>
                <img className='background__aPropos-img' src={BackgroundAPropos} alt='BackgroundAPropos' />
            </div>
            <div className='dropdown__aPropos-container'>
                <Dropdown dropdownElements={dropdownElements1} />
                <Dropdown dropdownElements={dropdownElements2} />
                <Dropdown dropdownElements={dropdownElements3} />
                <Dropdown dropdownElements={dropdownElements4} />
            </div>
        </div>
    )
}

export default APropos