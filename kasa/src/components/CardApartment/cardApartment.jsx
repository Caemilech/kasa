import Data from '../../data/logements.json'

const card = () => {
    return (
        
        Data && Data.map( data => {

            return (
                <div className='card__apartment' key={data.id}>
                    <img className='card__apartment-img' src={data.cover}  alt={data.title} />
                    <p>{data.title}</p>
                </div>
            )

        })  
    )
}

export default card