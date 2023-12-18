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

    return (
        <section className='slide'>
                {length > 1 && (
                <>
                    <div className='arrow__right' onClick={nextImage}>
                        <img src={ArrowRight} alt='arrow right' />
                    </div>
                    <div className='arrow__left' onClick={previousImage}>
                        <img src={ArrowLeft} alt='arrow left' />
                    </div>
                </>
                )}
                <div className='slider'>
                    <img src={slides[current]} alt='apartment picture' className='slide__image' />
                    {length > 1 && (
                    <span className='slider__number'>
                        {current + 1}/{length}
                    </span>
                    )}
                </div>
        </section>
    );
}

export default Carrousel;