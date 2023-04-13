import data from '../data.json'
import styled from 'styled-components'



export default function Dessert (){
    const mainD = data.filter(item => item.category === "Dessert");
    return(
        <>
        <div >
         {mainD.map((item) => (
          <div  className='divstyle' 
          key={item.name}>
            <p>{item.category}</p>
            <h3>{item.name}</h3>
            <Photo src={item.image} alt="item"/>
            <p>{item.price} $ </p>
            <p>{item.description}</p>
          </div>
))}
    </div>
        </>
    )
}

const Photo = styled.img`
            width: 500px;
            height: 350px;
            margin-left: 25px;
            `