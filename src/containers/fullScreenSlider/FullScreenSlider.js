import React from 'react';
import Slide from '../../components/slide/Slide';

const FullScreenSlider = (props) => {
    const renderSlide = props.data.map((item, ind) => {
        return <Slide img={item.img} description={item.description} info={item.info} key={ind}/>
    })
    return (
        <div className="tp-banner-container">
            <div className="tp-banner">
                <ul>
                    {renderSlide}
                </ul>		
                <div className="tp-bannertimer"></div>	
            </div>
        </div>
    )
}

export default FullScreenSlider;