import React from 'react'
import SectionItem from '../SectionItem'
import './styles.css'
import { datatop } from './datatop'


function TopSide() {
    return (
        <div className='top-side'>
            {datatop.map(item =>(
                <SectionItem {...item} />
            ))
            
            
            }
            
            
        </div>
    )
}

export default TopSide
