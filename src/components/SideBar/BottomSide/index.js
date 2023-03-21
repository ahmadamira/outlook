import React from 'react'
import Icon from '../../MainSection/EmailContent/Icon/Icon'
import './styles.css'
import { data } from './data'


function Bottomside() {
    return (
        <div className='Bottom-Icon'>
            {data.map(item =>(
                <Icon {...item} />
            ))
            
            
            }
            
            
        </div>
    )
}

export default Bottomside
