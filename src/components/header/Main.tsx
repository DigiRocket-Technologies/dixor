/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                {/* <li className="dropdown">
                    <Link to="#" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
                    
                </li> */}
               
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Marketing</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="#">Local SEO</Link></li>
                        <li><Link to="#">Ecommerce SEO</Link></li>
                        <li><Link to="#">Performance Marketing</Link></li>
                        <li><Link to="#">Social Media Marketing</Link></li>
                        <li><Link to="#">Influencer Marketing</Link></li>
                        <li><Link to="#">Ecommerce Marketing</Link></li>
                       
                       
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Development</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="#">Shopify</Link></li>
                        <li><Link to="#">Woo Commerce</Link></li>
                        <li><Link to="#">Wordpress</Link></li>
                        <li><Link to="#">Web Applications</Link></li>
                        <li><Link to="#">Mobile Applications</Link></li>
                        <li><Link to="#">Artificial Intelligence</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="#" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>Dropshipping</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>Portfolio</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>Case Studies</Link>
                </li>
               
                
                <li><Link to="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;