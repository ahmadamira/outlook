import React from 'react'
import Icon from '../../MainSection/EmailContent/Icon/Icon'
import './styles.css'

function SectionItem({ isArrowAvailable, isCounterAvailable ,label,icntop }) {
    return (
        <div className='section-item'>
            <Icon icn={icntop}/>
            <div className='label'> 
                <p>{label}</p>  
            </div>
            {isArrowAvailable ? <Icon /> : isCounterAvailable ? <span>{isCounterAvailable}</span> : null}
           
        </div>
    )
}

export default SectionItem
