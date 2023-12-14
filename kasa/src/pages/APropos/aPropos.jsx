import Dropdown from '../../components/Dropdown/dropdown'
import Banner from '../../components/Banner/banner'
import BannerAProposImg from './BannerAProposImg.jpg'

const APropos = () => {
    const dropdownElements = [
        { 
            title: 'Fiabilité', 
            text: 'Les annonces postées sur Kasa garantissant une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifièes par nos équipes.',
        },
        { 
            title: 'Respect', 
            text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.', 
        },
        { 
            title: 'Service', 
            text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
        },
        { 
            title: 'Sécurité', 
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour  nos hôtes.",
        }
    ]
    
    return (
        <div className='aPropos'>
            <div className='background__aPropos-container'>
                <Banner picture={BannerAProposImg} text={'Chez vous, partout et ailleurs'}/>
            </div>
            <div className='dropdown__aPropos-container'>
                {dropdownElements.map((data) =>
                    <Dropdown key={data.title} title={data.title} text={data.text}/>
                )}
            </div>
        </div>
    )
}

export default APropos