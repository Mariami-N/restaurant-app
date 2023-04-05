import { NavLink } from "react-router-dom";
// import image from '../images/home.png'
// import photo from'../images/letter.png'
// import img from '../images/restaurant.png'
export default function Header () {
    return (
        <>
         <nav>
            <ul>
                <li><NavLink to='Home'>Home</NavLink></li>  
               {/* თუ გვინდა ფოტო homeს მაგივრად ვსვავთ პირდაპირ ამ ფოტოს<img src={image} alt="home" /> */}
                <li><NavLink to='Contact'>Contact</NavLink></li>
                {/* <img src={photo} alt="letter" /> */}
                <li><NavLink to='Menu'>Menu</NavLink></li>
                {/* <img src={img} alt="menu" /> */}
                <li><NavLink to='Footer'>Footer</NavLink></li>
            </ul>
        </nav>
        </>
    )
    }