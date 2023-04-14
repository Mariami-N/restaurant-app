import data from '../data.json'
import styled from 'styled-components'


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
           </div>
            <div className='description'>
                <p cl>{item.description}</p>
            </div>
            
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