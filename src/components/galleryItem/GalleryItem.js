import React from 'react';
import './galleryItem.css';

const GalleryItem = (props) => {
    return (
        <div className="item wrap gallery-item">
            <img className="img-responsive" src={props.item.img} alt="" />
            <div className="overlay"></div>
            <div className="icon">
                <a className="image-popup" href={props.item.img} title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i className="pe-3x pe-7s-plus"></i></a>
            </div>
        </div>
    )
}

export default GalleryItem;