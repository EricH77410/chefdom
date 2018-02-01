import React from 'react';
import GalleryItem from '../../components/galleryItem/GalleryItem';

const Gallery = (props) => {
    const renderItem = props.data.map((item) => {
        return <GalleryItem item={item} />
    })
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="timeline" data-columns>
                            {renderItem}
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
        
    )
}

export default Gallery;