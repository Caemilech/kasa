import { useState } from 'react'
import { ReactComponent as ArrowDropdown } from './ArrowDropdown.svg'
import { ReactComponent as ArrowDropdownBack } from './ArrowDropdownBack.svg'

const Dropdown = (props) => {

const [isOpen, setIsOpen] = useState(false)
const dropdownElements = props.dropdownElements
    return (
        
        dropdownElements && dropdownElements.map( dropdownElement => {

            return (

                <div key={dropdownElement.id}>
                    <div className='dropdown__container'>
                        <p className='dropdown__title'>{dropdownElement.title}</p>
                        {!isOpen ? (
                            <ArrowDropdown className='dropdown__arrow' onClick={() => setIsOpen((prev) => !prev)}/>
                        ):
                        (
                            <ArrowDropdownBack className='dropdown__arrow' onClick={() => setIsOpen((prev) => !prev)}/>
                        )}
                    </div>
                    {isOpen && (
                        <div className='dropdown__text'>
                            <p>{dropdownElement.text}</p>
                        </div>
                    )}
                </div>        
            )
        })  
    )
}

export default Dropdown