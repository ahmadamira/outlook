import React from 'react'
import Icon from '../../MainSection/EmailContent/Icon/Icon'
import './styles.css'

function SectionItem({ isArrowAvailable, isCounterAvailable }) {
    return (
        <div className='section-item'>
            <Icon />
            <p>Favourits</p>
            {isArrowAvailable ? <Icon /> : isCounterAvailable ? <span>6</span> : null}
        </div>
    )
}

export default SectionItem
