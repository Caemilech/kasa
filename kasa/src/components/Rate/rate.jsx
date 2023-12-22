import React from 'react';
import StarFull from './StarFull.png'
import StarEmpty from './StarEmpty.png'


function Rate({score}) {
    const notes = [1, 2, 3, 4, 5];
    return (
        <div className='rate__container'>
            {notes.map((note) =>
                score >= note ?
                (
                    <img src={StarFull} alt='Etoile' key={note.toString()} />
                )
                :
                (
                    <img src={StarEmpty} alt='Etoile' key={note.toString()}/>
                )
            )}
        </div>
    );
}

export default Rate;