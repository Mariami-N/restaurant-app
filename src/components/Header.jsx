import { NavLink } from "react-router-dom";
import image from '../images/home.png'
import photo from'../images/letter.png'
import img from '../images/restaurant.png'
export default function Header () {
    return (
        <>
         <nav>
            <ul>
                <li><NavLink to='Home'><img src={image} alt="home" /></NavLink></li>
                <li><NavLink to='Contact'><img src={photo} alt="letter" /></NavLink></li>
                <li><NavLink to='Menu'><img src={img} alt="menu" /></NavLink></li>
                <li><NavLink to='Footer'>Footer</NavLink></li>
            </ul>
        </nav>
        </>
    )
    }