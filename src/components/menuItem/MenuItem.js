import React from 'react';

const MenuItem = (props) => {
    return (
        
            <div className="price-table early-bird">
                <div className="icon">
                    <i className="pe-5x pe-7s-wristwatch"></i> 
                </div>
                <div className="table-header">
                    <h3>Early Bird</h3>
                    <p className="price">$150</p>
                </div>
                <ul className="desc list-unstyled">
                    <li>Conference Kit</li>
                    <li>Coffee break</li>
                    <li>Lunch</li>
                    <li>All seasons</li>
                </ul>
            </div>
    )
}

export default MenuItem;