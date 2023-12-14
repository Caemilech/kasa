import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDropdown from './ArrowDropdown.svg'

const Dropdown = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className={`dropdown__container`} onClick={() => setOpen((prev) => !prev)}>
                <p className='dropdown__title'>{props.title}</p>
                <img src={ArrowDropdown} alt='ArrowDropdown' className={`dropdown__arrow ${open ? 'active' : 'inactive'}`}/>
            </div>
            <div className={`dropdown__text ${open ? 'active' : 'inactive'}`}>
                <div>
                    {props.text}
                </div>  
            </div> 
        </div>
    )
}

Dropdown.propTypes = {
    title : PropTypes.string,
    text : PropTypes.string,
}

export default Dropdown