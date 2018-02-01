import React from 'react';
import GalleryItem from '../../components/galleryItem/GalleryItem';
import './gallery.css';

const Gallery = (props) => {
    const renderItem = props.data.map((item) => {
        return <GalleryItem item={item} />
    })
    return (
        <section id="gallery">
            <div className="gallery__title">
                <h3 className="uppercase">Quelques une de nos réalisations</h3>
            </div>   
                   
            <div className="container gallery-container">               
                {renderItem}               
            </div>
        </section>        
    )
}

export default Gallery;