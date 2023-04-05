import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';



const Container = styled.div`
background-color: black;
width: 100%;
height: 100%;
padding-top: 50px;
`;


function App() {
  return (
    <>
     <Container>
        <Header/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/> 
            <Route path='menu' element={<Menu/>}/>
          </Routes>
      <Footer/>
    </Container>
    </>
  );
}


export default App;
