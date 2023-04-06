import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import image from '../images/home.png'
// import photo from'../images/letter.png'
// import img from '../images/restaurant.png'
export default function Header () {
    return (
        <>
        <Header1>
         <nav>
            <TitleUl>
                <TitleLi><NavLink to='Home'>Home</NavLink></TitleLi>  
               {/* თუ გვინდა ფოტო homeს მაგივრად ვსვავთ პირდაპირ ამ ფოტოს<img src={image} alt="home" /> */}
                <TitleLi><NavLink to='Contact'>Contact</NavLink></TitleLi>
                {/* <img src={photo} alt="letter" /> */}
                <TitleLi><NavLink to='Menu'>Menu</NavLink></TitleLi>
                {/* <img src={img} alt="menu" /> */}
                {/* <TitleLi><NavLink to='Footer'>Footer</NavLink></TitleLi> */}
            </TitleUl>
        </nav>
        </Header1>
        </>
    )
    }
    const TitleLi = styled.li`
        display: inline-block;
        margin-left: 200px;
        font-family: Roboto Slab;
        font-size: 40px;
        color: green;
        margin-bottom: 20px;
    `
    const TitleUl = styled.ul`
    margin-left: 330px;
    `

    const Header1 = styled.header`
    background-color: rgba(6, 6, 6,0.5);
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 100%
    padding-top: 50%;
    `