import { useParams, Navigate } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/dropdown'
import Tag from '../../components/Tags/tag'
import Data from '../../data/logements.json'
import Host from '../../components/Host/host'
import Carrousel from '../../components/Carrousel/carrousel'
import StarFull from './StarFull.png'
import StarEmpty from './StarEmpty.png'

const FicheLogement = () => {
    const { id } = useParams()

    const ficheLogement = Data.find((logement) => logement.id === id);

    const equipements = ficheLogement.equipments.map((equipment, i) => {
        return (
          <ul key={i}>
            <li>{equipment}</li>
          </ul>
        );
    });

    const tagsLogement = ficheLogement.tags.map((tags, i) => {
      return <Tag key={i} nom={tags} />;
    });
    
    
    const notes = [1, 2, 3, 4, 5]
    const score = ficheLogement.rating
         
    return (
      <>
        {ficheLogement ? (
        <div className='ficheLogement__container'>
          <Carrousel slides={ficheLogement.pictures} />
          <section className='ficheLogement__details'>
            <div className='ficheLogement__location'>
              <h1>{ficheLogement.title}</h1>
              <p>{ficheLogement.location}</p>
            </div>
            <div className='ficheLogement__host'>
              <Host
                name={ficheLogement.host.name}
                picture={ficheLogement.host.picture}
              />
            </div>
            <div className='ficheLogement__tag'>
              {tagsLogement}
            </div>
            <div className='ficheLogement__rate'>
              {notes.map((note) =>
                score >= note ?
                  (
                    <img src={StarFull} />)
                  : (
                    <img src={StarEmpty} />
                  )
              )}
            </div>
            <div className='ficheLogement__dropdown'>
              <div>
                <Dropdown title="Description" text={ficheLogement.description} />
              </div>
              <div>
                <Dropdown title="Equipements" text={equipements} />
              </div>
            </div>
          </section>
        </div>
        ) :
          (<Navigate replace to="/Error" />)}
      </> 
    )
}

export default FicheLogement