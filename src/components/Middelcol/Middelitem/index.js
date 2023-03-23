import React, { Children } from 'react'
import CircleImg from '../../MainSection/EmailContent/CircleImg/CircleImg'
import "./index.css";
function Middelitem({ title, icon, description, children }) {
    return (
        <div>

            <div className='middelitem'>
                <div className='icon'>
                    {icon}
                </div>
                <div className='desc'>
                    <p class="title"> {title}</p>
                    <p className='description'>{description}</p>
                </div>
            </div>
            <div className='sepe'>
                {children}
            </div>

        </div>
    )
}

export default Middelitem
