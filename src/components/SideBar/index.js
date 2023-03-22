import React from 'react'
import TopSide from './TopSide'
import Bottomside from './BottomSide'
import './styles.css'
function SideBar() {
    return (
        <div className='side-bar'>
            <TopSide />
            <Bottomside />
        </div>
    )
}

export default SideBar
