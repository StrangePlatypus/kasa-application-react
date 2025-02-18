import { useState } from 'react'
import '../../assets/styles/collapse.scss'

function Collapse({title, content}){
    
    // We verify if the icon is clicked on. If so, we change style of the collapse content and we rotate the icon.
    const [isOpen, setIsOpen] = useState(false)
    const handleCollapse = () => setIsOpen(!isOpen)
    const newStyle = isOpen ? "collapsible-content" : "collapsed-content"
    const rotate = isOpen ? "rotate(-180deg)" : "rotate(0)"


    return(
        <div className='collapse-item'>
            <h1 className="collapse-title">{title}<i className="fa-solid fa-chevron-up fa-sm collapse-icon"
                style={{ transform: rotate, transition: "all 0.3s"}} onClick={handleCollapse}></i>
            </h1>
                    
            <div className={newStyle}>{content}</div>
            
        </div>
    )

}

export default Collapse

