import React from "react";
import { useState } from "react";
import ArrowLeft from './arrowLeft.png'
import ArrowRight from './arrowRight.png'

function Carrousel({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
  
    const previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); 
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
    }
    
    return (
        <section className='slide'>
            {length > 1 && (
                <p className='arrow__left' onClick={previousImage}>
                    <img src={ArrowLeft} alt='arrow left' />
                </p>
            )}
            {length > 1 && (
                <p className='arrow__right' onClick={nextImage}>
                    <img src={ArrowRight} alt='arrow right'/>
                </p>
            )}
            {slides.map((image, index) => {
                return (
                    <div key={index} className={index === current ? 'slider active' : 'slider'} >
                        {index === current && (
                            <img src={image} alt='apartment picture' className='slide__image' />
                        )}
                        {index === current && length > 1 && (
                            <span className='slider__number'>
                                {current + 1}/{length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Carrousel;