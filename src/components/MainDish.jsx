import data from '../data.json'
import styled from 'styled-components'


export default function MainDish (){

    const mainD = data.filter(item => item.category === "main dish");
         
    return(
        <>
         <div>
         {mainD.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.photo}</p>
            <p>{item.description}</p>
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