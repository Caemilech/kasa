import { useState, useEffect, useRef } from 'react'
import { ReactComponent as ArrowDropdown } from './ArrowDropdown.svg'
import { ReactComponent as ArrowDropdownBack } from './ArrowDropdownBack.svg'

const Dropdown = (props) => {

const [open, setOpen] = useState(false)

const dropdownText = useRef()



useEffect(() => {
    let handler = (e)=>{
        
        if(!dropdownText.current.contains(e.target)){
            setOpen(false)
            
        } 
    }

    document.body.addEventListener('mousedown', handler)

    return() => {
        document.body.removeEventListener('mousedown', handler)
     
    }
})
const dropdownElements = props.dropdownElements
    return (
        
        dropdownElements && dropdownElements.map( dropdownElement => {

            return (

                <div key={dropdownElement.id} ref={dropdownText}>
                    <div className='dropdown__container'>
                        <p className='dropdown__title'>{dropdownElement.title}</p>
                        <ArrowDropdown className={`dropdown__arrow ${open ? 'active' : 'inactive'}`} onClick={() => { setOpen(!open)}} />
                    </div>
                    <p className={`dropdown__text ${open ? 'active' : 'inactive'}`}>{dropdownElement.text}</p> 
                </div> 

            )
        }
        )  
    )
}

export default Dropdown