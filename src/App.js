import { Routes, Route } from 'react-router-dom';
 import styled from 'styled-components';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Details from './components/Details';
import MainDish from './components/MainDish';
import SideDish from './components/SideDish';
import Dessert from './components/Dessert';
import Drink from './components/Drink';



const Container = styled.div`
  background-color black: 
  width: 100%;
  height: 100%;
  // padding-top: 50px;
  padding-bottom 50px;
`;


function App() {
  return (
    <>
     <Container>
     <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/> 
            <Route path='menu' element={<Menu/>}/>
            <Route path='Menu/MainDish' element={<MainDish/>}/>
            <Route path='Menu/SideDish' element={<SideDish/>}/>
            <Route path='Menu/Dessert' element={<Dessert/>}/>
            <Route path='Menu/Drink' element={<Drink/>}/>
            <Route path="/details" element={<Details/>}/>
          </Routes>
      <Footer/>
      </BrowserRouter>
    </Container>
    </>
  );
}


export default App;
