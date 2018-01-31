import React from 'react';

const Footer = (props) => {
    return (
        <div>
        <footer id="footer">
        	<div className="container">
            	<div className="row">                	
                    <div className="col-lg-3 col-md-3 col-sm-6">
                    	<h4 className="uppercase">eventr'15</h4>
                        <p className="small">Vestibulum in ultrices justo. Praesent placerat justo metus, vitae malesuada lacus eleifend vel. Vivamus viverra volutpat leo, a gravida dolor posuere congue.</p>
                        <ul className="list-unstyled list-inline uppercase">
                            <li><a href="#fb"><i className="fa fa-lg fa-facebook"></i></a></li>
                            <li><a href="#tw"><i className="fa fa-lg fa-twitter"></i></a></li>
                            <li><a href="#in"><i className="fa fa-lg fa-instagram"></i></a></li>
                            <li><a href="#ggl"><i className="fa fa-lg fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-3 col-md-3 col-sm-6">
                    	<h4 className="uppercase">FAQ</h4>

                        <dl className="faqs">
                        	<dt>Is this the first question?</dt>
                        	<dd className="small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</dd>
                        
                        	<dt>Mauris ac metus in justo rhoncus?</dt>
                        	<dd className="small">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</dd>
                        
                        	<dt>Praesent eleifend lacinia?</dt>
                        	<dd className="small">Nam eget dui. Etiam rhoncus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</dd>
                            
                            <dt> Cras id metus vitae?</dt>
                        	<dd className="small">Vivamus dignissim urna id condimentum lacinia. Fusce tristique ultrices est, at semper turpis ullamcorper eu.</dd>
                        </dl>
                    </div>
                    
                    
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h4 className="uppercase">newsletter</h4>                        
                        <div className="row">
                            <div className="col-lg-8"> 
                                <input type="email" id="newsletter_email"/>
                            </div> 
                            <div className="col-lg-4">     
                                <button className="button button-big button-line-light">subscribe</button>
                            </div>
                        </div>
                        
                        <p className="small">Pellentesque laoreet leo ut suscipit feugiat. Sed ultricies convallis nunc quis malesuada.</p>
                        
                    </div>
                
                </div>
            </div>
        </footer>
        
        <div className="subfooter">
        	<div className="container">
                <div className="row">                    
                    <div className="col-lg-12">
                        <ul className="list-unstyled list-inline pull-right uppercase">
                            <li><a href="#terms">Terms</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#press">Press Kit</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
        </div> 
    )
}

export default Footer;