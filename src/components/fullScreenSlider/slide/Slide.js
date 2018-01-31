import React from 'react';
import './slide.css';

const Slide = (props) => {
    return (
        <li data-transition="slidevertical" data-slotamount="1" data-masterspeed="1000" data-thumb="img/slide_thumb_1.jpg"  data-saveperformance="off"  data-title="Slide">
            {/* MAIN IMAGE */}
            <img src={props.img} alt="fullslide1"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
            {/* LAYERS */}
    
            {/* LAYER NR. 1 */}
            <div className="tp-caption light_heavy_70_shadowed lfb ltt tp-resizeme layer1"
                data-x="center" data-hoffset="250"
                data-y="center" data-voffset="-70"
                data-speed="600"
                data-start="800"
                data-easing="Power4.easeOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.1"
                data-endspeed="500"
                data-endeasing="Power4.easeIn">{props.description}
            </div>
    
            {/* LAYER NR. 2 */}
            <div className="tp-caption light_medium_30_shadowed lfb ltt tp-resizeme layer2"
                data-x="center" data-hoffset="205"
                data-y="center" data-voffset="-10"
                data-speed="600"
                data-start="900"
                data-easing="Power4.easeOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.1"
                data-endspeed="500"
                data-endeasing="Power4.easeIn">{props.info}
            </div>            
        </li>
    )
}

export default Slide;