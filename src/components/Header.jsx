import styled from "styled-components";
import { NavLink } from "react-router-dom";
import image from '../images/cart.png'
import { useState } from "react";
// import image from '../images/home.png'
export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
        <Header1>
         <nav>
            <TitleUl>
                <TitleLi>
                    <NavLink to='Home'>Home</NavLink>
                </TitleLi>  
               {/* თუ გვინდა ფოტო homeს მაგივრად ვსვავთ პირდაპირ ამ ფოტოს<img src={image} alt="home" /> */}
                <TitleLi>
                    <NavLink to='Contact'>Contact</NavLink>
                </TitleLi>
                <TitleLi>
                    <NavLink to='Menu'onClick={() => setIsMenuOpen(!isMenuOpen)} >Menu</NavLink>
                </TitleLi>
                <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Main Dish</li>
          <li>Side Dish</li>
          <li>Dessert</li>
          <li>Drink</li>
        </ul>
      </div>
                <img className="cart" src={image} alt="cart" />
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
    // top: 0 auto;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 100%
    padding-top: 50%;
    `