import React from 'react';
import MenuItem from '../../components/menuItem/MenuItem';

const Menu = (props) => {
    const renderMenu = props.data.map((menu, ind)=>{
        return <MenuItem menu={menu} key={ind}/>
    })
    return (
        <section id="register">
            <div className="container">
                <div className="row">
                
                	<div className="col-lg-12">
                    	<h2 className="uppercase text-center">Exemple de menus</h2>
                        <p className="lead text-center">Nam pellentesque fringilla faucibus. Aliquam tortor ex, egestas porta eget, pretium at lorem.</p>
                    </div>
                
                    <div className="col-lg-12">
                    <div id="price-carousel">
                        {renderMenu}
                    </div>
                    </div>
                    </div>
                    
					<div className="col-lg-12 text-center">
                    	<a className="button button-small button-line-dark html-popup" href="register.html">register now</a>
                    </div>
                    
                </div>
        </section>
    )
}

export default Menu;