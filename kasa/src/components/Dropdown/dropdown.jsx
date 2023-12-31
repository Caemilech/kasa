import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDropdown from './ArrowDropdown.svg'

const Dropdown = ({title, text}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={`dropdown__container`} onClick={() => setOpen(!open)}>
                <p className='dropdown__title'>{title}</p>
                <img src={ArrowDropdown} alt='ArrowDropdown' className={`dropdown__arrow ${open ? 'active' : 'inactive'}`}/>
            </div>
            <div className={`dropdown__text ${open ? 'active' : 'inactive'}`}>
                <div>
                    <ul>
                        <li>
                            {text}
                        </li>  
                    </ul>
                </div>  
            </div> 
        </>
    )
}

Dropdown.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
}

export default Dropdown