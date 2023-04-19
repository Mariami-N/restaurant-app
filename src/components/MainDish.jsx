import data from '../data.json'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export default function MainDish (){

    const mainD = data.filter(item => item.category === "Main Dish");
         
    return(
        <>
         <div className='container3'>
         {mainD.map((item) => (
          <div  className='divstyle1' key={item.name}>
             <div className='category'>
                <p className='categoryitem'> # {item.category}</p>
                <p className='list2'> {item.status}</p>
             </div>
            <div className='name'>
                <h3 className='list'> {item.name}</h3>
            </div>
            <div>
                <Photo src={item.image} alt="item"/>
            </div>
           <div className='price'>
                <p className='list'>Price: {item.price} $ </p>
                <Details1>
              <NavLink to={`/details/${item.id}`}>Details</NavLink>
            </Details1>
           </div>
           
            {/* <div className='description'>
                <p cl>{item.description}</p>
            </div> */}
            
          </div>
))}
    </div>
    
            </>
        )}

        const Photo = styled.img`
            width: 500px;
            height: 350px;
            margin-left: 25px;
            `


            const Details1 = styled.p`
                color: white;
                display: inline-block;
                margin-left: 230px;
                background-color: green;
                border-radius: 5px;
                width: 90px;
                text-align: center;
                font-family: 'Roboto Slab';
                font-size: 20px;
                `