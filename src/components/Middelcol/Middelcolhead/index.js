import React from 'react'
import Icon from '../../MainSection/EmailContent/Icon/Icon';

import "./index.css";

const Middelcolhead = () => {
    return (
        <div>
            <div className="middel">
                <div className="middel-header">

                    <div className="middel-header1">
                        <Icon icn={"bi bi-arrow-counterclockwise"} />
                        <p className='text'>Inbox</p>
                        <Icon />
                    </div>

                    <div className="middel-header1">

                        <p className='text1'>Filter</p>
                        <Icon />

                    </div>

                </div>
                <div className='middelbody'>

                </div>
            </div>
        </div>
    )
}

export default Middelcolhead
