import React from 'react'
import CircleImg from '../MainSection/EmailContent/CircleImg/CircleImg';
import Icon from '../MainSection/EmailContent/Icon/Icon';
import "./index.css";
import Middelcolhead from './Middelcolhead';
import Middelitem from './Middelitem';
import { data } from './Middelitem/data';


const Middelcol = () => {

    let y = <CircleImg name={"A"} color={"#8E562E"} />;
    return (

        <div className='middelcol'>
            <Middelcolhead />
            {data.map((item, index) => (
                <Middelitem {...item} key={index} active={index === 0 ? "active" : ""} >
                    {index === 2 && <p className='section sepe'>April</p>}
                    {index === 3 && <p className='section sepe'>Older</p>}
                </Middelitem>
            ))}


        </div>
    )
}

export default Middelcol
